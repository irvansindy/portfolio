# 🚀 Quick Start Guide

Panduan cepat untuk memulai development dan deployment portfolio React.

---

## ⚡ Prerequisites

Pastikan Anda sudah install:

- **Node.js** v16+ dan **npm** (atau yarn)
- **Git** untuk version control
- **VS Code** atau editor favorit Anda

---

## 📦 Installation

### 1. Clone atau download project

```bash
cd d:\projects\project react\my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

---

## 🎯 Development

### Jalankan development server

```bash
npm run dev
```

Server akan berjalan di: `http://localhost:5173`

### Hot Module Replacement (HMR)

Setiap perubahan file akan auto-reload di browser tanpa restart server.

---

## 📝 Editing Checklist

### Mengubah Profil Pribadi

**File:** `src/data/index.js`

```javascript
export const profileData = {
  fullName: "Maria Ilvor", // ← Ubah nama
  age: "26 Years", // ← Ubah umur
  email: "example@gmail.com", // ← Ubah email
  // ... dan field lainnya
};
```

### Menambah Portfolio Project

**File:** `src/data/portfolioData.js`

```javascript
{
  id: 7,  // ID unik
  title: "Project Name",
  category: ["design"],
  description: "...",
  image: "assets/images/portfolio/image.jpg",
  largeImage: "assets/images/portfolio/image-large.jpg",
  date: "1, Jan - 2024",
  client: "Client Name",
  tech: "React, Node.js",
  type: "Web App",
  url: "www.project-url.com"
}
```

### Mengubah Skills

**File:** `src/data/skillsData.js`

```javascript
{
  id: 5,
  name: "React",
  percentage: 90,
  description: "Modern JavaScript library"
}
```

### Mengubah Social Media Links

**File:** `src/data/index.js`

```javascript
export const socialLinks = {
  facebook: "https://www.facebook.com/yourprofile",
  instagram: "https://www.instagram.com/yourprofile",
  twitter: "https://twitter.com/yourprofile",
  linkedin: "https://linkedin.com/in/yourprofile",
};
```

### Mengubah Kontak

**File:** `src/data/index.js`

```javascript
export const contactData = {
  email: "your-email@gmail.com",
  website: "www.yourwebsite.com",
  phone1: "(+62)-812345678",
  phone2: "(+62)-876543210",
  address: "Jl. Your Address, City, Country",
  whatsappNumber: "628123456789", // Tanpa +
  whatsappMessage: "Hi, I want to...",
};
```

---

## 🏗️ Project Structure Overview

```
my-portfolio/
├── src/
│   ├── components/     # React components
│   ├── data/          # Data files
│   ├── hooks/         # Custom hooks
│   ├── services/      # API services
│   ├── assets/        # Images, fonts, styles
│   ├── config/        # Configuration
│   ├── App.jsx        # Main app
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Static files
├── package.json       # Dependencies
├── vite.config.js     # Vite config
└── index.html         # Main HTML
```

---

## 🎨 Customization Guide

### 1. Mengubah Warna / Theme

**File:** `src/assets/styles/scss/utilities/_variables.scss`

```scss
$primary-color: #6c5ce7;
$secondary-color: #a29bfe;
$text-color: #2d3436;
// ... etc
```

Kemudian compile SCSS ke CSS.

### 2. Menambah/Mengubah Font

**File:** `src/assets/styles/css/style.css` atau import di `index.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Font+Name");

body {
  font-family: "Font Name", sans-serif;
}
```

### 3. Mengubah Layout / Spacing

Edit Bootstrap variables atau custom CSS di:

- `src/assets/styles/css/responsive.css` - Responsive breakpoints
- `src/App.css` - App-level styles

---

## 🔗 Adding New Components

### Template Component

```jsx
// src/components/sections/NewSection.jsx

import React from "react";

const NewSection = () => {
  return (
    <section id="new-section" className="padding-tb-80">
      <div className="container">
        <h2>New Section Title</h2>
        {/* Content here */}
      </div>
    </section>
  );
};

export default NewSection;
```

### Import di App.jsx

```jsx
import NewSection from "./components/sections/NewSection";

function App() {
  return (
    <>
      {/* Other sections */}
      <NewSection />
    </>
  );
}
```

---

## 📱 Responsive Testing

### Test di Different Screen Sizes

```bash
npm run dev
```

Buka DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)

Test breakpoints:

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## 🏗️ Building for Production

### Build project

```bash
npm run build
```

Output akan di folder `dist/`

### Preview production build

```bash
npm run preview
```

---

## 📤 Deployment Options

### 1. **Netlify** (Recommended)

```bash
npm run build
# Upload dist/ folder ke Netlify
```

### 2. **Vercel**

```bash
npm install -g vercel
vercel
```

### 3. **GitHub Pages**

Update `vite.config.js`:

```javascript
export default {
  base: "/repository-name/",
};
```

### 4. **Traditional Hosting**

```bash
npm run build
# Upload dist/ folder ke server FTP/cPanel
```

---

## 🐛 Troubleshooting

### Issue: Port 5173 sudah dipakai

```bash
npm run dev -- --port 5174
```

### Issue: CSS tidak load

- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check import path di `index.css`

### Issue: Image tidak muncul

- Pastikan path relatif ke `/public` folder
- Gunakan `/assets/images/...` untuk absolute path

### Issue: Component error

- Check console (F12) untuk error message
- Verify import path
- Check props yang dikirim

---

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Bootstrap Classes](https://getbootstrap.com/docs)
- [Tailwind CSS](https://tailwindcss.com) - If switching framework

---

## 🎓 Learning Path

Jika Anda baru dengan React:

1. **Basics** - Components, Props, State
   - File: `src/components/layout/Header.jsx`

2. **Hooks** - useState, useEffect
   - File: `src/components/ui/BackToTop.jsx`

3. **Data Management** - Import data
   - File: `src/data/index.js`

4. **Forms** - Controlled inputs
   - File: `src/components/sections/Contact.jsx`

5. **Lists** - Loop dengan .map()
   - File: `src/components/sections/Portfolio.jsx`

---

## 💡 Tips & Tricks

### Hot Keys

- `Ctrl+K` - Format code
- `Ctrl+/` - Comment/Uncomment
- `Alt+Shift+↓` - Duplicate line
- `F2` - Rename symbol

### Browser DevTools

- `F12` - Open DevTools
- `Ctrl+Shift+C` - Element selector
- `Ctrl+Shift+M` - Toggle device toolbar
- `Ctrl+K+Q` - Clear cache

---

## 🚀 Next Steps

1. ✅ Edit data files dengan info pribadi Anda
2. ✅ Test responsive design
3. ✅ Optimize images
4. ✅ Setup analytics (if needed)
5. ✅ Deploy ke live server

---

**Happy coding! If you face any issues, check the documentation or reach out.** 🎉
