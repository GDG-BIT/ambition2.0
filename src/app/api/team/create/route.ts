import { auth } from "@/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
  const session = await auth();
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existingProfile = await db.profile.findUnique({
    where: { email: session.user.email },
  });

  if (!existingProfile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  if (existingProfile.teamId) {
    return NextResponse.json({ error: "User is already in a team" }, { status: 400 });
  }

  // Generate a unique 6-digit team code
  let teamCode: number;
  let teamCodeExists: boolean;
  do {
    teamCode = Math.floor(100000 + Math.random() * 900000);
    const existingTeam = await db.team.findUnique({
      where: { teamCode },
    });
    teamCodeExists = !!existingTeam;
  } while (teamCodeExists);

  try {
    const newTeam = await db.team.create({
      data: {
        teamCode,
        teamMembers: {
          connect: [{ id: existingProfile.id }],
        },
      },
    });

    return NextResponse.json({
      message: "Team created successfully!",
      teamCode: newTeam.teamCode,
    }, { status: 201 });

  } catch (error) {
    console.error("Error creating team:", error);
    return NextResponse.json({ error: "Failed to create team" }, { status: 500 });
  }
}
