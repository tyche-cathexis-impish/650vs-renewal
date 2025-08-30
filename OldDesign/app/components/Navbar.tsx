'use client'
  import Link from 'next/link'
  import { useState } from 'react'

  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    
    const closeMenu = () => setIsOpen(false)

    return (
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ロゴ */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                650vs
              </Link>
            </div>

            {/* デスクトップメニュー */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Services
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>

            {/* モバイルメニューボタン */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* モバイルメニュー */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100 bg-white">
                <Link href="/" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600">
                  Home
                </Link>
                <Link href="/services" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                  Services
                </Link>
                <Link href="/about" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="/blog" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
                <Link href="/contact" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    )
  }