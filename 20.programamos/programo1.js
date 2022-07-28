//Un automovil tiene un consumo de combustible de 15km por litro.
//Su tanque de nafta puede almacenar 45 litros de combustible.
//Solicitar al usuario la cantidad de kilomtros que va a recorrer.
//Dar aviso al usuario si llegará a recorrer la distancia con un tanque de nafta completa o deberá abastecerse de combustible en su trayecto para llegar a su destino.


const autonomia = 675; //Consumo en km en relación a la capacidad del tanque y consumo de combustible del automovil

let kmxRecorrer = parseInt(prompt("Ingrese la cantidad de km a recorrer" ));

if (kmxRecorrer > autonomia) {
    console.log("Debes abastecerte de combustible para llegar a destino");
} else {
    console.log("Llegaras a destino con un solo tanque de nafta")
}


