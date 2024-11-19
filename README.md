<h1 align="center">
SHOP
</h1>
<p align="center">
SHOP es tu tienda en línea todo-en-uno, donde encontrarás una amplia variedad de productos, desde artículos de tecnología, moda, hogar y más. Nos enorgullece ofrecer una experiencia de compra cómoda, rápida y segura. En SHOP, creemos que la variedad es la clave, por eso tenemos de todo.
</p>
<div align="center">
    <img  width="400" src="assets/logos/logo-shop-main.svg">
</div>

## Índice

1. [Tecnologías](#1-tecnologías)
2. [Estructura del Proyecto](#2-estructura-del-proyecto)
3. [Instalación](#3-instalación)
4. [Uso del Proyecto](#4-uso-del-proyecto)

---

## 1. Tecnologías

Este proyecto utiliza las siguientes tecnologías para su desarrollo:

- **Typescript**: Lenguaje de programación para la lógica del sitio y la interacción del usuario.
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
|  ├── ts
|  |  |  ├── components
|  |  |  ├── models
|  |  |  ├── modules
|  |  |  ├── services
|  |  |  ├── template
|  |  |  ├── utils
|  ├── main.ts
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
├── index.html
```

### `assets`
Contiene los archivos estáticos que no cambian durante la ejecución del sitio. Estos incluyen imágenes, iconos y logos.

### `assets/icons`
Guarda los iconos de la aplicación.

### `assets/icons/category`
Iconos relacionados con categorías de productos o secciones del sitio.

### `assets/icons/social-media`
Iconos para enlaces a redes sociales.

### `src/`
Contiene el código fuente del proyecto. Aquí es donde resides las funcionalidades principales del sitio web.

### `src/css`
Contiene los archivos de estilos CSS del sitio.

### `src/ts`
Contiene los archivos de Typescript que manejan la lógica de la aplicación. Está organizado en subcarpetas para una mayor claridad

### `src/ts/components`
Nos sirve para manejar el DOM, trabajar con los templates y rederizarlos.

### `src/ts/modules`
Alberga los servicios que contienen la lógica interna de la aplicación, enfocándose en la funcionalidad que no requiere interacción con servicios externos

### `src/ts/services`
Aquí se agrupan los archivos encargados de interactuar con servicios externos o APIs, como los servicios de productos, categorías, autenticación, etc.

### `src/ts/template`
Este directorio contiene plantillas o configuraciones del sitio que se utilizan para estructurar páginas de manera reutilizable.

### `src/ts/utils`
Esta carpeta incluye funciones de utilidad que pueden ser utilizadas en cualquier parte de la aplicación.

### `src/ts/main.ts`
Este es el archivo de entrada principal para Typescript


#### `.gitignore`
Este archivo le dice a Git qué archivos o directorios deben ser ignorados, como las dependencias del proyecto o archivos temporales generados durante el desarrollo.

### `index.html`
El archivo HTML principal de la aplicación. Es el que contiene la estructura básica del sitio web, los vínculos a los archivos CSS y Typescript, y es cargado cuando el usuario visita el sitio web.

### `package-lock.json`
Este archivo asegura que las mismas versiones de las dependencias se instalen en diferentes entornos.

### `package.json`
Es el archivo donde se configuran las dependencias del proyecto, scripts de desarrollo, configuración de paquetes, etc.

### `README.md`
Contiene información sobre el proyecto, instrucciones de instalación, uso y cualquier otra información relevante para los desarrolladores.

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
   git checkout feature/typescript
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

SHOP ofrece una experiencia intuitiva y fácil para encontrar y comprar productos. A continuación, te explicamos cómo utilizar sus principales funcionalidades:

### **Explorar Productos**

En la página principal, puedes navegar por todos los productos disponibles. Estos están organizados de manera clara y categorizada para que puedas encontrar lo que buscas rápidamente.

### **Búsqueda por Nombre**

Utiliza la barra de búsqueda ubicada en la parte superior de la página para buscar productos específicos por su nombre. Simplemente escribe el nombre del producto que deseas encontrar, y el sistema mostrará las coincidencias.

### **Filtrar por Categoría**

Puedes filtrar los productos según diferentes categorías para reducir los resultados y ver solo los productos relacionados con lo que más te interesa. Para ello, selecciona una categoría desde el carrusel.

### **Agregar al Carrito**

Cuando encuentres un producto que te guste, haz clic en el botón **"Add to cart"**. El producto será añadido a tu carrito de compras y podrás continuar explorando más productos.

---

Estas funcionalidades están diseñadas para facilitar la navegación y hacer la experiencia de compra más rápida y agradable.

<br>
<br>
<br>
<p align="center">Gracias por visitar mi repositorio ⭐✨</p>