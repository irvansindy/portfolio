// ============================================================
// Setelah assets dipindah ke public/assets/images/,
// semua path bisa pakai string langsung tanpa import
// ============================================================

import { skillsData } from "./skillsData";

// ============================================================
// PROFILE DATA
// ============================================================
export const profileData = {
  fullName: "Maria Ilvor",
  age: "26 Years",
  languages: "English, Spanish",
  phone: "+00 9876543210",
  email: "example@gmail.com",
  address: "Ruami Mello Moraes, - Salvador - MA, 40352, Brazil.",
  title: "Web Developer",
  tagline: "Creativity bleeds from the pen of inspiration.",
  aboutText:
    "I am your client Consultant having 8+ years of experience in this field provides complete range of marketing materials and clienting solution to any industry as well as corporate clients maintaining their reputation and increasing the client awareness using PR & other print media & online marketing activities.",
  secondaryText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the text ever since the 1500s.",
  heroImage: "/assets/images/hero/my-img-dark.png", // ✅ public path langsung
  cvUrl: "#",
};

// ============================================================
// SKILLS DATA
// ============================================================
export { skillsData };

// ============================================================
// COUNTERS DATA
// ============================================================
export const countersData = [
  { id: 1, number: 156, label: "Clients" },
  { id: 2, number: 394, label: "Projects" },
  { id: 3, number: 37,  label: "Countries", active: true },
  { id: 4, number: 21,  label: "Awords" },
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
  email: "mail.example@gmail.com",
  website: "www.yourdomain.com",
  phone1: "(+91)-9876XXXXX",
  phone2: "(+91)-987654XXXX",
  address: "Ruami Mello Moraes Filho, 987 - Salvador - MA, 40352, Brazil.",
  whatsappNumber: "918866774266",
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