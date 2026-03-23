// src/components/admin/CVManager.jsx
import { useState, useRef, useEffect } from "react";
import { cvService } from "../../services/cvService";

function CVManager({ onSuccess }) {
  const [cvData, setCvData] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setCvData(cvService.getCV());
  }, []);

  const handleFile = async (file) => {
    setError(null);
    setIsUploading(true);
    try {
      const data = await cvService.saveCV(file);
      setCvData(data);
      onSuccess?.("CV berhasil diupload! ✅");
    } catch (err) {
      setError(typeof err === "string" ? err : "Gagal mengupload CV");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleDelete = () => {
    if (window.confirm("Hapus CV yang tersimpan?")) {
      cvService.deleteCV();
      setCvData(null);
      onSuccess?.("CV berhasil dihapus", "info");
    }
  };

  const handleDownloadPreview = () => {
    if (!cvData) return;
    const link = document.createElement("a");
    link.href = cvData.base64;
    link.download = cvData.name;
    link.click();
  };

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="cv-manager">
      <div className="section-header">
        <h2>📄 Kelola CV</h2>
        <p>Upload file PDF CV kamu (maks. 5MB). CV ini akan bisa diunduh pengunjung di halaman utama.</p>
      </div>

      {/* Current CV Status */}
      {cvData ? (
        <div className="cv-current">
          <div className="cv-current-icon">📋</div>
          <div className="cv-current-info">
            <h3>{cvData.name}</h3>
            <div className="cv-meta">
              <span>📦 {cvService.formatSize(cvData.size)}</span>
              <span>🕐 {formatDate(cvData.uploadedAt)}</span>
            </div>
          </div>
          <div className="cv-current-actions">
            <button className="btn btn-secondary" onClick={handleDownloadPreview}>
              ⬇️ Preview
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              🗑️ Hapus
            </button>
          </div>
        </div>
      ) : (
        <div className="cv-empty">
          <span>📭</span>
          <p>Belum ada CV yang diupload</p>
        </div>
      )}

      {/* Upload Area */}
      <div
        className={`cv-dropzone ${isDragging ? "dragging" : ""} ${isUploading ? "uploading" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        {isUploading ? (
          <div className="cv-uploading">
            <div className="cv-spinner"></div>
            <p>Mengupload CV...</p>
          </div>
        ) : (
          <>
            <div className="cv-dropzone-icon">📁</div>
            <p className="cv-dropzone-title">
              {cvData ? "Ganti CV" : "Upload CV"}
            </p>
            <p className="cv-dropzone-sub">
              Drag & drop file PDF di sini, atau <span className="cv-link">klik untuk memilih</span>
            </p>
            <p className="cv-dropzone-note">Hanya file PDF • Maks. 5MB</p>
          </>
        )}
      </div>

      {error && (
        <div className="cv-error">⚠️ {error}</div>
      )}
    </div>
  );
}

export default CVManager;