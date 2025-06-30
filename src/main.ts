export const markdownToHTML = (markdown: string): string => {
  let html = markdown;
  html = html.replace(/^---$/gm, "<hr>");
  html = html.replace(/^#### (.*)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.*)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*)$/gm, "<h1>$1</h1>");
  html = html.replace(/^> (.*)$/gm, "<blockquote>$1</blockquote>");
  html = html.replace(/^\d+\. (.*)$/gm, "<ol><li>$1</li></ol>");
  html = html.replace(/<\/ol>\s*<ol>/g, "");
  html = html.replace(/^- (.*)$/gm, "<ul><li>$1</li></ul>");
  html = html.replace(/<\/ul>\s*<ul>/g, "");
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/\n/g, "<br>");
  return html;
};
const input = `
# Hello World
## Subtitle
This is **bold** and *italic*.
> Quote line
1. First item
2. Second item
- Bullet 1
- Bullet 2
\`inline code\`
[OpenAI](https://openai.com)
---
`;

console.log(markdownToHTML(input));
