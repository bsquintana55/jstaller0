'use strict'

const img = document.querySelector('.slider-img')
const slide = document.querySelectorAll('.slide')

// Cuando se haga click en el punto
    // Saber la posicion del punto
    // Aplicar el transform translateX al slider-container
    // Quitar la clase activo de TODOS los puntos
    // Añadir la clase activo al punto que hacemos click



//recorrer todos los puntos
slide.forEach( (cadaPunto, i) => {
    //Asignar un click a cada punto
    slide[i].addEventListener('click',()=>{

        //Guardar la posicion de ese PUNTO
        let position = i
        //Calcular el espacio que debe desplazarse el slider
        let operation = position * -100

        //Movemos el slider
        img.style.transform = `translateX(${ operation }%)`

        //Recorremos todos los puntos
        slide.forEach(( cadaPunto, i)=>{

            //Quitamos la clase activo a todos los puntos
            slide[i].classList.remove('activo_slide')
        })
        //Añadir la clase activo al punto que se haceclik
        slide[i].classList.add('activo_slide')
    })
});


