"use client";

import { useState, useEffect } from "react";


export default function PomodoroWidget() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          const nextTime = isBreak ? 25 * 60 : 5 * 60;
          setIsBreak((prevBreak) => !prevBreak);
          return nextTime;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isBreak]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center w-full h-full flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">
        {isBreak ? "Break Time ☕" : "Focus Mode 🔥"}
      </h2>

      {/* Timer with animation */}
      <div className={`timer ${isBreak ? "break-mode" : "focus-mode"}`}>
        <p className="text-4xl font-bold">{formatTime(timeLeft)}</p>
      </div>

      <div className="mt-4 flex justify-center gap-4 mt-9">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setTimeLeft(25 * 60);
            setIsRunning(false);
            setIsBreak(false);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
