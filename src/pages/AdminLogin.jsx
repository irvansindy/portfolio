import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "../styles/admin.css";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const result = login(password);
    if (!result.success) {
      setError(result.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setPassword("");
      setLoading(false);
      // Redirect akan otomatis ditangani oleh App.jsx saat isLoggedIn berubah
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <div className="admin-login-header">
          <h1>Admin CMS</h1>
          <p>Portfolio Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label htmlFor="password">Password Admin</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password admin"
              required
              disabled={loading}
            />
          </div>

          {error && <div className="alert alert-error">{error}</div>}
          {success && (
            <div className="alert alert-success">
              ✓ Login berhasil! Redirecting...
            </div>
          )}

          <button
            type="submit"
            className="btn btn-login"
            disabled={loading || !password}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <div className="admin-login-footer">
          <p>CMS untuk mengelola konten portfolio Anda</p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
