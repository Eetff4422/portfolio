const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'CNAME');
const destination = path.join(__dirname, 'dist', 'CNAME');

fs.copyFileSync(source, destination);
console.log('CNAME file copied to dist directory');
