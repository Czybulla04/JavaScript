// Funksjon

// Trekant

function trekant(høyde, bredde) { // Lager funksjonen trekant og gir den høyde og bredde som parameters
    return (høyde * bredde) / 2; // Funksjonen returnerer (høyde * bredde) / 2
}
let arealTrekant = trekant(7, 9); // Definerer arealTrekant til verdi trekant(7, 9). Trekant(7, 9) er parameterne som blir sendt inn til funksjonen
console.log("Trekanten har et areal på " + arealTrekant + " Meter i 2"); // Printer ut resultatet

// Firkant

function firkant(høyde, bredde) { // Lager funksjonen firkant og gir den høyde og bredde som parameters
    return høyde * bredde; // Funksjonen returnerer høyde * bredde
}
let arealFirkant = firkant(5, 8); // Definerer arealFirkant til verdi firkant(5, 8). Firkant(5, 8) er parameterne som blir sendt inn til funksjonen
console.log("Firkanten har et areal på " + arealFirkant + " Meter i 2"); // Printer ut resultatet
 
// Trekant + Firkant

function summer(arealTrekant, arealFirkant) { // Lager funksjonen summer og gir den arealTrekant og arealFirkant som parameters
    return arealTrekant + arealFirkant; // Funksjonen returnerer arealTrekant + arealFirkant
}
let sum = summer(arealTrekant, arealFirkant); // Definerer summer til verdi arealTrekant + arealFirkant. arealTrekant + arealFirkant er parameterne som blir sendt inn til funksjonen
console.log("Trekanten og firkanten sitt areal sammen blir " + sum + " Meter i 2"); // Printer ut resultatet