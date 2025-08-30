import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
  markdown?: string;
  contentType?: 'html' | 'markdown';
  tags: string[];
}

const postsDirectory = path.join(process.cwd(), 'app/data/posts');

export function getAllBlogPosts(): BlogPost[] {
  try {
    // postsディレクトリが存在しない場合は空配列を返す
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Posts directory does not exist:', postsDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts: BlogPost[] = [];

    for (const fileName of fileNames) {
      if (fileName.endsWith('.json')) {
        try {
          const filePath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const post: BlogPost = JSON.parse(fileContents);
          posts.push(post);
        } catch (error) {
          console.error(`Error reading post file ${fileName}:`, error);
        }
      }
    }

    // 日付順でソート（新しい順）
    return posts.sort((a, b) => {
      // 日本語の日付形式を変換 (例: "2025年8月16日" -> "2025-08-16")
      const convertJapaneseDate = (dateStr: string): Date => {
        const matches = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
        if (matches) {
          const [, year, month, day] = matches;
          return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        }
        // フォールバック: 通常の日付形式を試行
        return new Date(dateStr);
      };
      
      const dateA = convertJapaneseDate(a.date);
      const dateB = convertJapaneseDate(b.date);
      
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | undefined {
  try {
    const filePath = path.join(postsDirectory, `${slug}.json`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return undefined;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const post = JSON.parse(fileContents);
    console.log(`Successfully loaded post: ${slug}`);
    return post;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return undefined;
  }
}

export function getCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = Array.from(new Set(posts.map(post => post.category)));
  return categories.sort();
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(post => post.category === category);
}

export function getRecentPosts(limit: number = 5): BlogPost[] {
  return getAllBlogPosts().slice(0, limit);
}

export function getPreviousPost(currentSlug: string): BlogPost | undefined {
  const posts = getAllBlogPosts();
  const currentIndex = posts.findIndex(post => post.slug === currentSlug);
  
  // postsは新しい順にソートされているので、
  // 「前の記事」（時系列的に過去）は配列の後方にある
  if (currentIndex >= 0 && currentIndex < posts.length - 1) {
    return posts[currentIndex + 1];
  }
  
  return undefined;
}

export function getNextPost(currentSlug: string): BlogPost | undefined {
  const posts = getAllBlogPosts();
  const currentIndex = posts.findIndex(post => post.slug === currentSlug);
  
  // postsは新しい順にソートされているので、
  // 「次の記事」（時系列的に未来）は配列の前方にある
  if (currentIndex > 0) {
    return posts[currentIndex - 1];
  }
  
  return undefined;
}

export function getPopularPosts(limit: number = 5): BlogPost[] {
  // 人気記事の判定ロジック（現在は最新記事を返す）
  // 実際のプロジェクトでは、アクセス数やいいね数などで判定
  return getAllBlogPosts().slice(0, limit);
}