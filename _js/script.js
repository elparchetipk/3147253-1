// Funcionalidad para el botón de "Volver arriba"
document.addEventListener('DOMContentLoaded', function () {
  // Seleccionar todos los enlaces "Volver arriba"
  const backToTopLinks = document.querySelectorAll('.back-to-top');

  // Agregar evento de clic a cada enlace
  backToTopLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  });

  // Resaltar la letra activa en la navegación
  const letterLinks = document.querySelectorAll('.letter-links a');
  const sections = document.querySelectorAll('.letter-section');

  // Función para verificar qué sección está visible
  function highlightActiveSection() {
    const scrollPosition = window.scrollY;

    // Recorrer todas las secciones y verificar si están en el viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionBottom = sectionTop + section.offsetHeight;

      // Si la posición de scroll está dentro de esta sección
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const targetId = section.getAttribute('id');

        // Quitar la clase activa de todos los enlaces
        letterLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${targetId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Ejecutar la función cuando se desplaza la página
  window.addEventListener('scroll', highlightActiveSection);

  // Animación suave para la navegación por letras
  letterLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    });
  });

  // Añadir estilos a los enlaces activos
  const addActiveStyles = () => {
    letterLinks.forEach((link) => {
      link.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.1)';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      });

      link.addEventListener('mouseleave', function () {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
  };

  addActiveStyles();

  // Mostrar/ocultar botón "Volver arriba" según la posición de desplazamiento
  const toggleBackToTopButtons = () => {
    backToTopLinks.forEach((button) => {
      const sectionTop = button.parentElement.offsetTop;
      const sectionBottom = sectionTop + button.parentElement.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        button.style.opacity = '1';
        button.style.visibility = 'visible';
      } else {
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
      }
    });
  };

  window.addEventListener('scroll', toggleBackToTopButtons);

  // Añadir efectos de transición a las tarjetas de términos
  const animateTerms = () => {
    const terms = document.querySelectorAll('.term');

    terms.forEach((term, index) => {
      // Añadir un pequeño retraso para un efecto escalonado
      term.style.transitionDelay = `${index * 50}ms`;
      term.style.opacity = '0';
      term.style.transform = 'translateY(20px)';

      // Usar Intersection Observer para animar cuando es visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              term.style.opacity = '1';
              term.style.transform = 'translateY(0)';
              observer.unobserve(term);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(term);
    });
  };

  animateTerms();
});
