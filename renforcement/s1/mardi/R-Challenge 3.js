let avis = [
    { pseudo: "ghita", note: 5, commentaire: "Excellent", date: "2025-01-10" },
    { pseudo: "Sara", note: 4, commentaire: "Tres bon plat", date: "2025-02-15" },
    { pseudo: "nom2", note: 2, commentaire: "Pas terrible", date: "2025-01-20" },
    { pseudo: "nom3", note: 3, commentaire: "Correct", date: "2025-03-01" },
    { pseudo: "nom4", note: 1, commentaire: "Mauvais", date: "2025-02-01" },
    { pseudo: "nom5", note: 5, commentaire: "J’adore", date: "2025-03-10" },
    { pseudo: "nom6", note: 1, commentaire: "pas bien", date: "2026-02-28" },
    { pseudo: "nom7", note: 2, commentaire: "pas assez bien", date: "2026-01-05" },
    { pseudo: "nom8", note: 3, commentaire: "Ça passe", date: "2026-03-12" },
    { pseudo: "nom9", note: 5, commentaire: "Parfait", date: "2026-02-18" },
    { pseudo: "nom10", note: 4, commentaire: "Bon plat", date: "2026-01-25" },
    { pseudo: "nom11", note: 5, commentaire: "J’aime pas", date: "2026-02-05" },
    { pseudo: "nom12", note: 3, commentaire: "Moyen", date: "2026-03-03" },
    { pseudo: "nom13", note: 1, commentaire: "facile", date: "2026-03-15" },
    { pseudo: "nom14", note: 4, commentaire: "satisfaisant", date: "2026-02-22" }
];

// note moyenne
let total = 0;

for (let i = 0; i < avis.length; i++) {
    total += avis[i].note;
}
// console.log(total);


// combien d'avis par note
let compte = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
};

for (let i = 0; i < avis.length; i++) {
    let note = avis[i].note;
    compte[note]++;
}
console.log("Nombre par note :", compte);

// Filtre les avis positifs (≥ 4) et les avis négatifs (≤ 2)
let positif = [];
let negatif = [];

for (let i = 0; i < avis.length; i++) {
    if (avis[i].note >= 4) {
        positif.push(avis[i]);
    } else if (avis[i].note <= 2) {
        negatif.push(avis[i]);
    }
}

console.log("Positif :", positif.length);
console.log("Négatif :", negatif.length);

// Trie les avis du plus récent au plus ancien
avis.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
});
console.log("Trie:", avis);

// l'avis le plus long
let longComment = avis[0];

for (i = 1; i < avis.length; i++) {
    if (avis[i].commentaire.length > longComment.commentaire.length) {
        longComment = avis[i];
    }
}
console.log(longComment);

// resume : "4.2/5 base sur 15 avis — 8 positifs, 3 negatifs, 4 neutres"
