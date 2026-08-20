const fs = require('fs');
const path = 'd:/fraud/reddy2/app/page.tsx';
let code = fs.readFileSync(path, 'utf8');

// Find all sections
const mainStartRegex = /<main className="([^"]+)">/;
let mainMatch = mainStartRegex.exec(code);
if(!mainMatch) {
    console.log('No main found');
    process.exit(1);
}
let mainStart = mainMatch.index + mainMatch[0].length;
let mainEnd = code.indexOf('</main>', mainStart);

let mainContent = code.substring(mainStart, mainEnd);

let parsedSections = [];
const regex = /{\/\*([^*]+)\*\/}\s*(<section[\s\S]*?<\/section>)/g;
let match;
while ((match = regex.exec(mainContent)) !== null) {
  parsedSections.push({
    comment: match[1].trim(),
    html: match[2]
  });
}

let newOrder = [
  'Banner Carousels',
  'Sports Categories Carousels',
  'Cricket Live Odds widget',
  'Football Live Odds widget',
  'Lobby Carousels',
  'How Reddy Anna Book Works complete guide',
  'Why Choose Reddy Anna Book',
  'Quick WhatsApp Grid',
  'Top Platforms Grid',
  'Core Trusted Banner card',
  'Reddy Anna App',
  'Updated Content (full replacement from provided copy)',
  'What Is Reddy Anna ID',
  'How to Verify Reddy Anna ID',
  'Get Cricket ID now with image',
  'How to Create Your Reddy Anna Account',
  'Reddy Anna Login Quick secure access',
  'Cricket Betting guide with image',
  'Popular Sports Guides lists',
  'Casino Games section',
  'Casino games features grid cards',
  'Reddy Anna Bonuses',
  'FAQ Section',
  'Ready to start Journey call-out'
];

let finalMainContent = '';
for (let name of newOrder) {
  let sec = parsedSections.find(s => s.comment.includes(name));
  if (sec) {
    finalMainContent += '\n        {/* ' + sec.comment + ' */}\n        ' + sec.html + '\n';
  } else {
    console.log('Not found:', name);
  }
}

for (let sec of parsedSections) {
  if (!newOrder.some(name => sec.comment.includes(name))) {
    console.log('Extra found:', sec.comment);
    finalMainContent += '\n        {/* ' + sec.comment + ' */}\n        ' + sec.html + '\n';
  }
}

let newCode = code.substring(0, mainStart) + finalMainContent + '\n      ' + code.substring(mainEnd);
fs.writeFileSync(path, newCode);
console.log('Reordering done');
