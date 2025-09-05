"use client";

import { useEffect, useState, useRef } from "react";
import ImageLightbox from "./ImageLightbox";
// import LinkCard from "./LinkCard";

interface BlogImageHandlerProps {
  children: React.ReactNode;
}

export default function BlogImageHandler({ children }: BlogImageHandlerProps) {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
  }>({
    isOpen: false,
    src: "",
    alt: "",
  });
  
  const contentRef = useRef<HTMLDivElement>(null);

  // Convert blog URLs to link cards
  useEffect(() => {
    const convertUrlsToLinkCards = async () => {
      const contentElement = contentRef.current;
      if (!contentElement) return;

      // Find standalone URLs that match the blog pattern
      const textNodes: Node[] = [];
      const walker = document.createTreeWalker(
        contentElement,
        NodeFilter.SHOW_TEXT,
        null,
      );

      let node;
      while (node = walker.nextNode()) {
        if (node.textContent?.includes('650vs.com/blog/')) {
          textNodes.push(node);
        }
      }

      textNodes.forEach(node => {
        if (node.textContent) {
          const urlRegex = /https?:\/\/650vs\.com\/blog\/[^\s]+/g;
          const matches = node.textContent.match(urlRegex);
          
          if (matches) {
            const parent = node.parentNode;
            if (parent) {
              matches.forEach(url => {
                // Create a placeholder div that will be replaced with React component
                const placeholder = document.createElement('div');
                placeholder.className = 'link-card-placeholder';
                placeholder.setAttribute('data-url', url);
                
                // Replace the URL text with the placeholder
                const newText = node.textContent!.replace(url, '');
                node.textContent = newText;
                
                parent.insertBefore(placeholder, node.nextSibling);
              });
            }
          }
        }
      });
    };

    convertUrlsToLinkCards();
  }, [children]);

  useEffect(() => {
    const handleImageClick = (e: Event) => {
      const target = e.target as HTMLElement;

      // 画像をクリックした場合
      if (target.tagName === "IMG") {
        const img = target as HTMLImageElement;

        // ブログ記事内の画像かどうかをチェック
        const isInBlogContent = img.closest(".prose-note");

        // ブログカードやアバター画像などを除外
        const isExcluded =
          img.closest(".blog-card") ||
          img.closest(".note-link-card") ||
          img.closest("a") || // リンク内の画像は除外
          img.classList.contains("wp-post-image") ||
          img.classList.contains("attachment-thumbnail") ||
          img.width <= 64 || // 小さい画像は除外
          img.height <= 64;

        if (isInBlogContent && !isExcluded) {
          e.preventDefault();
          setLightbox({
            isOpen: true,
            src: img.src,
            alt: img.alt || "",
          });
        }
      }
    };

    document.addEventListener("click", handleImageClick);

    return () => {
      document.removeEventListener("click", handleImageClick);
    };
  }, []);

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      src: "",
      alt: "",
    });
  };

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
  );
}
