// Scope

// Block Scope

{
    let x = 2; // Definerer variabel x med verdi 2 inne i en block
}
console.log(x);

// Local Scope

function minFunksjon() {
    let bilnavn = "BMW"; // Kan bare bli brukt (ses) inne i funksjonen
}
console.log(bilnavn);

// Function Scope

function minFunksjon() {
    var bilnavn = "BMW"; // var
}
function minFunksjon() {
    let bilnavn = "BMW"; // let
}
function minFunksjon() {
    const bilnavn = "BMW"; // const
}

// Global JavaScript Variables

let bilnavn = "BMW"; // Global variabel som kan brukes i hele koden
function minFunksjon() {
    // bilnavn kan bli brukt her også
}

// Global Scope

var x = 2; // var
let x = 2;  // let
const x = 2; // const