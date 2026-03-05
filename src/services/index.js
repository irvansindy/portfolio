/**
 * Services for handling API calls and external integrations
 */

import CONFIG from "../config";

/**
 * Contact Form Service
 */
export const sendContactForm = async (formData) => {
  try {
    const response = await fetch(`${CONFIG.API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending contact form:", error);
    throw error;
  }
};

/**
 * Portfolio Service
 */
export const getPortfolioItems = async () => {
  try {
    const response = await fetch(`${CONFIG.API_BASE_URL}/portfolio`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw error;
  }
};

/**
 * WhatsApp Service
 */
export const generateWhatsAppLink = (phoneNumber, message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

/**
 * Local Storage Service
 */
export const localStorageService = {
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  },

  getItem: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  },

  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  },

  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  },
};
