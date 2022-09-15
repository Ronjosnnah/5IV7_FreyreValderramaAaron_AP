/*

// Consulta Basica

const container = document.querySelector('.container')

fetch('https://swapi.dev/api/people/').then((res) => res.json()).then((data) => Personaje(data).catch(error => console.log(error)));

function Personaje(results) 
{
    results.results.forEach(starWarsData => {

        const informacion = document.createElement('div');
        const nombrePersonaje = document.createElement('h3');
        const caracteristicas = document.createElement('p');
        //const salto = document.createElement('br')

        // Le da una clase para el css
        informacion.classList.add('infoContainer');
        nombrePersonaje.classList.add('Personaje');
        caracteristicas.classList.add('caracteristicas');


        nombrePersonaje.textContent = starWarsData.name;
        caracteristicas.textContent = `Estatura: ${starWarsData.height} \r\n Peso: ${starWarsData.mass} Color de Pelo: ${starWarsData.hair_color} \r\n Color de ojos: ${starWarsData.eye_color} \r\n Año de Nacimiento: ${starWarsData.birth_year}`
        caracteristicas.innerHTML = caracteristicas.innerHTML.replace(/\r\n?/g,"<br>")
    //    caracteristicas.textContent = `Peso: ${starWarsData.mass}`;
    //    caracteristicas.appendChild(salto);
    //    caracteristicas.textContent += `Color de Pelo: ${starWarsData.hair_color}`;
    //    caracteristicas.appendChild(salto);
    //    caracteristicas.textContent += `Color de ojos: ${starWarsData.eye_color}`;
    //    caracteristicas.appendChild(salto);
    //    caracteristicas.textContent += `Año de Nacimiento: ${starWarsData.birth_year}`;
    //    caracteristicas.appendChild(salto);

        informacion.appendChild(nombrePersonaje);
        informacion.appendChild(caracteristicas);

        container.appendChild(informacion);

    });
}
*/
function busqueda()
{

    const btn = document.getElementById("btn")
    const containerSearch = document.querySelector('.containerSearch')
    const personaje = document.getElementById('personaje').value

    fetch(`https://swapi.dev/api/people/?search=${personaje}`).then((res) => res.json()).then((data) => busquedaPersonaje(data).catch(error => console.log(error)));

    function busquedaPersonaje(results)
    {
        results.results.forEach(starWarsData => {


            const informacion = document.createElement('div');
            const nombrePersonaje = document.createElement('h3');
            const caracteristicas = document.createElement('p');

            informacion.classList.add('infoContainer');
            nombrePersonaje.classList.add('Personaje');
            caracteristicas.classList.add('caracteristicas');


            nombrePersonaje.textContent = starWarsData.name;
            caracteristicas.textContent = `Estatura: ${starWarsData.height} \r\n Peso: ${starWarsData.mass} Color de Pelo: ${starWarsData.hair_color} \r\n Color de ojos: ${starWarsData.eye_color} \r\n Año de Nacimiento: ${starWarsData.birth_year}`
            caracteristicas.innerHTML = caracteristicas.innerHTML.replace(/\r\n?/g,"<br>")

            informacion.appendChild(nombrePersonaje);
            informacion.appendChild(caracteristicas);

            containerSearch.appendChild(informacion);
            
            btn.disabled = true;
            setTimeout(() => 
            {
                location.reload();
            },20000);

        });
    }

}