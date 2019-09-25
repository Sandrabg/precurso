function calculator(number1,number2){
    let result = {
        resultOperation:{
                "number1":0,
                "number2":0,
                "suma":0,
                "resta":0,
                "multiplicacion":0,
                "division":0,
                "raizCuadrada":0
        },
        resultDescription:"",
        resultStatus:false
    }

   var numberSqrt = getOnlyNumber(number1,number2);
   if ( numberSqrt > 0)
   {       
        result.number1 = numberSqrt;
        result.resultOperation.raizCuadrada =  getParseNum(Math.sqrt(numberSqrt));
        result.resultStatus = true;
        printResultRaiz(result);
   }
   else  
   {
       if (isNumber(number1) && isNumber(number2))
        {
            result.number1= number1;
            result.number2= number2;
            result.resultOperation.suma = getParseNum(number1 + number2);
            result.resultOperation.resta = getParseNum(number1 - number2);
            result.resultOperation.multiplicacion = getParseNum(number1 * number2);
            if (getDivision(number2))
            {
                result.resultOperation.division = getParseNum(number1 / number2);
            }else{
                result.resultOperation.division = "No se puede dividir entre cero‬";
            }
            result.resultStatus =true;
        
        }else{
            result.resultDescription = "Los valores deben de ser númericos";
            result.resultStatus = false;
        }

        printResult(result);
   }
    
}

function getOnlyNumber(number1,number2){
    var number = 0;
    if (typeof number1 === "undefined" &&  typeof number2 != "undefined"){
        if (isNumber(number2)) number = number2;
    }else if ((typeof number1 != "undefined" &&  typeof number2 == "undefined")) {
        if (isNumber(number1)) number = number1;
    } 
    return number;
}

function getDivision(number){
    return (number > 0);
}

function printResult(result)
{
    if (result.resultStatus) {
        var results;
        results = "El resultado de:\n";
        results= results + " - Suma(" + result.number1 + "," + result.number2 + ") = " + result.resultOperation.suma + "\n";
        results = results + " - Resta(" + result.number1 + "," + result.number2 + ") = " + result.resultOperation.resta + "\n";
        results = results + " - Multiplicación(" + result.number1 + "," + result.number2 + ") = " + result.resultOperation.multiplicacion + "\n";
        results = results + " - División(" + result.number1 + "," + result.number2 + ") = " + result.resultOperation.division + "\n";
        console.log(results);
    }else{
        console.log(result.resultDescription);
    }
}

function printResultRaiz(result)
{
    if (result.resultStatus) {
        var results;
        results = "El resultado de:\n";
        results= results + " - Raiz Cuadrada(" + result.number1 + ") = " + result.resultOperation.raizCuadrada + "\n";
        console.log(results);
    }else{
        console.log(result.resultDescription);
    }
}

function getParseNum(number)
{
    return number.toFixed(3);
}

function isNumber(number){
    return (typeof number == 'number');
}


calculator(5,6);
calculator(2);