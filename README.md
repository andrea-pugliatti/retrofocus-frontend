# Retrofocus - Guest Frontend

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

[English](#english)

---

### Descrizione del Progetto

**Retrofocus** è un'applicazione end-to-end completa per la gestione di un catalogo fotografico vintage (macchine fotografiche, obiettivi, innesti e fotografi). Questo repository contiene il **Frontend (Guest)**, sviluppato in React per permettere ai visitatori di esplorare la collezione in modo interattivo e intuitivo.

L'interfaccia è stata progettata per essere elegante e performante, consumando i dati forniti dalle API REST del backend.

### Caratteristiche Principali

- **Single Page Application (SPA)**: Navigazione fluida e veloce grazie a React Router.
- **Visualizzazione Catalogo**: Esplorazione completa di macchine fotografiche, obiettivi e fotografi con dettagli approfonditi.
- **Filtri Dinamici**: Sistema di filtraggio in tempo reale per trovare rapidamente gli elementi desiderati.
- **Design Responsive**: Interfaccia ottimizzata per tutti i dispositivi, dai desktop agli smartphone.
- **Integrazione API**: Comunicazione efficiente con il backend tramite fetch API e custom hooks.

### Struttura della Codebase

Il progetto segue una struttura organizzata per componenti e responsabilità:

- `src/components/`: Componenti UI riutilizzabili (Card, Loader, Footer, Header, Icone).
- `src/pages/`: Componenti principali che rappresentano le diverse viste dell'applicazione.
- `src/hooks/`: Hook personalizzati per la gestione della logica e del recupero dati (es. `useFetch`).
- `src/layouts/`: Definizione del layout globale dell'applicazione.
- `src/util/`: Classi di utilità, tipi TypeScript e funzioni helper per la gestione dei dati.
- `src/assets/`: Risorse statiche come immagini e fogli di stile globali.

### Tech Stack

- **React 19**
- **TypeScript 6**
- **Vite 8**
- **React Router 7**
- **CSS3 (Custom Properties & CSS Nesting)**
- **Oxlint / Oxfmt**

---

## English

### Project Overview

**Retrofocus** is a complete end-to-end application designed to manage a vintage photography catalog (cameras, lenses, mounts, and photographers). This repository hosts the **Frontend (Guest)**, developed in React to allow visitors to explore the collection in an interactive and intuitive way.

The interface was designed to be elegant and high-performing, consuming data provided by the backend's REST APIs.

### Key Features

- **Single Page Application (SPA)**: Smooth and fast navigation powered by React Router.
- **Catalog Browsing**: Full exploration of cameras, lenses, and photographers with detailed views.
- **Dynamic Filtering**: Real-time filtering system to quickly find specific items.
- **Responsive Design**: UI optimized for all devices, from desktops to smartphones.
- **API Integration**: Efficient communication with the backend using the Fetch API and custom hooks.

### Codebase Structure

The project follows a structure organized by components and responsibilities:

- `src/components/`: Reusable UI components (Cards, Loader, Footer, Header, Icons).
- `src/pages/`: Main components representing the different application views.
- `src/hooks/`: Custom hooks for logic and data fetching (e.g., `useFetch`).
- `src/layouts/`: Global application layout definition.
- `src/util/`: Utility classes, TypeScript types, and helper functions for data management.
- `src/assets/`: Static assets such as images and global stylesheets.

### Tech Stack

- **React 19**
- **TypeScript 6**
- **Vite 8**
- **React Router 7**
- **CSS3 (Custom Properties & CSS Nesting)**
- **Oxlint / Oxfmt**

---

## Guida all'avvio / Getting Started

### Prerequisiti / Prerequisites

- Node.js (v18 o superiore / or higher)
- pnpm (consigliato / recommended)

### Installazione / Installation

```bash
pnpm install
```

### Esecuzione in sviluppo / Development Mode

```bash
pnpm dev
```

### Build per la produzione / Production Build

```bash
pnpm build
```

### Docker

Per compilare ed avviare l'immagine Docker:
To build and run the Docker image:

```bash
# Build
docker build --build-arg VITE_BACKEND_URL=http://localhost:8080 -t retrofocus-frontend .

# Run
docker run -p 80:80 retrofocus-frontend
```
