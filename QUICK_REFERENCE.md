# 🚀 Quick Reference - CMS Portfolio

## Akses Cepat

### Login Admin

1. Klik tombol **🔐 Admin** (pojok kanan atas)
2. Password: `irvansindy2024`
3. Klik **Login**

### Atau Akses Langsung

```
Development: http://localhost:5173/admin-login
Production: https://yourdomain.com/admin-login
```

---

## Fitur Utama

| Fitur          | Lokasi | Deskripsi                            |
| -------------- | ------ | ------------------------------------ |
| **Experience** | Tab 1  | Kelola pendidikan & pengalaman kerja |
| **Portfolio**  | Tab 2  | Kelola proyek-proyek Anda            |
| **Services**   | Tab 3  | Kelola layanan yang ditawarkan       |
| **News**       | Tab 4  | Kelola artikel & berita              |
| **Skills**     | Tab 5  | Kelola skill & kompetensi            |

---

## CRUD Operations

### Tambah Data Baru

```
Klik "+ Tambah [Item] Baru" → Isi Form → Klik "Tambah"
```

### Edit Data

```
Klik "Edit" pada item → Ubah data → Klik "Update"
```

### Hapus Data

```
Klik "Hapus" pada item → Konfirmasi → Item terhapus
```

### Reset Semua Data

```
Scroll ke bawah → Klik "🔄 Reset Semua Data ke Default"
```

---

## File Penting

| File                                | Fungsi                 |
| ----------------------------------- | ---------------------- |
| `src/services/authService.js`       | Authentication logic   |
| `src/services/cmsDataService.js`    | Data management (CRUD) |
| `src/pages/AdminLogin.jsx`          | Login page             |
| `src/pages/AdminPanel.jsx`          | Admin dashboard        |
| `src/components/admin/*Manager.jsx` | Individual managers    |
| `src/styles/admin.css`              | Admin styling          |

---

## Password Admin

**Lokasi:** `src/services/authService.js` (line 3)

```javascript
const ADMIN_PASSWORD = "irvansindy2024";
```

**Cara Ubah:**

1. Buka file di atas
2. Ganti nilai password
3. Build & deploy ulang

---

## LocalStorage Keys

```javascript
cms_experience_data; // Education + Experience
cms_portfolio_data; // Portfolio projects
cms_services_data; // Services
cms_news_data; // News/Blog
cms_skills_data; // Skills
cms_admin_auth; // Admin session
```

---

## Commands

```bash
# Development
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

---

## Important URLs

| Page           | URL            |
| -------------- | -------------- |
| Portfolio Home | `/`            |
| Admin Login    | `/admin-login` |
| Admin Panel    | `/admin`       |

---

## Troubleshooting

### Lupa Password?

- Cek file `src/services/authService.js`
- Gunakan default: `irvansindy2024`

### Data Hilang?

- Cek localStorage di DevTools (F12)
- Restore dari backup jika ada
- Reset ke default jika diperlukan

### Tidak Bisa Login?

- Clear browser cache
- Check apakah mode Incognito (localStorage tidak bekerja)
- Verify password benar

---

## Tips Cepat

✅ **Auto-save** - Semua data disimpan otomatis
✅ **Responsive** - Works di mobile juga
✅ **No DB needed** - Semua di localStorage
✅ **Instant preview** - Lihat perubahan langsung di portfolio

---

## Support Files

- 📄 **CMS_GUIDE.md** - Panduan lengkap
- 📄 **DEPLOYMENT.md** - Deploy ke production
- 📄 **CMS_SETUP_SUMMARY.md** - Setup details
- 📄 **QUICK_REFERENCE.md** - File ini

---

**Version:** 1.0.0 | **Last Updated:** March 21, 2026
