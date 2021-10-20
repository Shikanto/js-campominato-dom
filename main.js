
/* CREO LE CONST DOVE ANDARE A PRENDERE L'HTML */

const containerShell = document.getElementsByClassName("shell")[0];
const selectDifficulty = document.getElementById("select_difficulty");
const btnStartGame = document.getElementById("start_game");

let bombs =[];
let punti = 0;
let checkScore;


/* CREO FUNZIONE PER SELEZIONARE LA DIFFICOLTA' E DEFINIRE IL NUMERO DI CELLE */


function numberCellsDifficulty(level){

    let numberCells;

    if (parseInt(level) === 3) {
        numberCells = 49;
    } else if (parseInt(level) === 2) {
        numberCells = 81;
    } else if (parseInt(level) === 1) {
        numberCells = 100;
    }

    return numberCells;

}

/* COSA SUCCEDE QUANDO CLICCO SUL BOTTONE AVVIA GIOCO */

btnStartGame.addEventListener("click", function() {

    punti = 0;

    /* vado nell' html a prendere i value */
    const level = selectDifficulty.value;

    /* passo il valore value alla funzione per capire quante celle devo creare */
    const numberCells = numberCellsDifficulty(level);


    bombs = createBombs(numberCells);
    console.log(bombs)

    /* console.log(level);
    console.log(numberCells); */

    /* evoco la funzione per costruire la griglia */
    buildMinefield(numberCells);

    checkScore = parseInt(numberCells) - parseInt(16);
    console.log(checkScore);


    /* prendo tutti gli elementi con classe box */
    
    let cellCreated = document.getElementsByClassName("box");
    
    /* a ogni classe box dò la funzione per cambiare bg quando cliccato */
    
    
    for (let x = 0; x < cellCreated.length; x++) {
            const singleCell = cellCreated[x];
            singleCell.addEventListener("click", boxClick);
            


    } 
    
 

});




function buildMinefield (numberCells) {

    /* vedo che sono tutti quadrati 7*7 9*9 10*10 */
    const cellsDifficulty = Math.sqrt(numberCells);

    /* divido la grandezza 100% per il numero di celle a seconda della difficoltà  */
    const cellSize = 100 / cellsDifficulty;
    
    /* reset per la griglia */
    containerShell.innerHTML ="";

    /* vado ad aggiungere l'html nella shell */
    for (let i=1; i <= numberCells; i++){

        containerShell.innerHTML += `<div class="box d-flex justify-content-center align-items-center" style="width: ${cellSize}%; height:${cellSize}% ">
                                        <div> ${i} </div>
                                    </div>` ;
    }


}


/* funzione per il click del singolo box */

function boxClick() {

    const numCellaCorrente = parseInt(this.textContent);

    if (bombs.includes(numCellaCorrente))  {
        this.classList.add("bg-bomb");
        alert("Mi dispiace hai perso!");
        alert(`Il tuo punteggio è ${punti}!!`);
        containerShell.innerHTML = "";

    } if (punti < checkScore){ 
        this.classList.add("bg-click");
        punti ++;
        console.log(punti);
    } if (punti == checkScore){
        alert("gg")
    }
    

}