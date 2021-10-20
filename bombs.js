function createBombs(numberCells){
    let bombs = [];

    for (let i = 0; i < 16; i ++){
        
        let randombomb = Math.floor(Math.random() * numberCells) + 1;

        if (bombs.includes(randombomb)) {
            i--;
        }  else {
            bombs.push(randombomb);
        }         
    }
    console.log(bombs);
    return bombs
}





