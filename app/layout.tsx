import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marcelo Daltro',
  description: 'Clinica Marcelo Daltro',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className='selection:bg-white bg-black'>
      <head>
      <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body  className={`font-sans ${GeistSans.variable} ${GeistMono.variable} `}>
          
          {children}
        <Analytics />
      </body>
    </html>
  )
}
