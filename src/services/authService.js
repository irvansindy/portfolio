// ============================================================
// AUTH SERVICE - Mengelola login admin
// ============================================================

const ADMIN_PASSWORD = "irvansindy2024"; // Ganti dengan password Anda
const AUTH_KEY = "cms_admin_auth";

export const authService = {
  // Login admin
  login: (password) => {
    if (password === ADMIN_PASSWORD) {
      const authData = {
        isAuthenticated: true,
        loginTime: new Date().toISOString(),
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
      return { success: true, message: "Login berhasil!" };
    }
    return { success: false, message: "Password salah!" };
  },

  // Check if admin is logged in
  isLoggedIn: () => {
    try {
      const auth = localStorage.getItem(AUTH_KEY);
      return auth ? JSON.parse(auth).isAuthenticated : false;
    } catch {
      return false;
    }
  },

  // Logout admin
  logout: () => {
    localStorage.removeItem(AUTH_KEY);
  },

  // Get login info
  getAuthInfo: () => {
    try {
      const auth = localStorage.getItem(AUTH_KEY);
      return auth ? JSON.parse(auth) : null;
    } catch {
      return null;
    }
  },
};
