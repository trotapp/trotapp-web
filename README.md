# React + TypeScript + Vite

# TrotApp Web

Este proyecto es una aplicación web desarrollada con **Vite**, **React** y **TypeScript**. Aquí encontrarás los pasos necesarios para configurar y ejecutar el entorno de desarrollo.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu sistema:

- **Node.js** (versión 16 o superior): [Descargar Node.js](https://nodejs.org/)

- **npm** (administrador de paquetes de Node.js, generalmente incluido con la instalación de Node.js)

Puedes verificar si tienes Node.js y npm instalados ejecutando los siguientes comandos en tu terminal:

```bash

node  -v

npm  -v

```

# Pasos de instalación

1.  **Clona el repositorio** en tu máquina local:

```bash

git clone https://github.com/tu_usuario/trotapp-web.git

cd trotapp-web



```

2.  **Instala las dependencias**:

Ejecuta el siguiente comando para instalar todas las dependencias del proyecto que se encuentran en el archivo `package.json`:

```bash

npm install

```

3.  **Ejecuta el servidor de desarrollo**:

Después de que las dependencias se instalen correctamente, puedes iniciar el entorno de desarrollo con el siguiente comando:

```bash

npm run dev

```

Esto iniciará Vite y abrirá la aplicación en tu navegador. De forma predeterminada, estará disponible en la URL `http://localhost:5173/`.

## Scripts disponibles

En el archivo `package.json` se definen los siguientes scripts:

- `npm run dev`: Inicia el servidor de desarrollo de Vite.

- `npm run build`: Compila el proyecto para producción.

- `npm run lint`: Ejecuta ESLint para verificar la calidad del código.

- `npm run preview`: Inicia un servidor para previsualizar la aplicación después de compilarla.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura básica:

```

trotapp-web/

├── src/ # Código fuente de la aplicación

├── public/ # Archivos estáticos públicos

├── index.html # Archivo HTML principal

├── package.json # Configuración de dependencias y scripts

├── tsconfig.json # Configuración de TypeScript

└── vite.config.ts # Configuración de Vite

```

## Tecnologías utilizadas

- **Vite**: Un build tool ultrarrápido y ligero.

- **React**: Librería de JavaScript para construir interfaces de usuario.

- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.

- **Tailwind CSS**: Framework de CSS utilitario.

- **Zod**: Biblioteca para la validación de esquemas de datos.

- **ESLint**: Herramienta para encontrar y corregir problemas en el código.

- **Axios**: Cliente HTTP basado en promesas.

- **React Hook Form**: Gestión de formularios en React.

## Personalización

Este proyecto incluye **Tailwind CSS** y **daisyUI** para una rápida creación de estilos. Puedes personalizar el diseño modificando los archivos de configuración de Tailwind (`tailwind.config.js`) y daisyUI.
