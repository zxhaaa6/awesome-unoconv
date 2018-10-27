# awesome-unoconv

Node.js wrapper for converting Office files to PDF

[![npm](https://img.shields.io/npm/v/awesome-unoconv.svg?style=flat-square)](http://www.npmjs.com/package/awesome-unoconv)
[![Travis](https://img.shields.io/travis/zxhaaa6/awesome-unoconv.svg?style=flat-square)](https://travis-ci.org/zxhaaa6/awesome-unoconv)
[![npm](https://img.shields.io/npm/l/awesome-unoconv.svg?style=flat-square)](https://github.com/zxhaaa6/awesome-unoconv/blob/master/LICENSE)

## Setup

### Requirement

[Unoconv](http://dag.wieers.com/home-made/unoconv/) is required, which requires [LibreOffice](http://www.libreoffice.org/) (or OpenOffice).

Note that: The latest versions of LibreOffice have a completely different folder structure, so unoconv does not find its dependencies. Tested with `LibreOffice` version [4.2.5](https://downloadarchive.documentfoundation.org/libreoffice/old/4.2.5.2/mac/x86_64/LibreOffice_4.2.5.2_MacOS_x86-64.dmg).

```
$ brew install unoconv
```

Or pull Docker image [unoconv](https://github.com/zxhaaa6/unoconv).

### Installation

```
$ npm install awesome-unoconv
```

## Usage

### 1. Convert document to pdf directly.

```
const path = require('path');
const unoconv = require('awesome-unoconv');

const sourceFilePath = path.resolve('./myDoc.docx');
const outputFilePath = path.resolve('./myDoc.pdf');

unoconv
  .convert(sourceFilePath, outputFilePath)
  .then(result => {
    console.log(result); // return outputFilePath
  })
  .catch(err => {
    console.log(err);
  });
```

### 2. Convert document to pdf or html with options.

```
const path = require('path');
const unoconv = require('awesome-unoconv');

const sourceFilePath = path.resolve('./myDoc.docx');
const outputFilePath = path.resolve('./myDoc.pdf'); // or 'myDoc.html'

unoconv
  .convert(inputPath, { output: outputPath, format: 'pdf' })  // or format: 'html'
  .then(result => {
    console.log(result); // return outputFilePath
  })
  .catch(err => {
    console.log(err);
  });
```

### 3. Convert document to Buffer.

```
const fs = require('fs');
const path = require('path');
const unoconv = require('awesome-unoconv');

const sourceFilePath = path.resolve('./myDoc.docx');
const outputFilePath = path.resolve('./myDoc.pdf'); // or 'myDoc.html'

unoconv
  .convert(inputPath, { buffer: true, format: 'pdf' })  // or format: 'html'
  .then(buffer => {
    // return Buffer
    fs.writeFileSync(outputPath, buffer, { encoding: 'utf8' });
    console.log(`File save at ${outputPath}`);
  })
  .catch(err => {
    console.log(err);
  });
```

## Test
There is a test case inside test folder.
