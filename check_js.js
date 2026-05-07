const fs = require('fs');
const html = fs.readFileSync('itinerario.html', 'utf8');
const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
let match;
let count = 0;
while ((match = scriptRegex.exec(html)) !== null) {
  const scriptContent = match[1];
  try {
    new Function(scriptContent);
  } catch (e) {
    console.error('Syntax error in script tag', count, e.message);
    const lines = scriptContent.split('\n');
    console.log(lines.slice(Math.max(0, e.lineNumber - 5), e.lineNumber + 5).join('\n'));
  }
  count++;
}
