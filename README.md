<h1 align="center">
SHOP
</h1>
<p align="center">
SHOP es tu tienda en línea todo-en-uno, donde encontrarás una amplia variedad de productos, desde artículos de tecnología, moda, hogar y más. Nos enorgullece ofrecer una experiencia de compra cómoda, rápida y segura. En SHOP, creemos que la variedad es la clave, por eso tenemos de todo.
</p>
<div align="center">
    <img  width="400" src="assets/logos/logo-shop-main.svg">
</div>

## 1. Tecnologías

Este proyecto utiliza las siguientes tecnologías para su desarrollo:

- **JavaScript**: Lenguaje de programación para la lógica del sitio y la interacción del usuario.
- **CSS**: Estilos para el diseño y la apariencia visual del e-commerce.
- **HTML**: Estructura básica y contenido de las páginas web.

Estas tecnologías permiten crear una experiencia dinámica y atractiva para el usuario final.

## 2. Estructura del Proyecto

La estructura de carpetas de este proyecto es la siguiente:

```text

├── assets
|  ├── icons
|  |  ├── category
|  |  ├── social-media
|  ├── images
|  ├── logos
├── src
|  ├── css
|  ├── js
|  |  |  ├── components
|  |  |  ├── modules
|  |  |  ├── services
|  |  |  ├── template
|  |  |  ├── utils
|  ├── main.js
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
├── index.html
```
### `assets`
Contiene los archivos estáticos que no cambian durante la ejecución del sitio. Estos incluyen imágenes, iconos y logos, que generalmente se cargan en el frontend.

### `assets/icons`
Guarda los iconos de la aplicación.

### `assets/icons/category`
Iconos relacionados con categorías de productos o secciones del sitio.

### `assets/icons/social-media`
Iconos para enlaces a redes sociales, como Facebook, Twitter, Instagram, etc.

### `src/`
Contiene el código fuente del proyecto. Aquí es donde resides las funcionalidades principales del sitio web.

### `src/css`
Contiene los archivos de estilos CSS del sitio.

### `src/js`
Contiene los archivos de JavaScript que manejan la lógica de la aplicación. Está organizado en subcarpetas para una mayor claridad

### `src/js/components`
contiene los fragmentos modulares de la interfaz de usuario (UI) de la aplicación. Cada componente es responsable de la creación dinámica del DOM y la renderización de templates utilizando JavaScript puro.

### `src/js/modules`
 se utiliza para contener los servicios que gestionan la lógica de negocio de la aplicación, pero que no dependen de servicios externos.

### `src/js/services`
Aquí se agrupan los archivos encargados de interactuar con servicios externos o APIs, como los servicios de productos, categorías, autenticación, etc.

### `src/js/template`
Lógica para renderizar productos en el DOM
 Este directorio contiene plantillas o configuraciones del sitio que se utilizan para estructurar páginas de manera reutilizable.
 
### `src/js/utils`
Esta carpeta incluye funciones de utilidad que pueden ser utilizadas en cualquier parte de la aplicación

### `main.js`
Este es el archivo de entrada principal para el JavaScript de tu aplicación.

### `README.md`
Contiene información sobre el proyecto, instrucciones de instalación, uso y cualquier otra información relevante para los desarrolladores que trabajen en el proyecto o para aquellos que quieran contribuir.

### `package.json`
Es el archivo donde se configuran las dependencias del proyecto, scripts de desarrollo, configuración de paquetes, etc.

### `package-lock.json`
Este archivo asegura que las mismas versiones de las dependencias se instalen en diferentes entornos. Si usas npm, este archivo se genera automáticamente al instalar dependencias y ayuda a evitar discrepancias en las versiones de las bibliotecas.

#### `.gitignore`
Este archivo le dice a Git qué archivos o directorios deben ser ignorados, como las dependencias del proyecto o archivos temporales generados durante el desarrollo.

### `index.html`
El archivo HTML principal de la aplicación. Es el que contiene la estructura básica del sitio web, los vínculos a los archivos CSS y JS, y es cargado cuando el usuario visita el sitio web.

## 3. Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**

   ```bash
   git clone <url-del-repositorio>
    ```
2. **Navega a la carpeta del proyecto:**

   ```bash
   cd BOOTCAMP--FRONTEND-REACT-NTT
3. **Cambia de rama:**

   ```bash
   git checkout feature/javascript 
    ```
4. **Instala las dependencias usando npm:**

    Este proyecto utiliza Vite como herramienta de construcción y servidor de desarrollo. Para instalar las dependencias, ejecuta:

   ```bash
   npm install
    ```
4. **Inicia el servidor de desarrollo:**

    Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo con el siguiente comando:

   ```bash
   npm run dev
    ```
## 4. Uso del Proyecto

Este e-commerce ofrece una experiencia intuitiva y fácil para encontrar y comprar productos. A continuación, te explicamos cómo utilizar sus principales funcionalidades:

### **Explorar Productos**

En la página principal, puedes navegar por todos los productos disponibles. Estos están organizados de manera clara y categorizada para que puedas encontrar lo que buscas rápidamente.

### **Búsqueda por Nombre**

Utiliza la barra de búsqueda ubicada en la parte superior de la página para buscar productos específicos por su nombre. Simplemente escribe el nombre del producto que deseas encontrar, y el sistema mostrará las coincidencias en tiempo real.

### **Filtrar por Categoría**

Puedes filtrar los productos según diferentes categorías para reducir los resultados y ver solo los productos relacionados con lo que más te interesa. Para ello, selecciona una categoría desde el carrusel.

### **Agregar al Carrito**

Cuando encuentres un producto que te guste, haz clic en el botón **"Add to cart"**. El producto será añadido a tu carrito de compras y podrás continuar explorando más productos.

---

Estas funcionalidades están diseñadas para facilitar la navegación y hacer la experiencia de compra más rápida y agradable.J




<br>
<br>
<p align="center">Gracias por visitar mi repositorio ⭐✨</p>