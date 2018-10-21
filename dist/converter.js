"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = convert;

var _fs = require("fs");

var _child_process = require("child_process");

function convert(inputPath, outputPath) {
  return new Promise(function (resolve, reject) {
    var writerStream = (0, _fs.createWriteStream)(outputPath);
    var stderr = [];
    var unoconv = (0, _child_process.spawn)('unoconv', ['-f', 'pdf', '--stdout', inputPath]);
    unoconv.on('error', function (err) {
      if (err.message.indexOf('ENOENT') > -1) {
        console.error('unoconv command not found');
      }

      return reject(err);
    });
    unoconv.stdout.pipe(writerStream);
    unoconv.stderr.on('data', function (data) {
      stderr.push(data);
    });
    unoconv.on('close', function (code) {
      if (stderr.length) {
        return reject(new Error(Buffer.concat(stderr).toString('utf8')));
      }

      resolve();
    });
  });
}