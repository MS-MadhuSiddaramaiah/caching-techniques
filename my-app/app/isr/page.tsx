import { Clock } from '../components/Clock'

// This function is called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function generateStaticParams() {
  return [{}]
}

export default function ISRPage() {
  // For ISR, we generate the time and revalidate every 30 seconds
  const currentTime = new Date().toLocaleTimeString()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Incremental Static Regeneration (ISR)</h1>
      <Clock initialTime={currentTime} />
      <p className="mt-4 text-gray-600">
        This clock uses Incremental Static Regeneration.
        The page is statically generated, but regenerates every 30 seconds if there are requests.
        Refresh the page after 30 seconds to see it update.
      </p>
    </div>
  )
}

// This function can be exported to set the revalidation time
export const revalidate = 30

