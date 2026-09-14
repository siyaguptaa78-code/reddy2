const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next')) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./app').concat(walk('./components'));
let count = 0;

const regex = /(?<![-/A-Za-z])\bbetting\b(?![A-Za-z_-])/gi;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace betting where it is a standalone word, not part of a url or file path
  content = content.replace(regex, '');
  
  // Clean up double spaces created by removal
  content = content.replace(/  +/g, ' ');
  // Clean up spaces before punctuation
  content = content.replace(/ \./g, '.');
  content = content.replace(/ ,/g, ',');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log('Updated', file);
  }
});
console.log('Total files updated:', count);
