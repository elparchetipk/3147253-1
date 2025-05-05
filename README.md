# Glosario de Términos de Tecnologías de la Información

Un sitio web moderno e intuitivo que proporciona un glosario completo de términos relacionados con las tecnologías de la información, organizado alfabéticamente y dividido en dos páginas para facilitar la navegación.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Características

- **Diseño responsivo**: Se adapta perfectamente a dispositivos móviles, tablets y escritorio
- **Navegación intuitiva**: 
  - División alfabética en dos páginas (A-M y N-Z)
  - Índice de letras fijo en la parte superior
  - Botones "Volver arriba" en cada sección
- **Efectos visuales modernos**: 
  - Animaciones suaves al desplazarse
  - Efectos de elevación para las tarjetas de términos
  - Transiciones para una experiencia de usuario mejorada
- **Rendimiento optimizado**: 
  - CSS basado en variables para facilitar la personalización
  - JavaScript no bloqueante

## 🚀 Instalación

1. Clona este repositorio o descarga los archivos:
   ```
   git clone https://github.com/tu-usuario/glosario-ti.git
   ```

2. No se requieren dependencias adicionales ni compilación. Este es un proyecto de HTML, CSS y JavaScript puro.

3. Abre el archivo `index.html` en tu navegador para ver el sitio web.

## 🔍 Estructura del proyecto

```
glosario-ti/
│
├── index.html          # Página principal (términos A-M)
├── n-z.html            # Segunda página (términos N-Z)
├── styles.css          # Estilos CSS para todo el sitio
└── script.js           # Funcionalidades JavaScript
```

### Archivos principales:

- **index.html**: Contiene la página principal con los términos desde la A hasta la M.
- **n-z.html**: Contiene la segunda página con los términos desde la N hasta la Z.
- **styles.css**: Define todos los estilos visuales del sitio web.
- **script.js**: Implementa las funcionalidades interactivas como navegación suave, efectos visuales y animaciones.

## 💻 Uso

El sitio web está diseñado para ser intuitivo y fácil de usar:

1. Navega entre las dos páginas principales usando los enlaces "A - M" y "N - Z" en la parte superior.
2. Utiliza el índice alfabético fijo para saltar directamente a cualquier letra.
3. Haz clic en "Volver arriba" para regresar rápidamente al inicio de la página.
4. Explora los términos organizados en tarjetas con definiciones claras y concisas.

## 🎨 Personalización

El proyecto está diseñado para ser fácilmente personalizable:

### Modificar los colores y estilos

Edita las variables CSS en el archivo `styles.css`:

```css
:root {
    --color-primary: #2563eb;
    --color-primary-dark: #1d4ed8;
    --color-secondary: #4f46e5;
    --color-accent: #7c3aed;
    /* Más variables... */
}
```

### Añadir nuevos términos

Para añadir nuevos términos al glosario:

1. Identifica la letra correspondiente al término
2. Localiza la sección con id `seccion-X` (donde X es la letra)
3. Añade un nuevo bloque con la estructura:

```html
<div class="term">
    <h3>Nombre del Término</h3>
    <p>Definición del término que deseas añadir al glosario.</p>
</div>
```

## 🔧 Posibles mejoras

El proyecto puede ampliarse con las siguientes funcionalidades:

- **Buscador de términos**: Implementar un campo de búsqueda para encontrar términos específicos rápidamente.
- **Modo oscuro**: Añadir la posibilidad de alternar entre tema claro y oscuro.
- **Categorías temáticas**: Clasificar los términos por categorías además del orden alfabético.
- **Sistema de filtrado**: Permitir filtrar términos por categoría, relevancia o fecha de actualización.
- **Base de datos**: Migrar el contenido estático a una base de datos para facilitar la gestión y actualización.
- **Exportar términos**: Funcionalidad para exportar términos en formato PDF o imprimirlos.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE.md para más detalles.

## 👥 Contribuir

Las contribuciones son bienvenidas. Si deseas mejorar este glosario:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
5. Sube la rama (`git push origin feature/nueva-funcionalidad`)
6. Abre un Pull Request

---

Desarrollado con ❤️ para la comunidad TI.