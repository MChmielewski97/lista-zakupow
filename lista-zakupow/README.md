Zaliczenie przedmiotu "Programowanie JavaScript"

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

5. Otwórz podany link w przeglądarce (zwykle http://localhost:XXXX). W razie jakichkolwiek problemów z odpalaniem aplikacji, upewnij się, że npm jest w wersji 10.9.4, a node w wersji v22.11.1

Autor
Michał Chmielewski
