# 🤼 EliteBooker - El Universo en tus Manos

![EliteBooker Banner](./public/elitebooker_banner.png)

[![Build Status](https://img.shields.io/github/actions/workflow/status/therealggalba/EliteBooker/deploy.yml?branch=main)](https://github.com/therealggalba/EliteBooker/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

**EliteBooker** es la herramienta definitiva para la gestión de lucha libre profesional. Diseñada para entusiastas que buscan llevar un control total, visual y dinámico de sus promociones, ya sean recreaciones de WWE, AEW o universos totalmente originales.

---

## 🔗 Enlaces Rápidos

- 🌐 **Despliegue en Vivo:** [EliteBooker Web](https://therealggalba.github.io/EliteBooker/)
- 📊 **Presentación (Slides):** [Ver PRESENTATION.pdf](./PRESENTATION.pdf)

---

## ✨ Funcionalidades Principales

EliteBooker no es solo una base de datos, es una experiencia de GM (General Manager) completa:

- 🤖 **GM Assistant (AI Local):** Un asistente inteligente integrado que utiliza **Web-LLM** para ejecutar modelos de lenguaje directamente en tu navegador. Planifica rivalidades, recibe sugerencias de combates y gestiona tu roster sin que tus datos salgan de tu PC.
- 🌍 **Gestión de Universos:** Importa, exporta y crea universos completos. Soporte nativo para múltiples marcas (RAW, SmackDown, Dynamite), títulos y rosters dinámicos.
- 📰 **Digital Newspaper:** Al finalizar cada show, se genera automáticamente un periódico digital con acabados premium que resume los resultados, cambios de títulos y noticias destacadas.
- 🎲 **Simulación Avanzada:** Motor de resultados basado en estadísticas, momentum y azar, con soporte para estipulaciones especiales (Royal Rumble, Elimination Chamber, etc.).
- 🔒 **Privacidad Total:** Gracias a **Dexie.js** e **IndexedDB**, todos tus progresos se guardan localmente en tu navegador. Sin cuentas, sin rastreadores, solo tú y tu pasión.

---

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
| :--- | :--- |
| **Frontend** | [React 19](https://react.dev/) & [Vite](https://vitejs.dev/) |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) |
| **Modelos AI** | [Web-LLM (@mlc-ai)](https://webllm.mlc.ai/) |
| **Persistencia** | [Dexie.js](https://dexie.org/) (IndexedDB) |
| **Estilos** | SCSS Modules & Three.js (Visuals) |
| **i18n** | [i18next](https://www.i18next.com/) (Español / Inglés) |
| **Testing** | [Vitest](https://vitest.dev/) |

---

## 🚀 Instalación y Ejecución Local

Si deseas contribuir o ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/therealggalba/EliteBooker.git
   cd EliteBooker
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el entorno de desarrollo:**

   ```bash
   npm run dev
   ```

   Accede a `http://localhost:5173/` y ¡empieza a bookear!

4. **Ejecutar Tests:**

   ```bash
   npm test
   ```

---

## 📁 Estructura del Proyecto

```text
EliteBooker/
├── public/             # Activos estáticos, presets (JSON) y Banner
├── scripts/            # Herramientas de migración y generación de datos
├── src/
│   ├── assets/         # Recursos de diseño y multimedia
│   ├── components/     # Componentes React (GM Chat, Newspaper, UI Kit)
│   ├── config/         # Ajustes globales y lógica de juego
│   ├── db/             # Capa de datos local (Dexie)
│   ├── hooks/          # Hooks personalizados de lógica y estado
│   ├── locales/        # Traducciones (i18n)
│   ├── models/         # Tipos e Interfaces de TS
│   ├── pages/          # Vistas principales del sistema
│   ├── styles/         # Temas, variables y estilos globales
│   ├── utils/          # Lógica de negocio y funciones puras
│   └── main.tsx        # Punto de entrada
└── vite.config.ts      # Configuración de compilación y despliegue
```

*Desarrollado con la pasión de un fan de la lucha libre y la asistencia técnica de **Antigravity AI**.*
