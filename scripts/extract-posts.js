const fs = require('fs');
const path = require('path');

// blogData.tsから記事データを抽出するスクリプト
const blogDataPath = path.join(__dirname, '../app/lib/blogData.ts');
const postsDir = path.join(__dirname, '../app/data/posts');

// postsディレクトリを作成
if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
}

// blogData.tsファイルを読み込み
const blogDataContent = fs.readFileSync(blogDataPath, 'utf8');

// 記事データを抽出する正規表現
const postRegex = /{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",\s*image:\s*"([^"]*)",\s*content:\s*`([^`]*)`(?:,\s*markdown:\s*`([^`]*)`)?(?:,\s*contentType:\s*'([^']*)')?(?:,\s*tags:\s*\[([^\]]*)\])?\s*}/gs;

let match;
let extractedCount = 0;

while ((match = postRegex.exec(blogDataContent)) !== null) {
    const [, slug, title, date, category, excerpt, image, content, markdown, contentType, tagsStr] = match;
    
    // タグの処理
    let tags = [];
    if (tagsStr) {
        tags = tagsStr.split(',').map(tag => tag.trim().replace(/['"]/g, ''));
    }
    
    const post = {
        slug,
        title,
        date,
        category,
        excerpt,
        image,
        content: content.replace(/\\n/g, '\n'),
        ...(markdown && { markdown: markdown.replace(/\\n/g, '\n') }),
        ...(contentType && { contentType }),
        tags
    };
    
    const filePath = path.join(postsDir, `${slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(post, null, 2));
    
    console.log(`Extracted: ${slug}`);
    extractedCount++;
}

console.log(`\nTotal posts extracted: ${extractedCount}`);
console.log(`Posts saved to: ${postsDir}`);