function calculator(number1, number2) {
    let results = [];
    
    do {
      var numberSqrt = getOnlyNumber(number1, number2);
      if (numberSqrt > 0) {
        results.push(
          "Raiz Cuadrada: (" +
            numberSqrt +
            ") = " +
            getParseNum(Math.sqrt(numberSqrt))
        );
      } else {
        if (isNumber(number1) && isNumber(number2)) {
          results.push(
            "Suma: (" +
              number1 +
              " + " +
              number2 +
              ") = " +
              getParseNum(number1 + number2) +
              "\n"
          );
          results.push(
            "Multiplicación: (" +
              number1 +
              "*" +
              number2 +
              ") = " +
              getParseNum(number1 * number2) +
              "\n"
          );
          if (getDivision(number2)) {
            results.push(
              "División: (" +
                number1 +
                "/" +
                number2 +
                ") = " +
                getParseNum(number1 / number2) +
                "\n"
            );
          }
        }
      }
    } while (prompt("New numbers? y/n") == "y");
  
    console.log("resultado: " + "\n" + results);
  }
  
  function getOnlyNumber(number1, number2) {
    var number = 0;
    if (typeof number1 === "undefined" && typeof number2 != "undefined") {
      if (isNumber(number2)) number = number2;
    } else if (typeof number1 != "undefined" && typeof number2 == "undefined") {
      if (isNumber(number1)) number = number1;
    }
    return number;
  }
  
  function getDivision(number) {
    return number > 0;
  }
  
  function getParseNum(number) {
    return number.toFixed(3);
  }
  
  function isNumber(number) {
    return typeof number == "number";
  }
  
  calculator(5, 6);
  
  console.log("Bye!!");
  

// Feedback

function getOnlyNumber(number1, number2) {
    var number = 0;
    // intenta usar siempre !== en lugar de != de esta manera al hacer la comparacion estamos teniendo en cuenta
    // no solo el valor sino tambien el tipo, si es una string, number, boolean, object, etc.
    if (typeof number1 === "undefined" && typeof number2 != "undefined") {
        if (isNumber(number2)) number = number2;
    } else if (typeof number1 != "undefined" && typeof number2 == "undefined") {
        if (isNumber(number1)) number = number1;
        // Podriamos añadir un else en el caso de que is numer devuelva false y convertir el valor a number usando 
        // la función Number(numero) que nos convertira por ejemplo Number('10') a 10
    }
        return number;
}
    
function getDivision(number) {
    return number > 0;
}

function getParseNum(number) {
    return number.toFixed(3);
}

function isNumber(number) {
    return typeof number == "number";
}


function calculator(number1, number2) {

    
    // en lguar de usar ES6 por el momento usa ES5, en lugar de let usa var. Más adelante veremos es6.
    let results = [];


  // Todas las funciones como: getOnlyNumber, getParseNum se esta usando antes de ser declaradas. Deberiamos
  // declarar esas funciones antes de usarlas para evitar lo que en javascript se le llama hoisting. Lo veremos
  // durante el curso este concepto pero basicamente es que javascript se encarga de poner las declaraciones
  // de las funciones antes de la invocación por eso no nos lanza un error el interprete.
  
  do {
    var numberSqrt = getOnlyNumber(number1, number2);
    if (numberSqrt > 0) {
      results.push(
        "Raiz Cuadrada: (" +
          numberSqrt +
          ") = " +
          getParseNum(Math.sqrt(numberSqrt))
      );
    } else {
      if (isNumber(number1) && isNumber(number2)) {
        results.push(
          "Suma: (" +
            number1 +
            " + " +
            number2 +
            ") = " +
            getParseNum(number1 + number2) +
            "\n"
        );
        results.push(
          "Multiplicación: (" +
            number1 +
            "*" +
            number2 +
            ") = " +
            getParseNum(number1 * number2) +
            "\n"
        );
        if (getDivision(number2)) {
          results.push(
            "División: (" +
              number1 +
              "/" +
              number2 +
              ") = " +
              getParseNum(number1 / number2) +
              "\n"
          );
        }
      }
    }
  } while (prompt("New numbers? y/n") == "y");

  console.log("resultado: " + "\n" + results);
}

calculator(5, 6);

console.log("Bye!!");