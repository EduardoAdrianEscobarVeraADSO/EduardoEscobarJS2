// 2. En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle.
// b) Antes del bucle.
// c) Al comienzo del bucle.
//  ¿Qué va a mostrar alert()?

// la funcion programada se ejecutara despues del bucle debido a que es una funcion asincrona y las funciones asincronas se ejecutan al final de la cola
//el alert muestra el resultado del bucle for que es 100000000