
(function(){

    document.getElementById("0").addEventListener("click",tratarResultado);
    document.getElementById("1").addEventListener("click",tratarResultado);
    document.getElementById("2").addEventListener("click",tratarResultado);
    document.getElementById("3").addEventListener("click",tratarResultado);
    document.getElementById("4").addEventListener("click",tratarResultado);
    document.getElementById("5").addEventListener("click",tratarResultado);
    document.getElementById("6").addEventListener("click",tratarResultado);
    document.getElementById("7").addEventListener("click",tratarResultado);
    document.getElementById("8").addEventListener("click",tratarResultado);
    document.getElementById("9").addEventListener("click",tratarResultado);

    document.getElementById(",").addEventListener("click",tratarResultado);

    document.getElementById("+").addEventListener("click",tratarResultado);
    document.getElementById("-").addEventListener("click",tratarResultado);
    document.getElementById("x").addEventListener("click",tratarResultado);
    document.getElementById("/").addEventListener("click",tratarResultado);
    document.getElementById("=").addEventListener("click",tratarResultado);

    document.getElementById("AC").addEventListener("click",tratarResultado);
    document.getElementById("R").addEventListener("click",tratarResultado);

var accResult = "";
var iniCalc = 0;

function isSign(valor){
    var retResult = false;
    if (valor === '+' || valor === '-' || valor ==='x' || valor === '/'){
        retResult = true;
    }
    return retResult;
}

function getParseNum(number)
{
    return number.toFixed(2);
}

function tratarResultado(){
    var resultado= document.getElementById("result");
    var valor = this.innerHTML; 
        if (iniCalc === 1)  {
            resultado.innerHTML="";
            iniCalc = 0;
        }
        if (!isNaN(Number(valor))) {
            resultado.innerHTML=resultado.innerHTML + valor;
        }
        else if (valor === ','){
            if (resultado.innerHTML.length === 0){
                resultado.innerHTML= "0,";
            }else if (!resultado.innerHTML.includes(",")){
                resultado.innerHTML=resultado.innerHTML + valor;                
            }
        }else if(isSign(valor) && resultado.innerHTML.length>0){
                accResult=accResult.concat(resultado.innerHTML);
                accResult= accResult.concat(valor);
                resultado.innerHTML="";
        }else if(valor === '=' && accResult.length>0){
            accResult= accResult.concat(resultado.innerHTML);
            var x =  accResult.replace(/,/g,'.').replace('x','*');            
            var result =getParseNum(eval(x));
            var resultFormat = result.replace('.',',');
            resultado.innerHTML = resultFormat;
            if (isNaN(result) || !Number(result) || result === 'Infinity') { iniCalc=1; }
            accResult ="";
        }else if(valor === 'AC'){
            accResult ="";
            resultado.innerHTML = "";
        }else if(valor === 'C'){
            if (accResult.length> 0 ) {
                accResult= accResult.slice(0,-1);
            }
            resultado.innerHTML = resultado.innerHTML.slice(0,-1);
        }

}
})();