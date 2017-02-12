let fs = require('fs');

function ReadAppend(file, appendFile) {
    // Reading the append file
    fs.readFile(appendFile, function(err, data) {
        if (err) {
            // console.log('File was not Read');
            throw err;
        }
        // console.log('File was Read');

        fs.appendFile(file, data, function(e) {
            // console.log('File')
            if (e) {
                // console.log('File was not append ');
                throw e;
            }
            // console.log('The "data to append" was appended to a file');
        });
    });
}

let file = '../csv/India2011MergeCsv.csv';
let appendFile = '../inputdata/India2011.csv';
file = ReadAppend(file, appendFile);
appendFile = '../inputdata/IndiaSC2011.csv';
file = ReadAppend(file, appendFile);
appendFile = '../inputdata/IndiaST2011.csv';
ReadAppend(file, appendFile);
