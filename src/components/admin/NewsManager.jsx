import { useState, useEffect } from "react";
import { cmsDataService } from "../../services/cmsDataService";

function NewsManager({ onSuccess }) {
  const [news, setNews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: "",
    image: "",
  });

  useEffect(() => {
    const data = cmsDataService.getNewsData();
    setNews(data);
  }, []);

  const handleAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      title: "",
      category: "",
      date: "",
      image: "",
    });
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setIsAdding(false);
    setFormData({ ...item });
  };

  const handleSave = () => {
    if (!formData.title || !formData.category || !formData.date) {
      alert("Mohon isi semua field wajib!");
      return;
    }

    if (editingId) {
      cmsDataService.updateNewsItem(editingId, formData);
      onSuccess("Berita berhasil diupdate");
    } else {
      cmsDataService.addNewsItem(formData);
      onSuccess("Berita berhasil ditambahkan");
    }

    const updatedData = cmsDataService.getNewsData();
    setNews(updatedData);
    setEditingId(null);
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus berita ini?")) {
      cmsDataService.deleteNewsItem(id);
      const updatedData = cmsDataService.getNewsData();
      setNews(updatedData);
      onSuccess("Berita berhasil dihapus");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
  };

  return (
    <div className="manager-container">
      <div className="manager-header">
        <h2>📰 Kelola News</h2>
        <p>Total: {news.length} berita</p>
      </div>

      {/* List Items */}
      <div className="items-list">
        {news.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-image">
              <img
                src={item.image}
                alt={item.title}
                onError={(e) =>
                  (e.target.src = "/assets/images/placeholder.svg")
                }
              />
            </div>
            <div className="item-info">
              <h3>{item.title}</h3>
              <p className="category">
                <strong>Kategori:</strong> {item.category}
              </p>
              <p className="date">
                <strong>Tanggal:</strong> {item.date}
              </p>
            </div>
            <div className="item-actions">
              <button
                className="btn btn-sm btn-edit"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-delete"
                onClick={() => handleDelete(item.id)}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      {(isAdding || editingId) && (
        <div className="form-container">
          <h3>{editingId ? "Edit Berita" : "Tambah Berita Baru"}</h3>
          <input
            type="text"
            placeholder="Judul Berita"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Kategori"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Tanggal (contoh: July 30, 2019)"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL Gambar"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />
          <div className="form-actions">
            <button className="btn btn-primary" onClick={handleSave}>
              {editingId ? "Update" : "Tambah"}
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              Batal
            </button>
          </div>
        </div>
      )}

      {/* Add Button */}
      {!isAdding && !editingId && (
        <button className="btn btn-primary btn-block" onClick={handleAdd}>
          + Tambah Berita Baru
        </button>
      )}
    </div>
  );
}

export default NewsManager;
