const fs = require('fs');
var read = fs.readFileSync('../inputdata/India2011_Merge_csv.csv').toString();
var set1 = new Set();
var line = read.split('\n');
var arr = [];
var eachObj = {};
for (var i = 1; i < line.length - 2; i++) {
    var currentLine = line[i].split(',');
    set1.add(currentLine[3]);
}
for (stateName of set1) {
    var Total_Male = 0;
    var Total_Female = 0;
    var State_Name = null;
    for (var i = 0; i < line.length; i++) {
        var currentLine = line[i].split(',');
        if (currentLine[4] === 'Total' && currentLine[5] === 'All ages' && currentLine[3] === stateName) {
            State_Name = currentLine[3];
            Total_Female += Number(currentLine[41]);
            Total_Male += Number(currentLine[40]);
        }
    }
    arr.push({
        State_Name: State_Name,
        Total_Female: Total_Female,
        Total_Male: Total_Male
    });
}
arr.pop();
fs.writeFileSync('../outputdata/StateGenderGraduateJson.json', JSON.stringify(arr));
console.log('Done');
