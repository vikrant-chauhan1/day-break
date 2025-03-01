"use client"
import { useRouter } from "next/navigation";
import supabase from "@/lib/supabase";
import { useEffect, useState } from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { Sun, Newspaper, CloudSun, TrendingUp, CheckSquare, Target, Quote } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const handleContactUs = async () => {
    router.push("/about");
  };
  const handleGetStarted = async () => {
    router.push("/auth");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="p-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sun className="h-6 w-6" />
            <span className="text-xl font-bold">DayBreak</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/auth" className="hover:underline">Login</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Start Your Day Informed and Inspired</h1>
          <p className="mb-8 text-xl">Your all-in-one morning dashboard</p>
          <button onClick={handleGetStarted} className="bg-black text-white rounded-lg px-4 py-2">Get Started</button>
        </section>

        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Newspaper, title: "Latest News", note: "Get the latest news at your fingertips." },
                { icon: CloudSun, title: "Weather Updates", note: "Stay updated with real-time weather conditions." },
                { icon: TrendingUp, title: "Stock Trends", note: "Monitor market trends and stock updates." },
                { icon: CheckSquare, title: "To-Do List", note: "Keep track of your daily tasks and goals." },
                { icon: Target, title: "Daily Goals", note: "Set and achieve your personal goals every day." },
                { icon: Quote, title: "Motivational Quotes", note: "Get inspired with daily motivational quotes." },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About DayBreak</h2>
            <p className="max-w-2xl mx-auto text-xl">
              DayBreak is your personal morning companion, designed to kickstart your day with all the essential
              information you need. From news to personal goals, we&apos;ve got you covered.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="mb-8">Have questions or suggestions? We&apos;d love to hear from you!</p>
            <button onClick={handleContactUs} className="bg-black text-white rounded-lg px-4 py-2">Contact Us</button>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 DayBreak. All rights reserved.</p>
          <p>Made by <a href="https://github.com/vikrant-chauhan1">Vikrant Chauhan</a></p>
        </div>
      </footer>
    </div>
  );
}