/*
Una funcion flecha es una funcion en js que a diferencia de una normal no genera su propio contexto (this), 
nesesita ser declarada antes de ser usada, y no necesitan usar "return" o llaves para instrucciones de una sola letra

Ejemplo
Hagamos una funcion simple que devuelva la suma de dos numeros
*/

function sumaFuncionNormal(n1, n2)
{
    return n1 + n2;
}

console.log(`SumaFuncionNormal(3, 4): ${
    sumaFuncionNormal(3, 4)
}`);

// Este es su equvalente como funcion flecha

const sumaFuncionFlecha = (n1, n2) => n1 + n2

console.log(`sumaFuncionFlecha(4, 5): ${
    sumaFuncionFlecha(4, 5)
}`);

// otra forma de la funcio flecha 

const  sumaFuncionFlecha1 = (n1, n2) => {
    return n1 + n2
}

console.log(`sumaFuncionFlecha1(5, 6): ${
    sumaFuncionFlecha1(5, 6)
}`);


/*
si queremos devolver un objeto en una sola linea con una funcion flecha debemos envolverlo primero entre parentesis
*/

const sumaFuncionFlecha2 = (n1, n2) => ({
    resultado: n1 + n2
});

console.log(`sumaFuncionFlecha2(6, 7): ${
    sumaFuncionFlecha2(6, 7)
}`);

/*
cuando la funcion flecha tiene un solo parametro no es nescesario envolverlo entre parentesis
*/

const cuadradoFuncionFlecha2 = n1 => n1 ** 2;

console.log(`cuadradoFuncionFlecha2(7): ${
    cuadradoFuncionFlecha2(7)
}`);