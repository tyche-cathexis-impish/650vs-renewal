import { getAllPosts, convertToLegacyFormat } from './microcms'

// Process blog content to convert URLs to link cards
export async function processLinkCards(content: string): Promise<string> {
  try {
    console.log('Processing content for link cards:', content.substring(0, 200));
    
    // Get all posts for link card data
    const microCMSPosts = await getAllPosts()
    const allPosts = microCMSPosts.map(convertToLegacyFormat)
    
    console.log('Available posts:', allPosts.map(p => p.slug));

    // Replace blog URLs with link card HTML - specifically target URLs in <a> tags
    const linkRegex = /<a href="(https?:\/\/650vs\.com\/blog\/([^"]+))">([^<]*)<\/a>/g
    
    let processedContent = content

    const matches = [...content.matchAll(linkRegex)]
    console.log('Found link matches:', matches);
    
    for (const match of matches) {
      const fullMatch = match[0]  // entire <a> tag
      const fullUrl = match[1]    // URL
      const slug = match[2].replace(/\/$/, '') // slug with trailing slash removed
      
      console.log('Looking for post with slug:', slug);
      const post = allPosts.find(p => p.slug === slug)
      console.log('Found post:', post ? post.title : 'Not found');
      
      if (post) {
        const linkCardHtml = `<div style="margin: 20px auto; max-width: calc(100% - 100px);">
  <a href="/blog/${post.slug}" style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 20px; padding: 20px; border: 1px solid #e1e5e9; border-radius: 6px; background: #fff; text-decoration: none; color: inherit; height: 140px; box-sizing: border-box; transition: all 0.2s ease;" onmouseover="this.style.background='#fafbfc'; this.style.borderColor='#d1d5db'; this.style.transform='translateY(-1px)'; this.style.boxShadow='0 2px 8px rgba(0, 0, 0, 0.08)'" onmouseout="this.style.background='#fff'; this.style.borderColor='#e1e5e9'; this.style.transform='translateY(0)'; this.style.boxShadow='none'">
    <div style="flex: 1; min-width: 0; display: flex; align-items: center; height: 100%;">
      <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: #1a1a1a; line-height: 1.5;">${post.title}</h3>
    </div>
    ${post.image ? `<img src="${post.image}" alt="${post.title}" style="width: 200px; height: 140px; border-radius: 4px; object-fit: cover; flex-shrink: 0;" />` : '<div style="width: 200px; height: 140px; background: #f3f4f6; border-radius: 4px; flex-shrink: 0;"></div>'}
  </a>
</div>`
        
        console.log('Generated HTML:', linkCardHtml);
        console.log('Full match to replace:', fullMatch);
        processedContent = processedContent.replace(fullMatch, linkCardHtml)
        console.log('Content after replacement (first 500 chars):', processedContent.substring(processedContent.length - 500))
      }
    }
    
    console.log('Final processed content length:', processedContent.length);
    return processedContent
  } catch (error) {
    console.error('Failed to process link cards:', error)
    return content
  }
}