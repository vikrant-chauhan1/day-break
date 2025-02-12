"use client";

import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import "../app/globals.css"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true; // Prevent setting state on an unmounted component

    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        router.push("/auth");
      } else if (isMounted) {
        setUser(data.user);
      }
    };

    fetchUser();

    return () => {
      isMounted = false; // Cleanup function
    };
  }, [router]); // Added `router` as a dependency

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push("/auth");
    setLoading(false);
  };

  if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Welcome, {user.email}
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </main>
    </>
  );
}
