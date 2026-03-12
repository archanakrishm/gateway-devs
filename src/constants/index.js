import manishShahImg from "../assets/images/Manish_Shah.jpg";
import deepakHawaleImg from "../assets/images/Deepak_Hawale.jpg";
import neilShahImg from "../assets/images/Neil_Shah.jpg";

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90",
  hero2: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90",
  hero3: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=90",
  project1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
  project1b: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
  project1c: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=85",
  whyBg: "https://images.unsplash.com/photo-1602343168117-bb8afe3a9e65?w=1920&q=85",
  villa1: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=85",
  villa2: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85",
  villa3: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&q=85",
  pool: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=900&q=85",
  nature: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=85",
  team1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85",
  team2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85",
  team3: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=85",
  contactBg: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=85",
};

export const NAV_LINKS = ["Home", "Projects", "Why Getaway", "Team", "Contact"];

export const HERO_SLIDES = [
  { img: IMAGES.hero, subtitle: "Elysian Meadows", tagline: "Luxury villas nestled in nature's embrace" },
  { img: IMAGES.hero2, subtitle: "Serene Living", tagline: "Where architecture meets the horizon" },
  { img: IMAGES.hero3, subtitle: "Timeless Design", tagline: "Crafted for generations of memories" },
];

export const PROJECT_IMAGES = [IMAGES.project1, IMAGES.project1b, IMAGES.project1c];

export const FEATURES = [
  { icon: "✦", title: "Nature-Themed Design", desc: "Eco-friendly materials and biophilic architecture that harmonizes with the natural landscape." },
  { icon: "◈", title: "Luxury Villa Management", desc: "Seamless rental management ensuring optimal yields and pristine maintenance of your property." },
  { icon: "⬡", title: "Premium Craftsmanship", desc: "38+ years of expertise delivering over 5 million sq. ft. of world-class construction across India." },
];

export const PROJECT_STATS = [
  { val: "38+", label: "Years Experience" },
  { val: "5M+", label: "Sq Ft Delivered" },
  { val: "200+", label: "Villas Completed" },
  { val: "100%", label: "Client Satisfaction" },
];

export const TEAM_MEMBERS = [
  { name: "Manish Shah", role: "Co-Founder", img: manishShahImg },
  { name: "Deepak Hawale", role: "Co-Founder", img: deepakHawaleImg },
  { name: "Neil Shah", role: "Co-Founder", img: neilShahImg },
];

export const CONTACT_INFO = [
  { icon: "✆", label: "Phone", value: "+91 99675 58712" },
  { icon: "✉", label: "Email", value: "info@getawaydevelopers.com" },
  { icon: "◎", label: "Office", value: "A25, Satyam Shopping Centre, MG Road, Ghatkopar East, Mumbai 400 077" },
];

export const GALLERY_ITEMS = [
  { img: IMAGES.villa1, span: "1 / 3", rSpan: "1 / 2" },
  { img: IMAGES.pool, span: "3 / 4", rSpan: "1 / 3" },
  { img: IMAGES.villa2, span: "1 / 2", rSpan: "2 / 3" },
  { img: IMAGES.villa3, span: "2 / 3", rSpan: "2 / 3" },
];

export const SOCIAL_LINKS = ["Instagram", "LinkedIn", "Facebook"];
