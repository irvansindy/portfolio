import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { cmsDataService } from "../services/cmsDataService";
import ExperienceManager from "../components/admin/ExperienceManager";
import PortfolioManager from "../components/admin/PortfolioManager";
import ServicesManager from "../components/admin/ServicesManager";
import NewsManager from "../components/admin/NewsManager";
import SkillsManager from "../components/admin/SkillsManager";
import CVManager from "../components/admin/CVManager";
import "../styles/admin.css";

function AdminPanel() {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("experience");
  const [feedback, setFeedback] = useState(null);

  const showFeedback = (message, type = "success") => {
    setFeedback({ message, type });
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleResetAll = () => {
    if (
      window.confirm(
        "⚠️ Yakin ingin mereset SEMUA data ke default? Tindakan ini tidak bisa dibatalkan!",
      )
    ) {
      cmsDataService.resetAllData();
      showFeedback("Semua data berhasil direset ke default", "success");
      window.location.reload();
    }
  };

  const handleLogout = () => {
    if (window.confirm("Yakin ingin logout?")) {
      logout();
    }
  };

  return (
    <div className="admin-panel-container">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>📊 Admin CMS Dashboard</h1>
          <button onClick={handleLogout} className="btn btn-logout">
            Logout
          </button>
        </div>
      </header>

      {/* Feedback Alert */}
      {feedback && (
        <div className={`alert alert-${feedback.type}`}>{feedback.message}</div>
      )}

      {/* Navigation Tabs */}
      <div className="admin-tabs">
        <button
          className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          📚 Experience
        </button>
        <button
          className={`tab-btn ${activeTab === "portfolio" ? "active" : ""}`}
          onClick={() => setActiveTab("portfolio")}
        >
          💼 Portfolio
        </button>
        <button
          className={`tab-btn ${activeTab === "services" ? "active" : ""}`}
          onClick={() => setActiveTab("services")}
        >
          🛠️ Services
        </button>
        <button
          className={`tab-btn ${activeTab === "news" ? "active" : ""}`}
          onClick={() => setActiveTab("news")}
        >
          📰 News
        </button>
        <button
          className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          ⚡ Skills
        </button>
        <button
            className={`tab-btn ${activeTab === "cv" ? "active" : ""}`}
            onClick={() => setActiveTab("cv")}
            >
            📄 CV
        </button>
      </div>

      {/* Tab Content */}
      <div className="admin-content">
        {activeTab === "experience" && (
          <ExperienceManager onSuccess={showFeedback} />
        )}
        {activeTab === "portfolio" && (
          <PortfolioManager onSuccess={showFeedback} />
        )}
        {activeTab === "services" && (
          <ServicesManager onSuccess={showFeedback} />
        )}
        {activeTab === "news" && <NewsManager onSuccess={showFeedback} />}
        {activeTab === "skills" && <SkillsManager onSuccess={showFeedback} />}
        {activeTab === "cv" && <CVManager onSuccess={showFeedback} />}
      </div>

      {/* Footer Actions */}
      <div className="admin-footer">
        <button onClick={handleResetAll} className="btn btn-danger">
          🔄 Reset Semua Data ke Default
        </button>
        <p className="admin-info">
          💾 Perubahan disimpan otomatis di localStorage
        </p>
      </div>
    </div>
  );
}

export default AdminPanel;
