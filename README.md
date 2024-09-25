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

# Estructura del Proyecto TROTAPP-WEB

```
TROTAPP-WEB/
├── node_modules/
├── public/
│   ├── locales/
│   └── vite.svg
├── src/
│   ├── app/
│   │   ├── mappers/
│   │   └── use-cases/
│   ├── assets/
│   ├── core/
│   │   ├── interfaces/
│   │   ├── models/
│   │   └── types/
│   ├── infrastructure/
│   │   ├── config/
│   │   │   ├── i18next.ts
│   │   │   └── z.ts
│   │   ├── interfaces/
│   │   └── services/
│   ├── presentation/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── validations/
│   ├── store/
│   └── utils/
├── .env
├── .env.template
├── App.tsx
├── index.css
├── main.tsx
├── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Descripción de la Estructura

### Carpetas principales

- **node_modules/**: Contiene las dependencias del proyecto.
- **public/**: Archivos estáticos y recursos públicos.
  - **locales/**: Probablemente contiene archivos de internacionalización.
  - **vite.svg**: Logo de Vite.
- **src/**: Código fuente principal de la aplicación.

### Estructura dentro de src/

- **app/**: Lógica principal de la aplicación.
  - **mappers/**: Funciones para mapear datos entre diferentes formatos.
  - **use-cases/**: Implementación de casos de uso de la aplicación.
- **assets/**: Recursos estáticos como imágenes, fuentes, etc.
- **core/**: Núcleo de la aplicación.
  - **interfaces/**: Definiciones de interfaces.
  - **models/**: Modelos de datos.
  - **types/**: Definiciones de tipos personalizados.
- **infrastructure/**: Configuración y servicios de infraestructura.
  - **config/**: Archivos de configuración.
    - **i18next.ts**: Configuración de internacionalización.
    - **z.ts**: Posiblemente configuración de Zod para validación.
  - **interfaces/**: Interfaces relacionadas con la infraestructura.
  - **services/**: Servicios de la aplicación.
- **presentation/**: Capa de presentación (UI).
  - **components/**: Componentes reutilizables.
  - **hooks/**: Hooks personalizados de React.
  - **layout/**: Componentes de diseño.
  - **pages/**: Componentes de página.
  - **routes/**: Definición de rutas.
  - **validations/**: Esquemas o funciones de validación.
- **store/**: Gestión del estado global (posiblemente Redux).
- **utils/**: Funciones y utilidades generales.

### Archivos en la raíz del proyecto

- **.env**: Archivo de variables de entorno.
- **.env.template**: Plantilla para el archivo de variables de entorno.
- **App.tsx**: Componente principal de React.
- **index.css**: Estilos CSS globales.
- **main.tsx**: Punto de entrada principal de la aplicación React.
- **vite-env.d.ts**: Declaraciones de tipos para Vite.
- **.gitignore**: Especifica archivos y carpetas ignorados por Git.
- **eslint.config.js**: Configuración de ESLint para linting de código.
- **index.html**: Página HTML principal.
- **LICENSE**: Archivo de licencia del proyecto.
- **package-lock.json**: Bloqueo de versiones de dependencias.
- **package.json**: Configuración y dependencias del proyecto.
- **postcss.config.js**: Configuración de PostCSS.
- **README.md**: Documentación principal del proyecto.
- **tailwind.config.js**: Configuración de Tailwind CSS.
- **tsconfig.app.json**: Configuración de TypeScript específica para la aplicación.
- **tsconfig.json**: Configuración principal de TypeScript.
- **tsconfig.node.json**: Configuración de TypeScript para Node.js.
- **vite.config.ts**: Configuración de Vite.

Esta estructura sugiere una arquitectura bien organizada, separando claramente las responsabilidades entre la lógica de negocio, la infraestructura y la presentación. El proyecto utiliza tecnologías modernas como React, TypeScript, Vite, y Tailwind CSS, lo cual es ideal para una aplicación web escalable y mantenible.

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
