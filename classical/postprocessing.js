// AFTER OUR QUANTUM ALGORITHM IS EXECUTED
import { N, k, M } from './common';

// Check for divisibility between N and k
// First we define a gcd(x,y) function to find the greatest
// common divisor of two integers by using the classically
// efficient Euclidean algorithm. 
function gcd(x, y) {
    if (y == 0) {
        return x;
    }
    return gcd (y, x % y); // x % y = x mod y = the remainder from x/y
};

function multiGcd(values) {
    var currentGcd = values[0]; // values[0] is the first value
    
    for (var h = 1; h < values.length; h++) // Repeat for values[1] through the last element.
        currentGcd = gcd(currentGcd, values[h]); // Accumulate a GCD for the entire list.
    
    return currentGcd; // currentGcd is now the result, because it is a common GCD among all values in the list.
}

// The results returned by the quantum computer is defined
const results = []; // TBD. Not yet found.
const L = multiGcd(results); // Find the GCD of every element in the results list, and call that value L.
const p = M/L; // p=M/L.

// Define what factors are divisible by N = 15
const divs = {
    first: ((k ** (p/2)) - 1),
    second: ((k ** (p/2)) + 1)
};

console.log("N = 15 divdes ", divs.first, "*", divs.second);

// Calculating our final resulting factors by dividing divs.first and divs.second by N
const factors = {
    first: gcd(N, divs.first),
    second: gcd(N, divs.second)
};

console.log("Our desired factors: ", factors.first, ", ", factors.second, "!");
