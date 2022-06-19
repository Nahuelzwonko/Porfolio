const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');//funcion llama a objeto remarcado abajo
const contenedorLight = document.querySelector('.imagen-light');

imagenes.forEach(imagen => { //crea nueva funcion indicando posterior de imagen 
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src')) //agrnadamiento de la imagen 
    })
})
contenedorLight.addEventListener('click', (e) => { //fincion demarcada por hover al proceder al click
    if (e.target !== imagenesLight) {
        contenedorLight.classList.remove('show');
        imagenesLight.classList.remove('showImage');
    }
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.add('show');
    imagenesLight.classList.add('showImage');
}
$('.js-input').keyup(function () {
    if ($(this).val()) {
        $(this).addClass('not-empty');
    } else {
        $(this).removeClass('not-empty');
    }
});
