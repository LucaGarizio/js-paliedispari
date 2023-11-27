// Pari e Dispari
// chiedi all'utente pari o dispari
const userChoice = prompt("scegli tra pari o dispari");
console.log("Hai scelto: "+ userChoice);


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userNumber = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("Il numero da te scelto è; " +userNumber);


// chiamare la funzione che generea il numero casuale
let pcNumber = generaNumeroCasuale();
console.log("Il numero del pc è: "+ pcNumber);


// chiamare la funzione per determinare il risultato
let risultato = determinaRisultato();


// controllo per definire se il numero scelto è uguale alla scelta(pari o dispari)
if (risultato === userChoice) {
    console.log("Hai vinto")
} else{
    console.log("Hai perso");
}


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// alert(Math.floor(math.random() * 5) +1);
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) +1;
}


// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
function determinaRisultato() {
    let somma = pcNumber + userNumber;
    console.log("La somma dei due numeri è: "+ somma);
    if (somma % 2 === 0){
        return "pari"
    } else{
        return "pispari"
    }
}