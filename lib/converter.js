import { createWriteStream } from 'fs';
import { spawn } from 'child_process';

function convert(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const writerStream = createWriteStream(outputPath);

    const stderr = [];
    const unoconv = spawn('unoconv', ['-f', 'pdf', '--stdout', inputPath]);

    unoconv.on('error', err => {
      if (err.message.indexOf('ENOENT') > -1) {
        console.error('unoconv command not found');
      }
      return reject(err);
    });

    unoconv.stdout.pipe(writerStream);

    unoconv.stderr.on('data', data => {
      stderr.push(data);
    });

    unoconv.on('close', code => {
      if (stderr.length) {
        return reject(new Error(Buffer.concat(stderr).toString('utf8')));
      }
      resolve();
    });
  });
}

export { convert };
