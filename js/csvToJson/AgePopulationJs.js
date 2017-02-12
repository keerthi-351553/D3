const fs = require('fs');
let read = fs.readFileSync('../inputdata/India2011MergeCsv.csv').toString();
let set = new Set();
let set1 = new Set();
let line = read.split('\n');
let arr = [];
let Age = 0;
for (let i = 1; i < line.length - 2; i = i + 1) {
    let currentLine = line[i].split(',');
    set.add(currentLine[5]);
}
for (let i = 1; i < line.length - 2; i = i + 1) {
    let currentLine = line[i].split(',');
    set1.add(currentLine[3]);
}
for (let age of set) {
    let TotalGraduate = 0;
    for (let i = 1; i < line.length; i = i + 1) {
        let currentLine = line[i].split(',');
        if (currentLine[4] === 'Total' && currentLine[5] === age) {
            Age = currentLine[5];
            TotalGraduate = TotalGraduate + Number(currentLine[12]);
        }
    }
    arr.push({
        Age: Age,
        TotalGraduate: TotalGraduate
    });
}
arr.pop();
fs.writeFileSync('../outputdata/ageGraduateJson.json', JSON.stringify(arr, null, 2));
