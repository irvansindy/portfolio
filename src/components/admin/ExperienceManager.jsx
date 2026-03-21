import { useState, useEffect } from "react";
import { cmsDataService } from "../../services/cmsDataService";

function ExperienceManager({ onSuccess }) {
  const [experience, setExperience] = useState(null);
  const [activeType, setActiveType] = useState("education");
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    const data = cmsDataService.getExperienceData();
    setExperience(data);
  }, []);

  if (!experience) return <div>Loading...</div>;

  const items = experience[activeType] || [];

  const handleAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({ title: "", subtitle: "", date: "", description: "" });
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setIsAdding(false);
    setFormData({ ...item });
  };

  const handleSave = () => {
    if (!formData.title || !formData.subtitle || !formData.date) {
      alert("Mohon isi semua field!");
      return;
    }

    if (editingId) {
      cmsDataService.updateExperienceItem(activeType, editingId, formData);
      onSuccess("Item berhasil diupdate");
    } else {
      cmsDataService.addExperienceItem(activeType, formData);
      onSuccess("Item berhasil ditambahkan");
    }

    const updatedData = cmsDataService.getExperienceData();
    setExperience(updatedData);
    setEditingId(null);
    setIsAdding(false);
    setFormData({ title: "", subtitle: "", date: "", description: "" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus item ini?")) {
      cmsDataService.deleteExperienceItem(activeType, id);
      const updatedData = cmsDataService.getExperienceData();
      setExperience(updatedData);
      onSuccess("Item berhasil dihapus");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ title: "", subtitle: "", date: "", description: "" });
  };

  return (
    <div className="manager-container">
      <div className="manager-header">
        <h2>📚 Kelola Experience</h2>
        <div className="type-toggle">
          <button
            className={`toggle-btn ${activeType === "education" ? "active" : ""}`}
            onClick={() => setActiveType("education")}
          >
            Pendidikan
          </button>
          <button
            className={`toggle-btn ${activeType === "experience" ? "active" : ""}`}
            onClick={() => setActiveType("experience")}
          >
            Pengalaman Kerja
          </button>
        </div>
      </div>

      {/* List Items */}
      <div className="items-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-info">
              <h3>{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>
              <p className="date">{item.date}</p>
              <p className="description">{item.description}</p>
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
          <h3>{editingId ? "Edit Item" : "Tambah Item Baru"}</h3>
          <input
            type="text"
            placeholder="Title (contoh: Diploma 3)"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Subtitle (contoh: Teknik Informatika)"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Tanggal (contoh: 2016 - 2019)"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <textarea
            placeholder="Deskripsi"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="4"
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
          + Tambah Item Baru
        </button>
      )}
    </div>
  );
}

export default ExperienceManager;
