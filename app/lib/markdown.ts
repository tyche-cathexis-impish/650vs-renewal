import { remark } from 'remark'
import html from 'remark-html'

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

// note風のMarkdown記法をサポート
export function parseNoteStyleMarkdown(content: string): string {
  if (!content) return '';
  
  // 基本的なMarkdown記法をサポート
  let html = content
    // コードブロック（他の処理より先に）
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    
    // 見出し
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    
    // 画像（リンクより先に）
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
    
    // リンク
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    
    // 太字・斜体
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    
    // リスト
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    
    // 段落処理
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.includes('<h1>') || paragraph.includes('<h2>') || paragraph.includes('<h3>') || 
          paragraph.includes('<pre>') || paragraph.includes('<li>')) {
        return paragraph;
      }
      return paragraph.trim() ? `<p>${paragraph.trim()}</p>` : '';
    })
    .filter(p => p)
    .join('\n');
    
  // リストを適切にラップ
  html = html.replace(/(<li>.*<\/li>)/gs, (match) => {
    return `<ul>${match}</ul>`;
  });
    
  return html;
}