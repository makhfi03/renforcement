let articles = [
    {nom : "art1", quantite: 2, prix: 1.5},
    {nom : "art2", quantite: 1, prix: 2.5},
    {nom : "art3", quantite: 4, prix: 10.5},
    {nom : "art4", quantite: 5, prix: 11},
    {nom : "art5", quantite: 2, prix: 15},
];

let sousTotal = 0;

for(let i=0; i<articles.length; i++){
    let article = articles[i];
    let total = article.quantite * article.prix;
    
    console.log(article.nom + " * " + article.quantite + " = " + total + " DH");
    sousTotal += total;
    // console.log(sousTotal);
}

let TVA = sousTotal * 0.2;
let TTC = sousTotal + TVA;

console.log(TVA);
console.log(TTC);
