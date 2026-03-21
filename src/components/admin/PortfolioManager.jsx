import { useState, useEffect } from "react";
import { cmsDataService } from "../../services/cmsDataService";

function PortfolioManager({ onSuccess }) {
  const [portfolio, setPortfolio] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: ["development"],
    description: "",
    image: "",
    largeImage: "",
    date: "",
    client: "",
    tech: "",
    type: "",
    url: "",
  });

  useEffect(() => {
    const data = cmsDataService.getPortfolioData();
    setPortfolio(data);
  }, []);

  const handleAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      title: "",
      category: ["development"],
      description: "",
      image: "",
      largeImage: "",
      date: "",
      client: "",
      tech: "",
      type: "",
      url: "",
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
      cmsDataService.updatePortfolioItem(editingId, formData);
      onSuccess("Portfolio berhasil diupdate");
    } else {
      cmsDataService.addPortfolioItem(formData);
      onSuccess("Portfolio berhasil ditambahkan");
    }

    const updatedData = cmsDataService.getPortfolioData();
    setPortfolio(updatedData);
    setEditingId(null);
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus portfolio ini?")) {
      cmsDataService.deletePortfolioItem(id);
      const updatedData = cmsDataService.getPortfolioData();
      setPortfolio(updatedData);
      onSuccess("Portfolio berhasil dihapus");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
  };

  return (
    <div className="manager-container">
      <div className="manager-header">
        <h2>💼 Kelola Portfolio</h2>
        <p>Total: {portfolio.length} project</p>
      </div>

      {/* List Items */}
      <div className="items-list">
        {portfolio.map((item) => (
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
              <p className="client">Client: {item.client}</p>
              <p className="type">Tipe: {item.type}</p>
              <p className="description">{item.description}</p>
              <p className="tech">
                <strong>Tech:</strong> {item.tech}
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
          <h3>{editingId ? "Edit Portfolio" : "Tambah Portfolio Baru"}</h3>
          <input
            type="text"
            placeholder="Judul Project"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <textarea
            placeholder="Deskripsi"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="3"
          />
          <input
            type="text"
            placeholder="Client"
            value={formData.client}
            onChange={(e) =>
              setFormData({ ...formData, client: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Tipe Project"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          />
          <input
            type="text"
            placeholder="Teknologi (dipisah dengan koma)"
            value={formData.tech}
            onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL Gambar"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Tanggal"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL Project"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
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
          + Tambah Portfolio Baru
        </button>
      )}
    </div>
  );
}

export default PortfolioManager;
