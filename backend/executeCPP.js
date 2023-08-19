// const fs = require('fs');
// const { exec } = require('child_process');
// const path = require('path');
// const { v4: uuid } = require('uuid');
// const { rejects } = require('assert');
// const { error } = require('console');
// const { stdout } = require('process');

// const outputPath = path.join(__dirname, 'outputs');

// if (!fs.existsSync(outputPath)) {
//     fs.mkdirSync(outputPath, { recursive: true });
// }

// const executeCpp = (filePath) => {
//     const jobId = path.basename(filePath).split(".")[0];
//     const outPath = path.join(outputPath, `${jobId}.exe`)
//     return new Promise((resolve, reject) => {
//         exec(
//             `g++ ${filePath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe`,
//             (error, stdout, stderr) => {
//                 if (error) {
//                     reject({ error, stderr });
//                 }
//                 if (stderr) {
//                     reject(stderr);
//                 }
//                 resolve(stdout);
//             }
//         );
//     })
// }

// module.exports = {
//     executeCpp,
// }

const { exec } = require("child_process");
const path = require("path");
const { stdout, stderr } = require("process");
const { v4: uuid } = require('uuid');
const { reject } = require('assert');
const fs = require('fs');

const outputPath = path.join(__dirname, "codes");

const executeCpp = (filepath) => {
  const jobId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.exe`);
  
  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filepath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe < input.txt`,
      (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
        }
        if (stderr) {
          reject(stderr);
        }
        resolve(stdout);
      }
    );
  });
};

module.exports = { executeCpp };

