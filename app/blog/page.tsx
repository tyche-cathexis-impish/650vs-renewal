import Link from 'next/link'
import Navbar from '../components/Navbar'
import BlogPagination from '../components/BlogPagination'
import { getAllPosts, convertToLegacyFormat } from '../lib/microcms'

export default async function Blog() {
  const microCMSPosts = await getAllPosts()
  const posts = microCMSPosts.map(convertToLegacyFormat)
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Posts with Pagination */}
      <BlogPagination posts={posts} postsPerPage={12} />



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