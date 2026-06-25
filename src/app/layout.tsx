import type { Metadata } from 'next'
import '../index.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tentacles Pvt. Ltd.',
  description: "Engineering Tomorrow's Digital Infrastructure. We build robust, enterprise software systems that scale dynamically.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-[#FAFAFB] text-[#09090B] antialiased">
        <Navigation />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
