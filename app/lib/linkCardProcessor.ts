import { getAllPosts, convertToLegacyFormat } from './microcms'

// Process blog content to convert URLs to link cards
export async function processLinkCards(content: string): Promise<string> {
  try {
    // Get all posts for link card data
    const microCMSPosts = await getAllPosts()
    const allPosts = microCMSPosts.map(convertToLegacyFormat)

    // Replace blog URLs with link card HTML - specifically target URLs in <a> tags
    const linkRegex = /<a[^>]*href="(https?:\/\/650vs\.com\/blog\/([^"]+))"[^>]*>([^<]*)<\/a>/g
    
    let processedContent = content

    const matches = [...content.matchAll(linkRegex)]
    
    for (const match of matches) {
      const fullMatch = match[0]  // entire <a> tag
      const fullUrl = match[1]    // URL
      const slug = match[2].replace(/\/$/, '') // slug with trailing slash removed
      
      const post = allPosts.find(p => p.slug === slug)
      
      if (post) {
        const linkCardHtml = `<div style="margin: 20px auto; max-width: calc(100% - 100px);">
  <a href="/blog/${post.slug}" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 20px; padding: 20px; border: 1px solid #e1e5e9; border-radius: 6px; background: #fff; text-decoration: none; color: inherit; height: 140px; box-sizing: border-box; transition: all 0.2s ease;" onmouseover="this.style.background='#fafbfc'; this.style.borderColor='#d1d5db'; this.style.transform='translateY(-1px)'; this.style.boxShadow='0 2px 8px rgba(0, 0, 0, 0.08)'" onmouseout="this.style.background='#fff'; this.style.borderColor='#e1e5e9'; this.style.transform='translateY(0)'; this.style.boxShadow='none'">
    <div style="flex: 1; min-width: 0; display: flex; align-items: center; height: 100%;">
      <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: #1a1a1a; line-height: 1.5;">${post.title}</h3>
    </div>
    ${post.image ? `<img src="${post.image}" alt="${post.title}" style="width: 200px; height: 140px; border-radius: 4px; object-fit: cover; flex-shrink: 0;" />` : '<div style="width: 200px; height: 140px; background: #f3f4f6; border-radius: 4px; flex-shrink: 0;"></div>'}
  </a>
</div>`
        
        processedContent = processedContent.replace(fullMatch, linkCardHtml)
      }
    }
    
    // Process external URLs - updated to handle attributes like target and rel
    const externalLinkRegex = /<a[^>]*href="(https?:\/\/(?!650vs\.com)[^"]+)"[^>]*>([^<]*)<\/a>/g
    const externalMatches = [...processedContent.matchAll(externalLinkRegex)]
    
    for (const match of externalMatches) {
      const fullMatch = match[0]  // entire <a> tag
      const url = match[1]        // URL
      const linkText = match[2]   // link text
      
      // Create a link card with available info
      const fallbackTitle = linkText || new URL(url).hostname
      const linkCardHtml = `<div style="margin: 20px auto; max-width: calc(100% - 100px);">
  <a href="${url}" target="_blank" rel="noopener noreferrer" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 20px; padding: 20px; border: 1px solid #e1e5e9; border-radius: 6px; background: #fff; text-decoration: none; color: inherit; height: 140px; box-sizing: border-box; transition: all 0.2s ease;" onmouseover="this.style.background='#fafbfc'; this.style.borderColor='#d1d5db'; this.style.transform='translateY(-1px)'; this.style.boxShadow='0 2px 8px rgba(0, 0, 0, 0.08)'" onmouseout="this.style.background='#fff'; this.style.borderColor='#e1e5e9'; this.style.transform='translateY(0)'; this.style.boxShadow='none'">
    <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 8px;">
      <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: #1a1a1a; line-height: 1.5; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${fallbackTitle}</h3>
      <p style="margin: 0; font-size: 12px; color: #999;">${new URL(url).hostname}</p>
    </div>
    <div style="width: 200px; height: 140px; background: #f3f4f6; border-radius: 4px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;"><span style="color: #9ca3af; font-size: 12px;">No Image</span></div>
  </a>
</div>`
      
      processedContent = processedContent.replace(fullMatch, linkCardHtml)
    }
    
    return processedContent
  } catch (error) {
    console.error('Failed to process link cards:', error)
    return content
  }
}