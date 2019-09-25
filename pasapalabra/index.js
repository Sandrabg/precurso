var resultsGame = [];

var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
]


function printQuestion(element){
    return prompt(`Letra: ${questions[element].letter} - Pregunta: ${questions[element].question}`);
}

function getQuestionsStatus(status)
{
    var result = 0;
    for (var i = 0; i<questions.length;i++){
        if (questions[i].status === status) result++;
    }
    return result;
}

function printResult(){
    var resultOK = getQuestionsStatus(1);
    console.log("Juego Terminado Resultado:");
    console.log(`Preguntas Acertadas: ${resultOK}`);
    console.log(`Preguntas Falladas: ${getQuestionsStatus(2)}`);
    console.log(`Preguntas Sin Responder: ${ getQuestionsStatus(0)}`);
    if (resultOK===questions.length){
        console.log("GANASTE 10000000€");
    }
}

function TratarResult(resultQuestion, answer){
    var result = 2;
    if(resultQuestion === answer) {
        result = 1;
        console.log(`- ${resultQuestion} Respuesta Acertada`);
    }else if (resultQuestion === "END") {
        result = -1;
    }else if (resultQuestion === "PASAPALABRA"){
        result = 0;
    }else {
        console.log(`- ${resultQuestion} Respuesta Fallada`);
    }
    return result;
}

function continueQuestions(){
    var cont = getQuestionsStatus(1);
    return (cont === questions.length ? true : false);
}

function initializeQuestions(){
    for (var i = 0; i<questions.length;i++){
        questions[i].status=0;
    }
}
function game(){
    var resultQuestion;
    var answer;
    var status = -1;

    initializeQuestions();

    do{    
        for (var i = 0; i<questions.length;i++){
            if (questions[i].status === 0){
                answer =  (questions[i].answer).toUpperCase();
                resultQuestion = (printQuestion(i)).toUpperCase();
                status = TratarResult(resultQuestion, answer); 
                if (status  === -1){
                    console.log("Bye!");
                    break;
                }    
                questions[i].status  = status;
            }
        }
        
    }while (continueQuestions());
}

function saveRanking(userName){

    resultsGame.push(
        {
            userName:userName,
            questionsOK:getQuestionsStatus(1),
            questionKO:getQuestionsStatus(2),
            questionSR:getQuestionsStatus(0)
        });
}

function printRanking(){
    for (var i = 0; i<resultsGame.length;i++){
        console.log(`--------------------------------------------------------------`);
        console.log(`Jugador: ${resultsGame[i].userName}`);
        console.log(`\tRespuestas Acertadas: ${resultsGame[i].questionsOK}`);
        console.log(`\tRespuestas Falladas: ${resultsGame[i].questionKO}`);
        console.log(`\tRespuestas Sin Responder: ${resultsGame[i].questionSR}`);
        console.log(`--------------------------------------------------------------`);
    }

}


function pasapalabra(){
    var userName;

    do{
        userName = prompt("Nombre: ");
        console.log(`Hola ${userName}`);
        console.log("Juego Pasapalabra");
        console.log("1. Responde END para acabar el Juego");
        console.log("2. Responde PASAPALABRA para pasar a la siguiente pregunta");

        game();
        printResult();
        saveRanking(userName); 

    }while(confirm("¿Quieres volver a Jugar?"));

    printRanking();
}

pasapalabra();
