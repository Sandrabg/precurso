function calculator(number1,number2){
    let results =[];

   var numberSqrt = getOnlyNumber(number1,number2);
   if ( numberSqrt > 0)
   {       
    results.push("Raiz Cuadrada: (" + numberSqrt + ") = " + getParseNum(Math.sqrt(numberSqrt)));  
   }
   else  
   {
       if (isNumber(number1) && isNumber(number2))
        {
            results.push("Suma: (" + number1 + " + " + number2 + ") = " + getParseNum(number1 + number2) + "\n");
            results.push("Multiplicación: (" + number1 + "*" + number2 + ") = " + getParseNum(number1 * number2) + "\n");           
            if (getDivision(number2))
            {
                results.push("División: (" + number1 + "/" + number2 + ") = " + getParseNum(number1 / number2) + "\n");
            }        
        }
   }
   console.log("resultado: " + "\n" + results);
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

function getParseNum(number)
{
    return number.toFixed(3);
}

function isNumber(number){
    return (typeof number == 'number');
}


calculator(5,6);
calculator(2);