'use client'

import { useState, useEffect } from 'react'

interface ImageLightboxProps {
  isOpen: boolean
  src: string
  alt: string
  onClose: () => void
}

export default function ImageLightbox({ isOpen, src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const handleScroll = () => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      handleScroll()
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-[95vw] max-h-[95vh] p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-gray-800 font-bold text-lg shadow-lg transition-all duration-200"
          aria-label="画像を閉じる"
        >
          ×
        </button>
        
        {/* Image */}
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        
        {/* Image Info */}
        {alt && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 rounded-b-lg">
            <p className="text-sm text-center">{alt}</p>
          </div>
        )}
      </div>
    </div>
  )
}