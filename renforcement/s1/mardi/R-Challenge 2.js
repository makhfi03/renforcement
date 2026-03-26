let ventes = [
    { mois: "Janvier", chiffre_affaire: 1000, nb_clients: 120, ville: "Casablanca" },
    { mois: "Fevrier", chiffre_affaire: 2000, nb_clients: 180, ville: "Rabat" },
    { mois: "Mars", chiffre_affaire: 65000, nb_clients: 140, ville: "Marrakech" },
    { mois: "Avril", chiffre_affaire: 1500, nb_clients: 130, ville: "Casablanca" },
    { mois: "Mai", chiffre_affaire: 90000, nb_clients: 150, ville: "Tanger" },
    { mois: "Juin", chiffre_affaire: 10200, nb_clients: 200, ville: "Rabat" },
    { mois: "Juillet", chiffre_affaire: 2500, nb_clients: 160, ville: "Casablanca" },
    { mois: "Aout", chiffre_affaire: 5050, nb_clients: 110, ville: "Marrakech" },
    { mois: "Septembre", chiffre_affaire: 9000, nb_clients: 260, ville: "Rabat" },
    { mois: "Octobre", chiffre_affaire: 1500, nb_clients: 300, ville: "Casablanca" },
    { mois: "Novembre", chiffre_affaire: 60500, nb_clients: 450, ville: "Casablanca" },
    { mois: "Decembre", chiffre_affaire: 2000, nb_clients: 190, ville: "Casablanca" }
];

// total
let total= 0;

for (let i=0; i<ventes.length; i++) {
    total += ventes[i].chiffre_affaire;
}
console.log("total :", total);

// moyen par mois
let moyenne= total/ventes.length;
console.log("moyen :", moyenne);

// le meilleur chiffre d'affaires
let meilleur= ventes[0];

for (let i=1; i<ventes.length; i++) {
    if (ventes[i].chiffre_affaire > meilleur.chiffre_affaire) {
        meilleur=ventes[i];
    }
}
console.log("meilleur mois:", meilleur);

// mois avec moins de client
let moinsClient= ventes[0];

for (let i=1; i<ventes.length; i++) {
    if (ventes[i].nb_clients < moinsClient.nb_clients) {
        moinsClient=ventes[i];
    }
}
console.log("meilleur mois:", moinsClient);

// mois ou le CA dépasse 50 000€
let depasse = [];

for (let i = 0; i < ventes.length; i++) {
    if (ventes[i].chiffre_affaire > 50000) {
        depasse.push(ventes[i]);
    }
}
console.log("Mois > 50000 :", depasse);

// résumé par ville


// trie
ventes.sort(function(a, b) {
    return b.chiffre_affaire - a.chiffre_affaire;
});
console.log("Trie:", ventes);

// croissance entre chaque mois