var cesar = cesar || (function(){
    var proceso = function(txt, desp, action){
    /**Primero necesito tener la matriz del alfabeto, 
     * hay que recorrer cada elemento del abecedario conforme a su orden*/
        var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j','k','l','m', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var l = abc.length;

        //necesitamo0s una funcion para tener la pocision que va a venir cpror parte de la llave p´rivada o password del usuario para cifrar

        return function(c){
            //vamos a saber la pocision
            var i = abc.indexOf(c.toLowerCase());
            /**Necesitamos saber donde estamos en la matriz, arreglo, y como la vamos a recorrer para cuando llegue al final poder aplicar el modulo */
            if(i != -1){
                //primero obtenemos la pocision
                var pos = i;
                //ahora tenemops que cifrar
                if(action){
                    //cifro
                    pos += desp;
                    //como se mueve
                    pos -= (pos >=1)?1:0;
                }else{
                    //descifrar
                    pos -= desp;
                    // movimiento
                    pos +=  (pos < 0)?1:0;
                }
                return abc[pos];
            }
            return c;
        };
    })();

    // renemos que saber que el texto este acorde al abecedario
    var re = (/[a-z]/ig);

    // una funcion que se necargue del intercambio
    return String(txt).replace(re, function(match){
        return replace(match);

    });

    };
    return{
        //vamos a codificar
        encode : function(txt, desp){
            return proceso(txt, desp, true);

        },

        decode : function(txt, desp){
            return proceso(txt, desp, false);
        }

    };
//fin de toda la funcion

})();

//funcion del cifrado
function cifrar(){
    document.getElementById('resultado').innerHTML = cesar.encode(document.getElementById("cadena").value, 3)
}

function descifrar(){
    document.getElementById('resultado').innerHTML = cesar.encode(document.getElementById("cadena").value, 3)
}