const path = require('path');
const unoconv = require('../dist');
const fs = require('fs');

const inputPath = path.resolve('tmp/a.docx');
const outputPath = path.resolve('tmp/1.pdf');

// #1
function testDirectly() {
  unoconv
    .convert(inputPath, outputPath)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
}

// #2
function testOptions() {
  unoconv
    .convert(inputPath, { output: outputPath, format: 'pdf' })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
}

// #3
function testBuffer() {
  unoconv
    .convert(inputPath, { buffer: true, format: 'pdf' })
    .then(buffer => {
      fs.writeFileSync(outputPath, buffer, { encoding: 'utf8' });
      console.log(`File save at ${outputPath}`);
    })
    .catch(err => {
      console.log(err);
    });
}

// testDirectly();
// testOptions();
// testBuffer();
