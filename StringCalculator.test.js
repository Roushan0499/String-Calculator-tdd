
const StringCalculator = require('./StringCalculator');
const assert = require('assert');

// Test suite for the StringCalculator
describe('StringCalculator', function () {
    let calculator;

    beforeEach(function () {
        calculator = new StringCalculator();
    });

    it('should return 0 for an empty string', function () {
        assert.strictEqual(calculator.add(""), 0);
    });

    it('should return the number itself when a single number is provided', function () {
        assert.strictEqual(calculator.add("1"), 1);
    });

    it('should return the sum of two numbers', function () {
        assert.strictEqual(calculator.add("1,2"), 3);
    });

    it('should handle newlines as valid delimiters', function () {
        assert.strictEqual(calculator.add("1\n2,3"), 6);
    });

    it('should support custom delimiters specified in the format //delimiter\n', function () {
        assert.strictEqual(calculator.add("//;\n1;2"), 3);
    });

    it('should throw an error when negatives are included', function () {
        assert.throws(() => calculator.add("1,-2,-3"), /negative numbers not allowed: -2, -3/);
    });

    it('should ignore numbers larger than 1000', function () {
        assert.strictEqual(calculator.add("2,1001"), 2);
    });
});
