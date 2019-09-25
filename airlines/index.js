var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

function printFlights()
{
    let costeMedio = 0;
    let flightsWithScale = 0;
    for (vuelo in flights){
        console.log("ID: " + flights[vuelo].id + " - EL vuelo con origen: " + flights[vuelo].to + ", y destino: " + flights[vuelo].from + " tiene un coste de " + flights[vuelo].cost + "€ y " + getEscala(flights[vuelo].scale));
        costeMedio +=flights[vuelo].cost;
        flightsWithScale += (flights[vuelo].scale ? 1 : 0);
    }
    if (flights.length > 0){
        console.log("Coste Medio de los Vuelos: " + (costeMedio/flights.length).toFixed(2) + "€");
        console.log("Total Vuelos con Escala: " + flightsWithScale);
    }
    
}

function getEscala(escala){
    return escala ? "no realiza ninguna escala." : "realiza escala.";
}

function isValidEscala(escala){
    return (escala === 'y' ? true : false);
}
function isValidString(param){
    let retvalue = true;
    if (param == undefined && param.length == 0){
        retvalue = false;
    }
    return retvalue;
}

function getLastFlight(){
    return (flights[flights.length-1].id + 1);
}


function addFlights(){
   let origen = prompt(" Introduce el Origen: ");
   let destino = prompt(" Introduce el Destino: ");
   let coste = prompt(" Introduce el Coste: ");
   let escala = prompt(" ¿tiene escalas (y/n)?: ");


   if (isValidString(origen) && isValidString(destino) && isValidNumber(coste) && isValidString(escala)) {
        flights.push({id:getLastFlight(),to:origen,from:destino,cost:coste,scale:isValidEscala(escala)});
   }else{
      alert("Datos mal introducidos");
   }
}

function deleteFlights()
{
  respuesta = prompt("¿Que vuelo quiere eliminar (ID)?");
  if (isValidNumber(respuesta)){
        if (getVuelo(respuesta) >= 0){
            flights.splice(respuesta,1);
            console.log("Vuelo " + respuesta + " Eliminado."); 
        }else{
            console.log("No existe el vuelo");
        }
  }
}

function gestionUserAdmin()
{
  var  respuesta = prompt("Seleccione (1) Para crear Vuelos o (2) Para eliminar Vuelos: "  );
    switch (respuesta)
    {
        case "1":
            if (flights.length <= 15){
                addFlights();
            }else{
                alert("Alcanzado el número máximo de vuelos a crear.");
            }
            break;
        case "2":
            if (flights.length > 0){
                deleteFlights();
            }else{
                alert("No hay más vuelos para eliminar.");
            }
            break;
    }
}

function isValidNumber(number){
    let retValue = true;
     if (typeof number === "undefined" || isNaN(number) || number.length == 0){
       return false
    } 
    return true;
}

function getVuelo(id){
    return flights.findIndex(item => item.id == id );
}
function printVuelo(index){
    if (index >= 0){
        console.log("EL vuelo con origen: " + flights[index].to + ", y destino: " + flights[index].from + " Ha sido comprado.\nGracias por su compra, vuelva pronto"); 
    }else{
        console.log("No existe el vuelo");
    }
}

function gestionUser(){
    let arrFlights=[];

    for (vuelo in flights){
        arrFlights.push(flights[vuelo].cost);
    }

    console.log("Coste Máximo de un vuelo:" + (Math.max(...arrFlights)).toFixed(2) + "€");
    console.log("Coste Mínimo de un vuelo:" + (Math.min(...arrFlights)).toFixed(2) + "€");

  let Id = prompt("Selecciona el vuelo que desee, indicando el ID: ");
  if (isValidNumber(Id)){
    printVuelo(getVuelo(Id));
  }else {
    console.log("Id no válido.")
  }
    
}

function getUser()
{
    let user = prompt("¿Cuál es tu nombre?:");
    alert("Bienvenido " + user + "!");
}

function getTypeUser(){
    let typeUser = prompt("¿Que tipo de usuario eres admin (a) o usuario (u)?: ");
    return typeUser;
}

function airlines()
{
    let typeUser;
    getUser();
    typeUser= getTypeUser();
    printFlights();
    switch (typeUser)
    {
        case 'a':
           gestionUserAdmin();
           printFlights();
            break;;
        case 'u':
           gestionUser();
           break;
    }    
}

airlines();