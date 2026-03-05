/**
 * Configuration file
 * Store all constants and configuration here
 */

export const CONFIG = {
  // Site information
  SITE_NAME: "Masterly",
  SITE_TITLE: "Masterly - Personal Portfolio",

  // API endpoints (if using backend)
  API_BASE_URL: process.env.REACT_APP_API_URL || "http://localhost:3000/api",

  // Feature flags
  FEATURES: {
    WHATSAPP_CONTACT: true,
    CONTACT_FORM: true,
    PORTFOLIO_FILTER: true,
    COUNTER_ANIMATION: true,
    SMOOTH_SCROLL: true,
  },

  // Animation settings
  ANIMATION: {
    SCROLL_DURATION: 1000,
    COUNTER_DURATION: 2000,
    FADE_IN_DURATION: 500,
  },

  // Asset paths
  ASSETS: {
    IMAGES: "/assets/img",
    FONTS: "/assets/fonts",
    ICONS: "/assets/images/icons",
  },

  // Validation rules
  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_REGEX: /^[\d\s\-\+\(\)]+$/,
  },
};

export default CONFIG;
