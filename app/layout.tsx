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
  title: "Barle Pub - Premium Dining & Entertainment Experience",
  description:
    "Experience the perfect blend of traditional pub atmosphere with modern culinary excellence at Barle Pub. Great food, craft drinks, and memorable moments await.",
  keywords: "pub, restaurant, dining, drinks, cocktails, events, reservation, premium dining",
  authors: [{ name: "Barle Pub" }],
  creator: "Barle Pub",
  publisher: "Barle Pub",
  openGraph: {
    title: "Barle Pub - Premium Dining & Entertainment",
    description: "Experience exceptional dining and entertainment at Barle Pub",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barle Pub - Premium Dining & Entertainment",
    description: "Experience exceptional dining and entertainment at Barle Pub",
  },
  generator: "v0.app",
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
