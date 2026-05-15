# Chocokraff — Catálogo Web Premium

**Sitio web de catálogo para la marca de chocolates artesanales Chocokraff**, orientado a campañas estacionales con experiencia visual premium, navegación por colecciones y contacto directo vía WhatsApp.

---

## Descripción

Chocokraff es una landing page de catálogo digital diseñada para presentar colecciones de chocolates artesanales en fechas especiales. La primera campaña activa corresponde a la **Edición Especial Día de la Mujer**, con jarros personalizados y detalles de lujo. El sistema está pensado para escalar fácilmente hacia nuevas campañas (Semana Santa, Día del Trabajo, Día de la Madre, entre otras).

---

## Características

- Loader animado con el nombre de la marca en SVG
- Hero de pantalla completa con imagen de fondo, overlay y animaciones
- Sistema de navegación de campañas en overlay a pantalla completa
- Catálogo de productos inyectado dinámicamente desde un archivo de datos en JavaScript
- Modal de producto con imagen, descripción, precio y enlace directo a WhatsApp
- Fondo con efecto parallax en la sección de catálogo
- Botones de contacto y pedido integrados con WhatsApp
- Diseño responsive con tipografías premium (Playfair Display, Outfit, Pacifico)
- Footer con información de contacto y año dinámico

---

## Estructura del proyecto

```
chocokraff/
 ├── index.html
 ├── css/
 │   ├── variables.css       # Variables de diseño (colores, fuentes, espaciados)
 │   └── styles.css          # Estilos principales
 ├── js/
 │   ├── data.js             # Datos de productos (catálogo)
 │   └── app.js              # Lógica de la aplicación (modal, menú, parallax)
 └── assets/
     └── images/             # Imágenes del hero, productos y campañas
```

---

## Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- HTML5 semántico
- CSS3 con variables personalizadas y animaciones
- JavaScript vanilla (sin frameworks)
- Google Fonts — Playfair Display · Outfit · Pacifico
- Integración con WhatsApp Business API (`wa.me`)

---

## Campañas

El sistema de navegación soporta múltiples campañas estacionales. Las actualmente planificadas son:

| Campaña | Estado |
|---------|--------|
| Día de la Mujer | Activa |
| Semana Santa | Próximamente |
| Día del Trabajo | Próximamente |
| Día de la Madre | Próximamente |

Para añadir una nueva campaña, basta con agregar los productos correspondientes en `js/data.js` y actualizar el overlay de navegación en `index.html`.

---



---

*© Chocokraff. Todos los derechos reservados.*
