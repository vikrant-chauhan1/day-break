"use client";
import WeatherWidget from "../components/WeatherWidget"
import NewsFeedWidget from "../components/NewsFeedWidget"

import TodoListWidget from "../components/TodoListWidget"
 import { User } from "@supabase/supabase-js"; ;


import StockMarketWidget from "../components/StockMarketWidget"
import PomodoroWidget from "@/components/Pomodoro";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";

import "../app/globals.css"
import { Sun } from "lucide-react";
import MotivationalQuoteWidget from "../components/Motivation";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
 
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
   
    await supabase.auth.signOut();
    router.push("/auth");
    
  };

  if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

    return (
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        <header className="p-1 border-b border-gray-200">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sun className="h-6 w-6" />
              <span className="text-xl font-bold">DayBreak</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a  className="hover:underline" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
                
              </ul>
            </nav>
          </div>
        </header>
        <h1 className="text-3xl font-bold mb-8 text-center">Hello {user.email}!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(150px,auto)]">
        <div className="md:col-span-2 lg:col-span-7 row-span-1">
            <MotivationalQuoteWidget />
          </div>
          <div className="md:col-span-2 lg:col-span-2 row-span-2">
            <WeatherWidget />
          </div>
          <div className="md:col-span-2 lg:col-span-4 row-span-2">
            <NewsFeedWidget />
          </div>
          <div className="md:col-span-2 lg:col-span-3 row-span-3">
            <TodoListWidget />
          </div>
          <div className="md:col-span-2 lg:col-span-3 row-span-3">
            <PomodoroWidget />
          </div>
         
          <div className="md:col-span-2 lg:col-span-6">
            <StockMarketWidget />
          </div>

        </div>
      </main>
  )
}
