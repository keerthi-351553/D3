let fs = require('fs');
let readline = require('readline');
let Stream = require('stream');
let instream = fs.createReadStream('../inputdata/India2011_Merge_csv.csv');
let Outstream = new Stream();
let rl = readline.createInterface(instream, Outstream);
let arr = [];
let Literate = 0;
let LiterateWithoutEducation = 0;
let BelowPrimary = 0;
let Primary = 0;
let Middle = 0;
let MatricSecondary = 0;
let HigherSecondaryIntermediatePreUniversitySeniorSecondary = 0;
let NontechnicalDiplomaOrDertificateNotEqualToDegree = 0;
let TechnicalDiplomaOrCertificateNotEqualToDegree = 0;
let Graduateabove = 0;
let Unclassified = 0;

rl.on('line', function(line) {
    let row = line.split(',');
    if (row[5] === 'All ages' && row[4] === 'Total') {
        Literate = Literate + Number(row[12]);
        LiterateWithoutEducation = LiterateWithoutEducation + Number(row[15]);
        BelowPrimary = BelowPrimary + Number(row[18]);
        Primary = Primary + Number(row[21]);
        Middle = Middle + Number(row[24]);
        MatricSecondary = MatricSecondary + Number(row[27]);
        HigherSecondaryIntermediatePreUniversitySeniorSecondary =
        HigherSecondaryIntermediatePreUniversitySeniorSecondary + Number(row[30]);
        NontechnicalDiplomaOrDertificateNotEqualToDegree =
        NontechnicalDiplomaOrDertificateNotEqualToDegree + Number(row[33]);
        TechnicalDiplomaOrCertificateNotEqualToDegree =
        TechnicalDiplomaOrCertificateNotEqualToDegree + Number(row[36]);
        Graduateabove = Graduateabove + Number(row[39]);
        Unclassified = Unclassified + Number(row[42]);
    }
});
rl.on('close', function() {
    arr.push({
        Literate: Literate,
        'Literate without Education': LiterateWithoutEducation,
        'Below Primary': BelowPrimary,
        Primary: Primary,
        Middle: Middle,
        'Matric/Secondary': MatricSecondary,
        'Higher secondary/Intermediate/PreUniversity/Senior_secondary':
        HigherSecondaryIntermediatePreUniversitySeniorSecondary,
        'Nontechnical diploma or certificate not equal to degree':
        NontechnicalDiplomaOrDertificateNotEqualToDegree,
        'Technical diploma or certificate not equal to degree':
        TechnicalDiplomaOrCertificateNotEqualToDegree,
        'Graduate&above': Graduateabove,
        Unclassified: Unclassified
    });
      fs.writeFile('../outputdata/educationCategoryJson.json', JSON.stringify(arr, null, 2));
});
