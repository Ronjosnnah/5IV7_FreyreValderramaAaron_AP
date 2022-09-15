//ejemplo de usp de bucles

const razasDePerros = 
[
    "Gran Danes",
    "Dogo de Burdeos",
    "Dogo de Argentino",
    "San Bernardo",
    "Mastin del Pirineo",
    "Mastin Español",
    "Chihuahua",
    "Pastor Aleman",
    "Lobero Irlandes",
    "Pitbull"
]

/*
para esta nueva version de js se agrego el bucle for/of que permite iterar sobre los elementos de objetos iterables
*/

//primero con un for tradicional 
for(let indice = 0; indice < razasDePerros.length; indice++)
{
    console.log(razasDePerros[indice]);
}

//ahora con un for/of
for(const raza of razasDePerros)
{
    console.log(raza);
}

/*
tambien existe un bucle for/in que itera sobre las llaves del objeto en el caso de un arreglo estas llaves son los indices
*/

for(const indice in razasDePerros)
{
    console.log(razasDePerros[indice]);
}

// Exporta de un archivo

module.exports.razasDePerros = razasDePerros;