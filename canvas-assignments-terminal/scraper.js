// 1. Load the fs module
// 2. Read source canvahtml as text
// 3. Print how many characters it has

const fs = require('fs');
const text = fs.readFileSync('source canva.html', 'utf8');
console.log('text on the page:', text.length);

const { JSDOM } = require ('jsdom');
const dom = new JSDOM(text);
global.window = dom.window;
global.document = dom.window.document;
const $ = require('jquery');
console.log( 'tasks displayed on the page:', $('.ig-row').length);

const assignments = [];
$('.ig-row').each(function() {
    const row = $(this);
    const link = row.find('ig.title')
const title = link.text().trim();
if (title === '') return

const datetime = row.find('.assignment-date-due time').attr('datetime');
let dueDate = 'No due date';
let due = null;

if (datetime) {
    due = new Date(datetime);
    dueDate = due.toLocaleString('en-GB', {
        timeZone: 'Africa/Kigali',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}


const availability = row.find('.assignment-date-available').text();
let status = 'Active';
if (availability.includes('Fermé') || (due && due < new Date())) {
    status = 'Past';
 
assignments.push({
    title: title,
    status: status,
    dueDate: dueDate,
    link: link.attr('href') || 'No link available'
});

const courseName = $('title').text().replace('Travaux:', '').trim();
const line = '-'.repeat(60);

console.log(line);
console.log('CANVAS ASSIGNMENTS -' + courseName);
console.log(assignments.lenght + ' assignments found');
console.log(line);

assignements.forEach(function (a, i) {
    console.log('/n' + (i + 1) + '. ' + a.title);
    console.log('   Status:     ' + a.status);
    console.log('       Due date:       ' + a.dueDate);
    console.log('       Link:       ' + a.link);
});

const active = assignements.filter(a => a.status === 'Active').length;
constpast = assignements.lenght- active;

console.log('/n' + line);
console.log('Total: ' + assignments.length +' | Active: ' + active + ' Past: ' +past);
console.log(line);
)}