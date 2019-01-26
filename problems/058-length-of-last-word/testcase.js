
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: ['Hello World'],
        output: 5
    },
    {
        input: [' '],
        output: 0
    },
    {
        input: ['a '],
        output: 1
    },
    {
        input: ['Today is a nice day'],
        output: 3
    }
];

describe('058-length-of-last-word', () => {
    it('testcase should be equals', () => {
        testCases.forEach(testcase => {
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});