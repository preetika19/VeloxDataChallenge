
const { doesNotReject } = require('assert');
const { step1, step2, step3 } = require('./script.js');

describe('step1 function', () => {
    it('should return the correct object with counts of unique items', () => {
        const input = ['1', '2', '3', '4', 'hello', '1', '2', 'hello'];
        const output = step1(input);
        expect(output).toEqual({
            '1': 2,
            '2': 2,
            '3': 1,
            '4': 1,
            'hello': 2,
        });
    });
});
  
describe('step2 function', () => {
    it('should return the correct object with indices of matching items', () => {
        const input = ['1', '2', '3', '4', 'hello', '1', '2', 'hello'];
        const output = step2(input);
        expect(output).toEqual({
            '1': [0, 5],
            '2': [1, 6],
            '3': [2],
            '4': [3],
            'hello': [4, 7],
        });
    });
});
  
describe('step3 function', () => {
    it('should return the correct combined object', () => {
        const step1Output = {
            '1': 2,
            '2': 2,
            '3': 1,
            '4': 1,
            'hello': 2,
        };
        const step2Output = {
            '1': [0, 5],
            '2': [1, 6],
            '3': [2],
            '4': [3],
            'hello': [4, 7],
        };
        const output = step3(step1Output, step2Output);
        expect(output).toEqual({
            '1': { count: 2, indices: [0, 5] },
            '2': { count: 2, indices: [1, 6] },
            '3': { count: 1, indices: [2] },
            '4': { count: 1, indices: [3] },
            'hello': { count: 2, indices: [4, 7] },
        });
    });
});


// All test cases pass successfully but I get an warning:  Cannot log after tests are done. Did you forget to wait for something async in your test?
// This is because I am calling console.log right after the tests are completed. This is common in Jest.
// I am not completely sure how to debug this issue but my tests are working! 
