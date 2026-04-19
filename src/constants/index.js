import manishShahImg from "../assets/images/Manish_Shah.png";
import deepakHawaleImg from "../assets/images/Deepak_Hawale.png";
import neilShahImg from "../assets/images/Neil_Shah.png";
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
import icoNature from "../assets/images/nature.svg";
import icoVilla from "../assets/images/villa.svg";
import icoPhone from "../assets/images/phone.svg";
import icoEmail from "../assets/images/mail.svg";
import icoOffice from "../assets/images/pin.svg";
import contactBG from "../assets/images/contact_bg.jpg";
import projectBG from "../assets/images/project_bg.jpg";
import whyBG from "../assets/images/why_etaway_bg.jpg";
import icoClose from "../assets/images/close.svg";
import icoSearch from "../assets/images/search.svg";
import icoPhoneWhite from "../assets/images/phone_white.svg";
import icoChat from "../assets/images/chat.svg";
import instagramIcon from "../assets/images/insta.svg";
import linkedinIcon from "../assets/images/in.svg";
import facebookIcon from "../assets/images/air.svg";
import villaImg1 from "../assets/images/villa4.jpg";
import villaImg2 from "../assets/images/villa5.jpg";
import villaImg3 from "../assets/images/villa6.jpg";

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
  icoNature: icoNature,
  icoVilla: icoVilla,
  icoPhone: icoPhone,
  icoEmail: icoEmail,
  icoOffice: icoOffice,
  contactBG: contactBG,
  projectBG: projectBG,
  whyBG: whyBG,
  icoClose: icoClose,
  icoSearch: icoSearch,
  icoPhoneWhite: icoPhoneWhite,
  icoChat: icoChat,
  villaImg1: villaImg1,
  villaImg2: villaImg2,
  villaImg3: villaImg3,
    villaImg4: villa1Img,
  villaImg5: villa2Img,
  villaImg6: villa3Img,
};

export const NAV_LINKS = ["Home", "Projects", "Why Getaway", "Team", "Contact"];
export const NAV_LINKS_FOOTER1 = ["Project", "Why Getaway", "Contact", "Investor Relations", "All Projects", "Disclaimer"];
export const NAV_LINKS_FOOTER2 = ["Our Story", "Our Impact", "Careers", "Investor Relations", "All Projects", "Disclaimer"];



export const GETAWAYVILLAS = [
  { img: IMAGES.villaImg1 },
  { img: IMAGES.villaImg2 },
  { img: IMAGES.villaImg3 },
  // { img: IMAGES.villaImg4 },
  { img: IMAGES.villaImg5 },
  { img: IMAGES.villaImg6 },

];

export const HERO_SLIDES = [
  { img: IMAGES.hero, subtitle: "Elysian Meadows", tagline: "Luxury villas nestled in nature's embrace" },
  { img: IMAGES.hero2, subtitle: "Serene Living", tagline: "Where architecture meets the horizon" },
  { img: IMAGES.hero3, subtitle: "Timeless Design", tagline: "Crafted for generations of memories" },
];

export const PROJECT_IMAGES = [IMAGES.project1, IMAGES.project1b, IMAGES.project1c];

export const FEATURES = [
  { icon: IMAGES.icoNature, title: "Nature-themed designs using natural, eco-friendly materials" },
  { icon: IMAGES.icoVilla, title: "Luxury villa rental management for seamless yields and maintenance"},
];

export const PROJECT_STATS = [
  { val: "38+", label: "Years Experience" },
  { val: "5M+", label: "Sq Ft Delivered" },
  { val: "200+", label: "Villas Completed" },
  { val: "100%", label: "Client Satisfaction" },
];

export const TEAM_MEMBERS = [
  { name: "Manish Shah", role: "Co-Founder", img: manishShahImg, description: "With 38+ years of experience in residential, commercial, second home development and has delivered over 5 million square feet constructed across India… responsible for quality construction, timely execution and completion ensuring every Villa" },
  { name: "Deepak Hawale", role: "Co-Founder", img: deepakHawaleImg ,description: "With 38+ years of experience in residential, commercial, second home development and has delivered over 5 million square feet constructed across India… responsible for quality construction, timely execution and completion ensuring every Villa" },
  { name: "Neil Shah", role: "Co-Founder", img: neilShahImg, description: "With 38+ years of experience in residential, commercial, second home development and has delivered over 5 million square feet constructed across India… responsible for quality construction, timely execution and completion ensuring every Villa" },
];

export const CONTACT_INFO = [
  { icon: IMAGES.icoPhone, label: "Phone", value: "+91 99675 58712" },
  { icon: IMAGES.icoEmail, label: "Email", value: "info@getawaydevelopers.com" },
  { icon: IMAGES.icoOffice, label: "Office", value: "A25, Satyam Shopping Centre, MG Road, Ghatkopar East, Mumbai 400 077" },
];

export const CONTACT_BG = IMAGES.contactBG;
export const PROJECT_BG = IMAGES.projectBG;
export const WHY_BG = IMAGES.whyBG;
export const HOME_BG = IMAGES.hero;

export const GALLERY_ITEMS = [
  { img: IMAGES.villa1, span: "1 / 3", rSpan: "1 / 2" },
  { img: IMAGES.pool, span: "3 / 4", rSpan: "1 / 3" },
  { img: IMAGES.villa2, span: "1 / 2", rSpan: "2 / 3" },
  { img: IMAGES.villa3, span: "2 / 3", rSpan: "2 / 3" },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", icon: instagramIcon },
  { name: "LinkedIn", icon: linkedinIcon },
  { name: "Facebook", icon: facebookIcon }
];
