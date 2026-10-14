# Agente.md - Documentación del Proyecto de Examen

## Portafolio Personal Multimedia en Angular 22

**Estudiante:** Jose Gabriel Parraga Alvarez  
**Materia:** Multimedia 1  
**Ubicación:** Cochabamba, Bolivia  
**Fecha:** Octubre 2026  
**Tecnología Base:** Angular 22 (Standalone Components)  
**Template de Referencia:** [iPortfolio - BootstrapMade](https://builder.bootstrapmade.com/demo/iPortfolio/)  

---

## 1. Descripción del Proyecto

El proyecto consiste en el desarrollo integral de una **Página Web Multimedia de Portafolio Personal** para **Jose Gabriel Parraga Alvarez**, utilizando la última versión de **Angular 22** con arquitectura basada en componentes independientes (*Standalone Components*).

El diseño toma como base el template profesional **iPortfolio de BootstrapMade**, integrando de manera nativa en Angular todas las secciones visuales, scripts interactivos (animaciones, tipografía dinámica, contadores numéricos, filtros de portafolio y carrusel de testimonios) y una **Zona Multimedia especializada** creada específicamente para la materia de Multimedia 1.

---

## 2. Entregables Cumplidos

| # | Entregable | Estado | Descripción |
|---|------------|--------|-------------|
| **1** | **Agente md** | **Completado** | Documentación exhaustiva del agente, arquitectura de código, componentes y manual de ejecución. |
| **2** | **Referencia iPortfolio** | **Completado** | Replicación fiel y modularizada en Angular 22 del template [https://builder.bootstrapmade.com/demo/iPortfolio/](https://builder.bootstrapmade.com/demo/iPortfolio/). |
| **3** | **Imágenes Personales** | **Completado** | Incorporación de las 3 fotografías personales de Jose Gabriel Parraga Alvarez en el avatar de perfil, hero background, sección sobre mí, portafolio y galería multimedia. |

---

## 3. Integración de Imágenes Personales y Correcciones Visuales

Se procesaron y vincularon las 3 fotografías personales de Jose Gabriel en ubicaciones estratégicas con encuadre optimizado:

1. **`profile-3.jpg` (Retrato sonriente / Foto de perfil):**
   - Utilizada en el **Header lateral** como foto de perfil circular (`.profile-img`).
   - Se aplicó `object-position: center 60% !important` para enfocar con precisión el rostro y sonrisa de Jose Gabriel dentro del círculo.
   - Utilizada en la tarjeta de vinilo giratorio de la **Zona Multimedia**.
   - Proyecto *"Retrato e Identidad Digital"* en el Portafolio.

2. **`profile-1.jpg` (Foto apoyado en ventanal / Plano 3/4):**
   - Utilizada en el **Hero Section** dentro de una **Tarjeta de Presentación 3D** con efecto glow (`.hero-card`), permitiendo ver la fotografía completa con nitidez sin recortes extraños.
   - Utilizada en el Portafolio bajo la categoría *"Producción Fotográfica Urbana"*.
   - Utilizada en la Galería Multimedia bajo *"Composición Vertical"*.

3. **`profile-2.jpg` (Foto en escaleras / Perspectiva arquitectónica):**
   - Utilizada en la sección **About (Sobre Mí)** con encuadre `object-position: center 60%`, esquinas redondeadas y sombra elegante.
   - Utilizada en el Portafolio bajo la categoría *"Composición y Perspectiva"*.
   - Utilizada en la Galería Multimedia bajo *"Perspectiva y Punto de Fuga"*.

### Corrección Crítica de Maquetación en Angular 22:
- **Problema detectado:** En el template original HTML/CSS, el selector `.header ~ main` desplazaba el contenido 300px a la derecha. Al migrar a Angular 22, `<header>` quedó encapsulado dentro de `<app-header>`, por lo que el selector hermano `.header ~ main` dejó de coincidir, provocando que el menú lateral fijo se superpusiera sobre los primeros 300px de la pantalla (cortando el texto del Hero y demás secciones).
- **Solución implementada:** Se configuró en `src/styles.css` la regla global `@media (min-width: 1200px) { main, .main, #footer, .footer { margin-left: 300px !important; } }`. De esta manera, el contenido principal se despliega de forma limpia y perfectamente alineado sin ningún traslape.

---

## 4. Arquitectura y Estructura de Componentes en Angular 22

El proyecto sigue las mejores prácticas modernas de Angular 22 (Standalone Components, nueva sintaxis `@for` / `@if`, modularidad estricta):

```
portafolio-jose/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/        # Barra lateral fija con foto, bio, navmenu y redes sociales
│   │   │   ├── hero/          # Portada principal con efecto de tipeo automático (Typed.js)
│   │   │   ├── about/         # Biografía y datos personales de Jose Gabriel
│   │   │   ├── stats/         # Métricas y contadores interactivos (PureCounter)
│   │   │   ├── skills/        # Barras de progreso animadas (HTML, CSS, JS, Angular, etc.)
│   │   │   ├── resume/        # Trayectoria académica en Ing. Multimedia y experiencia
│   │   │   ├── portfolio/     # Galería Isotope con filtros por categoría y zoom GLightbox
│   │   │   ├── multimedia/    # Módulo exclusivo de Multimedia (Audio Player, Video y Galería)
│   │   │   ├── services/      # Servicios profesionales en diseño web y multimedia
│   │   │   ├── testimonials/  # Slider de testimonios (Swiper)
│   │   │   ├── contact/       # Formulario reactivo de contacto y mapa de Cochabamba
│   │   │   └── footer/        # Copyright personalizado y botón scroll-to-top
│   │   ├── app.ts             # Componente raíz con orquestación de scrollspy y librerías
│   │   ├── app.html           # Ensamblaje ordenado de todas las secciones
│   │   └── app.css
│   ├── assets/
│   │   ├── css/               # Estilos principales del template iPortfolio
│   │   ├── img/               # Fotografías de Jose Gabriel y assets gráficos
│   │   └── vendor/            # Bootstrap, AOS, Swiper, GLightbox, Typed, Isotope
│   ├── index.html             # Configuración HTML5 optimizada para Angular 22
│   └── styles.css
├── angular.json               # Configuración de compilación y presupuestos de bundle
└── package.json               # Dependencias del proyecto Angular 22
```

---

## 5. Sección Especializada: Zona Multimedia

Para destacar el examen de la materia **Multimedia 1**, se implementó el componente `<app-multimedia>` con navegación por pestañas interactivas:

1. **Producción Sonora (Audio Player):**
   - Disco de vinilo con animación de giro continuo (`@keyframes spinRecord`).
   - Pistas de música y diseño sonoro creadas conceptualmente por Jose Gabriel.
   - Controles interactivos de Play/Pause con indicador visual de ondas ecualizadoras animadas (`.audio-wave`).
2. **Producción Audiovisual (Video Projects):**
   - Tarjetas de proyectos cinematográficos con badge de duración y efecto hover de zoom.
3. **Galería Personal:**
   - Visualización ampliada de la sesión fotográfica de Jose Gabriel con degradados de contraste.

---

## 6. Instrucciones de Instalación y Ejecución

### Requisitos:
- **Node.js**: v18 o v20+
- **Angular CLI**: v22.x

### Comandos de ejecución:

1. **Navegar a la carpeta del proyecto:**
   ```powershell
   cd "c:\trabajos U CBBA\multimedia 1\examen angular\portafolio-jose"
   ```

2. **Instalar dependencias (ya instaladas por el agente):**
   ```powershell
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```powershell
   ng serve
   ```
   Abrir en el navegador: [http://localhost:4200](http://localhost:4200)

4. **Compilar para producción:**
   ```powershell
   ng build
   ```
   Los archivos compilados listos para distribución se generan en `dist/portafolio-jose/browser/`.

---

## 7. Personalización Realizada

- **Nombre completo:** Jose Gabriel Parraga Alvarez
- **Profesión / Carrera:** Ingeniero en Sistemas / Desarrollador de Software
- **Correo Electrónico:** jose19200500627183@gmail.com
- **Instagram Oficial:** [https://instagram.com/jose_19500?xtok=a2c1Y2l3Z2UxZ244](https://instagram.com/jose_19500?xtok=a2c1Y2l3Z2UxZ244)
- **Ubicación:** Cochabamba, Bolivia
- **Identidad visual:** Paleta de colores oficial iPortfolio (`#149ddd` cian/azul) combinada con fondos oscuros `#040b14` y tipografías Raleway y Poppins.
- **Fondo de Portada:** Fotografía personal `profile-1.jpg` (reemplazando al modelo genérico del template).
