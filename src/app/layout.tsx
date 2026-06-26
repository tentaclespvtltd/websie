import type { Metadata } from 'next'
import '../index.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Tentacles Pvt. Ltd. | Digital Infrastructure & Engineering',
    template: '%s | Tentacles Pvt. Ltd.'
  },
  description: "Engineering Tomorrow's Digital Infrastructure. We build robust, high-performance web, mobile, enterprise, and AI systems that scale dynamically.",
  keywords: [
    'Software Engineering',
    'Enterprise Applications',
    'Web Development',
    'Mobile Apps',
    'AI Agents',
    'Autonomous Automation',
    'Digital Infrastructure',
    'Next.js Development',
    'React',
    'Custom Software Development'
  ],
  authors: [{ name: 'Tentacles Private Limited' }],
  creator: 'Tentacles Pvt. Ltd.',
  publisher: 'Tentacles Pvt. Ltd.',
  metadataBase: new URL('https://tentaclespvtltd.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tentacles Pvt. Ltd. | Digital Infrastructure & Engineering',
    description: "Engineering Tomorrow's Digital Infrastructure. We build robust, enterprise software systems that scale dynamically.",
    url: 'https://tentaclespvtltd.com',
    siteName: 'Tentacles Pvt. Ltd.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentacles Pvt. Ltd. | Digital Infrastructure & Engineering',
    description: "Engineering Tomorrow's Digital Infrastructure. We build robust, enterprise software systems that scale dynamically.",
  },
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ISX45y-Qs1Vb7vBxzhGVQ1u_l62XS2RJR0dTkmLFtdQ" />
      </head>
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
