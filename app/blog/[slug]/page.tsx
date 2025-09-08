import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import BlogImageHandler from '../../components/BlogImageHandler'
import { notFound } from 'next/navigation'
import { getPostById, getAllPosts, convertToLegacyFormat, type BlogPost } from '../../lib/microcms'
import { processLinkCards } from '../../lib/linkCardProcessor'
import { getPopularPosts, extractBlogSlugFromPath } from '../../lib/analytics'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const microCMSPost = await getPostById(slug)
  
  if (!microCMSPost) {
    notFound()
  }

  const post = convertToLegacyFormat(microCMSPost)
  
  // Get all posts for navigation
  const allMicroCMSPosts = await getAllPosts()
  const allPosts = allMicroCMSPosts.map(convertToLegacyFormat)
  
  // Find current post index for navigation
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  // Since posts are ordered by newest first (-publishedAt), we need to reverse the logic:
  // - previousPost (過去の記事) = currentIndex + 1 (older post in the array)
  // - nextPost (未来の記事) = currentIndex - 1 (newer post in the array)
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  // Get popular posts from Google Analytics
  type LegacyPost = ReturnType<typeof convertToLegacyFormat>;
  let popularPosts: LegacyPost[] = [];
  
  try {
    const gaData = await getPopularPosts();
    
    if (gaData.length > 0) {
      // GA4データが取得できた場合、実際のページビューデータを使用
      const popularSlugs = gaData
        .map(data => extractBlogSlugFromPath(data.path))
        .filter(slug => slug !== null)
        .slice(0, 5);
      
      popularPosts = popularSlugs
        .map(slug => allPosts.find(post => post.slug === slug))
        .filter((post): post is LegacyPost => post !== undefined);
    }
  } catch (error) {
    console.warn('Failed to fetch GA4 data:', error);
  }
  
  // フォールバック：GA4データが取得できない場合は古い記事を表示
  if (popularPosts.length === 0) {
    popularPosts = allPosts
      .slice() // Create a copy to avoid mutating original
      .reverse() // Reverse to get oldest first (since allPosts is newest first)
      .slice(0, 5); // Take first 5 (oldest posts)
  }

  // Process content to convert URLs to link cards
  const processedContent = await processLinkCards(post.content)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Note-style Header */}
      <header className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-4">
            <Link 
              href="/blog"
              className="text-gray-500 hover:text-gray-700 text-sm flex items-center"
            >
              ← ブログ一覧に戻る
            </Link>
          </div>
          <div className="mb-3">
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              {post.category}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm">
            {post.date}
          </p>
        </div>
      </header>

      {/* Article Content - Note Style */}
      <article className="py-8">
        <div className="max-w-2xl mx-auto px-6">
          {/* Article Body */}
          <BlogImageHandler>
            <div 
              className="prose prose-note max-w-none"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </BlogImageHandler>
        </div>
      </article>

      {/* Previous/Next Navigation */}
      <section className="py-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center items-start">
            <div className="w-1/3 text-left pr-4">
              {/* Previous Post */}
              {previousPost ? (
                <Link href={`/blog/${previousPost.slug}`} className="text-gray-500 hover:text-gray-700 text-sm block">
                  <div className="font-medium">前の記事</div>
                  <div className="mt-1 break-words" style={{wordBreak: 'break-all', overflowWrap: 'break-word', maxWidth: '36ch'}}>{previousPost.title}</div>
                </Link>
              ) : (
                <span className="text-gray-300 text-sm block">
                  <div className="font-medium">前の記事</div>
                  <div className="mt-1">なし</div>
                </span>
              )}
            </div>
            <div className="w-1/3 text-center">
              {/* Blog List Link */}
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 text-sm font-medium block">
                <div>ブログ一覧</div>
                <div className="mt-1">に戻る</div>
              </Link>
            </div>
            <div className="w-1/3 text-left pl-4">
              {/* Next Post */}
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="text-gray-500 hover:text-gray-700 text-sm block">
                  <div className="font-medium">次の記事</div>
                  <div className="mt-1 break-words" style={{wordBreak: 'break-all', overflowWrap: 'break-word', maxWidth: '36ch'}}>{nextPost.title}</div>
                </Link>
              ) : (
                <span className="text-gray-300 text-sm block">
                  <div className="font-medium">次の記事</div>
                  <div className="mt-1">なし</div>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Posts */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">人気の記事</h3>
          <div className="space-y-3">
            {/* Popular Post Items - Note Style */}
            {popularPosts.map((popularPost) => (
              <Link key={popularPost.slug} href={`/blog/${popularPost.slug}`} className="block group">
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white transition duration-200">
                  {/* Thumbnail */}
                  <div className="w-16 h-12 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                    {popularPost.image ? (
                      <Image 
                        src={popularPost.image} 
                        alt={popularPost.title}
                        width={64}
                        height={48}
                        className="w-full h-full object-cover"
                        quality={80}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No Image</span>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 leading-tight">
                      {popularPost.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{popularPost.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* 著作権表示 */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors mr-6"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/cancellation-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                キャンセルポリシー
              </Link>
            </div>
            <p className="text-gray-400">
              © 2022 ロッコービデオサービス All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Temporarily disable static generation to fix Jest worker error
// export async function generateStaticParams() {
//   const posts = await getAllPosts()
//   return posts.map((post) => ({
//     slug: post.id,
//   }))
// }