//Dial de radio
//Crea un algoritmo que valida que una radio exista

//Pide al usuario que ingrese un dial y validala existencia de la radio con las siguientes condiciones:

//-El dial debe ser impar
//-El dial debe ser mayor o igual a 89.9
//-El dial debe ser menor a 107.9

let dial = parseInt(prompt("Ingrese el dial de radio" ));

if (dial % 2 == 1 && dial >= 89.9 && dial < 107.9){
        alert("El dial existe")
    } else {
        alert("El dial no existe")
}