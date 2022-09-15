

/*
manejo de variables en JS ES6

las variables ahora como bloques

var 
let
const

*/


if(true)
{
    //se declara por primera vez x
    // var x = "x";
    //const x = "x";
    let x = "x";
    //se imprime el valor de la variable x
    //este contendra el caracter
    console.log(x);
}

/*
la variable x, sigue existiendo y conserva su valor 
*/

/* 
la variable x ya no existe ya que pertenece al bloque delimitado por las llaves del if por lo que la siguiente linea provoca un error
ReferenceError
*/

console.log(x);

//la variable x se redeclara con el valor "y"

var x = "y";
//const x = "y";
//let x = "y";

//la variable x ahora vale "y"
/*
como el tipo de varible de x es constante la siguiente linea de codigo provoca un errror
typeError, para el comportamiento deseado por lo tanto el tipo de variable deberia de ser LET
*/

console.log(x);

x = "z";

//ahora la variable vale z
console.log(x);


