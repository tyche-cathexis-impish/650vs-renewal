import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { notFound } from 'next/navigation'
import { getPostById, getAllPosts, convertToLegacyFormat } from '../../lib/microcms'

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
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const popularPosts = allPosts.slice(0, 3) // Use first 3 posts as popular for now

  // Markdownコンテンツを処理（一時的に無効化）
  const processedContent = post.content

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
          <div 
            className="prose prose-note max-w-none"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
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
                      <img 
                        src={popularPost.image} 
                        alt={popularPost.title}
                        className="w-full h-full object-cover"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">650vs</h3>
              <p className="text-gray-400 mb-4">
                茨城県を拠点とする<br />
                映像制作スタジオ
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">Instagram</Link>
                <Link href="#" className="text-gray-400 hover:text-white">X</Link>
                <Link href="#" className="text-gray-400 hover:text-white">Bluesky</Link>
                <Link href="#" className="text-gray-400 hover:text-white">LINE</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white">企業プロモーション</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">イベント撮影</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">ウェディング映像</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">CM制作</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">ショートフィルム</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">会社概要</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">チーム紹介</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">ブログ</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">採用情報</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>〒310-0000</li>
                <li>茨城県水戸市○○町1-2-3</li>
                <li>TEL: 029-XXX-XXXX</li>
                <li>EMAIL: info@650vs.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <div className="mb-4">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition mr-6">
                プライバシーポリシー
              </Link>
              <Link href="/cancellation-policy" className="text-sm text-gray-400 hover:text-white transition">
                キャンセルポリシー
              </Link>
            </div>
            <p>&copy; 2024 650vs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// 静的生成用のパス生成
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}