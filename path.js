const path = require('node:path');
console.log(path.win32.basename('C:\\temp\\myfile.html'));
// Returns: 'myfile.html
console.log(path.posix.basename('/tmp/myfile.html'));
// Returns: 'myfile.html'
console.log(path.resolve('C:'))

console.log(path.resolve('C:\\'))