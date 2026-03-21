// ============================================================
// Setelah assets dipindah ke public/assets/images/,
// semua path bisa pakai string langsung tanpa import
// ============================================================

import { skillsData as defaultSkillsData } from "./skillsData";
import { cmsDataService } from "../services/cmsDataService";

// ============================================================
// PROFILE DATA
// ============================================================
const birthDate = new Date("1997-06-27");

function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
const ageInYears = calculateAge(birthDate);

export const profileData = {
  fullName: "Irvan Sindy",
  age: `${calculateAge(birthDate)} Tahun`,
  languages: "Indonesia, English",
  phone: "(+62)-895334359983",
  email: "irvansindy7@gmail.com",
  address: "Villa regency 2, Tangerang",
  title: "Web Developer",
  // tagline: "Creativity bleeds from the pen of inspiration.",
  tagline: "Kreatifitas akan selalu ada.",
  shortDetail:
    "Terbuka untuk terhubung dan berkolaborasi membangun web apps yang memberi solusi nyata.",
  aboutText:
    "Saya adalah seorang Web Developer dengan pengalaman lebih dari 4 tahun dalam membangun berbagai jenis website dan web application. Fokus utama saya adalah menggunakan Laravel untuk mengembangkan sistem yang scalable, aman, dan mudah dikelola. Saya terbiasa membangun company profile, dashboard admin, hingga aplikasi web kustom sesuai kebutuhan bisnis.",

  secondaryText:
    "Selain Laravel, saya juga memiliki pengalaman menggunakan berbagai teknologi seperti React, Vue, jQuery, Go, dan Express untuk membangun aplikasi yang modern dan efisien. Saya juga menggunakan pendekatan No-Code Development dengan Webflow untuk membuat website yang cepat, responsif, dan mudah dikelola oleh klien.",
  heroImage: "/assets/images/hero/my-img-dark.png", // ✅ public path langsung
  cvUrl: "#",
};

// ============================================================
// SKILLS DATA - Load dari CMS Service
// ============================================================
export const skillsData = cmsDataService.getSkillsData();

// ============================================================
// Export function untuk mendapatkan data terbaru dari CMS
// ============================================================
export const getExperienceData = () => cmsDataService.getExperienceData();
export const getPortfolioData = () => cmsDataService.getPortfolioData();
export const getServicesData = () => cmsDataService.getServicesData();
export const getNewsData = () => cmsDataService.getNewsData();
export const getSkillsData = () => cmsDataService.getSkillsData();

// ============================================================
// COUNTERS DATA
// ============================================================
export const countersData = [
  { id: 1, number: 156, label: "Clients" },
  { id: 2, number: 394, label: "Projects" },
  { id: 3, number: 37, label: "Countries", active: true },
  { id: 4, number: 21, label: "Awords" },
];

// ============================================================
// CLIENTS DATA
// ============================================================
export const clientsData = [
  { id: 1, image: "/assets/images/clients/1-d.jpg" },
  { id: 2, image: "/assets/images/clients/2-d.jpg" },
  { id: 3, image: "/assets/images/clients/3-d.jpg" },
  { id: 4, image: "/assets/images/clients/4-d.jpg" },
  { id: 5, image: "/assets/images/clients/5-d.jpg" },
  { id: 6, image: "/assets/images/clients/6-d.jpg" },
  { id: 7, image: "/assets/images/clients/7-d.jpg" },
  { id: 8, image: "/assets/images/clients/8-d.jpg" },
];

// ============================================================
// CONTACT DATA
// ============================================================
export const contactData = {
  email: "irvansindy7@gmail.com",
  website: "www.yourdomain.com",
  phone1: "(+62)-895334359983",
  // phone2: "(+62)-895334359983",
  address: "Villa regency 2, Tangerang",
  whatsappNumber: "(+62)-895334359983",
  whatsappMessage: "Share me your latest resume, HR from masterly...",
};

// ============================================================
// SOCIAL LINKS
// ============================================================
export const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://twitter.com/",
  linkedin: "https://linkedin.com/",
};
