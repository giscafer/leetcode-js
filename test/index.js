
const exec = require('child_process').exec;
const glob = require('glob');
const path = require('path');

const problems = glob.sync(path.resolve(__dirname, '../problems/*'));

problems.forEach((dirPath) => {
    const testcasePath = path.join(dirPath, 'testcase.js');
    exec(`mocha ${testcasePath}`, (status, output) => {
        console.log(output);
    });
});
