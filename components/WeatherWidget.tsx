"use client";

import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_WEATHER;

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{ temp: number; condition: string; icon: string; city: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState(() => {
    // Load saved city from localStorage or use default "Delhi"
    return typeof window !== "undefined" ? localStorage.getItem("savedCity") || "Delhi" : "Delhi";
  });

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch weather");
      }

      setWeather({
        temp: data.main.temp,
        condition: data.weather[0].main,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        city: data.name,
      });

      // Save selected city in localStorage
      localStorage.setItem("savedCity", data.name);
    } catch (err) {
      setError((err as Error).message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather when component mounts
  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full flex flex-col items-center flex-grow">
      <h2 className="text-xl font-semibold mb-4">Weather</h2>

      {/* Input Field for City Name */}
      <div className="flex gap-2 mb-4 ">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter city..."
        />
        <button
          onClick={() => fetchWeather(city)}
          className="bg-blue-500 text-white px-4 py-2 rounded "
        >
          Get Weather
        </button>
      </div>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Weather Display */}
      {weather && !loading && !error && (
        <>
          <img src={weather.icon} alt={weather.condition} className="w-16 h-16" />
          <p className="text-2xl font-bold">{weather.temp}°C</p>
          <p className="text-gray-600">{weather.condition}</p>
          <p className="text-gray-600">{weather.city}</p>
        </>
      )}
    </div>
  );
}
