var cont = 0;

function getNameUser(){
    return prompt("¿Cuál es tú nombre?: ");
}

function getCard(){
    let card =[];
    var value;
    let evalCard = [];
    for (let i = 0; i<15; i++){
        value = generatorRamdomNum();
        card.push(value);
        evalCard=card.slice();
        evalCard.pop();
        if (evalCard.some(element => element === value)){
            card.pop();
            i--;
        }
    }
    return card;
}

 function generatorRamdomNum(){
     let numMin = 1;
     let numMax = 15;
    return Math.round((Math.random() * (numMax-numMin) ) + numMin);
}

function searchNumber(card){
    searchNum = generatorRamdomNum();
    for (let i = 0; i<=card.length-1;i++){
        if (card[i]===searchNum){
            card[i]="X";
            break;
        }
    }     
}

function newTurn(){
    return confirm("¿Quieres continuar?");
}

function continueSearh(card){
    return (((card.filter(element => element !== "X")).length > 0) ? true : false);
}

function getLine(card){
    let result = false;
    let card1 = card.slice(0,5);
    let card2 = card.slice(5,10);
    let card3 = card.slice(10,15);
    
    if (!continueSearh(card1) || !continueSearh(card2) || !continueSearh(card3)){
           result = true;
    }

    return result;
}

function startGame(card,linea){
    cont++;
    searchNumber(card);
    console.log(card.slice(0,5) + '\n' + card.slice(5,10) + '\n'+ card.slice(10,15) + '\n');
    if (!linea){
        linea = getLine(card);
        if (linea) console.log("LINEA!");
    }
    if (continueSearh(card)) {
       if (newTurn()) startGame(card,linea);
    }else{
        console.log("BINGO!")
    }
    
}



function bingo(){
    let nameUser = getNameUser();
    console.log(`Hola ${nameUser}`);
    let card = getCard();
    let linea = false;
    console.log(card.slice(0,5) + '\n' + card.slice(5,10) + '\n'+ card.slice(10,15) + '\n');
    startGame(card,linea);
    console.log(`Partida acabada en ${cont} turnos.`);
    console.log(`Bye! ${nameUser}`);
}

bingo();