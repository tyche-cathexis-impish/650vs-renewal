import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      signal: controller.signal
    })
    
    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const html = await response.text()

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    let title = titleMatch ? titleMatch[1].trim() : new URL(url).hostname
    
    // Clean up title - remove HTML tags and decode entities
    title = title.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")

    // Extract description
    const descriptionMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']+)["\'][^>]*>/i) ||
                            html.match(/<meta[^>]*property=["\']og:description["\'][^>]*content=["\']([^"']+)["\'][^>]*>/i)
    let description = descriptionMatch ? descriptionMatch[1].trim() : ''
    
    // Clean up description
    description = description.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")

    // Extract og:image
    const imageMatch = html.match(/<meta[^>]*property=["\']og:image["\'][^>]*content=["\']([^"']+)["\'][^>]*>/i)
    let image = imageMatch ? imageMatch[1] : null

    // Make relative URLs absolute
    if (image && image.startsWith('/')) {
      const urlObj = new URL(url)
      image = `${urlObj.protocol}//${urlObj.host}${image}`
    }

    return NextResponse.json({
      title,
      description,
      image,
      url
    })

  } catch (error) {
    console.error('Failed to fetch metadata for:', url, error)
    console.error('Error type:', error.name)
    console.error('Error message:', error.message)
    
    // Return error details for debugging
    return NextResponse.json({
      title: new URL(url).hostname,
      description: '',
      image: null,
      url,
      error: error.message,
      errorType: error.name
    }, { status: 200 })
  }
}