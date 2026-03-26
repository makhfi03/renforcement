let notes = [12, 8, 15, 6, 18, 9, 14];

let sum = 0;
let max = notes[0];
let min = notes[0];
let moy = 0;

for (let i = 0; i < notes.length; i++) {
    sum += notes[i];

    if (notes[i] > max) {
        max = notes[i];
    }

    if (notes[i] < min) {
        min = notes[i];
    }

    if (notes[i] >= 10) {
        moy++;
    }
}

let moyenne = sum / notes.length;

console.log("Somme: " + sum);
console.log("Moyenne: " + moyenne);
console.log("Note haute : " + max);
console.log("Note basse : " + min);
console.log("Nombre d'élèves ayant la moyenne : " + moy);