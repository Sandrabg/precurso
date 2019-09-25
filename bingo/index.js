var resultsGame=[];

function getNameUser(){
    return prompt("¿Cuál es tú nombre?: ");
}

function responseCardOK(){
    return confirm("¿Quieres este cartón?");
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
    
    console.log(card.slice(0,5) + '\n' + card.slice(5,10) + '\n'+ card.slice(10,15) + '\n');

    if (!responseCardOK()){
        card = getCard();
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

function startGame(card,linea,cont){
    cont++;
    searchNumber(card);
    console.log(card.slice(0,5) + '\n' + card.slice(5,10) + '\n'+ card.slice(10,15) + '\n');
    if (!linea){
        linea = getLine(card);
        if (linea) console.log("LINEA!");
    }
    if (continueSearh(card)) {
       //if (newTurn()) startGame(card,linea);
       cont = startGame(card,linea,cont);
    }else{
        console.log("BINGO!");
    }
    return cont;
}

 function getPoints(cont){
     let result=0;
     if (cont < 100){
         result = 4;
     }else if (cont>100 && cont<200){
        result = 3;
     }else if (cont>200 && cont<400){
        result = 2;
     }else{
        result = 1;
     }    
     return result;
 }

function saveGame(userName,cont){
    resultsGame.push(
        {
            User:userName,
            points:getPoints(cont)
        });
}

function printResult(){
    for (let i = 0; i<=resultsGame.length-1;i++){
        console.log(resultsGame[i]);
    }
}

function printSystemPoints(){
    console.log("Sistema de Puntos: \n");
    console.log("Menor a 100 Turnos: 4 points \n");
    console.log("Entre 100 y 200 Turnos: 3 points \n");
    console.log("Entre 200 y 400 Turnos: 2 points \n");
    console.log("Mas 400 Turnos: 1 points \n");
}

function bingo(){
    let cont = 0;
    let userName = getNameUser();
    if (userName!== null){
        console.log(`Hola ${userName}`);
        printSystemPoints();
        let card = getCard();
        let linea = false;
        cont=startGame(card,linea,cont);
        console.log(`Partida acabada en ${cont} turnos.`);   
        saveGame(userName,cont);
        printResult();
    }
    if (confirm("¿Otra Partida?")){
        bingo();
    }else{
        console.log(`Bye! ${userName}`);
    }
    
}

bingo();