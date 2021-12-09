// If og Else

let x= 15; // Definerer x til verdi "15"
let y = 10; // Definerer y til verdi "10"

if (x && y >= 10) { // Om variabel x og y begge er 10 eller mer
    console.log("Hallo!") // Print ut "Hallo!"
} else if (x >= 10 || y >= 10) { // Om variabel x eller y er 10 eller mer
    console.log("Hei!") // Print ut "Hei!"
} else if (x && y < 10) { // Om variabel x og y begge er under 10
    console.log("Hade!") // Print ut "Hade!"
} else { // Hvis ingenting over funker
    console.log("Error!") // Print ut "Error!"
}

// Ternary Operator

let tall = 4, mld = ""; // Definerer tall til 4 og mld til undefined
if (tall === 4) { // Om variabel tall er lik 4
  mld = "Riktig!"; // Print ut "Riktig!"
} else { // Hvis ikke
  mld = "Feil!"; // Print ut "Feil!"
}
console.log(mld); // Printer ut resultatet

let tall2 = (tall === 4) ? "Riktig!" : "Feil!"; // Lager en variabel med navn tall2 og sier om variabel tall er lik 4 print ut "Riktig!", hvis ikke print ut "Feil!"
console.log(tall2); // Printer ut resultatet