import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Local Time Dashboard</h1>
      <p className="mb-6">This dashboard demonstrates different rendering strategies in Next.js 15:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RenderingLink href="/csr" title="Client-Side Rendering (CSR)" description="Updates every second on the client" />
        <RenderingLink href="/ssr" title="Server-Side Rendering (SSR)" description="Renders on each request" />
        <RenderingLink href="/isr" title="Incremental Static Regeneration (ISR)" description="Updates every 30 seconds" />
        <RenderingLink href="/ssg" title="Static Site Generation (SSG)" description="Shows build time" />
        <RenderingLink href="/cached" title="Forced Caching" description="Caches for 60 seconds" />
      </div>
    </div>
  )
}

function RenderingLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

