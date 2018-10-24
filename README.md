# awesome-unoconv

Node.js wrapper for converting Office files to PDF

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

Convert document to pdf with input and output.
```
const path = require('path');
const unoconv = require('awesome-unoconv');

const sourceFilePath = path.resolve('./myDoc.docx');
const outputFilePath = path.resolve('./myDoc.pdf');

unoconv
  .convert(sourceFilePath, outputFilePath)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```
