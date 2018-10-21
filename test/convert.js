const path = require('path');
const unoconv = require('../dist');

const input = path.resolve('tmp/1.docx');
const output = path.resolve('tmp/1.pdf');

unoconv
  .convert(input, output)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
