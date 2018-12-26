



const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: [[2, 7, 11, 15], 9],
        output: [0, 1],
    },
    {
        input: [[3, 2, 4], 6],
        output: [1, 2],
    },
    {
        input: [[0, 4, 3, 0], 0],
        output: [0, 3],
    },
];


describe('001-two-sum', () => {
    it('testcase should be', () => {
        testCases.forEach(testcase => {
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        })
    });
})