import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from '@vercel/analytics/react'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"



export const metadata: Metadata = {
  title: "Barle Kitchen & Pub",
  description:
    "Barle Kitchen & Pub’da geleneksel pub atmosferini, modern mutfak sanatının incelikleriyle buluşturun. Lezzetli yemekler, özel el yapımı içecekler ve unutulmaz anılar sizi bekliyor.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "pub, restoran, yemek, içecekler, kokteyller, etkinlikler, rezervasyon, premium yemek",
  authors: [{ name: "Barle Kitchen & Pub" }],
  creator: "Barle Kitchen & Pub",
  publisher: "Barle Kitchen & Pub",
  openGraph: {
    title: "Barle Kitchen & Pub",
    description: "Barle Kitchen & Pub’da eşsiz yemek ve eğlence deneyimini yaşayın",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barle Kitchen & Pub",
    description: "Barle Pub’da eşsiz yemek ve eğlence deneyimini yaşayın",
  },
  // Removed generator field for privacy
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
