let etudiants = [
    { nom: "ghita", prenom: "makhfi", age: 23, moyenne: 17 },
    { nom: "Ali", prenom: "Yassine", age: 20, moyenne: 11 },
    { nom: "Fatima", prenom: "ben", age: 23, moyenne: 13 },
    { nom: "mohammed", prenom: "Amine", age: 19, moyenne: 10 },
    { nom: "leila", prenom: "leila", age: 21, moyenne: 15 },
    { nom: "Zahra", prenom: "Imane", age: 24, moyenne: 12 }
];

// Étudiants ≥ 12

for (let i = 0; i < etudiants.length; i++) {
    if (etudiants[i].moyenne >= 12) {
        console.log(etudiants[i].prenom + " " + etudiants[i].nom + " - Moyenne: " + etudiants[i].moyenne);
    }
}

// Tri par âge

etudiants.sort(function(a, b) {
    return a.age - b.age;
});

for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i].prenom + " " + etudiants[i].nom + " - Âge: " + etudiants[i].age);
}

// Recherche d'un étudiant

let nomRecherche = "ghita";
let find = false;

for (let i = 0; i < etudiants.length; i++) {
    if (etudiants[i].nom === nomRecherche) {
        console.log(etudiants[i]);
        find = true;
        break;
    }
}

if (!find) {
    console.log("non trouve");
}