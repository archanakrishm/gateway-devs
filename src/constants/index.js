import manishShahImg from "../assets/images/Manish_Shah.jpg";
import deepakHawaleImg from "../assets/images/Deepak_Hawale.jpg";
import neilShahImg from "../assets/images/Neil_Shah.jpg";
import heroImg from "../assets/images/hero.jpg";
import hero2Img from "../assets/images/hero2.jpg";
import hero3Img from "../assets/images/hero3.jpg";
import project1Img from "../assets/images/project1.jpg";
import project1bImg from "../assets/images/project1b.jpg";
import project1cImg from "../assets/images/project1c.jpg";
import whyBgImg from "../assets/images/whyBg.jpg";
import villa1Img from "../assets/images/villa1.jpg";
import villa2Img from "../assets/images/villa2.jpg";
import villa3Img from "../assets/images/villa3.jpg";
import poolImg from "../assets/images/pool.jpg";
import natureImg from "../assets/images/nature.jpg";
import contactBgImg from "../assets/images/contactBg.jpg";

export const IMAGES = {
  hero: heroImg,
  hero2: hero2Img,
  hero3: hero3Img,
  project1: project1Img,
  project1b: project1bImg,
  project1c: project1cImg,
  whyBg: whyBgImg,
  villa1: villa1Img,
  villa2: villa2Img,
  villa3: villa3Img,
  pool: poolImg,
  nature: natureImg,
  team1: manishShahImg,
  team2: deepakHawaleImg,
  team3: neilShahImg,
  contactBg: contactBgImg,
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
