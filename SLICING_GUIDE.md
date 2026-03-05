# Masterly Portfolio - React Version

Ini adalah hasil slicing dari template Masterly menjadi React Components.

## 📁 Struktur Folder

```
src/
├── components/
│   ├── layout/           # Layout components (Header, Sidebar, Footer)
│   ├── sections/         # Bagian-bagian halaman (Hero, About, Portfolio, dll)
│   └── ui/              # UI components (Loader, WhatsApp Widget, BackToTop)
├── data/                # Data files (portfolio, skills, experience, dll)
├── hooks/               # Custom React hooks (useScroll)
├── assets/              # Gambar, font, styling (dari template original)
├── App.jsx              # Main App component
├── App.css              # App styling
├── main.jsx             # Entry point
└── index.css            # Global styles & imports
```

## 🎯 Components Breakdown

### Layout Components

- **Header** - Navigasi header dengan menu toggle
- **Sidebar** - Side navigation menu
- **Footer** - Footer section

### Section Components

- **Hero** - bagian pengenalan/welcome
- **About** - profil dan skills
- **Experience** - pendidikan dan pengalaman kerja
- **Service** - layanan yang ditawarkan
- **Portfolio** - proyek-proyek dengan filter
- **Counter** - statistik achievement
- **News** - blog/news carousel
- **Contact** - form kontak dan informasi

### Sections Components (Pelengkap)

- **Clients** - slider klien

### UI Components

- **Loader** - loading animation
- **WhatsAppWidget** - floating WhatsApp button
- **BackToTop** - go to top button dengan progress indicator

## 📊 Data Files

Semua data dinamis disimpan di `/src/data/`:

- `portfolioData.js` - portfolio items
- `skillsData.js` - skill & progress bars
- `experienceData.js` - education & work experience
- `newsData.js` - blog posts
- `servicesData.js` - services offered
- `index.js` - profile, counters, clients, contact, social data

## 🎨 Styling

Styling menggunakan file CSS dari template original:

- `assets/styles/css/style.css` - main styles
- `assets/styles/css/dark.css` - dark theme
- `assets/styles/css/responsive.css` - responsive styles
- `assets/styles/css/plugins/` - bootstrap, slick, fancybox styles

## 🚀 Cara Menggunakan

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Development:**

   ```bash
   npm run dev
   ```

3. **Build:**
   ```bash
   npm run build
   ```

## 📝 Customization

### Mengubah Data Profil

Edit file `/src/data/index.js` untuk mengubah:

- Nama, umur, kontak, alamat
- Social media links
- Counter/achievement numbers

### Menambah Portfolio Item

Edit `/src/data/portfolioData.js` dan tambahkan item baru dengan struktur:

```javascript
{
  id: 7,
  title: "Project Title",
  category: ["design", "development"],
  description: "Description",
  image: "path-to-image",
  largeImage: "path-to-large-image",
  // ... data lainnya
}
```

### Mengubah Skills

Edit `/src/data/skillsData.js` untuk menambah/mengubah skill dengan percentage.

## 🔧 Features

✅ Responsive design
✅ Smooth scroll navigation
✅ Portfolio filtering
✅ Counter animation
✅ WhatsApp integration
✅ Contact form
✅ Back to top button
✅ Sidebar navigation
✅ Dark theme support

## 📦 Dependencies

- React 18+
- Vite (build tool)
- Font Awesome (icons)
- Bootstrap (utilities)

## 📄 License

Based on Masterly template by ashishmaraviya
