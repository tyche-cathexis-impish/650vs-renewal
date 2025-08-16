'use client'

import { useEffect, useState } from 'react'
import ImageLightbox from './ImageLightbox'

interface BlogImageHandlerProps {
  children: React.ReactNode
}

export default function BlogImageHandler({ children }: BlogImageHandlerProps) {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean
    src: string
    alt: string
  }>({
    isOpen: false,
    src: '',
    alt: ''
  })

  useEffect(() => {
    const handleImageClick = (e: Event) => {
      const target = e.target as HTMLElement
      
      // 画像をクリックした場合
      if (target.tagName === 'IMG') {
        const img = target as HTMLImageElement
        
        // ブログ記事内の画像かどうかをチェック
        const isInBlogContent = img.closest('.prose-note')
        
        // ブログカードやアバター画像などを除外
        const isExcluded = img.closest('.blog-card') || 
                          img.closest('.note-link-card') ||
                          img.classList.contains('wp-post-image') ||
                          img.classList.contains('attachment-thumbnail') ||
                          img.width <= 64 || // 小さい画像は除外
                          img.height <= 64
        
        if (isInBlogContent && !isExcluded) {
          e.preventDefault()
          setLightbox({
            isOpen: true,
            src: img.src,
            alt: img.alt || ''
          })
        }
      }
    }

    document.addEventListener('click', handleImageClick)
    
    return () => {
      document.removeEventListener('click', handleImageClick)
    }
  }, [])

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      src: '',
      alt: ''
    })
  }

  return (
    <>
      {children}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        src={lightbox.src}
        alt={lightbox.alt}
        onClose={closeLightbox}
      />
    </>
  )
}