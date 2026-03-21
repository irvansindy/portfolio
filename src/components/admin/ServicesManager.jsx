import { useState, useEffect } from "react";
import { cmsDataService } from "../../services/cmsDataService";

function ServicesManager({ onSuccess }) {
  const [services, setServices] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "",
    fullDescription: "",
  });

  useEffect(() => {
    const data = cmsDataService.getServicesData();
    setServices(data);
  }, []);

  const handleAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      icon: "",
      fullDescription: "",
    });
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setIsAdding(false);
    setFormData({ ...item });
  };

  const handleSave = () => {
    if (!formData.title || !formData.description) {
      alert("Mohon isi semua field wajib!");
      return;
    }

    if (editingId) {
      cmsDataService.updateServiceItem(editingId, formData);
      onSuccess("Layanan berhasil diupdate");
    } else {
      cmsDataService.addServiceItem(formData);
      onSuccess("Layanan berhasil ditambahkan");
    }

    const updatedData = cmsDataService.getServicesData();
    setServices(updatedData);
    setEditingId(null);
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus layanan ini?")) {
      cmsDataService.deleteServiceItem(id);
      const updatedData = cmsDataService.getServicesData();
      setServices(updatedData);
      onSuccess("Layanan berhasil dihapus");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
  };

  return (
    <div className="manager-container">
      <div className="manager-header">
        <h2>🛠️ Kelola Services</h2>
        <p>Total: {services.length} layanan</p>
      </div>

      {/* List Items */}
      <div className="items-list">
        {services.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-image">
              <img
                src={item.icon}
                alt={item.title}
                onError={(e) =>
                  (e.target.src = "/assets/images/placeholder.svg")
                }
              />
            </div>
            <div className="item-info">
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>
              <p className="full-desc">{item.fullDescription}</p>
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
          <h3>{editingId ? "Edit Layanan" : "Tambah Layanan Baru"}</h3>
          <input
            type="text"
            placeholder="Judul Layanan"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Deskripsi Singkat"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <textarea
            placeholder="Deskripsi Lengkap"
            value={formData.fullDescription}
            onChange={(e) =>
              setFormData({ ...formData, fullDescription: e.target.value })
            }
            rows="3"
          />
          <input
            type="text"
            placeholder="URL Icon"
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
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
          + Tambah Layanan Baru
        </button>
      )}
    </div>
  );
}

export default ServicesManager;
