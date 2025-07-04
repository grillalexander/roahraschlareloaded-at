import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Roah Raschla Reloaded',
  description: 'Musik aus dem Herzen des Burgenlandes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
