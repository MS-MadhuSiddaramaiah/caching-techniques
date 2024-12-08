'use client'

import { Clock } from '../components/Clock'

export default function CSRPage() {
  // For CSR, we set the initial time and update every second
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Client-Side Rendering (CSR)</h1>
      <Clock initialTime={new Date().toLocaleTimeString()} updateInterval={1000} />
      <p className="mt-4 text-gray-600">
        This clock is rendered on the client-side and updates every second.
        The initial render shows the time when the component was mounted,
        and subsequent updates happen in the browser.
      </p>
    </div>
  )
}

