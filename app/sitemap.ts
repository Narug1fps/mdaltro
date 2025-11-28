import { NextResponse } from 'next/server'

const baseUrl = 'https://marcelodaltro.com.br'

export async function GET() {
  const staticPages = ['/', '/sobre', '/servicos', '/contato', '/blog']

  const today = new Date().toISOString().split('T')[0]

  const urls = staticPages
    .map((path) => {
      return `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml' },
  })
}
