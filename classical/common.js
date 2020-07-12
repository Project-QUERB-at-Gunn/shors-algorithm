// This file contains code that is used by both
// preprocessing.js and postprocessing.js. They both
// have an "import" statement at the top that tells
// the computer to look here first, and load the
// variables we define here.

// These are the parameters. We want to factor the number 15, and our premature guess is 11.
export const k = 11; // Our initial factor guess
export const N = 15; // The number to factor
export const M = 6; // The range of i values for which to compute f(i). A higher M value means a greater chance of accuracy, but it takes longer to compute.
