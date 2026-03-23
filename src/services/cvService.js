// src/services/cvService.js
const CV_STORAGE_KEY = "portfolio_cv_data";

export const cvService = {
  // Simpan PDF sebagai base64 di localStorage
  saveCV(file) {
    return new Promise((resolve, reject) => {
      if (!file) return reject("No file provided");
      if (file.type !== "application/pdf") return reject("Only PDF files are allowed");
      if (file.size > 5 * 1024 * 1024) return reject("File size must be less than 5MB");

      const reader = new FileReader();
      reader.onload = (e) => {
        const data = {
          name: file.name,
          base64: e.target.result, // includes "data:application/pdf;base64,..."
          uploadedAt: new Date().toISOString(),
          size: file.size,
        };
        localStorage.setItem(CV_STORAGE_KEY, JSON.stringify(data));
        resolve(data);
      };
      reader.onerror = () => reject("Failed to read file");
      reader.readAsDataURL(file);
    });
  },

  // Ambil data CV
  getCV() {
    const raw = localStorage.getItem(CV_STORAGE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  // Hapus CV
  deleteCV() {
    localStorage.removeItem(CV_STORAGE_KEY);
  },

  // Format ukuran file
  formatSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  },
};