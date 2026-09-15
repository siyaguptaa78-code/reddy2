const str1 = '<Link href="/sports">Sports</Link>';
const str2 = 'online platform';
const str3 = 'href="/sports/cricket"';
const regex = /(?<![-/A-Za-z])\b\b(?![A-Za-z_-])/gi;
console.log(str1.replace(regex, ''));
console.log(str2.replace(regex, ''));
console.log(str3.replace(regex, ''));
