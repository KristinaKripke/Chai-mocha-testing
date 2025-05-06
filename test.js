import { assert, expect } from "chai";

import { 
    isEven,
    isEmptyString,
    checkNumber,
    startsWithCapital,
    maxOfTwo,
    getFirstElement,
    arrayLength,
    hasElements,
    toLowerCase,
    joinStrings,
    areEqualIgnoreCase,
    // containsNumber,
    countOccurrences,
    // filterGreaterThanTen,
    // filterLongWords,
    joinArray,
    // reverseArray,
    isInteger,
    // endsWithWord,
    squareRoot,
} from "./script.js";

    describe('isEven', () => {
        it('should return true for even numbers', () => {
            expect(isEven(4)).to.equal(true);
        });
        it('should return false for odd numbers', () => {
            expect(isEven(5)).to.equal(false);
        });
        it('should return true for zero', () => {
            expect(isEven(0)).to.equal(true);
        });
        it('should return false for string', () => {
            expect(isEven('one')).to.equal(false);
        });
        it('should return true for negative even numbers', () => {
            expect(isEven(-8)).to.equal(true);
        });
        it('should return false for negative odd numbers', () => {
            expect(isEven(-9)).to.equal(false);
        });
        it('should return false for numbers with decimal values', () => {
            expect(isEven(8.4)).to.equal(false);
        });
        it('should return false for negative numbers with decimal values', () => {
            expect(isEven(-7.4)).to.equal(false);
        });
        it('should return false for void function', () => {
            expect(isEven()).to.equal(false);
        });
        it('should return false for boolean', () => {
            expect(isEven(true)).to.equal(false);
        });
        it('should return true for boolean', () => {
            expect(isEven(false)).to.equal(true);
        });
        it('should return true for empty array', () => {
            expect(isEven([])).to.equal(true);
        }); 
        it('should return true for array with 0', () => {
            expect(isEven([0])).to.equal(true);
        }); 
        it('should return true for array with even numbers', () => {
            expect(isEven([4])).to.equal(true);
        }); 
        it('should return false for negative numbers', () => {
            expect(isEven([-3])).to.equal(false);
        });
        it('should return true for null', () => {
            expect(isEven(null)).to.equal(true);
        });
    });

    describe('isEmptyString', () => {
        it('should return true for empty string', () => {
            expect(isEmptyString('')).to.equal(true);
        });
        it('should return false for non-empty string', () => {
            expect(isEmptyString('labas')).to.equal(false);
        });
        it('should return false for numbers', () => {
            expect(isEmptyString(23)).to.equal(false);
        });
        it('should return false for array', () => {
            expect(isEmptyString(['labas'])).to.equal(false);
        });
        it('should return false for string with space', () => {
            expect(isEmptyString(' ')).to.equal(false);
        });
        it('should return false for void function', () => {
            expect(isEmptyString()).to.equal(false);
        });
        it('should return false for boolean', () => {
            expect(isEmptyString(true)).to.equal(false);
        });
        it('should return false for boolean', () => {
            expect(isEmptyString(false)).to.equal(false);
        });
    })

    describe('checkNumber', () => {
        it('should return positive for numbers higher than 0', () => {
            expect(checkNumber(1)).to.equal('positive');
        });
        it('should return negative for numbers lower than 0', () => {
            expect(checkNumber(-1)).to.equal('negative');
        });
        it('should return zero for 0', () => {
            expect(checkNumber(0)).to.equal('zero');
        });
        it('should return positive for decimal numbers higher than 0', () => {
            expect(checkNumber(23.56)).to.equal('positive');
        });
        it('should return negative for decimal numbers lower than 0', () => {
            expect(checkNumber(-45.77)).to.equal('negative');
        });
        it('should return zero for string', () => {
            expect(checkNumber('du')).to.equal('zero');
        }); 
        it('should return positive for positive numbers in array', () => {
            expect(checkNumber([2])).to.equal('positive');
        });
        it('should return positive for true', () => {
            expect(checkNumber(true)).to.equal('positive');
        }); 
        it('should return zero for false', () => {
            expect(checkNumber(false)).to.equal('zero');
        });
    })

    describe('startsWithCapital', () => {
        it('should return true if string starts with a capital letter', () => {
            expect(startsWithCapital('Labas')).to.equal(true);
        });
        it('should return false if string starts with a lower letter', () => {
            expect(startsWithCapital('labas')).to.equal(false);
        });
        it('should return false for array', () => {
            expect(startsWithCapital(['Labas'])).to.equal(false);
        });
        it('should return true if string starts with a number', () => {
            expect(startsWithCapital('1Labas')).to.equal(true);
        });
        it('should return true if string starts with a symbol', () => {
            expect(startsWithCapital('.Labas')).to.equal(true);
        }); 
        it('should return false for an empty string', () => {
            expect(startsWithCapital('')).to.equal(false);
        });
        it('should return false for void function', () => {
            expect(startsWithCapital()).to.equal(false);
        });
        /* it('should return undefined for numbers', () => {
            expect(startsWithCapital(3)).to.equal(undefined);
        });*/
        // doesn't work with boolean values
    })

    describe('maxOfTwo', () => {
        it('should return a if a is higher than b', () => {
            expect(maxOfTwo(5, 2)).to.equal(5);
        });
        it('should return b if b is higher than a', () => {
            expect(maxOfTwo(2, 7)).to.equal(7);
        });
        it('should return a if a equals b', () => {
            expect(maxOfTwo(5, 5)).to.equal(5);
        });
        it('should return b if b is higher than a with negative values', () => {
            expect(maxOfTwo(-2, -7)).to.equal(-2);
        });
        it('should return a if a is higher than b', () => {
            expect(maxOfTwo(Infinity, 2)).to.equal(Infinity);
        });
        it('should return a if a equals b', () => {
            expect(maxOfTwo(Infinity, Infinity)).to.equal(Infinity);
        });
        it('should return undefined if one parameter is empty', () => {
            expect(maxOfTwo(2)).to.equal(undefined);
        });
        it('should return undefined if parameters are empty', () => {
            expect(maxOfTwo()).to.equal(undefined);
        });
        /* it('should return a if a is higher than b in seperate arrays', () => {
            expect(maxOfTwo([5], [2])).to.equal([5]);
        }); */ 
        /* it('should return b if b is higher than a in seperate arrays', () => {
            expect(maxOfTwo([5], [9])).to.equal([9]);
        }); */
        it('should return a if a is higher than b in a string', () => {
            expect(maxOfTwo('5', '2')).to.equal('5');
        }); 
        it('should return b if b is higher than 1 in a string', () => {
            expect(maxOfTwo('5', '9')).to.equal('9');
        }); 
        it('should return true if one of or both values are true', () => {
            expect(maxOfTwo(true, false)).to.equal(true);
            expect(maxOfTwo(true, true)).to.equal(true);
            expect(maxOfTwo(false, true)).to.equal(true);
        }); 
        it('should return false if both values are false', () => {
            expect(maxOfTwo(false, false)).to.equal(false);
        });
    })

    describe('getFirstElement', () => {
        it('should return 1st array element', () => {
            expect(getFirstElement(['labas', 12])).to.equal('labas');
        });
        /* it('should return 1st array element', () => {
            expect(getFirstElement([[1, 5], [2, 6]])).to.equal([1, 5]);
        }); */
        it('should return undefined for empty array', () => {
            expect(getFirstElement([])).to.equal(undefined);
        });
        it('should return undefined for numbers', () => {
            expect(getFirstElement(0, 5)).to.equal(undefined);
        });
        it('should return string content for string', () => {
            expect(getFirstElement('0', 'labas')).to.equal('0');
        });
        it('should return undefined for boolean values', () => {
            expect(getFirstElement(true, false)).to.equal(undefined);
        });
    })

describe('arrayLength', () => {
        it('should return array length for an array of numbers', () => {
            expect(arrayLength([2, 4, 5, 6])).to.equal(4);
        });
        it('should return array length for an array of strings', () => {
            expect(arrayLength(['1, 4, 5, 7', '4', '4'])).to.equal(3);
        });
        it('should return array length for an array of arrays', () => {
            expect(arrayLength([[4], ['du'], [34]])).to.equal(3);
        });
        it('should return 0 length for an empty array', () => {
            expect(arrayLength([])).to.equal(0);
        });
        it('should return the length of first string for strings', () => {
            expect(arrayLength('labas', 'rytas')).to.equal(5);
        });
        it('should return undefined for numbers', () => {
            expect(arrayLength(3, 4)).to.equal(undefined);
        });
        it('should return undefined for boolean values', () => {
            expect(arrayLength(true)).to.equal(undefined);
        });
    })

describe('hasElements', () => {
    it('should return true if array has elements', () => {
        expect(hasElements([3, 5])).to.equal(true);
    });
    it('should return false if array has no elements', () => {
        expect(hasElements([])).to.equal(false);
    });
    it('should return true for string', () => {
        expect(hasElements('labas')).to.equal(true); // should not return true
    });
    it('should return false for an empty string', () => {
        expect(hasElements('')).to.equal(false);
    });
    it('should return false for numbers', () => {
        expect(hasElements(4)).to.equal(false);
    });
    it('should return false for boolean values', () => {
        expect(hasElements(true)).to.equal(false);
    });
})

describe('toLowerCase', () => {
    it('should return lower case string for string with uppercase characters', () => {
        expect(toLowerCase('LABAS RYTAS')).to.equal('labas rytas');
    });
    it('should return lower case string for string including uppercase characters', () => {
        expect(toLowerCase('LaBaS RyTaS')).to.equal('labas rytas');
    });
    it('should return empty string for empty string', () => {
        expect(toLowerCase('')).to.equal('');
    });
    // doesn´t deal with numbers, arrays or booloean values
})

describe('joinStrings', () => {
    it('should return joined strings', () => {
        expect(joinStrings('labas', 'rytas')).to.equal('labasrytas');
    });
    it('should return only the first two joined strings', () => {
        expect(joinStrings('labas', 'rytas', 'Lietuva!')).to.equal('labasrytas');
    });
    it('should return the value of the first and undefined if there is only one value defined in the function', () => {
        expect(joinStrings('labas')).to.equal('labasundefined');
    });
    it('should return first string and number joined', () => {
        expect(joinStrings('2', 3)).to.equal('23');
    });
    it('should return numbers joined for numbers in strings', () => {
        expect(joinStrings('2', '3')).to.equal('23');
    });
    it('should return undefined for an empty string', () => {
        expect(joinStrings('')).to.equal('undefined');
    });
    it('should return strings joined and undefined for array with strings', () => {
        expect(joinStrings(['labas', 'rytas'])).to.equal('labas,rytasundefined');
    });
    it('should return undefined for an empty array', () => {
        expect(joinStrings([])).to.equal('undefined');
    });
    it('should return added numbers for numbers', () => {
        expect(joinStrings(2, 5)).to.equal(7);
    });
    /* it('should return NaN for one number in the function', () => {
        expect(joinStrings(3)).to.equal('NaN')
    }); */
    it('should return number of boolean values', () => {
        expect(joinStrings(true, true)).to.equal(2);
    });
    it('should return number of boolean values', () => {
        expect(joinStrings(false, true)).to.equal(1);
    });
})

describe('areEqualIgnoreCase', () => {
    it('should return true for same strings despite case', () => {
        expect(areEqualIgnoreCase('labas', 'LABAS')).to.equal(true);
    });
    it('should return false for different strings', () => {
        expect(areEqualIgnoreCase('labas', 'rytas')).to.equal(false);
    });
    it('should return true for empty strings', () => {
        expect(areEqualIgnoreCase('', '')).to.equal(true);
    });
    it('should return true for same strings with numbers', () => {
        expect(areEqualIgnoreCase('123', '123')).to.equal(true);
    });
    // doesn't work with boolean values, numbers, arrays
})

describe('countOccurrences', () => {
    it('should return the number of occurances of a given number value in an array', () => {
        expect(countOccurrences([1, 3, 5, 6, 1, 1], 1)).to.equal(3);
    });
    it('should return 0 if the number is not in the array', () => {
        expect(countOccurrences([1, 3, 5, 6, 1, 1], 8)).to.equal(0);
    });
    it('should return 0 if the value is string', () => {
        expect(countOccurrences([1, 3, 5, 6, 1, 1], '1')).to.equal(0);
    });
    it('should return the number of occurances of a given string value in an array', () => {
        expect(countOccurrences(['labas', 'labas', 'rytas'], 'labas')).to.equal(2);
    });
    it('should return 0 if the value is not in the array', () => {
        expect(countOccurrences(['labas', 'labas', 'rytas'], 'tu')).to.equal(0);
    });
    it('should return the number of boolean value occurances in the array', () => {
        expect(countOccurrences([true, true, true, false], true)).to.equal(3);
    });
    // doesn't work with numbers, strings or boolean values outside of array
})

/* describe('filerGreaterThanTen', () => {
    it('should return values greater than ten', () => {
        expect(filterGreaterThanTen([2, 6, 22, 87])).to.equal([22, 87]);
    });
    it('should return values greater than ten in strings', () => {
        expect(filterGreaterThanTen(['2', '6', '22', '87'])).to.equal(['22', '87']);
    });
    it('should return an empty array for non-number string values', () => {
        expect(filterGreaterThanTen(['labas', 'rytas'])).to.equal([]);
    }); 
    it('should return an empty array for boolean values', () => {
        expect(filterGreaterThanTen([true, true, false])).to.equal([]);
    });
    //does't work with numbers and strings 
}) */

/* describe('filerLongWords', () => {
}) */

describe('joinArray', () => {
    it('should return joined values in an array of strings', () => {
        expect(joinArray(['labas', 'rytas'])).to.equal('labas,rytas');
    });
    it('should return joined values only from the first array', () => {
        expect(joinArray(['labas', 'rytas'], ['Lietuva!'])).to.equal('labas,rytas');
    });
    it('should return joined values in an array of numbers', () => {
        expect(joinArray([1, 3, 5, 6])).to.equal('1,3,5,6');
    });
    it('should return joined values in an array of boolean values', () => {
        expect(joinArray([true, true, false])).to.equal('true,true,false');
    });
    // doesn't work with strings, numbers and boolean values
})

/* describe('reverseArray', () => {
    it('should return reversed array', () => {
        expect(reverseArray(['labas', 'rytas'])).to.equal(['rytas', 'labas']);
    });
    it('should return reversed array', () => {
        expect(reverseArray([1, 2])).to.equal([2, 1]);
    });
    it('should return reversed array', () => {
        expect(reverseArray([true, false])).to.equal([false, true]);
    });
    // doesn't work with strings, numbers and boolean values
}) */

describe('isInteger', () => {
    it('should return true for integer numbers', () => {
        expect(isInteger(45)).to.equal(true);
    });
    it('should return false for decimal numbers', () => {
        expect(isInteger(45.48)).to.equal(false);
    });
    it('should return false for strings', () => {
        expect(isInteger('23')).to.equal(false);
    });
    it('should return false for arrays', () => {
        expect(isInteger([23])).to.equal(false);
    });
    it('should return false for boolean values', () => {
        expect(isInteger(true)).to.equal(false);
    });
})

/* describe('endsWithWord', () => {
    it('should return true if a string ends with a word', () => {
        expect(endsWithWord('5 kartus labas')).to.equal(true);
    });
}) */

describe('squareRoot', () => {
    it('should return square root of an integer number', () => {
        expect(squareRoot(25)).to.equal(5);
    });
    /* it('should return NaN for a negative number', () => {
        expect(squareRoot(-25)).to.equal(NaN);
    }); */
    it('should return square root of a decimal number', () => {
        expect(squareRoot(25.5)).to.equal(5.049752469181039);
    });
    it('should return square root of an integer number in a string', () => {
        expect(squareRoot('25')).to.equal(5);
    });
    it('should return square root of an integer number in an array', () => {
        expect(squareRoot([25])).to.equal(5);
    });
    it('should return 1 for a true', () => {
        expect(squareRoot(true)).to.equal(1);
    });
    it('should return 0 for a false', () => {
        expect(squareRoot(false)).to.equal(0);
    });
    it('should return Infinity for Infinity', () => {
        expect(squareRoot(Infinity)).to.equal(Infinity);
    });
})