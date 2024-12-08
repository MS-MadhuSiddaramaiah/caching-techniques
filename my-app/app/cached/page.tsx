import { Clock } from '../components/Clock'

async function getTime() {
  // Simulate an API call or some async operation
  await new Promise(resolve => setTimeout(resolve, 100))
  return new Date().toLocaleTimeString()
}

export default async function CachedPage() {
  // For forced caching, we fetch the time but cache the result
  const currentTime = await getTime()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Forced Caching (60s)</h1>
      <Clock initialTime={currentTime} />
      <p className="mt-4 text-gray-600">
        This clock demonstrates forced caching.
        The time is fetched server-side but the result is cached for 60 seconds.
        Refresh the page to see if the cache has expired.
      </p>
    </div>
  )
}

// Force cache this page for 60 seconds
export const revalidate = 60

