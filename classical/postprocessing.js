// AFTER OUR QUANTUM ALGORITHM IS EXECUTED

import { N, k, M } from './common';

// Our period returned by the quantum computer is defined
const p = 2;

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
