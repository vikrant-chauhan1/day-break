"use client"

import supabase from "@/lib/supabase";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar(){
    const [user,setUser] = useState<any>(null)
    const router = useRouter();

    useEffect(()=>{
        const fetchUser = async()=>{
            const {data} = await supabase.auth.getUser();
            setUser(data.user);
        }
        fetchUser();
    },[])

    const handleLogout = async()=>{
        await supabase.auth.signOut();
        router.push("/auth");

    }

    return (
        <nav className="p-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold">Morning Dashboard</h1>
          {user ? (
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
              Logout
            </button>
          ) : (
            <button onClick={() => router.push("/auth")} className="px-4 py-2 bg-blue-500 text-white rounded">
              Login
            </button>
          )}
        </nav>
      )


}