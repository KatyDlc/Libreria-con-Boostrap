let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: "swing",
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });
  
  
  let navbar = $(".navbar");
  
  $(window).scroll(function () {
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  });
  
  function mostrarNotificacion(event) {
    event.preventDefault();  // Prevenir el comportamiento predeterminado del formulario (recarga de página)
    
    var toast = document.getElementById("toast");
    
    // Mostrar la notificación
    toast.style.display = "block";
    
    // Ocultar la notificación después de 3 segundos
    setTimeout(function() {
      toast.style.display = "none";
    }, 3000);
  }
  