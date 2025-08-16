'use client'

import { useState } from 'react'
import { parseNoteStyleMarkdown } from '../lib/markdown'

interface MarkdownEditorProps {
  initialContent?: string
  onChange?: (content: string) => void
}

export default function MarkdownEditor({ initialContent = '', onChange }: MarkdownEditorProps) {
  const [markdown, setMarkdown] = useState(initialContent)
  const [showPreview, setShowPreview] = useState(false)

  const handleChange = (value: string) => {
    setMarkdown(value)
    onChange?.(value)
  }

  const previewHtml = parseNoteStyleMarkdown(markdown)

  return (
    <div className="w-full">
      {/* Editor Controls */}
      <div className="border-b border-gray-200 mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setShowPreview(false)}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              !showPreview 
                ? 'text-blue-600 border-blue-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            編集
          </button>
          <button
            onClick={() => setShowPreview(true)}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              showPreview 
                ? 'text-blue-600 border-blue-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            プレビュー
          </button>
        </div>
      </div>

      {/* Editor/Preview Area */}
      <div className="relative">
        {!showPreview ? (
          <div className="space-y-4">
            {/* Markdown Help */}
            <div className="text-xs text-gray-500 mb-2">
              <details>
                <summary className="cursor-pointer hover:text-gray-700">Markdown記法ヘルプ</summary>
                <div className="mt-2 space-y-1 text-xs">
                  <div><code># 見出し1</code> → 大見出し</div>
                  <div><code>## 見出し2</code> → 中見出し</div>
                  <div><code>**太字**</code> → <strong>太字</strong></div>
                  <div><code>*斜体*</code> → <em>斜体</em></div>
                  <div><code>[リンク](URL)</code> → リンク</div>
                  <div><code>![画像](URL)</code> → 画像</div>
                  <div><code>`コード`</code> → <code>コード</code></div>
                </div>
              </details>
            </div>

            {/* Textarea */}
            <textarea
              value={markdown}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="ここにMarkdownで記事を書いてください...

## 見出し例

**太字**や*斜体*も使えます。

- リスト項目1
- リスト項目2

[リンク](https://example.com)も簡単に書けます。"
              className="w-full h-96 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm leading-relaxed"
            />
          </div>
        ) : (
          <div className="border border-gray-300 rounded-lg p-4 min-h-96 bg-gray-50">
            <div className="prose prose-note max-w-none bg-white p-6 rounded shadow-sm">
              <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
            </div>
          </div>
        )}
      </div>

      {/* Character Count */}
      <div className="mt-2 text-xs text-gray-500 text-right">
        {markdown.length} 文字
      </div>
    </div>
  )
}