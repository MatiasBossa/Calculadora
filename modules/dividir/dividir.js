/*
* Creamos una Arrow Function retornando la division de los 2 parametros
* y la expotamos 
*/
module.exports = (num1, num2) => (num2 != 0) ? num1 / num2 : "Error, no se puede dividir por 0";