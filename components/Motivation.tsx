"use client";
import { useState, useEffect } from "react";

const quotes = [
  "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "Believe you can and you’re halfway there. — Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. — William James",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Opportunities don’t happen, you create them. — Chris Grosser",
  "If you want to achieve greatness stop asking for permission. — Anonymous",
  "Don’t let yesterday take up too much of today. — Will Rogers",
  "Do what you love and the money will follow. — Marsha Sinetar",
  "Everything you’ve ever wanted is on the other side of fear. — George Addair",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. — Roy T. Bennett",
  "I am not a product of my circumstances. I am a product of my decisions. — Stephen R. Covey",
  "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
  "Your limitation—it’s only your imagination. — Anonymous",
  "Push yourself, because no one else is going to do it for you. — Anonymous",
  "Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed. — Bob Riley",
  "The secret of getting ahead is getting started. — Mark Twain",
  "Don’t count the days, make the days count. — Muhammad Ali",
  "If opportunity doesn’t knock, build a door. — Milton Berle",
  "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
  "Stay hungry. Stay foolish. — Steve Jobs",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi",
  "All our dreams can come true if we have the courage to pursue them. — Walt Disney",
  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. — Confucius",
];

export default function MotivationalQuoteWidget() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const today = new Date().getDate();
    setQuote(quotes[today % quotes.length]); // Changes daily based on the date
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full flex flex-col items-center justify-center">
      
      <p className="text-center text-2xl italic font-serif text-gray-800">{quote}</p>
    </div>
  );
}
