const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
	  yearExpiracion = document.querySelector('#tarjeta .year');
	  ccv = document.querySelector('#tarjeta .ccv');

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 5; i++){
	let opcion = document.createElement('option');
	if(i == 1){
		opcion.value = "Cédula de ciudadania";
	}
	if(i == 2){
		opcion.value = "Tarjeta de identidad";
	}
	if(i == 3){
		opcion.value = "Registro civil";
	}
	if(i == 4){
		opcion.value = "Cédula de extranjeria";
	}
	if(i == 5){
		opcion.value = "Pasaporte";
	}
	
	opcion.innerText = opcion.value;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	if(i == yearActual){
		opcion.value = "Estudiante";
	}
	if(i == yearActual+1){
		opcion.value = "Profesor";
	}
	if(i == yearActual+2){
		opcion.value = "Empleado";
	}
	if(i == yearActual+3){
		opcion.value = "Directivo";
	}
	if(i == yearActual+4){
		opcion.value = "Estudiante colegio";
	}
	opcion.innerText = opcion.value ;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{9})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### ####';

		logoMarca.innerHTML = '';
	}


	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = '------';

	}

	mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});


(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);