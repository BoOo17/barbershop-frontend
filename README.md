# Barbershop Frontend

Ez a projekt a **Barbershop időpontfoglaló rendszer frontend része**, React és Vite technológiával készült.  
Cél: felhasználók regisztrációja, bejelentkezése, időpontfoglalás és lemondás, valamint a szolgáltatások és barberek megtekintése.

---

## 📚 Használt technológiák és bővítmények

- [React](https://reactjs.org/) – Felhasználói felület készítése
- [Vite](https://vitejs.dev/) – Fejlesztői szerver és build tool
- [React Router DOM](https://reactrouter.com/) – Oldalak közötti navigáció (`npm install react-router-dom`)
- [React Icons](https://react-icons.github.io/react-icons/) – Ikonok a felületen (`npm install react-icons`)
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) – Betűtípus a designhoz
- CSS modulok – Egyedi stílusok az egyes komponensekhez
- Esetleges fejlesztői bővítmények: ESLint, Prettier (kódstílus)

---

## ⚡ Telepítés és futtatás

1. Klónozd a repository-t:
```bash
git clone https://github.com/<felhasználóneved>/barbershop-frontend.git

2. Lépj be a mappába

cd barbershop-frontend

3. Telepítsd a függőségeket

npm install

4. Futtasd a fejlszetői felületet

npm run dev

Struktúra

barbershop-frontend/
│
├─ src/
│  ├─ components/       # Újrafelhasználható komponensek
│  │   ├─ Header.jsx     # Fejléc, menüpontok, hover effektek
│  │   ├─ AuthModal.jsx  # Belépés és regisztráció popup
│  │   └─ *.css          # Komponens specifikus stílusok
│  │
│  ├─ pages/            # Oldalak
│  │   ├─ Főoldal.jsx     # Kezdőlap
│  │   ├─ Barberek.jsx    # Barber profilok
│  │   ├─ Szolgaltatasok.jsx # Szolgáltatások és árak
│  │   ├─ Képek.jsx       # Galéria
│  │   ├─ Rólunk.jsx      # Rólunk oldal
│  │   └─ Elérhetőségek.jsx # Kapcsolat oldal
│  │
│  ├─ App.jsx           # Fő komponens, routing
│  ├─ main.jsx          # Belépési pont
│  └─ index.css          # Globális stílusok
│
├─ package.json          # Függőségek és script-ek
├─ package-lock.json     # Függőség verziók rögzítése
├─ vite.config.js        # Vite konfiguráció
└─ README.md             # Projekt dokumentáció

                 Függőségek (package-ek)

react-router-dom – Oldalak közötti navigáció

react-icons – Ikonok a felületen

vite – Fejlesztői szerver

react és react-dom – React alap csomagok

eslint, prettier – opcionális kódstílus ellenőrzés

Ezek mind megtalálhatók a package.json fájlban.
npm install után automatikusan települnek.

                 Clone a projekthez:

git clone https://github.com/<felhasználóneved>/barbershop-frontend.git

 
Új változtatások feltöltése:

git add .
git commit -m "Leíró üzenet"
git push origin main


Frissítések letöltése:

git pull origin main


Profi megoldás: Branch-ek használata

Mindenki külön ágon dolgozik (feature/regisztracio)

Pull request a main ágra → merge


                Alap funkciók és eddig elkészült dolgok

Header: Menü gombok (Főoldal, Barberek, Szolgáltatások, Képek, Rólunk, Elérhetőségek)

Hover effekt a gombokon (kivéve a Fiók ikon)

Bal oldalon a „BarberShop” felirat

Főoldal:

„Foglalj időpontot” nagy gomb → popup „Bejelentkezés szükséges”

„Időpont lemondása” kisebb gomb → popup

Popupban link a Bejelentkezés felülethez

AuthModal:

Belépés és regisztrációs űrlap popupban

Vezeték- és Keresztnév külön mező a regisztrációnál

„Nem vagyok robot” checkbox → csak pipálás után aktív a Belépés gomb

Oldalak:

Szolgáltatások / Árlista oldal (6 szolgáltatás, alap árak)

Barberek oldal

Képek (galéria)

Rólunk

Elérhetőségek

Stílus:

Space Grotesk font

CSS külön fájlokban komponensenként