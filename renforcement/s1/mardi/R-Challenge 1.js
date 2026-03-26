let chansons = [
    { titre: "music1", artiste: "Art1", duree: 210, genre: "Rock" },
    { titre: "music2", artiste: "Art2", duree: 180, genre: "Pop" },
    { titre: "music3", artiste: "Art3", duree: 240, genre: "Jazz" },
    { titre: "music4", artiste: "Art4", duree: 300, genre: "Rock" },
    { titre: "music5", artiste: "Art5", duree: 150, genre: "Rap" },
    { titre: "music6", artiste: "Art6", duree: 200, genre: "Pop" },
    { titre: "music7", artiste: "Art7", duree: 360, genre: "Rock" },
    { titre: "music8", artiste: "Art8", duree: 120, genre: "Jazz" },
    { titre: "music9", artiste: "Art9", duree: 260, genre: "Pop" },
    { titre: "music10", artiste: "Art10", duree: 310, genre: "Rock" }
];

for (i = 0; i < chansons.length; i++) {
    let titre = chansons[i].titre;
    console.log(titre);
}

// autrement
chansons.forEach(c => console.log(c.titre));

// filtre genre
let rockChansons = chansons.filter(c => c.genre === "Rock");
console.log("Rock:", rockChansons);

// conversion en minute
let dureesMinutes = chansons.map(function(c) {
    let resteDiv = c.duree % 60;
    let minutes = (c.duree - resteDiv) / 60;
    let secondes = resteDiv;

    if (secondes < 10) {
        secondes = "0" + secondes;
    }
    return c.titre + " : " + minutes + ":" + secondes;
});
console.log(dureesMinutes);

// calcul total
let totalSecondes = chansons.reduce(function(sum, c) {
    return sum + c.duree;
}, 0);

let resteSecondes = totalSecondes % 60;
let totalMinutes = (totalSecondes - resteSecondes) / 60;

console.log("Duree totale :", totalMinutes + "m " + resteSecondes + "s");

// chanson plus longue
let plusLongue = chansons[0];

for (let i=1; i<chansons.length; i++) {
    if (chansons[i].duree > plusLongue.duree) {
        plusLongue = chansons[i];
    }
}
console.log("Plus longue:", plusLongue);

// <6 mins
let chansonMoin6 = true;

for (let i=0; i<chansons.length; i++) {
    if (chansons[i].duree >= 360) {
        chansonMoin6 = false;
        break;
    }
}
console.log("< 6 min: ", chansonMoin6);

// au moin une chanson de genre jazz
let auMoinChansonJazz = chansons.find(e => e.genre = "Jazz");
console.log(auMoinChansonJazz);


let auMoinsUneJazz = false;
for (let i=0; i<chansons.length; i++) {
    if (chansons[i].genre === "Jazz") {
        auMoinsUneJazz = true;
        break;
    }
}
console.log(auMoinsUneJazz);

// trie plus courte -> plus longue
let trie = chansons.sort((a, b) => a.duree - b.duree);
console.log(trie);