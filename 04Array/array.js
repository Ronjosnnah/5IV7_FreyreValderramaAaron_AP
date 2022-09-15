// Importar de otro archivo

const razasDePerros = require("../03Bucles/bucle").razasDePerros;

/*
array

ForEach itera sobre los elementos del arreglo NO REGRESA NADA

En la siguiente linea de codigo, hace lo mismo que un bucle; pero itera sobre todos los elementosdel arreglo, cada que lo hace ejecuta una funcion 
original 
*/

razasDePerros.forEach((raza, indice, arregloOriginal) => console.log(raza));

//en caso de que no utilizemos alguno de los parametros lo podemos omitir, por ejemplo

razasDePerros.forEach(raza => console.log(raza));

/*
Funcion Map 

Itera sobre los elementos del arrglo, regresa un arreglo diferente con el que nos muestra originalmente
*/

const razasDePerrosEnMayusculas = razasDePerros.map((raza, indice, arregloOriginal) => raza.toUpperCase());

/*
Hay otras funciones utiles como por ejemplo 

Find
Nos permite buscar un elemento dentro del arreglo si lo encuentra, lo regresa y si no lanza "undefined"
Ejemplo "chihuahua"
*/

if(razasDePerros.find((raza, indice, arregloOriginal) => raza === "Chihuahua"))
{
    console.log("la raza se encuentra en el arreglo");
}
else
{
    //hay que meterlo
    razasDePerros.push("Chihuahua");
    console.log("Se agrego la raza :)");
}

/*
FindIndex
es similar pero en lugar de regresar el elemento devuelve su indice, si no lo encuentra devuelve -1, esta funcion es particularmente util si 
tenemos que modificar el elemento original dentro del arreglo
*/

const indiceChihuahua = razasDePerros.findIndex((raza, indice, arregloOriginal) => raza === "Chihuahua")
    if(indiceChihuahua > -1)
    {
        //resultado esperado por que si esta
        console.log(razasDePerros[indiceChihuahua])
        razasDePerros[indiceChihuahua] += "(Raza de perro pequeña)"
        //resultado esperado 
        // chihuahua (Raza de perro pequeña)
        console.log(razasDePerros[indiceChihuahua]);
    }
