import { useState, useEffect } from "react";
import { authService } from "../services/authService";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check login status on mount
    const loggedIn = authService.isLoggedIn();
    setIsLoggedIn(loggedIn);
    setIsLoading(false);
  }, []);

  // ✅ NEW: Sync with localStorage changes (for cross-component updates)
  useEffect(() => {
    const interval = setInterval(() => {
      const loggedIn = authService.isLoggedIn();
      setIsLoggedIn((prevState) => {
        // Only update state if changed to trigger dependent effects
        if (prevState !== loggedIn) {
          return loggedIn;
        }
        return prevState;
      });
    }, 200); // Check every 200ms

    return () => clearInterval(interval);
  }, []);

  const login = (password) => {
    const result = authService.login(password);
    if (result.success) {
      setIsLoggedIn(true);
    }
    return result;
  };

  const logout = () => {
    authService.logout();
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    isLoading,
    login,
    logout,
  };
};
