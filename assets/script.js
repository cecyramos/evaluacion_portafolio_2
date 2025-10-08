$(document).ready(function() {

  // Navegación activa con scroll
  $(window).on('scroll', function() {
    let scrollPos = $(window).scrollTop() + 100;

    $('section').each(function(index) {
      let sectionTop = $(this).offset().top;
      let sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        $('.side-nav a').removeClass('active');
        $('.side-nav a').eq(index).addClass('active');

        $('.nav-link').removeClass('active');
        $('.nav-link').eq(index).addClass('active');
      }
    });

    // Mostrar botón scroll top
    if (scrollPos > 300) {
      $('#btnScrollTop').fadeIn();
    } else {
      $('#btnScrollTop').fadeOut();
    }
  });

  // Smooth scroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    let target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 800);
      $('.navbar-collapse').collapse('hide');
    }
  });

  // Botón volver arriba
  $('#btnScrollTop').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
  });

  // Validación formulario
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();

    let nombre = $('input[name="nombre"]').val();
    let email = $('input[name="email"]').val();
    let mensaje = $('textarea[name="mensaje"]').val();

    if (nombre.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres');
      return;
    }

    if (mensaje.length < 10) {
      alert('El mensaje debe tener al menos 10 caracteres');
      return;
    }

    alert('¡Gracias ' + nombre + '! Tu mensaje ha sido enviado.');
    $(this)[0].reset();
  });

  // Validación email en tiempo real
  $('input[type="email"]').on('blur', function() {
    let email = $(this).val();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
      $(this).addClass('is-invalid');
      alert('Por favor ingresa un email válido');
    } else {
      $(this).removeClass('is-invalid');
    }
  });

});