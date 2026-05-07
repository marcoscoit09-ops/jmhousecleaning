const fs = require('fs');

const fileContent = fs.readFileSync('itinerario.html', 'utf8');

let COMPLETED = {};
let CLIENTS = [];

const completedMatch = fileContent.match(/let COMPLETED = (.*?);/);
// Actually, COMPLETED is loaded from localStorage or firebase, we can't get it from the file!
