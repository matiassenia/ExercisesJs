//2)¿Cuantos tanques de nafta?
//Un modelo de automovil tiene 3 versiones
//Motor 1.6 => 15km por litro
//Motor 1.8 => 12km por litro
//Motor 2.0 => 10km por litro

//El tanque de nafta es igual para todos los modelos y la carga maxima es de 50 litros
//Preguntarle al usuario que modelo está usando y la cantidad de kilometros que va a realizar
//Indicarle cuantos tanques de nafta completos necesita para realizar el recorrido

const autonomia16 = 750 ; //Consumo en km en relación a la capacidad del tanque y consumo de combustible del automovil
const autonomia18 = 600
const autonomia20 = 1000  

let modeloAuto = parseInt(prompt("Ingrese el modelo de auto: 16 , 18 o 20 " ));


let kmxRecorrer = parseInt(prompt("Ingrese cantidad de km a recorrer" ));


if (modeloAuto == "16" ) {
    var result =  kmxRecorrer / autonomia16
        alert ("Necesitaras " + result + " tanques completos para realizar tu recorrido")
} else if (modeloAuto == "18" ) {
    var result = kmxRecorrer / autonomia18
        alert ("Necesitaras " + result + " tanques completos para realizar tu recorrido")

} else { (modeloAuto == "20") 
    var result = kmxRecorrer / autonomia20
    alert("Necesitaras" + result + " tanques completos para realizar tu recorrido")
}