import { useState, useEffect } from "react";
import { cmsDataService } from "../../services/cmsDataService";

function SkillsManager({ onSuccess }) {
  const [skills, setSkills] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    percentage: 0,
    description: "",
    active: false,
  });

  useEffect(() => {
    const data = cmsDataService.getSkillsData();
    setSkills(data);
  }, []);

  const handleAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      name: "",
      percentage: 0,
      description: "",
      active: false,
    });
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setIsAdding(false);
    setFormData({ ...item });
  };

  const handleSave = () => {
    if (!formData.name || formData.percentage <= 0) {
      alert("Mohon isi semua field wajib!");
      return;
    }

    if (editingId) {
      cmsDataService.updateSkillItem(editingId, formData);
      onSuccess("Skill berhasil diupdate");
    } else {
      cmsDataService.addSkillItem(formData);
      onSuccess("Skill berhasil ditambahkan");
    }

    const updatedData = cmsDataService.getSkillsData();
    setSkills(updatedData);
    setEditingId(null);
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus skill ini?")) {
      cmsDataService.deleteSkillItem(id);
      const updatedData = cmsDataService.getSkillsData();
      setSkills(updatedData);
      onSuccess("Skill berhasil dihapus");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
  };

  return (
    <div className="manager-container">
      <div className="manager-header">
        <h2>⚡ Kelola Skills</h2>
        <p>Total: {skills.length} skill</p>
      </div>

      {/* List Items */}
      <div className="items-list">
        {skills.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-info">
              <h3>{item.name}</h3>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <p className="percentage">{item.percentage}%</p>
              <p className="description">{item.description}</p>
              {item.active && (
                <span className="badge badge-active">Active</span>
              )}
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
          <h3>{editingId ? "Edit Skill" : "Tambah Skill Baru"}</h3>
          <input
            type="text"
            placeholder="Nama Skill"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <div className="form-group">
            <label>Persentase: {formData.percentage}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.percentage}
              onChange={(e) =>
                setFormData({ ...formData, percentage: Number(e.target.value) })
              }
            />
          </div>
          <textarea
            placeholder="Deskripsi"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="2"
          />
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                checked={formData.active}
                onChange={(e) =>
                  setFormData({ ...formData, active: e.target.checked })
                }
              />
              Aktif (Featured)
            </label>
          </div>
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
          + Tambah Skill Baru
        </button>
      )}
    </div>
  );
}

export default SkillsManager;
