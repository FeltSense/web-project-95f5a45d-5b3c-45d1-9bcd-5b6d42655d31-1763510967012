import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atelier Luxe | Curated Fashion for the Modern Woman',
  description: 'Discover curated, quality fashion pieces for the discerning woman. Atelier Luxe offers sophisticated, timeless designs that elevate your wardrobe with elegance and style.',
  keywords: ['luxury fashion', 'womens fashion', 'curated fashion', 'designer clothing', 'elegant style', 'modern fashion'],
  authors: [{ name: 'Atelier Luxe' }],
  creator: 'Atelier Luxe',
  publisher: 'Atelier Luxe',
  metadataBase: new URL('https://atelierluxe.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atelierluxe.com',
    title: 'Atelier Luxe | Curated Fashion for the Modern Woman',
    description: 'Discover curated, quality fashion pieces for the discerning woman. Atelier Luxe offers sophisticated, timeless designs that elevate your wardrobe with elegance and style.',
    siteName: 'Atelier Luxe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atelier Luxe - Luxury Fashion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Luxe | Curated Fashion for the Modern Woman',
    description: 'Discover curated, quality fashion pieces for the discerning woman. Atelier Luxe offers sophisticated, timeless designs that elevate your wardrobe.',
    images: ['/og-image.jpg'],
    creator: '@atelierluxe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
