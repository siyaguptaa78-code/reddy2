const str1 = '<Link href="/sports-betting">Sports Betting</Link>';
const str2 = 'online betting platform';
const str3 = 'href="/sports-betting/cricket-betting"';
const regex = /(?<![-/A-Za-z])\bbetting\b(?![A-Za-z_-])/gi;
console.log(str1.replace(regex, ''));
console.log(str2.replace(regex, ''));
console.log(str3.replace(regex, ''));
