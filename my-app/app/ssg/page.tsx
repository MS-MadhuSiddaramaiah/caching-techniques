import { Clock } from '../components/Clock'

// This function is called at build time on server-side.
// It may be called again, on a serverless function, if
// the build is regenerated to avoid deployment downtime.
export async function generateStaticParams() {
  return [{}]
}

export default function SSGPage() {
  // For SSG, we generate the time at build time
  const buildTime = new Date().toLocaleTimeString()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Static Site Generation (SSG)</h1>
      <Clock initialTime={buildTime} />
      <p className="mt-4 text-gray-600">
        This clock is statically generated at build time.
        The time shown is when the application was built.
        It will not change unless the site is rebuilt and redeployed.
      </p>
    </div>
  )
}

