import { auth } from "@/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { teamId } = await req.json();

  const existingProfile = await db.profile.findUnique({
    where: { email: session.user.email },
  });

  if (!existingProfile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  // Check if the user is already in a team
  if (existingProfile.teamId) {
    return NextResponse.json({ error: "User is already in a team" }, { status: 400 });
  }

  const team = await db.team.findUnique({
    where: { teamCode: parseInt(teamId, 10) },
    include: { teamMembers: true },
  });

  if (!team) {
    return NextResponse.json({ error: "Team not found" }, { status: 404 });
  }

  // Check team size, e.g., max 4 members including lead
  if (team.teamMembers.length >= 4) {
    return NextResponse.json({ error: "Team is full" }, { status: 400 });
  }

  try {
    await db.team.update({
      where: { id: team.id },
      data: {
        teamMembers: {
          connect: { id: existingProfile.id },
        },
      },
    });

    return NextResponse.json({ message: "Joined team successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Error joining team:", error);
    return NextResponse.json({ error: "Failed to join team" }, { status: 500 });
  }
}
