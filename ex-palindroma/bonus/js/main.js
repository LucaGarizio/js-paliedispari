// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedere all'utente una parola
const userWord = prompt("inserisci una parola");
console.log(userWord);

// creare funzione che controlla se una parola è palidroma
function palindroma (userWord) {

    // creazione variabile che rimuove spazi e forza le parole in minuscolo
    const formattaParola = userWord.replace(/\s/g,"").toLowerCase();
    console.log(formattaParola);

    // creazione costante della parola inversa
    const invertiParola = formattaParola.split("").reverse().join("");

    // chiedere il risultato 
    return formattaParola === invertiParola
}


// collegare la parola utente alla funzione
const risultato = palindroma(userWord);
console.log(risultato);

// stampa su schermo il risultato
if (risultato) {
    alert ("La parola è palindroma");
}else{
    alert("La tua parola non è palindroma");
}