/**
 * Importamos los modulos de Operaciones Aritmeticas.
 */
const sumar = require('./modules/sumar/sumar');
const restar = require('./modules/restar/restar');
const multiplicar = require('./modules/multiplicar/multiplicar');
const dividir = require('./modules/dividir/dividir');

/**
 * Importamos los modulo para poder Operar con Consola.
 */
const scan = require('console-scanner');

/**
 * Funcion que muestra el menu de la calculadora por consola.
 */
const mostrarMenu = () => {
    console.log("************************************************************************");
    console.log("*                       Ingrese una operacion                          *");
    console.log("* 1-Sumar(+), 2- Restar(-), 3- Multiplicar(*), 4- Dividir(/), 0- Salir *");
    console.log("************************************************************************");
}

/**
 * Declaramos una variable op que usaremos de selector
 * op -> que se usara para elegir las Operaciones Aritmeticas.
 * resultadoTotal -> llevara todo el resultado de la Calculadora.
 */
let op = 1;
let resultadoTotal = 0;
let num1, num2;

do {
    //Limpiamos la consola y mostramos el menu.
    console.clear();
    mostrarMenu();
    //Mostramos el resultado de la operacion.
    console.log("Resultado : " + resultadoTotal);
    console.log();
    try {
        //Leemos la opcion elegida.
        op = scan.nextInt();
        switch (op) {
            case 1: //Suma
                console.log("Primer numero");
                num1 = scan.nextInt();
                console.log("Segundo numero");
                num2 = scan.nextInt();
                resultadoTotal = sumar(num1, num2);
                break;
            case 2: //Resta
                console.log("Primer numero");
                num1 = scan.nextInt();
                console.log("Segundo numero");
                num2 = scan.nextInt();
                resultadoTotal = restar(num1, num2);
                break;
            case 3: //Multiplicacion
                console.log("Primer numero");
                num1 = scan.nextInt();
                console.log("Segundo numero");
                num2 = scan.nextInt();
                resultadoTotal = multiplicar(num1, num2);
                break;
            case 4: //Division
                console.log("Primer numero");
                num1 = scan.nextInt();
                console.log("Segundo numero");
                num2 = scan.nextInt();
                resultadoTotal = dividir(num1, num2);
                break;
            default:
                break;
        } 
    }catch(err){//En caso de error largamos una excepcion.
        console.log("Ingrese un numero!");
    }
}while (op != 0);


