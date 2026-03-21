// ============================================================
// CMS DATA SERVICE - Mengelola data CRUD dengan localStorage
// ============================================================

import { experienceData as defaultExperienceData } from "../data/experienceData";
import { portfolioData as defaultPortfolioData } from "../data/portfolioData";
import { servicesData as defaultServicesData } from "../data/servicesData";
import { newsData as defaultNewsData } from "../data/newsData";
import { skillsData as defaultSkillsData } from "../data/skillsData";

const STORAGE_KEYS = {
  EXPERIENCE: "cms_experience_data",
  PORTFOLIO: "cms_portfolio_data",
  SERVICES: "cms_services_data",
  NEWS: "cms_news_data",
  SKILLS: "cms_skills_data",
};

// Initialize localStorage dengan default data jika kosong
const initializeData = () => {
  Object.keys(STORAGE_KEYS).forEach((key) => {
    const storageKey = STORAGE_KEYS[key];
    if (!localStorage.getItem(storageKey)) {
      let defaultData;
      if (key === "EXPERIENCE") {
        defaultData = defaultExperienceData;
      } else if (key === "PORTFOLIO") {
        defaultData = defaultPortfolioData;
      } else if (key === "SERVICES") {
        defaultData = defaultServicesData;
      } else if (key === "NEWS") {
        defaultData = defaultNewsData;
      } else if (key === "SKILLS") {
        defaultData = defaultSkillsData;
      }
      localStorage.setItem(storageKey, JSON.stringify(defaultData));
    }
  });
};

// Initialize pada pertama kali load
initializeData();

export const cmsDataService = {
  // ============================================================
  // EXPERIENCE DATA
  // ============================================================
  getExperienceData: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.EXPERIENCE);
      return data ? JSON.parse(data) : defaultExperienceData;
    } catch {
      return defaultExperienceData;
    }
  },

  updateExperienceData: (data) => {
    localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(data));
    return { success: true, message: "Data pengalaman berhasil diupdate" };
  },

  addExperienceItem: (type, item) => {
    const data = cmsDataService.getExperienceData();
    const maxId = Math.max(...data[type].map((i) => i.id), 0);
    item.id = maxId + 1;
    data[type].push(item);
    cmsDataService.updateExperienceData(data);
    return { success: true, message: "Item berhasil ditambahkan" };
  },

  updateExperienceItem: (type, id, updatedItem) => {
    const data = cmsDataService.getExperienceData();
    const index = data[type].findIndex((i) => i.id === id);
    if (index !== -1) {
      data[type][index] = { ...data[type][index], ...updatedItem };
      cmsDataService.updateExperienceData(data);
      return { success: true, message: "Item berhasil diupdate" };
    }
    return { success: false, message: "Item tidak ditemukan" };
  },

  deleteExperienceItem: (type, id) => {
    const data = cmsDataService.getExperienceData();
    data[type] = data[type].filter((i) => i.id !== id);
    cmsDataService.updateExperienceData(data);
    return { success: true, message: "Item berhasil dihapus" };
  },

  // ============================================================
  // PORTFOLIO DATA
  // ============================================================
  getPortfolioData: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PORTFOLIO);
      return data ? JSON.parse(data) : defaultPortfolioData;
    } catch {
      return defaultPortfolioData;
    }
  },

  updatePortfolioData: (data) => {
    localStorage.setItem(STORAGE_KEYS.PORTFOLIO, JSON.stringify(data));
    return { success: true, message: "Data portfolio berhasil diupdate" };
  },

  addPortfolioItem: (item) => {
    const data = cmsDataService.getPortfolioData();
    const maxId = Math.max(...data.map((i) => i.id), 0);
    item.id = maxId + 1;
    data.push(item);
    cmsDataService.updatePortfolioData(data);
    return { success: true, message: "Portfolio berhasil ditambahkan" };
  },

  updatePortfolioItem: (id, updatedItem) => {
    const data = cmsDataService.getPortfolioData();
    const index = data.findIndex((i) => i.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedItem };
      cmsDataService.updatePortfolioData(data);
      return { success: true, message: "Portfolio berhasil diupdate" };
    }
    return { success: false, message: "Portfolio tidak ditemukan" };
  },

  deletePortfolioItem: (id) => {
    const data = cmsDataService.getPortfolioData();
    const filtered = data.filter((i) => i.id !== id);
    cmsDataService.updatePortfolioData(filtered);
    return { success: true, message: "Portfolio berhasil dihapus" };
  },

  // ============================================================
  // SERVICES DATA
  // ============================================================
  getServicesData: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return data ? JSON.parse(data) : defaultServicesData;
    } catch {
      return defaultServicesData;
    }
  },

  updateServicesData: (data) => {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(data));
    return { success: true, message: "Data layanan berhasil diupdate" };
  },

  addServiceItem: (item) => {
    const data = cmsDataService.getServicesData();
    const maxId = Math.max(...data.map((i) => i.id), 0);
    item.id = maxId + 1;
    data.push(item);
    cmsDataService.updateServicesData(data);
    return { success: true, message: "Layanan berhasil ditambahkan" };
  },

  updateServiceItem: (id, updatedItem) => {
    const data = cmsDataService.getServicesData();
    const index = data.findIndex((i) => i.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedItem };
      cmsDataService.updateServicesData(data);
      return { success: true, message: "Layanan berhasil diupdate" };
    }
    return { success: false, message: "Layanan tidak ditemukan" };
  },

  deleteServiceItem: (id) => {
    const data = cmsDataService.getServicesData();
    const filtered = data.filter((i) => i.id !== id);
    cmsDataService.updateServicesData(filtered);
    return { success: true, message: "Layanan berhasil dihapus" };
  },

  // ============================================================
  // NEWS DATA
  // ============================================================
  getNewsData: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.NEWS);
      return data ? JSON.parse(data) : defaultNewsData;
    } catch {
      return defaultNewsData;
    }
  },

  updateNewsData: (data) => {
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(data));
    return { success: true, message: "Data berita berhasil diupdate" };
  },

  addNewsItem: (item) => {
    const data = cmsDataService.getNewsData();
    const maxId = Math.max(...data.map((i) => i.id), 0);
    item.id = maxId + 1;
    data.push(item);
    cmsDataService.updateNewsData(data);
    return { success: true, message: "Berita berhasil ditambahkan" };
  },

  updateNewsItem: (id, updatedItem) => {
    const data = cmsDataService.getNewsData();
    const index = data.findIndex((i) => i.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedItem };
      cmsDataService.updateNewsData(data);
      return { success: true, message: "Berita berhasil diupdate" };
    }
    return { success: false, message: "Berita tidak ditemukan" };
  },

  deleteNewsItem: (id) => {
    const data = cmsDataService.getNewsData();
    const filtered = data.filter((i) => i.id !== id);
    cmsDataService.updateNewsData(filtered);
    return { success: true, message: "Berita berhasil dihapus" };
  },

  // ============================================================
  // SKILLS DATA
  // ============================================================
  getSkillsData: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SKILLS);
      return data ? JSON.parse(data) : defaultSkillsData;
    } catch {
      return defaultSkillsData;
    }
  },

  updateSkillsData: (data) => {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(data));
    return { success: true, message: "Data skill berhasil diupdate" };
  },

  addSkillItem: (item) => {
    const data = cmsDataService.getSkillsData();
    const maxId = Math.max(...data.map((i) => i.id), 0);
    item.id = maxId + 1;
    data.push(item);
    cmsDataService.updateSkillsData(data);
    return { success: true, message: "Skill berhasil ditambahkan" };
  },

  updateSkillItem: (id, updatedItem) => {
    const data = cmsDataService.getSkillsData();
    const index = data.findIndex((i) => i.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedItem };
      cmsDataService.updateSkillsData(data);
      return { success: true, message: "Skill berhasil diupdate" };
    }
    return { success: false, message: "Skill tidak ditemukan" };
  },

  deleteSkillItem: (id) => {
    const data = cmsDataService.getSkillsData();
    const filtered = data.filter((i) => i.id !== id);
    cmsDataService.updateSkillsData(filtered);
    return { success: true, message: "Skill berhasil dihapus" };
  },

  // ============================================================
  // RESET ALL DATA
  // ============================================================
  resetAllData: () => {
    Object.keys(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(STORAGE_KEYS[key]);
    });
    initializeData();
    return { success: true, message: "Semua data berhasil direset ke default" };
  },
};
