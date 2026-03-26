let personne = {
    nom: "makhfi",
    prenom: "ghita",
    age: 23,
    ville: "Marrakech",
    email: "ghita@gmail.com"
};

console.log("i'm " + personne.prenom + " " + personne.nom +
    ", i'm " + personne.age + " years old, i live in " +
    personne.ville + " and my email is " + personne.email + ".");

personne.ville = "Casablanca";
personne.telephone = "0612345678";

for (let n in personne) {
    console.log(n + ": " + personne[n]);
}