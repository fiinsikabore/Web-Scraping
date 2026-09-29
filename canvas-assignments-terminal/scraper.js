// 1. Load the fs module
// 2. Read source canvahtml as text
// 3. Print how many characters it has

const fs = require('fs');
const text = fs.readFileSync('source canvas.html', 'utf8');
console.log('tasks on the page:', text.length);