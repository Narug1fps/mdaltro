import { NextResponse } from 'next/server'

const site = 'https://marcelodaltro.com.br'

export async function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /api/private

# Sitemap
Sitemap: ${site}/sitemap

# Crawl-delay (optional)
# Crawl-delay: 10
`

  return new NextResponse(content, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
