'use client'

import { getAllPosts, convertToLegacyFormat } from '../lib/microcms'
import { useState, useEffect } from 'react'

interface LinkCardProps {
  url: string
}

interface PostData {
  slug: string
  title: string
  image: string
  excerpt: string
}

export default function LinkCard({ url }: LinkCardProps) {
  const [postData, setPostData] = useState<PostData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        // Extract slug from URL
        const urlMatch = url.match(/\/blog\/([^\/]+)\/?$/)
        if (!urlMatch) {
          setLoading(false)
          return
        }

        const slug = urlMatch[1]
        
        // Get all posts and find the matching one
        const microCMSPosts = await getAllPosts()
        const allPosts = microCMSPosts.map(convertToLegacyFormat)
        const post = allPosts.find(p => p.slug === slug)

        if (post) {
          setPostData({
            slug: post.slug,
            title: post.title,
            image: post.image,
            excerpt: post.excerpt
          })
        }
      } catch (error) {
        console.error('Failed to fetch post data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPostData()
  }, [url])

  if (loading) {
    return (
      <div className="note-link-card">
        <div className="note-link-card-content">
          <div className="note-link-card-title">読み込み中...</div>
        </div>
        <div className="note-link-card-image" style={{background: '#f0f0f0'}}></div>
      </div>
    )
  }

  if (!postData) {
    // Fallback for external links or not found posts
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="note-link-card">
        <div className="note-link-card-content">
          <div className="note-link-card-title">{url}</div>
        </div>
        <div className="note-link-card-image" style={{background: '#f0f0f0'}}></div>
      </a>
    )
  }

  return (
    <a href={`/blog/${postData.slug}`} className="note-link-card">
      <div className="note-link-card-content">
        <h3 className="note-link-card-title">{postData.title}</h3>
      </div>
      {postData.image && (
        <img 
          src={postData.image} 
          alt={postData.title}
          className="note-link-card-image"
        />
      )}
    </a>
  )
}