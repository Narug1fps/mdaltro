import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from "next/script";

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
     {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-ads-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body  className={`font-sans ${GeistSans.variable} ${GeistMono.variable} `}>
          
          {children}
        <Analytics />
      </body>
    </html>
  )
}
