
class StringCalculator {
    // Main function to add numbers in the string
    add(numbers) {
        if (numbers === "") {
            return 0;
        }

        // Handle custom delimiters
        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const delimiterEnd = numbers.indexOf("\n");
            delimiter = new RegExp(numbers.substring(2, delimiterEnd));
            numbers = numbers.substring(delimiterEnd + 1);
        }

        // Split numbers by the delimiter(s)
        const numberArray = numbers.split(delimiter);
        let total = 0;
        let negatives = [];

        for (let num of numberArray) {
            if (num !== "") {
                let parsedNum = parseInt(num);
                if (parsedNum < 0) {
                    negatives.push(parsedNum);
                } else if (parsedNum <= 1000) {
                    total += parsedNum; // Optionally ignore numbers > 1000
                }
            }
        }

        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return total;
    }
}

module.exports = StringCalculator;
