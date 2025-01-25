
// const url = require('node:url');

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL)

console.log(myURL.toString())
console.log(myURL.href)

// import url from 'url';

// const myURL = new URL('https://example.org');
// myURL.pathname = '/a/b/c';
// myURL.search = '?d=e';
// myURL.hash = '#fgh';

// console.log(myURL.toString());
