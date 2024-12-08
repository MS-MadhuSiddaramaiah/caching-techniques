import { NextResponse } from 'next/server'

let visitorCount = 0

export const runtime = 'edge'

async function fetchWithTimeout(resource: string, options: RequestInit = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 5000); // 5 second timeout

  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function GET(request: Request) {
  visitorCount++

  try {
    const res = await fetchWithTimeout('https://worldtimeapi.org/api/ip', { 
      next: { revalidate: 10 } // Cache for 10 seconds to reduce load on the API
    })
    if (!res.ok) throw new Error('Failed to fetch time data')
    const data = await res.json()

    return NextResponse.json({
      time: new Date(data.datetime).toLocaleTimeString('en-US'),
      timeZone: data.timezone,
      region: process.env.VERCEL_REGION || 'unknown',
      visitorCount
    })
  } catch (error) {
    console.error('Error fetching time:', error)
    return NextResponse.json({
      time: new Date().toLocaleTimeString('en-US'),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      region: 'Error',
      visitorCount
    }, { status: 500 })
  }
}

