/*
 Vamos a crear un carrusel de umagenes que se consume por medio de una api
 */

 window.onload = () => 
 {

    // las imagenes
    const imagenes = 
    [
        "https://w.wallhaven.cc/full/l3/wallhaven-l315vy.png", 
        "https://w.wallhaven.cc/full/j3/wallhaven-j3gz1w.jpg", 
        "https://w.wallhaven.cc/full/72/wallhaven-725mg9.png",
        "https://w.wallhaven.cc/full/rd/wallhaven-rd83mq.jpg"
    ];

    /*
    Con la api de DOM podemos acceder al documento html para esto necesitamos busca, estos nodos de alguna manera a partir de los id
    podemos buscar los elemento sw diferentes formas por id, por nombre, por clases, por etiquetas

    de estos atributos solo la busqueda por Id
    */

    const display = document.getElementById("display");
    const botones = Array.from(document.getElementsByName("boton"));
    const campoMensaje = document.getElementById("mensaje");
    const mensajes = document.getElementById("mensajes");
    const colorValor = document.getElementById("colorValor");

    let imagenActual = 0;

    const imagenSiguiente = () => 
    {
    
        // accedemos a la imagen dentro del arreglo con su indice, cuando es la ultima regresamos a la primera 
        if(imagenActual < imagenes.length -1) 
        {
            imagenActual++;
        }
        else
        {
            imagenActual = 0;
        }
        display.src = imagenes[imagenActual];

    };

    const pantallaCompleta = () =>
    {
        /*
        otra forma para cuando se solicita la pantalla completa nos devuelva una promesa por si queremos manejar el elemento 
        de pantalla completa
        */
        display.requestFullscreen();
    };

    const mostrarMensaje = () =>
    {
        /*
        otra de las cosas que se puede hacer es modificar el html interno de un elemento para agregar de forma dinamica nuevos elementos 
        */

        mensajes.innerHTML += `${campoMensaje.value}</br>`;
        campoMensaje.value = "";

        /*
        si queremos manipular los elementos recien creados
        createelement
        const lista = document.createElement("ul");
        const elementoLista = document.createElement("li");
        elementoLista.onclick = pantallaCompleta;
        elementoLista.innerHTML
        */
    };

    const cambiarColor = () =>
    {

        //en lugar de usar type color usamos un boton con un icono

        colorValor.click();
    };

    const inizializar = () =>
    {
        //vamos a ver los botones

        botones.find(boton => boton.id === "siguiente").onclick = imagenSiguiente;
        botones.find(boton => boton.id === "anterior").onclick = imagenAnterior;
        botones.find(boton => boton.id === "pantallaCompleta").onclick = pantallaCompleta;
        botones.find(boton => boton.id === "mostarMensaje").onclick = mostrarMensaje;
        botones.find(boton => boton.id === "cambiarColor").onclick = cambiarColor;

        // En general podemos manipular cualquier atributo 
        colorValor.onchange = () =>
        {
            mensajes.style.color = colorValor.value;
        };

        display.src = imagenes[0];
    };

    inicializar();


 }