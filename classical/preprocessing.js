// BEFORE QUANTUM ALGORITHM IS EXECUTED
import { N, k, M } from './common'; // See common.js for more info.

var mods = []; // Makes a list.
for (var i = 0; i < M; i++) // Repeat however many times our sample size was, in this case 6.
    mods.push((k**i)%N); // Finds how much more k^i is than a multiple of N, and adds it to the mods list.

console.log(mods.toString()); // Prints the list to the console.
