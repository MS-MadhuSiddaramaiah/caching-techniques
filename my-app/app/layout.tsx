import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Local Time Dashboard',
  description: 'Demonstrating different rendering strategies in Next.js 15',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center">
            <Link href="/" className="text-xl font-bold mb-2 md:mb-0">Local Time Dashboard</Link>
            <div className="space-x-4">
              <Link href="/csr" className="hover:text-gray-300">CSR</Link>
              <Link href="/ssr" className="hover:text-gray-300">SSR</Link>
              <Link href="/isr" className="hover:text-gray-300">ISR</Link>
              <Link href="/ssg" className="hover:text-gray-300">SSG</Link>
              <Link href="/cached" className="hover:text-gray-300">Cached</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}

