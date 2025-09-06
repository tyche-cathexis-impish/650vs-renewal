'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[]
}

export default function Breadcrumbs({ customItems }: BreadcrumbsProps) {
  const pathname = usePathname()

  // カスタムアイテムが提供されている場合は、それを使用
  if (customItems) {
    return (
      <nav aria-label="パンくずナビゲーション" className="py-4">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                ホーム
              </Link>
            </li>
            {customItems.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-gray-400">/</span>
                {index === customItems.length - 1 ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    )
  }

  // パスから自動生成
  const pathSegments = pathname.split('/').filter(Boolean)
  
  if (pathSegments.length === 0 || pathname === '/') {
    return null // ホームページでは表示しない
  }

  const breadcrumbItems: BreadcrumbItem[] = []
  let currentPath = ''

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`
    
    // セグメントに基づいて日本語のラベルを生成
    const label = getBreadcrumbLabel(segment)
    breadcrumbItems.push({ label, href: currentPath })
  })

  return (
    <nav aria-label="パンくずナビゲーション" className="py-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              ホーム
            </Link>
          </li>
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

function getBreadcrumbLabel(segment: string): string {
  // 予約されたパスのマッピング
  const pathLabels: { [key: string]: string } = {
    'about': '会社概要',
    'services': 'サービス',
    'contact': 'お問い合わせ',
    'blog': 'ブログ',
    'privacy-policy': 'プライバシーポリシー',
    'cancellation-policy': 'キャンセルポリシー',
  }

  // 既知のパスの場合
  if (pathLabels[segment]) {
    return pathLabels[segment]
  }

  // ブログ記事の場合は特別処理が必要かもしれませんが、
  // 現在は単純にセグメントを返す
  return segment
}