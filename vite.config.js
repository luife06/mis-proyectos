# Mis Proyectos — PWA

Gestor de proyectos profesional con soporte para tareas, archivos, AutoCAD, contactos y Google Calendar.

---

## 🚀 Instalar en tu celular Android (paso a paso)

### PASO 1 — Subir el proyecto a GitHub

1. Ve a **github.com** y crea una cuenta gratis si no tienes
2. Haz clic en **"New repository"**
3. Nombre: `mis-proyectos` → clic en **"Create repository"**
4. En la página del repo, haz clic en **"uploading an existing file"**
5. Arrastra TODA la carpeta `proyectos-app` y súbela
6. Clic en **"Commit changes"**

---

### PASO 2 — Publicar en Vercel (gratis)

1. Ve a **vercel.com** → **"Sign Up"** → elige **"Continue with GitHub"**
2. Una vez dentro, clic en **"Add New Project"**
3. Selecciona tu repo `mis-proyectos`
4. Vercel detecta Vite automáticamente. Sin cambiar nada, clic en **"Deploy"**
5. En 2 minutos tendrás una URL tipo: `mis-proyectos.vercel.app`

---

### PASO 3 — Instalar en Android como app

1. Abre Chrome en tu Android
2. Ve a tu URL de Vercel (ej: `mis-proyectos.vercel.app`)
3. Chrome mostrará un banner **"Agregar a pantalla de inicio"** — tócalo
4. Si no aparece el banner: menú ⋮ → **"Agregar a pantalla de inicio"**
5. Confirma → ¡Listo! Aparece el ícono naranja en tu pantalla

---

## ✅ Qué funciona en la PWA

- ✅ Funciona **sin internet** (modo offline)
- ✅ Datos guardados en el dispositivo (localStorage)
- ✅ Importar/Exportar respaldos JSON
- ✅ Adjuntar fotos, PDFs, Word, Excel, AutoCAD
- ✅ Google Calendar con un toque
- ✅ Se instala como app nativa (sin App Store)
- ✅ Pantalla completa, sin barra del navegador

---

## 🔧 Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## 📦 Build para producción

```bash
npm run build
```

Los archivos quedan en `/dist` — Vercel lo hace automáticamente.

---

## 📱 ¿Ícono personalizado?

Reemplaza `public/icon-192.png` y `public/icon-512.png` con tu imagen.
Genera íconos gratis en: https://favicon.io/favicon-generator/
- Fondo: `#f97316` (naranja)
- Letra: `P`
- Color texto: `#000000`

---

## 💾 Sobre los datos

Los datos se guardan en `localStorage` del navegador de tu celular.
**Usa el botón ⬇ Exportar regularmente** para tener un respaldo en tu teléfono.
Si desinstales Chrome o limpias datos del navegador, los datos se borran —
pero con el respaldo JSON los recuperas al instante con ⬆ Importar.
