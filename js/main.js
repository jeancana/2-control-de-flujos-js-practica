
/* 
Haciendo la verificacion Inicial de Linkeo - para chequear que el main.js esta bien 
alert('Hola') */


// ************* Estudiando ESTRUCTURAS DE CONTROL DE FLUJO (Construccion de Estructuras) *************************

// ************* CONDIONALES EN PROGRAMACION (En esta Etapa del estudio solo veremos la primera ESTRUCTURA) ******************

// 1. PRIMER ESTRUCTURA - CONDICIONALES  
// Condicional Simple ----> if (condicion) { } / else {} /  else if (condicion) { }
// NOTA: por Default el condicional 'if' viene con la bandera en TRUE (preguta si la operacion a evaluar es Verdadera)
// Para que la condicion del 'if' funcione en bandera falsa debemos es NEGAR la condicion Verdadera a evaluar

// PARA: que se pueda ver de manera practica en el VS vamos a hacer ejecicios de Mezclando 
// la PRIMERA ESTRUCTURA DE CONTROL DE FLUJO  (P.E.C.F) CON LOS OPERARADORES DE "ASIGNACION" y "COMPARACION "
// Conjucion de: (P.E.C.F + Ope.d.Asig + Ope.d.Compara)

// --------------------------------------//-------------------------//--------------------//


// ************* Estudiando OPERADORES DE ASIGNACION Y COMPARACION ******************
// ------------- Mezclandolo con  (P.E.C.F) "Condicional Simple" if (condicion){} / else {} / -- 
// Nota: los OPERADORES DE COMPARACION siempre devolveran como resultado solo 2 condiciones True o False 

// 1. '=' --> ASIGNACION DE UN VALOR A UNA VARIALBLE
/*
El Signo '=' (igual) en programacion es usado como OPERADOR DE ASIGNACION 
EJEMPLO -----> a let Variable = (le asigno) este Valor (dato) 3 de tipo Number
*/
// Ejemplo de OPERADOR DE ASIGNACION 
let puntaje = '100';


//2. '==' --> OPERADOR DE COMPARACION '==' (igual-igual)
/*
- El Signo '==' (igual-igual) en programacion es usado como OPERADOR DE COMPARACION 
EJEMPLO -----> a let Variable == (ES igual) este Valor (dato) 3 de tipo Number
- El Operador '==' solo evalua si algo es igual a lo otro sin tener en cuenta el TIPO DE DATO solo compara el VALOR del DATO ingresado
- Para ser Igual solo deben ser Iguales los "Dato" comparados, SIN TENER consideracion el TIPO (number/string/boolean/undefined/null/symbol)  
*/


// 2.1 - Ejemplo de OPERADOR DE COMPARACION '==' (igual-igual) / Sirve para compara SOLO VALORES

// 2.1.1 Ejemplo con Bandera Positiva  - if (condicio en TRUE) {} --> la condicion Evaluada es cierta/TRUE y entra en el "if" 
/*
    En este EJEMPLO para que la condicion sea igual-igual debe cumplir:
    a) Que el Dato Ingresado '1000' sea igual al dato comparado 1000 // si comparo nros distintos no funcionara
    b) NO importa si el TIPO sea Igual      
    c) El numero ingresado debe ser igual al comparado 
    d) Tener la bandera en condicion True/verdadero al pasar por el 'if' 
    
    NOTA: por Default el condicional 'if' viene con la bandera en TRUE
 */
let puntaje2 = '1000'
if (puntaje2 == 1000) {
    console.log(" como '1000'(T.d.String) es (igual) == 1000 (T.d.number) / la condicion es Verdadera - ENTONCES ENTRAS y me puedes LEER  ")
} else {
    console.log('COMO "100" NO es (igual) == 1000/ Nunca me te dejare entrar a la Cuidad de Furia / xq estas comparado valores distintos')
}


// 2.1.2 Ejemplo con Bandera Negativa - if (condicio en TRUE) {} --> la condicion Evaluada es falsa/FALSE y SE VA AL "esle {}"
/*
    En este EJEMPLO para que la condicion sea igual-igual debe cumplir:
    a) Que el Dato Ingresado '100' sea distinto al dato comparado 1000 // si comparo nros distintos se va al else{}
    b) NO importa si el TIPO sea Igual      
    c) El numero ingresado debe ser igual al comparado 
    d) Tener la bandera en condicion True/verdadero al pasar por el 'if' 
    NOTA: por Default el condicional 'if' viene con la bandera en TRUE
 */
let puntaje3 = '100'
if (puntaje3 == 1000) {
    console.log(" como '1000'(T.d.String) es (igual) == 1000 (T.d.number) / la condicion es Verdadera - ENTONCES ENTRAS y me puedes LEER  ")
} else {
    console.log('COMO "100" NO es (igual) == 1000/ la condicion es Verdadera se niega y  Nunca me te dejare entrar a la Cuidad de Furia / xq estas comparado valores distintos')
}
// 


//3. '===' --> OPERADOR DE COMPARACION '===' (estrictamente-igual) / compara TIPO Y VALOR
/*
- El Signo '===' (estrictamente-igual) en programacion es usado como OPERADOR DE COMPARACION 
EJEMPLO -----> a let Variable === (ES ESTRICTAMENTE igual) este Valor (dato) 3 de tipo Number

- El Operador '==='  evalua si algo es ESTRICTAMENTE igual a lo otro - teniendo en cuenta el TIPO y VALOR del DATO

- Para ser Estrictamente Iguales deben ser Iguales los "tipo" y el "Valor(dato)" comparados 
*/

// Ejemplo de OPERADOR DE COMPARACION '===' (estrictamente-igual)

// En este EJEMPLO para que la condicion sea estrictamente-igual el Dato(Valor) debe ser: 
// 1. Estrictamente un tipo de Dato Number - excluye TODOS los otros tipos de datos
// 2. El numero ingresado debe ser estrictamente-igual al comparado 
// 3. Tener la bandera en condicion True/verdadero al pasar por el 'if' 
// NOTA: por Default el condicional 'if' viene con la bandera en TRUE

// 3.1 - Ejemplo de OPERADOR DE COMPARACION '==' (igual-igual)

// 3.1.1 Ejemplo con Bandera Positiva  - if (condicio en TRUE) {} --> la condicion Evaluada es cierta/TRUE y entra en el "if"

let puntaje4 = 1000
if (puntaje4 === 1000) {
    console.log("Si 1000(T.d.number) es (estrictamente-igual) === 1000(T.d.number)/ la condicion es Verdadera - ENTONCES ENTRAS y me puedes LEER  ")
} else {
    console.log('COMO 1000 NO es (estrictamente-igual) === 1000 (estrictamente-igual)/ Nunca me te dejare entrar a la Cuidad de Furia / xq estas comparado valores que son Estrictamente distintos ')
}

// 3.1.2 Ejemplo con Bandera Negativa - if (condicio en TRUE) {} --> la condicion Evaluada es falsa/FALSE y SE VA AL "esle {}"

let puntaje5 = 100
if (puntaje5 === 1000) {
    console.log("Si 1000(T.d.number) es (estrictamente-igual) === 1000(T.d.number)/ la condicion es Verdadera - ENTONCES ENTRAS y me puedes LEER  ")
} else {
    console.log("COMO 100 NO es (estrictamente-igual) === 1000 (estrictamente-igual)/ la condicion es Verdadera se niega y Nunca me te dejare entrar a la Cuidad de Furia / xq estas comparado valores que son Estrictamente distintos")
}

// Evaluando la condicion de la Bandera en Positivo del If(condicion){ }
let condicionVerdadera = true
if (condicionVerdadera) { 
    alert("bandera Positiva")
} else { 
    alert('bandera negativa')
}


// Evaluando la condicion de la Bandera en Negativo del If(condicion){ }
let condicionFalsa = false
if (condicionFalsa) {
    alert("bandera Positiva")
} else {
    alert('bandera negativa')
}

// Lista de todos los Operadores de Comparacion 

// Igual es == 
// Estrictamente Igual es ===
// Mayor Que es > 
// Mayor o Igual Que es >=
// Menos Que es < 
// Menor o Igual Que es <=
// Diferente es !=
// Estrictamente Diferente es !==

// Ejemplo del Operador DIFERENTE (No es igual)

// 1er Caso - Solo evalua el Valor del Dato y no el Tipo de Dato 
let puntaje6 = 1000
if (puntaje6 != 1000) {
    alert("Es diferente")
} else {
    alert('No Es diferente')
}

if (puntaje6 != '1000') {
    alert("Es diferente")
} else {
    alert('No Es diferente')
}

// 2do Caso - Evalua el Valor del Dato y el Tipo de Dato

if (puntaje6 !== '1000') {
    alert("Es Estrictamente diferente")
} else {
    alert('No Es diferente')
} 