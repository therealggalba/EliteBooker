# 🤼 EliteBooker - El Universo en tus Manos

[![Build Status](https://img.shields.io/github/actions/workflow/status/therealggalba/EliteBooker/deploy.yml?branch=main)](https://github.com/therealggalba/EliteBooker/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

**EliteBooker** es una plataforma interactiva de gestión y simulación de universos de lucha libre profesional. Diseñada para entusiastas que buscan llevar sus partidas de WWE 2K o AEW Fight Forever al siguiente nivel, integrando inteligencia artificial avanzada para actuar como un "General Manager Assistant".

---

## 🔗 Enlaces de Interés

- **Despliegue en Vivo:** [https://therealggalba.github.io/EliteBooker/](https://therealggalba.github.io/EliteBooker/)
- **Documentación de Diapositivas:** [PRESENTATION.md](./PRESENTATION.md)

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **React 19** | Biblioteca principal para la interfaz de usuario, aprovechando las últimas mejoras de rendimiento. |
| **Vite** | Herramienta de construcción (build tool) para un desarrollo ultra rápido. |
| **TypeScript** | Tipado estático para un código robusto y mantenible. |
| **Web-LLM (@mlc-ai)** | Ejecución de modelos de lenguaje (LLM) localmente en el navegador para el GM Assistant. |
| **Dexie.js** | Capa de abstracción sobre IndexedDB para persistencia de datos local persistente y eficiente. |
| **SCSS Modules** | Estilizado modular y mantenible sin colisiones de nombres. |
| **i18next** | Sistema de internacionalización completo (Soporte ES/EN). |
| **Vitest** | Framework de pruebas unitarias y de componentes optimizado para Vite. |

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para configurar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/therealggalba/EliteBooker.git
    cd EliteBooker
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El proyecto estará disponible en `http://localhost:5173/`.

4.  **Ejecutar pruebas:**
    ```bash
    npm test
    ```

---

## 📁 Estructura del Proyecto

```text
EliteBooker/
├── public/             # Activos estáticos y presets de universos (JSON)
├── scripts/            # Scripts de utilidad (migración, generación de datos)
├── src/
│   ├── assets/         # Imágenes y recursos locales
│   ├── components/     # Componentes React reutilizables (GMChat, Newspaper, etc.)
│   ├── config/         # Configuración global del juego
│   ├── db/             # Lógica de persistencia con Dexie.js
│   ├── hooks/          # Hooks personalizados
│   ├── locales/        # Archivos de traducción (i18n)
│   ├── models/         # Definiciones de tipos e interfaces
│   ├── pages/          # Vistas principales (Landing, Universe, Show)
│   ├── styles/         # Estilos globales y tokens de diseño
│   ├── utils/          # Funciones de utilidad y lógica de negocio
│   ├── App.tsx         # Componente raíz y enrutamiento
│   └── main.tsx        # Punto de entrada de la aplicación
├── index.html          # Template HTML principal
└── vite.config.ts      # Configuración de Vite/Vitest
```

---

## ✨ Funcionalidades Principales

1.  **GM Assistant (IA Local):** Un asistente inteligente que utiliza modelos LLM ejecutados localmente para ayudarte a planear rivalidades, sugerir combates y gestionar tu roster.
2.  **Gestión de Universos:** Crea, importa y exporta universos completos de WWE, AEW o personalizados. Gestiona marcas (RAW, SmackDown), luchadores y campeonatos.
3.  **Motor de Simulación de Resultados:** Sistema dinámico para generar resultados de combates basados en estadísticas o azar, con soporte para tipos de combate especiales (Royal Rumble, Elimination Chamber).
4.  **Digital Newspaper:** Generación automática de reportajes visuales sobre los acontecimientos del último show, presentados en un formato de periódico digital premium.
5.  **Persistencia Local:** Tus datos nunca salen de tu navegador. Gracias a IndexedDB, tu partida se guarda automáticamente de forma segura y privada.

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

*Producido con la asistencia de **Antigravity AI**.*
