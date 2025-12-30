# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Lista Zakupów (React)

Aplikacja webowa stworzona w React + Vite, umożliwiająca zarządzanie listą zakupów.  
Pozwala dodawać, usuwać oraz edytować elementy. Dodatkowo sprawdza duplikaty niezależnie od wielkości liter (np. „mąka” i „MĄKA”).

---

## Funkcje

- Dodawanie nowych elementów do listy
- Usuwanie elementów
- Edycja istniejących elementów
- Wykrywanie duplikatów (bez względu na wielkość liter)

---

## Struktura projektu

lista-zakupow/
├─ public/
│ └─ index.html
├─ src/
│ ├─ App.jsx
│ ├─ App.css
│ ├─ index.css
│ └─ main.jsx
├─ package.json
├─ package-lock.json
└─ vite.config.js

---

## Instalacja i uruchomienie lokalne

1. Sklonuj repozytorium:

git clone https://github.com/MChmielewski97/lista-zakupow.git

2. Przejdź do folderu projektu:

cd lista-zakupow/lista-zakupow

3. Zainstaluj zależności:

npm install

4. Uruchom serwer deweloperski:

npm run dev

5. Otwórz podany link w przeglądarce (zwykle http://localhost:XXXX)

Autor
Michał Chmielewski