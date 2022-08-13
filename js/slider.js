'use strict'

const slider = document.querySelector('.carrusel')
const punto = document.querySelectorAll('.opcion')

// Cuando se haga click en el punto
    // Saber la posicion del punto
    // Aplicar el transform translateX al slider-container
    // Quitar la clase activo de TODOS los puntos
    // Añadir la clase activo al punto que hacemos click



//recorrer todos los puntos
punto.forEach( (cadaPunto, i) => {
    //Asignar un click a cada punto
    punto[i].addEventListener('click',()=>{

        //Guardar la posicion de ese PUNTO
        let posicion = i
        //Calcular el espacio que debe desplazarse el slider
        let operacion = posicion * -50

        //Movemos el slider
        slider.style.transform = `translateX(${ operacion }%)`

        //Recorremos todos los puntos
        punto.forEach(( cadaPunto, i)=>{

            //Quitamos la clase activo a todos los puntos
            punto[i].classList.remove('activo')
        })
        //Añadir la clase activo al punto que se haceclik
        punto[i].classList.add('activo')
    })
});

