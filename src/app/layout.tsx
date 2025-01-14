import "../styles/globals.css"

import { GoogleAnalytics } from "@next/third-parties/google"
import { Header } from "@app/components/layouts/header"
import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"
import { env } from "@app/lib/env"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Chris De Leon",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gtag = env.NEXT_PUBLIC_GTAG
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col justify-between">
          <Header />
          {children}
        </div>
      </body>
      {gtag != null && <GoogleAnalytics gaId={gtag} />}
    </html>
  )
}
