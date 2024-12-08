'use client'

import { useEffect, useState } from 'react'

interface ClockProps {
  initialTime: string
  updateInterval?: number
}

export function Clock({ initialTime, updateInterval }: ClockProps) {
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    // If updateInterval is provided, update the time at that interval
    if (updateInterval) {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
      }, updateInterval)
      // Clean up the interval on component unmount
      return () => clearInterval(timer)
    }
  }, [updateInterval])

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Local Time</h2>
      <p className="text-4xl font-bold mb-4">{time}</p>
      <p className="text-gray-600">Time Zone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
    </div>
  )
}

