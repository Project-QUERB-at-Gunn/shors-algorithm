// These are the parameters. We want to factor the number 15, and our premature guess is 11.
export const k = 11; // Our initial factor guess
export const N = 15; // The number to factor

// Check for divisibility between N and k
// First we define a gcd(x,y) function to find the greatest
// common divisor of two integers by using the classically
// efficient Euclidean algorithm. 
export var gcd = function(x, y) {
    if (y == 0) {
        return x;
    }

    return gcd (y, x % y);
};

console.log(gcd(N, k)); // Print the gcd to determine if our guess, k, is viable

// How long our sequence wants to be. A higher number means a greater chance of success, but it takes longer to compute.
const sequenceLength = 6;

var mods = []; // Makes a list.
for (var i = 0; i < sequenceLength; i++) // Repeat however many times our sample size was, in this case 6.
    mods.push((k**i)%N); // Finds how much more k^i is than a multiple of N, and adds it to the mods list.

document.body.innerHTML = mods.toString(); // Prints the list to the page, for us to see.