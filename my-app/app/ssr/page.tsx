import { Clock } from '../components/Clock'

export default function SSRPage() {
  // For SSR, we generate the time on each request
  const currentTime = new Date().toLocaleTimeString()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Server-Side Rendering (SSR)</h1>
      <Clock initialTime={currentTime} />
      <p className="mt-4 text-gray-600">
        This clock is rendered on the server for each request.
        The time shown is when the page was requested from the server.
        Refresh the page to see it update.
      </p>
    </div>
  )
}

