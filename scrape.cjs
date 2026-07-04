const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const outputFile = path.join(__dirname, 'content.txt');

const filesToScrape = [
  'pages/Home.jsx',
  'pages/About.jsx',
  'pages/Services.jsx',
  'pages/ServiceDetail.jsx',
  'pages/Book.jsx',
  'pages/Contact.jsx',
  'components/Navbar.jsx',
  'components/Footer.jsx'
];

let fullContent = '';

for (const file of filesToScrape) {
  const filePath = path.join(srcDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf8');
  let cleanLines = [];
  
  // 1. Extract plain text nodes (between > and <)
  const jsxTextRegex = />([^<]+)</g;
  let match;
  while ((match = jsxTextRegex.exec(content)) !== null) {
      let text = match[1].replace(/\{.*?\}/g, '').trim();
      text = text.replace(/^[,\.\-]/g, '').trim();
      if (text.length > 10 && text.includes(' ') && !text.includes('var(') && !text.includes('className') && !text.includes('=>') && !text.match(/^[a-z]+:/i)) {
          cleanLines.push(text);
      }
  }

  // 2. Extract specific object properties that hold text
  const stringRegex = /(title|tagline|description|text|q|a|h|p|short|label|name|loc):\s*["']([^"'\\]{3,})["']/g;
  while ((match = stringRegex.exec(content)) !== null) {
      let text = match[2].trim();
      if (text.length > 3) {
          cleanLines.push(text);
      }
  }
  
  // Deduplicate and filter out CSS rules/garbage
  let unique = [...new Set(cleanLines)].filter(line => {
      if (line.includes('solid rgba')) return false;
      if (line.match(/^\d+px$/)) return false;
      if (line.includes('return ')) return false;
      if (line.includes('import ')) return false;
      return true;
  });
  
  fullContent += `\n======================================================\n`;
  fullContent += `PAGE / COMPONENT: ${file.replace('pages/', '').replace('components/', '').replace('.jsx', '')}\n`;
  fullContent += `======================================================\n\n`;
  
  for (const line of unique) {
      fullContent += line + '\n\n';
  }
}

fs.writeFileSync(outputFile, fullContent, 'utf8');
console.log('Successfully scraped super clean content to content.txt');
