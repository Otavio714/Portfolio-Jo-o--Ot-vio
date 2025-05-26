const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ScrollReveal para vários elementos (mantido seu código original)
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

function toggleDropdown() {
  document.querySelector('.dropdown').classList.toggle('active');
}

// Traduções dos textos, organizadas por idioma (apenas PT e EN)
const translations = {
  PT: {
    nav: ["Início", "Sobre", "Serviços", "Portfólio", "Contato"],
    headerH1: "João Otávio Desenvolvedor Front end",
    headerDesc: "Sou um desenvolvedor front-end em ascensão, movido pela paixão por criar experiências digitais imersivas. Desde o início da minha jornada, desenvolvi uma base sólida em front-end, transformando ideias em sites responsivos e visualmente atraentes. Minha missão? Transformar códigos complexos em interações suaves para o usuário.",
    headerBtn: "Contato",
    aboutH2: "Sobre Mim",
    aboutDesc: "Sou um desenvolvedor web apaixonado com um toque criativo, transformando visões em realidade. Com sólida experiência em HTML, CSS, JavaScript e Python, crio soluções inovadoras, eficientes e elegantes. Focado na experiência do usuário, construo interfaces responsivas, acessíveis e bem estruturadas. Comprometido com a qualidade e melhoria contínua, sempre busco superar expectativas. Vamos criar algo incrível juntos!",
    aboutBtn: "Fale Comigo",
    serviceH2: "Meus Melhores Serviços",
    serviceTitles: ["Design de Websites", "Soluções para E-commerce", "Desenvolvimento Mobile", "Marketing de Conteúdo", "SEO", "Marketing Digital"],
    serviceDesc: [
      "Criamos interfaces amigáveis que envolvem visitantes e ajudam você a alcançar seus objetivos online com o mínimo de esforço.",
      "Construímos lojas online seguras, escaláveis e centradas no usuário que melhoram a experiência de compra e aumentam as conversões.",
      "De iOS a Android, criamos apps que entregam desempenho contínuo e mantêm os usuários voltando.",
      "Nossos serviços incluem criação de posts, vídeos e conteúdo para redes sociais que geram tráfego e engajamento.",
      "Nossas estratégias de SEO são personalizadas para seus objetivos específicos, ajudando você a alcançar seu público-alvo e crescer sua presença online.",
      "Desde publicidade pay-per-click (PPC) até marketing em redes sociais, garantimos que sua marca se destaque no cenário digital."
    ],
    portfolioH2: "Meu Portfólio",
    portfolioDesc: "Explore uma vitrine dos meus projetos diversos, demonstrando minhas habilidades em desenvolvimento web, design e além. Cada projeto reflete minha paixão por criar experiências digitais impactantes e inovadoras.",
    portfolioBannerTitles: ["Projetos entregues", "Clientes felizes", "Feedbacks recebidos"],
    portfolioBannerNums: ["5+", "15+", "20+"],
    contactH2: "Fale Comigo!",
    contactDesc: "Um convite aberto para conectar e explorar oportunidades colaborativas no meu portfólio pessoal.",
    footer: "Direitos Autorais © 2025 Web Design João. Todos os direitos reservados.",
    dropdownBtn: "PT ⌄"
  },
  EN: {
    nav: ["Home", "About", "Service", "Portfolio", "Contact"],
    headerH1: "João Otávio front end Developer",
    headerDesc: "I'm an aspiring front-end developer driven by a passion for crafting immersive digital experiences. Even at the start of my journey, I’ve honed a strong foundation in front-end development, transforming ideas into responsive, visually stunning websites. My mission? To turn complex code into seamless user interactions.",
    headerBtn: "Contact",
    aboutH2: "About Me",
    aboutDesc: "I'm a passionate web developer with a creative touch, turning visions into reality. With solid experience in HTML, CSS, JavaScript, and Python, I craft innovative, efficient, and elegant solutions. Focused on user experience, I build responsive, accessible, and well-structured interfaces. Committed to quality and continuous improvement, I always aim to exceed expectations. Let's create something amazing together!",
    aboutBtn: "Talk to Me",
    serviceH2: "My Best Services",
    serviceTitles: ["Website Design", "E-commerce Solutions", "Mobile Development", "Content Marketing", "SEO", "Digital Marketing"],
    serviceDesc: [
      "We craft user-friendly interfaces that engage visitors and help you achieve your online goals with minimum efforts.",
      "We build secure, scalable, and user-centric online stores that enhance the shopping experience and drive conversions.",
      "From iOS to Android, we create apps that deliver seamless performance and keep users coming back for more.",
      "Our services include creating blog posts, videos, and social media content that drives traffic and engagement.",
      "Our SEO strategies are tailored to your specific goals, helping you reach your target audience and grow your online presence.",
      "From pay-per-click (PPC) advertising to social media marketing, we ensure your brand stands out in the crowded digital landscape."
    ],
    portfolioH2: "My Portfolio",
    portfolioDesc: "Explore a showcase of my diverse projects, demonstrating my skills in web development, design, and beyond. Each project reflects my passion for creating impactful and innovative digital experiences.",
    portfolioBannerTitles: ["Delivered", "Customers", "Feedbacks"],
    portfolioBannerNums: ["5+", "15+", "20+"],
    contactH2: "Talk to Me!",
    contactDesc: "An open invitation to connect, and exploring collaborative opportunities on my personal portfolio website.",
    footer: "Copyright © 2025 Web Design João. All rights reserved.",
    dropdownBtn: "EN ⌄"
  },
};

function changeLanguage(lang) {
  const t = translations[lang];

  // Troca textos da nav
  const navItems = navLinks.querySelectorAll("li a");
  navItems[0].innerText = t.nav[0];
  navItems[1].innerText = t.nav[1];
  navItems[2].innerText = t.nav[2];
  navItems[3].innerText = t.nav[3];
  navItems[4].innerText = t.nav[4];

  // Header
  document.querySelector(".header__content h1").innerHTML = t.headerH1.replace(/\n/g, "<br>");
  document.querySelector(".header__content .section__description").innerText = t.headerDesc;
  document.querySelector(".header__content .header__btn button").innerText = t.headerBtn;

  // About
  document.querySelector(".about__content .section__header").innerHTML = t.aboutH2.replace(/\n/g, "<br>");
  document.querySelector(".about__content .section__description").innerText = t.aboutDesc;
  document.querySelector(".about__content .about__btn button").innerText = t.aboutBtn;

  // Service
  document.querySelector(".service__container .section__header").innerText = t.serviceH2;
  const serviceCards = document.querySelectorAll(".service__card");
  serviceCards.forEach((card, idx) => {
    card.querySelector("h4").innerText = t.serviceTitles[idx];
    card.querySelector("p").innerText = t.serviceDesc[idx];
  });

  // Portfolio
  document.querySelector(".portfolio__container .section__header").innerHTML = t.portfolioH2.replace(/\n/g, "<br>");
  document.querySelector(".portfolio__container .section__description").innerText = t.portfolioDesc;

  const portfolioBannerCards = document.querySelectorAll(".portfolio__banner__card");
  portfolioBannerCards[0].querySelector("h4").innerText = t.portfolioBannerNums[0];
  portfolioBannerCards[0].querySelector("p").innerText = t.portfolioBannerTitles[0];
  portfolioBannerCards[1].querySelector("h4").innerText = t.portfolioBannerNums[1];
  portfolioBannerCards[1].querySelector("p").innerText = t.portfolioBannerTitles[1];
  portfolioBannerCards[2].querySelector("h4").innerText = t.portfolioBannerNums[2];
  portfolioBannerCards[2].querySelector("p").innerText = t.portfolioBannerTitles[2];

  // Contact
  document.querySelector(".contact__container .section__header").innerText = t.contactH2;
  document.querySelector(".contact__container .section__description").innerText = t.contactDesc;

  // Footer
  document.querySelector(".footer").innerText = t.footer;

  // Dropdown button
  document.querySelector('.dropdown-button').innerText = t.dropdownBtn;

  toggleDropdown();
}

function toggleLanguage() {
  const dropdownBtn = document.querySelector('.dropdown-button');
  const currentLang = dropdownBtn.innerText.startsWith('PT') ? 'PT' : 'EN';
  const newLang = currentLang === 'PT' ? 'EN' : 'PT';
  changeLanguage(newLang);
}

document.querySelector('.dropdown-button').addEventListener('click', () => {
  toggleLanguage();
});

document.addEventListener('click', (event) => {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});


