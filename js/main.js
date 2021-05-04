// Partendo dall'esercizio fatto tempo fa, aggiungiamo la parte visiva come da screenshot
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.


// 1. aggiungi event listener su bottone genera
document.getElementById('genera').addEventListener('click', function() {
    // 1.1 stampa qualcosa in console.log al click
    var userName = document.getElementById('name-lastname').value;
    // 2. prelevo nome del passeggero dall'input
    document.getElementById('insert-name')
    // 3. lo stampo in elemento html apposito
    .innerHTML = userName;

    var userMiles = document.getElementById('go-miles').value;
    var userAge = document.getElementById('age').value;
    console.log('nome utente ' + userName + ',', userMiles + ' chilometri,', 'età ' + userAge);

    // step1.1, calcolare il prezzo del viaggio su ,21€ al km
    var priceTicket = userMiles * 0.21;
    console.log(priceTicket + '€');

    var rightSales = document.getElementById('sconto');
    var price = document.getElementById('prezzo');

    // se, anniPasseggero è minore di 18 anni, allora ha uno sconto pari al 20%
    if (userAge === 'young') {
        // step2, applicare sconto del 20% ai minorenni
        var sales20 = priceTicket - (priceTicket * 0.20);
        console.log('Lo sconto del biglietto è pari a ', sales20.toFixed(2)+'€');
        rightSales.innerHTML = 'Sconto minorenni 20%';
        price.innerHTML = sales20.toFixed(2)+'€';

    // se invece, anniPasseggero è maggiore di 65 anni, allora ha uno sconto del 40%
    }else if (userAge === 'senior') {
        // step2.1, applicare sconto del 40% a persone sopra i 65 anni
        var sales40 = priceTicket - (priceTicket * 0.40);
        console.log('Lo sconto del biglietto è pari a ', sales40.toFixed(2)+'€');
        rightSales.innerHTML = 'Sconto pensionati 40%';
        price.innerHTML = sales40.toFixed(2)+'€';

    // altrimenti, non hai nessuno sconto
    }else if(userAge === 'adult') {
        rightSales.innerHTML= 'Non hai diritto a nessuno sconto';
        price.innerHTML = priceTicket.toFixed(2)+'€';
    }

    // 4. Generiamo un Codice treno (numero casuale tra 90000 e 100000 escluso)

    function generatoreRandom(min, max) {

        return Math.floor(Math.random()* (max - min) + min);

    }

    var numberCp = generatoreRandom(90000, 100000);
    console.log(numberCp);

    var codeCp = document.getElementById('codice-biglietto')
    .innerHTML = numberCp;

    var numberCarriage = generatoreRandom(1, 21);
    console.log(numberCarriage);

    var codeCp = document.getElementById('numero-carrozza')
    .innerHTML = numberCarriage;

});

/*******************
BONUS
*******************/
document.getElementById('annulla').addEventListener('click', function(reload) {

    reload.preventDefault();
    location.reload();

});

// come prelevi il nome dall'input?


// come sempre fai il tutto in 3 passi:
// 1. lettura di dati dall'input (verifica con console.log)
// 2. calcolo dei valori in base agli input (tutti gli if) - verifica sempre con console.log passo per passo
// 3. scrittura dei risultati in html con innerHTML
