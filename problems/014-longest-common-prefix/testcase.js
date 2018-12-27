
const assert = require('assert');
const program = require('./index');

const testCases = [
    {
        input: [['flower', 'flow', 'flight']],
        output: 'fl'
    },
    {
        input: [['dog', 'racecar', 'car']],
        output: ''
    },
    {
        input: [['dog12', 'dogcar', 'dog']],
        output: 'dog'
    },
    {
        input: [[]],
        output: ''
    },
    {
        input: [['dog12', '', 'dog']],
        output: ''
    },
    {
        input: [['d']],
        output: 'd'
    },
    {
        input: [['d', 'd']],
        output: 'd'
    },
    {
        input: [['da', 'da']],
        output: 'da'
    },
    {
        input: [['a', 'b']],
        output: ''
    }
];

describe('014-longest-common-prefix', () => {
    it('testcase should be equals', () => {
        testCases.forEach(testcase => {
            assert.deepEqual(program.apply(null, testcase.input), testcase.output);
        });
    });
});