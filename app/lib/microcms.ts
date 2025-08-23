import { createClient } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// microCMS client
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// Blog post type definition
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  category: string | { id: string; name: string; createdAt: string; updatedAt: string; publishedAt: string; revisedAt: string } | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

// Fetch all blog posts
export async function getAllPosts() {
  try {
    const url = `https://${process.env.MICROCMS_SERVICE_DOMAIN}/api/v1/blogs`;
    
    const response = await fetch(url, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
      },
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    return data.contents as BlogPost[];
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}

// Fetch single blog post by ID
export async function getPostById(id: string) {
  try {
    const url = `https://${process.env.MICROCMS_SERVICE_DOMAIN}/api/v1/blogs/${id}`;
    
    const response = await fetch(url, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
      },
    });
    
    if (!response.ok) {
      return null;
    }
    
    const post = await response.json();
    return post as BlogPost;
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return null;
  }
}

// Fetch posts with pagination
export async function getPostsWithPagination(offset = 0, limit = 10) {
  try {
    const data = await client.get({
      endpoint: 'blogs',
      queries: {
        orders: '-publishedAt',
        offset,
        limit,
      },
    });
    return {
      contents: data.contents as BlogPost[],
      totalCount: data.totalCount,
      offset: data.offset,
      limit: data.limit,
    };
  } catch (error) {
    console.error('Failed to fetch posts with pagination:', error);
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: 0,
    };
  }
}

// Convert microCMS post to compatible format for existing components
export function convertToLegacyFormat(post: BlogPost) {
  // Handle category - it can be null, string, or object
  const categoryName = post.category 
    ? (typeof post.category === 'string' ? post.category : (post.category as any)?.name || 'カテゴリなし')
    : 'カテゴリなし';

  return {
    slug: post.id,
    title: post.title,
    date: new Date(post.publishedAt).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    category: categoryName,
    excerpt: post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
    image: post.eyecatch?.url || '/images/default-blog-image.jpg',
    content: post.content,
    tags: [categoryName], // Convert category to tags array
  };
}