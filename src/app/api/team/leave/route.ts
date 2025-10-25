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

  try {
    const team = await db.team.findUnique({
      where: { id: teamId },
      include: { teamMembers: true },
    });

    if (!team) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    // Disconnect the user's profile from the team
    await db.team.update({
      where: { id: teamId },
      data: {
        teamMembers: {
          disconnect: [{ id: existingProfile.id }],
        },
      },
    });

    // Check if the team is now empty (no members, including the team lead)
    const updatedTeam = await db.team.findUnique({
      where: { id: teamId },
      include: { teamMembers: true },
    });

    // Check if both teamLead and teamMembers array are empty/null
    if (updatedTeam?.teamMembers.length === 0) {
      // If the team is empty, delete it
      await db.team.delete({
        where: { id: teamId },
      });
      console.log(`Team ${teamId} has been deleted due to no members.`);
    }

    return NextResponse.json({ message: "Successfully left the team" }, { status: 200 });

  } catch (error) {
    console.error("Error leaving team:", error);
    return NextResponse.json({ error: "Failed to leave team" }, { status: 500 });
  }
}
