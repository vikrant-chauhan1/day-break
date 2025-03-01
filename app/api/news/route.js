
import { NextResponse } from 'next/server';
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export async function GET() {
  

  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
