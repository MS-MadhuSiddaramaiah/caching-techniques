import { NextResponse } from 'next/server'

let visitorCount = 0

export const runtime = 'edge'

export async function GET(request: Request) {
  const res = await fetch('https://worldtimeapi.org/api/ip')
  if (!res.ok) throw new Error('Failed to fetch time data')
  const data = await res.json()

  visitorCount++

  return NextResponse.json({
    time: new Date(data.datetime).toLocaleTimeString('en-US'),
    timeZone: data.timezone,
    region: process.env.VERCEL_REGION || 'unknown',
    visitorCount
  })
}

