"use client"

import { useState } from "react";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../app/globals.css";

export default function Auth(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading , setLoading] = useState(false);
    const router= useRouter();

    const handleSignIn = async()=>{
      setLoading(true)
      const {error,data }= await supabase.auth.signInWithPassword({email,password})
      if(error) {
          alert(error.message)
      }else{
        console.log("login sucessfull", data);
        if(data.session){
          router.push("/dashboard");
        }

          
      }
      setLoading(false)

    }

    const handleSignUp = async ()=>{
     
      if(!email || !password || !email.includes("@") || password.length < 6){
        alert("invalid email or password (password length must be atleast 6 characters long)")
        router.push("/auth")
        return;
      }
      setLoading(true)
      const {error} = await supabase.auth.signUp({email,password})
      if(error) alert(error.message)
      else{
        alert("Registration successfull")
        router.push("/auth")
      
      }
      setLoading(false)
    }

    return (
      <div className="min-h-screen flex flex-col bg-white text-black">
        <header className="p-4 border-b border-gray-200">
          <div className="container mx-auto">
            <Link href="/" className="flex items-center space-x-2 text-black no-underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <span className="text-xl font-bold">DayBreak</span>
            </Link>
          </div>
        </header>
    
        <main className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-md p-8 space-y-8 bg-gray-50 rounded-lg shadow-md">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Welcome to DayBreak</h1>
              <p className="text-gray-600">Sign in to start your day right</p>
            </div>
    
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                 
                  type="email"
                  placeholder="Enter your username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>
              <button
                 onClick={handleSignIn}
                 disabled={loading}
                 
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
               {loading ? "Logging in..." : "Login"}
              </button>
            </form>
    
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button className="text-black underline font-medium hover:text-gray-800"
                  onClick={handleSignUp}
                  disabled={loading}
                >
                   {loading ? "Signing up..." : "Sign Up"}
                </button>
              </p>
              
            </div>
          </div>
        </main>
    
        <footer className="py-6 border-t border-gray-200">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 DayBreak. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )

    
}
