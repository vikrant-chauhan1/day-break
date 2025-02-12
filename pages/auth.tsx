"use client"

import { useState } from "react";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

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
      <div className="min-h-screen">
        <Navbar />
        <div className="h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl font-bold mb-4">Login / Sign Up</h1>
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded mb-2 w-64"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border rounded mb-2 w-64"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
          <p>Don't have an account?</p>
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded mt-2"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </div>
    );
    

    
}