# 📊 CMS Portfolio - Panduan Lengkap

## Daftar Isi

1. [Akses Admin Panel](#akses-admin-panel)
2. [Fitur CMS](#fitur-cms)
3. [Mengelola Data](#mengelola-data)
4. [Keamanan](#keamanan)
5. [Troubleshooting](#troubleshooting)

---

## Akses Admin Panel

### Cara Masuk ke Admin Panel

1. **Klik tombol "🔐 Admin"** di pojok kanan atas halaman portfolio Anda
2. Atau akses langsung melalui URL: `http://localhost:5173/admin-login` (development) atau `yourdomain.com/admin-login` (production)
3. Masukkan **password admin** (default: `irvansindy2024`)
4. Klik **Login**

### Mengubah Password Admin

Password admin disimpan di file: `src/services/authService.js`

```javascript
const ADMIN_PASSWORD = "irvansindy2024"; // Ganti dengan password Anda
```

**Cara mengubah:**

1. Buka file `src/services/authService.js`
2. Temukan baris `const ADMIN_PASSWORD = "irvansindy2024";`
3. Ubah password sesuai keinginan Anda (contoh: `"MySecurePassword123"`)
4. Build/deploy aplikasi Anda

---

## Fitur CMS

Setelah login, Anda akan melihat dashboard dengan 5 tab utama:

### 1. 📚 Experience

Kelola pendidikan dan pengalaman kerja Anda

- **Tambah Item Baru**: Klik tombol "+ Tambah Item Baru"
- **Edit Item**: Klik tombol "Edit" pada item yang ingin diubah
- **Hapus Item**: Klik tombol "Hapus" untuk menghapus item

**Field yang dapat diisi:**

- Title (contoh: Diploma 3)
- Subtitle (contoh: Teknik Informatika)
- Tanggal (contoh: 2016 - 2019)
- Deskripsi

### 2. 💼 Portfolio

Kelola proyek-proyek portofolio Anda

- Tampilkan gambar preview dari setiap proyek
- Edit informasi lengkap proyek (klien, teknologi, tipe, dll)
- Hapus proyek yang tidak lagi relevan

**Field yang dapat diisi:**

- Judul Project
- Deskripsi
- Client
- Tipe Project
- Teknologi (dipisah dengan koma)
- URL Gambar
- Tanggal
- URL Project

### 3. 🛠️ Services

Kelola layanan yang Anda tawarkan

- Tambah layanan baru
- Edit deskripsi dan icon layanan
- Hapus layanan

**Field yang dapat diisi:**

- Judul Layanan
- Deskripsi Singkat
- Deskripsi Lengkap
- URL Icon

### 4. 📰 News

Kelola berita/blog Anda

- Kelola artikel dan berita terbaru
- Organize dengan kategori
- Upload gambar untuk setiap artikel

**Field yang dapat diisi:**

- Judul Berita
- Kategori
- Tanggal
- URL Gambar

### 5. ⚡ Skills

Kelola skill dan kompetensi Anda

- Set persentase profisiensi untuk setiap skill
- Mark skill sebagai "Featured" (Active)
- Edit deskripsi skill

**Field yang dapat diisi:**

- Nama Skill
- Persentase (0-100%)
- Deskripsi
- Aktif (Featured)

---

## Mengelola Data

### Workflow Dasar

1. **Membuka Form Tambah/Edit**
   - Klik tombol "Edit" pada item yang ada, atau
   - Klik "+ Tambah [Item] Baru" di bagian bawah

2. **Mengisi Form**
   - Isi semua field yang wajib (biasanya ditandai dengan \*)
   - Klik "Tambah" atau "Update"

3. **Melihat Perubahan**
   - Data disimpan secara **otomatis** di localStorage
   - Halaman portfolio akan menampilkan data terbaru secara real-time

### Penting!

- ✅ **Semua perubahan disimpan secara otomatis** di localStorage
- ✅ Tidak perlu database eksternal
- ⚠️ Data tersimpan **secara lokal** di browser Anda
- ⚠️ Jika Anda menghapus localStorage atau cache browser, semua data akan hilang
- 💡 **Backup data** secara berkala dengan mengexport dari console browser

### Backup Data

Untuk backup data Anda:

```javascript
// Buka Browser Console (F12 atau Ctrl+Shift+I)
// Paste code ini untuk melihat semua data:
console.log(JSON.stringify(localStorage, null, 2));

// Untuk backup individual:
console.log("Experience:", localStorage.getItem("cms_experience_data"));
console.log("Portfolio:", localStorage.getItem("cms_portfolio_data"));
console.log("Services:", localStorage.getItem("cms_services_data"));
console.log("News:", localStorage.getItem("cms_news_data"));
console.log("Skills:", localStorage.getItem("cms_skills_data"));
```

---

## Keamanan

### ⚠️ Penting Tentang Keamanan

1. **Password disimpan di kode**
   - Password admin Anda disimpan di `src/services/authService.js` (hardcoded)
   - Jangan commit file ini ke repository publik jika password sensitive
   - Untuk production, pertimbangkan menggunakan backend API untuk authentikasi

2. **Session Login**
   - Session disimpan di localStorage
   - Logout secara otomatis saat browser ditutup (opsional)

3. **Best Practices untuk Production**
   - Gunakan HTTPS
   - Implementasikan API backend untuk autentikasi
   - Gunakan password manager yang kuat
   - Backup data secara berkala
   - Monitor akses admin

### Reset Data ke Default

Jika data menjadi berantakan, Anda dapat mereset semua data ke nilai default:

1. Masuk ke Admin Panel
2. Scroll ke bawah
3. Klik tombol "🔄 Reset Semua Data ke Default"
4. Konfirmasi aksi tersebut

---

## Troubleshooting

### Masalah: Tidak bisa login

**Solusi:**

- Pastikan password yang Anda masukkan benar
- Jika lupa password, buka file `src/services/authService.js` dan cek password default
- Clear browser cache/cookies dan coba lagi

### Masalah: Data tidak tersimpan

**Solusi:**

- Pastikan localStorage tidak dinonaktifkan di browser Anda
- Cek apakah browser Anda dalam mode incognito/private (localStorage tidak bekerja di mode ini)
- Buka Developer Console (F12) dan cek apakah ada error

### Masalah: Data hilang setelah refresh

**Solusi:**

- Data disimpan di localStorage yang tied ke domain
- Jika URL berubah (misal dari localhost ke IP), localStorage mungkin tidak bisa diakses
- Gunakan domain yang sama setiap kali mengakses CMS
- Backup data secara berkala menggunakan console method di atas

### Masalah: Admin button tidak terlihat

**Solusi:**

- Refresh halaman dengan Ctrl+F5 (hard refresh)
- Clear browser cache
- Cek apakah ada CSS yang hiding elemen tersebut

### Masalah: Gambar tidak muncul di preview

**Solusi:**

- Pastikan URL gambar benar dan accessible
- Gunakan full URL atau relative path yang benar (contoh: `/assets/images/portfolio/image.svg`)
- Cek console browser untuk error message

---

## Development & API Reference

### Menggunakan CMS Data Service

Jika Anda ingin mengintegrasikan data CMS di komponen lain:

```javascript
import { cmsDataService } from "../../services/cmsDataService";

// Get data
const experienceData = cmsDataService.getExperienceData();
const portfolioData = cmsDataService.getPortfolioData();
const servicesData = cmsDataService.getServicesData();
const newsData = cmsDataService.getNewsData();
const skillsData = cmsDataService.getSkillsData();

// Add item
cmsDataService.addPortfolioItem({
  title: "New Project",
  description: "...",
  client: "...",
  // ... other fields
});

// Update item
cmsDataService.updatePortfolioItem(id, {
  title: "Updated Title",
  // ... other fields
});

// Delete item
cmsDataService.deletePortfolioItem(id);
```

### Local Storage Keys

```javascript
cms_experience_data; // Experience + Education data
cms_portfolio_data; // Portfolio projects data
cms_services_data; // Services data
cms_news_data; // News/Blog data
cms_skills_data; // Skills data
cms_admin_auth; // Admin authentication session
```

---

## Deploy ke Production

### Penting sebelum deploy:

1. **Ubah password admin** di `src/services/authService.js`
2. **Setup backup data** - Implement backend untuk store data secara persisten
3. **Configure HTTPS** - Untuk production, selalu gunakan HTTPS
4. **Optimize assets** - Pastikan gambar sudah dioptimasi

### Recommended untuk Production:

Untuk production yang lebih robust, pertimbangkan:

- Gunakan database (Firebase, MongoDB, PostgreSQL, dll)
- Implement proper authentication dengan JWT atau session
- Add API endpoint untuk CRUD operations
- Implement data validation di backend
- Add logging dan monitoring

---

## Tips & Tricks

1. **Shortcut keyboard**: Gunakan Tab untuk navigate antar form fields
2. **Bulk edit**: Edit multiple items sekaligus dari CSV (requires custom implementation)
3. **Version control**: Commit localStorage snapshots untuk backup
4. **Testing**: Test semua fitur sebelum deploy ke production

---

**Terakhir diupdate:** March 21, 2026

Untuk pertanyaan lebih lanjut atau issues, silakan buat issue di repository.
