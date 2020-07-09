const k = 11; // Our premature guess
const N = 15; // The number to factor

// How long our sequence wants to be. A higher number means a greater chance of success, but it takes longer to compute.
const M = 6;

var mods = []; // Makes a list.
for (var i = 0; i < M; i++) // Repeat however many times our sample size was, in this case 6.
    mods.push((k**i)%N); // Finds how much more k^i is than a multiple of N, and adds it to the mods list.

document.body.innerHTML = mods.toString(); // Prints the list to the page, for us to see.
