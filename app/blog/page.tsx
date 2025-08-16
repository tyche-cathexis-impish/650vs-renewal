import Link from 'next/link'
import Navbar from '../components/Navbar'
import BlogPagination from '../components/BlogPagination'
import { getAllBlogPosts, getCategories } from '../lib/blogData'

export default function Blog() {
  const posts = getAllBlogPosts()
  const categories = getCategories()
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              映像制作の技術情報、事例紹介、業界トレンドをお届け
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts with Pagination */}
      <BlogPagination posts={posts} postsPerPage={12} />

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">カテゴリー</h2>
              <p className="text-gray-600">
                興味のあるトピックから記事を探してみてください
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="#" className="group">
                <div className="bg-blue-50 p-8 rounded-lg text-center hover:bg-blue-100 transition duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">技術解説</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    撮影・編集技術の詳細解説
                  </p>
                  <span className="text-blue-600 text-sm font-semibold group-hover:text-blue-700">
                    12記事 →
                  </span>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="bg-green-50 p-8 rounded-lg text-center hover:bg-green-100 transition duration-300">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">事例紹介</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    実際のプロジェクト事例
                  </p>
                  <span className="text-green-600 text-sm font-semibold group-hover:text-green-700">
                    8記事 →
                  </span>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="bg-purple-50 p-8 rounded-lg text-center hover:bg-purple-100 transition duration-300">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">機材レビュー</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    最新機材の詳細レビュー
                  </p>
                  <span className="text-purple-600 text-sm font-semibold group-hover:text-purple-700">
                    6記事 →
                  </span>
                </div>
              </Link>
              
              <Link href="#" className="group">
                <div className="bg-orange-50 p-8 rounded-lg text-center hover:bg-orange-100 transition duration-300">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">業界動向</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    映像業界のトレンド分析
                  </p>
                  <span className="text-orange-600 text-sm font-semibold group-hover:text-orange-700">
                    5記事 →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              最新記事をメールでお届け
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              映像制作に関する最新情報やノウハウを定期的にお送りします。
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-800 text-white px-6 py-3 rounded-r-lg hover:bg-blue-900 transition duration-300 font-semibold">
                登録
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              ※配信停止はいつでも可能です
            </p>
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