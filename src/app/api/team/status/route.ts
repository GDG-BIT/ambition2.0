import { auth } from "@/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existingProfile = await db.profile.findUnique({
    where: { email: session.user.email },
    include: {
      team: {
        include: {
          teamMembers: true,
        },
      },
    },
  });

  if (!existingProfile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  // The logic here needs to be updated to match your schema
  // Assuming a user can only be a leader OR a member, not both
  const userTeam = existingProfile.team;

  if (userTeam) {
    return NextResponse.json({ team: userTeam });
  } else {
    return NextResponse.json({ team: null });
  }
}
