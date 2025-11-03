# Scaffold for SPA Apps (WIP - template in construction)

A personal **opinionated boilerplate** for building modern React single-page applications.
It exists mainly to help me start projects faster and with less friction.
This template provides a solid starting point with common tools and configurations already set up.

## Features

Out of the box, this scaffold includes:

* ✅ **Linting & Formatting**

  * ESLint fully configured
  * Prettier integration
  * Commitlint + Husky for commit consistency

* ⚛️ **React Ecosystem**

  * React with the React Compiler enabled
  * @tanstack/react-router for routing

* 🌐 **API / Data Fetching**

  * @tanstack/react-query for caching and state management
  * [wretch](https://github.com/elbywan/wretch) for HTTP requests

* 🛠️ **Tooling**

  * Vite for fast builds & dev server
  * Vitest + Vitest browser for unit & integration tests
  * Cursor / Windsurf rules (WIP)
  * Browser debugger configured 

* 🎨 **Styling & UI**

  * Tailwind v4 CSS configured
  * Radix Themes out of the box

* 🔒 **Validation**

  * Zod for schema validation

* 🌐 **Browser Support**

  This scaffold supports the following minimum browser versions:

  * **Chrome** ≥ 107
  * **Edge** ≥ 107
  * **Firefox** ≥ 104
  * **Safari** ≥ 16

  Additional compatibility features:

  * 🧩 **Polyfills** configured (powered by [@vitejs/plugin-legacy](https://github.com/vitejs/vite-plugin-legacy))
  * 🔄 **Syntax transforms** configured (powered by [Vite](https://github.com/vitejs/vite))

## Architecture

This project’s structure is **inspired by [bulletproof-react](https://github.com/alan2207/bulletproof-react)**, with some personal adjustments.
The goal is to provide a maintainable, scalable, and opinionated structure for React apps.

*(WIP)*
