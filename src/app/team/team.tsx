"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Define the shape of your team data
interface Team {
  id: string;
  teamCode: number;
  teamMembers: { id: string; name: string | null; email: string | null }[];
}

export default function TeamPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchUserTeam = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/team/status");
      const data = await res.json();

      if (res.ok) {
        setTeam(data.team);
      } else {
        setTeam(null);
      }
    } catch (err) {
      console.error("Failed to fetch team status:", err);
      setTeam(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated" && session?.user?.email) {
      fetchUserTeam();
    }
  }, [status, session, router]);

  const handleCreateTeam = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/team/create", {
        method: "POST",
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`Team successfully created! Your Team Code is: ${data.teamCode}`);
        fetchUserTeam();
      } else {
        setError(data.error || "Failed to create team.");
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleJoinTeam = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    const formData = new FormData(event.currentTarget);
    const teamId = formData.get("teamId") as string;

    try {
      const res = await fetch("/api/team/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teamId }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Successfully joined the team!");
        fetchUserTeam();
      } else {
        setError(data.error || "Failed to join team.");
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleLeaveTeam = async () => {
    setLoading(true);
    setMessage("");
    setError("");

    // Check if the user is actually in a team
    if (!team) {
      setError("You are not currently in a team.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/team/leave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teamId: team.id }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("You have successfully left the team.");
        // Clear the team state to show the join/create forms again
        setTeam(null);
      } else {
        setError(data.error || "Failed to leave the team.");
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    );
  }

  if (!session) {
    return null; // Redirect handled by useEffect
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="w-full max-w-xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary-600">
          Join or Create a Team
        </h2>

        {message && (
          <div className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200" role="alert">
            {message}
          </div>
        )}

        {error && (
          <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200" role="alert">
            {error}
          </div>
        )}

        {team ? (
          // Display team information if the user is in a team
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                You&apos;re in a Team!
              </h3>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Your Team Code:{" "}
                <span className="font-bold text-primary-600 tracking-wider">
                  {team.teamCode}
                </span>
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="text-xl font-semibold mb-3">Team Members:</h4>
              <ul className="space-y-2">
                {team.teamMembers.map((member) => (
                  <li key={member.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      {member.name || member.email}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleLeaveTeam}
                className="px-6 py-3 text-lg font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors disabled:bg-gray-400"
                disabled={loading}
              >
                Leave Team
              </button>
            </div>
          </div>
        ) : (
          // Show join/create forms if the user is not in a team
          <div className="space-y-6">
            <form onSubmit={handleCreateTeam} className="space-y-4 p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-center">Create a New Team</h4>
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:bg-gray-400"
                disabled={loading}
              >
                Create Team
              </button>
            </form>

            <form onSubmit={handleJoinTeam} className="space-y-4 p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-center">Join an Existing Team</h4>
              <input
                name="teamId"
                placeholder="Enter Team Code"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:border-gray-600"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-medium text-white bg-secondary-600 hover:bg-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 transition-colors disabled:bg-gray-400"
                disabled={loading}
              >
                Join Team
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
