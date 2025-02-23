"use client";
import { useEffect, useState } from "react";
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export default function NewsFeedWidget() {
  const [news, setNews] = useState<{ title: string; source: string ;link:string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      );
      const data = await res.json();
      console.log("API Response:", data); // 🔍 Debugging line

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch news");
      }

      setNews(
        data.articles?.map((article: any) => ({
          title: article.title,
          source: article.source.name,
          link:article.url,
        })) || []
      );
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">News Feed</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Scrollable container for news */}
      <div className="h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
        <ul className="space-y-3">
          {news.length > 0 ? (
            news.map((item, index) => (
              <li key={index} className="pb-2 border-b border-gray-100 last:border-b-0">
                <a href={item.link} target="_blank"><p className="font-medium">{item.title}</p></a>
                <span className="text-sm text-gray-500">{item.source}</span>
              </li>
            ))
          ) : (
            <p>No news available</p>
          )}
        </ul>
      </div>
    </div>
  );
}
