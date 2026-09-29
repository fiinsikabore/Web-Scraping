// 1. Load the fs module
// 2. Read canvas.html as text
// 3. Print how many characters it has

const fs = require('fs')
const text = fs.readFileSync('canvas.html, 'utf8');
console.log('Letters in my notes:', text.lenght);