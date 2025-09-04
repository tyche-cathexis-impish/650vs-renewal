'use client'

import { useState, useEffect } from 'react'
import LinkCard from './LinkCard'
import MobileLinkCard from './MobileLinkCard'

interface ResponsiveLinkCardProps {
  url: string
}

export default function ResponsiveLinkCard({ url }: ResponsiveLinkCardProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // クライアント側でのレンダリングが完了するまでは何も表示しない
  if (!isClient) {
    return (
      <div className="border border-gray-300 rounded p-4 my-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    )
  }

  return isMobile ? <MobileLinkCard url={url} /> : <LinkCard url={url} />
}