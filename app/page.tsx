"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import styles from "./page.module.css"
import { Download, Github, Linkedin, BarChart2, Smartphone, GraduationCap, Code, Briefcase, Globe, AppWindow, X, Mail } from "lucide-react"
import { translations } from "./translations"
import {
  siHtml5,
  siCss3,
  siGithub as siGithubIcon,
  siPhp,
  siPython,
  siJavascript,
  siReact,
  siMysql,
  siDjango,
  siFlask,
  siNextdotjs,
  siSass,
  siBootstrap,
  siFirebase,
  siTypescript,
  siTailwindcss,
  siPwa,
  siNodedotjs,
  siDocker,
  siAngular,
} from "simple-icons"

interface IconType {
  path: string;
}

const TechIcon = ({ icon, name, compact = false }: { icon: IconType; name: string; compact?: boolean }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={compact
      ? { width: "14px", height: "14px", fill: "currentColor", flexShrink: 0 }
      : { width: "24px", height: "24px", fill: "#33ff33", margin: "0 5px" }}
  >
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);


const portfolioItems = [

    {
      title: "Corazon Verde",
      description: "Farm-raised chickens raised naturally",
      image: "/portfolio/corazonverde.png",
      link: "https://corazonverde.vercel.app/",
      repo: "https://github.com/Arturogrottoli/corazonverde",
      details: {
        es: "Sitio web para Corazón Verde, un emprendimiento de pollos de campo criados de forma natural. Presenta los productos y la forma de crianza, con un diseño responsive pensado para que los clientes conozcan la marca y hagan sus pedidos.",
        en: "Website for Corazón Verde, a business selling naturally raised farm chickens. It showcases the products and how they are raised, with a responsive design so customers can get to know the brand and place orders.",
      },
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siCss3, name: "CSS3" },
        { icon: siTailwindcss, name: "Tailwind" }
      ],
    },
    {
      title: "EPUBify",
      description: "Convert PDFs, articles, emails and text into EPUB files.",
      image: "/portfolio/epubify.png",
      link: "https://turiepubify.vercel.app/",
      repo: "https://github.com/Arturogrottoli/Epubify",
      details: {
        es: "Aplicación web que convierte PDFs, artículos, emails y texto plano en archivos EPUB listos para leer en cualquier e-reader. Funciona como PWA, por lo que se puede instalar en el celular o la computadora.",
        en: "Web app that converts PDFs, articles, emails and plain text into EPUB files ready for any e-reader. It works as a PWA, so it can be installed on phones and desktops.",
      },
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siTypescript, name: "TypeScript" },
        { icon: siTailwindcss, name: "Tailwind" },
        { icon: siPwa, name: "PWA" },
      ],
    },
    {
      title: "Dibujantis Portfolio",
      description: "Illustration portfolio website for Dibujantis",
      image: "/portfolio/dibujantis.png",
      link: "https://dibujantis.vercel.app/",
      repo: "https://github.com/Arturogrottoli/Dibujantis",
      details: {
        es: "Portfolio web para Dibujantis, que exhibe sus ilustraciones en una galería visual. Proyecto freelance para un cliente real, enfocado en que la obra sea la protagonista.",
        en: "Web portfolio for Dibujantis, showing their illustrations in a visual gallery. A freelance project for a real client, designed to put the artwork front and center.",
      },
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siReact, name: "React" },
        { icon: siTailwindcss, name: "Tailwind" }
      ],
    },
    {
      title: "Setlistfm to Spotify",
      description: "Converts shows from Setlist.fm into Spotify playlists",
      image: "/portfolio/setlistfm-to-spotify.png",
      link: "https://setlistfm-to-spotify.vercel.app/",
      repo: "https://github.com/Arturogrottoli/setlistfm-to-spotify",
      details: {
        es: "Herramienta que toma el setlist de un show desde la API de setlist.fm y crea automáticamente la playlist correspondiente en Spotify mediante la API de Spotify. Ideal para escuchar lo que tocó una banda en un recital.",
        en: "Tool that fetches a show's setlist from the setlist.fm API and automatically builds the matching Spotify playlist through the Spotify API. Handy for listening to what a band played at a concert.",
      },
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siReact, name: "React" },
        { icon: siPwa, name: "PWA" },
        { icon: siTailwindcss, name: "Tailwind" }
      ],
    },
    {
      title: "Transportes CoCo",
      description: "Transportation company for people and pets.",
      image: "/portfolio/transportescoco.png",
      link: "https://transportecoco.vercel.app/",
      repo: "https://github.com/Arturogrottoli/transportescoco",
      details: {
        es: "Sitio web para Transportes CoCo, una empresa de traslados de personas y mascotas. Presenta los servicios y facilita el contacto con la empresa. Proyecto freelance para un cliente real.",
        en: "Website for Transportes CoCo, a company that transports people and pets. It presents its services and makes it easy to get in touch. A freelance project for a real client.",
      },
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siReact, name: "React" },
        { icon: siTailwindcss, name: "Tailwind" }
      ],
    },
    {
      title: "Plant App",
      description: "Mobile app to identify plants using AI.",
      image: "/portfolio/plant-app.jpg",
      link: "https://expo.dev/accounts/turidevs-organization/projects/plant-app/builds/492f5b38-c002-487c-84f1-e76f8676b202",
      repo: "https://github.com/Arturogrottoli/plant-app",
      mobile: true,
      details: {
        es: "Aplicación mobile que identifica plantas a partir de una foto usando inteligencia artificial. Desarrollada con React Native y Expo, con un backend en Node.js.",
        en: "Mobile app that identifies plants from a photo using AI. Built with React Native and Expo, with a Node.js backend.",
      },
      technologies: [
        { icon: siReact, name: "React Native" },
        { icon: siTypescript, name: "TypeScript" },
        { icon: siNodedotjs, name: "Node.js" },
      ],
    },
    {
      title: "Movie Points Tracker",
      description: "Watchlist app with points, user login, and database support.",
      image: "/portfolio/python-movies.png",
      link: "https://python-movies.vercel.app/",
      repo: "https://github.com/Arturogrottoli/python-movies",
      details: {
        es: "App de watchlist para registrar películas vistas y sumar puntos. Incluye login de usuarios y base de datos para guardar el progreso de cada uno.",
        en: "Watchlist app to track the movies you watch and earn points. It includes user login and a database to store each user's progress.",
      },
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siPwa, name: "PWA" },
        { icon: siTailwindcss, name: "Tailwind" },
        { icon: siPython, name: "Python" }
      ],
    },
    {
      title: "Cliff Hostel",
      description: "A surf hostel in Chapadmalal page, Next Js and Tailwind",
      image: "/portfolio/cliff-hostel.png",
      link: "https://cliff-hostel.vercel.app/",
      repo: "https://github.com/Arturogrottoli/Cliff-Hostel",
      details: {
        es: "Página web para Cliff Hostel, un hostel de surf en Chapadmalal. Muestra las instalaciones, los servicios y la información de contacto con un diseño moderno y responsive.",
        en: "Website for Cliff Hostel, a surf hostel in Chapadmalal. It shows the facilities, services and contact information with a modern, responsive design.",
      },
      technologies: [
        { icon: siTypescript, name: "Typescript" },
        { icon: siTailwindcss, name: "Tailwind" },
        { icon: siNextdotjs, name: "Next.js" },
      ],
    },
    {
      title: "Tu CryptoBro",
      description: "An app to check cryptocurrency prices via an API",
      image: "/portfolio/tucryptobro.png",
      link: "https://tu-crypto-bro.vercel.app/",
      repo: "https://github.com/Arturogrottoli/TuCryptoBro",
      details: {
        es: "App para consultar precios de criptomonedas en tiempo real consumiendo una API pública. Instalable como PWA.",
        en: "App to check cryptocurrency prices in real time using a public API. Installable as a PWA.",
      },
      technologies: [
        { icon: siTypescript, name: "Typescript" },
        { icon: siTailwindcss, name: "Tailwind" },
        { icon: siPwa, name: "PWA" },
      ],
    },
    {
      title: "Ecommerce React with API",
      description: "E-commerce of products fetched from a generic API.",
      image: "/portfolio/e-commerce-react.png",
      link: "https://possible-hook.surge.sh/",
      repo: "https://github.com/Arturogrottoli/E-commerce-React",
      details: {
        es: "E-commerce desarrollado en React que obtiene los productos desde una API genérica. Incluye listado de productos, detalle y carrito de compras.",
        en: "E-commerce built with React that fetches products from a generic API. It includes a product list, product details and a shopping cart.",
      },
      technologies: [
        { icon: siReact, name: "React" },
        { icon: siCss3, name: "CSS3" },
        { icon: siBootstrap, name: "Bootstrap" }
      ],
    },
    {
      title: "Reftel Technology Solutions",
      description: "Intercom systems and VAR service applied to football.",
      image: "/portfolio/reftel-comunicaciones.png",
      link: "https://reftelcomunicaciones.netlify.app/",
      repo: "https://github.com/Arturogrottoli/Reftel-Comunicaciones",
      details: {
        es: "Sitio institucional para Reftel Technology Solutions, empresa de sistemas de intercomunicación y servicio VAR aplicado al fútbol.",
        en: "Corporate website for Reftel Technology Solutions, a company offering intercom systems and VAR services for football.",
      },
      technologies: [
        { icon: siHtml5, name: "HTML5" },
        { icon: siCss3, name: "CSS3" },
        { icon: siJavascript, name: "JavaScript" },
        { icon: siBootstrap, name: "Bootstrap" }
      ],
    },
    {
      title: "Casacas Futbol! Soccer tshirts ecommerce",
      description: "Ecommerce of national team and club football jerseys",
      image: "/portfolio/reactivo.png",
      link: "https://curved-powder.surge.sh",
      repo: "https://github.com/Arturogrottoli/Reactivo",
      details: {
        es: "E-commerce de camisetas de selecciones y clubes de fútbol hecho en React, con Firebase como base de datos para los productos y las órdenes de compra.",
        en: "E-commerce for national team and club football jerseys built with React, using Firebase as the database for products and orders.",
      },
      technologies: [
        { icon: siReact, name: "React" },
        { icon: siCss3, name: "CSS3" },
        { icon: siBootstrap, name: "Bootstrap" },
        { icon: siFirebase, name: "Firebase" }
      ],
    },
    {
      title: "CoderVision, a new streaming",
      description: "Streaming service to watch your favorite series and movies.",
      image: "/portfolio/codervision.png",
      link: "https://codervision.netlify.app",
      repo: "https://github.com/Arturogrottoli/CoderVision",
      details: {
        es: "Maqueta de una plataforma de streaming para ver series y películas, desarrollada con HTML, CSS, JavaScript y Bootstrap.",
        en: "Mockup of a streaming platform to watch series and movies, built with HTML, CSS, JavaScript and Bootstrap.",
      },
      technologies: [
        { icon: siHtml5, name: "HTML5" },
        { icon: siCss3, name: "CSS3" },
        { icon: siJavascript, name: "JavaScript" },
        { icon: siBootstrap, name: "Bootstrap" }
      ],
    },
    {
      title: "Mija, baby carrier backpack",
      description: "A real project for the Mija business through Coderhouse.",
      image: "/portfolio/mija.png",
      link: "https://arturogrottoli.github.io/Mija/",
      repo: "https://github.com/Arturogrottoli/Mija",
      details: {
        es: "Proyecto real para Mija, un emprendimiento de mochilas portabebés, realizado a través de Coderhouse. Sitio web que presenta los productos de la marca.",
        en: "A real project for Mija, a baby carrier backpack business, done through Coderhouse. A website that presents the brand's products.",
      },
      technologies: [
        { icon: siHtml5, name: "HTML5" },
        { icon: siCss3, name: "CSS3" },
        { icon: siJavascript, name: "JavaScript" }
      ],
    },
  ]

type PortfolioItem = (typeof portfolioItems)[number]

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)
  const releaseMinHeight = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!selectedProject) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [selectedProject])

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  // Mientras una sección del acordeón se expande, la página todavía no tiene su altura final
  // y el navegador no puede scrollear hasta el destino. Se reserva la altura necesaria con
  // min-height y se libera cuando la sección ya terminó de abrirse.
  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const targetTop = el.getBoundingClientRect().top + window.scrollY
    document.body.style.minHeight = `${targetTop + window.innerHeight}px`
    if (releaseMinHeight.current) clearTimeout(releaseMinHeight.current)
    releaseMinHeight.current = setTimeout(releaseReservedHeight, 2000)
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // Si el destino estaba cerca del final, sin el min-height la página es más corta que el
  // scroll actual: primero se baja suave hasta el nuevo máximo para evitar un salto brusco.
  const releaseReservedHeight = () => {
    const body = document.body
    const reserved = body.style.minHeight
    // Se lee antes de quitar el min-height: al medir sin él, el navegador ya recorta el scroll
    const currentScroll = window.scrollY
    body.style.minHeight = ""
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    if (currentScroll <= maxScroll) return
    // Se restaura todo en el mismo frame (sin llegar a pintarse) y después se baja suave
    body.style.minHeight = reserved
    window.scrollTo({ top: currentScroll, behavior: "instant" })
    window.scrollTo({ top: maxScroll, behavior: "smooth" })
    releaseMinHeight.current = setTimeout(() => {
      body.style.minHeight = ""
    }, 600)
  }

  // Abre la sección (si hace falta) y scrollea hasta el destino. Si había otra sección abierta
  // arriba, espera a que termine de cerrarse para que la posición del destino sea la final.
  const navigateTo = (targetId: string, section?: string) => {
    if (section === undefined || openSection === section) {
      scrollToId(targetId)
      return
    }
    setOpenSection(section)
    setTimeout(() => scrollToId(targetId), 350)
  }

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const t = translations[language]

  const cvLinks = {
    es: "https://drive.google.com/file/d/1ga0Xbs_w5VIdSnmIEWLlTpoU8htanfyf/view?usp=sharing",
    en: "https://drive.google.com/file/d/1hTQ5SBo65fPY_tIqIgvEjaFtzu4YgyEt/view?usp=sharing",
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <pre className={`${styles.asciiArt} ${styles.desktopOnly}`} aria-label="Arturo Grottoli">
          {`
    _    ____ _____ _   _ ____   ___       ____ ____   ___ _____ _____ ___  _     ___ 
   / \\  |  _ \\_   _| | | |  _ \\ / _ \\     / ___|  _ \\ / _ \\_   _|_   _/ _ \\| |   |_ _|
  / _ \\ | |_) || | | | | | |_) | | | |   | |  _| |_) | | | || |   | || | | | |    | | 
 / ___ \\|  _ < | | | |_| |  _ <| |_| |   | |_| |  _ <| |_| || |   | || |_| | |___ | | 
/_/   \\_\\_| \\_\\|_|  \\___/|_| \\_\\\\___/     \\____|_| \\_\\\\___/ |_|   |_| \\___/|_____|___|
`}
        </pre>
        <pre className={`${styles.asciiArtMobile} ${styles.mobileOnly}`} aria-label="Arturo Grottoli">
          {`
    _    ____ _____ _   _ ____   ___
   / \\  |  _ \\_   _| | | |  _ \\ / _ \\
  / _ \\ | |_) || | | | | | |_) | | | |
 / ___ \\|  _ < | | | |_| |  _ <| |_| |
/_/   \\_\\_| \\_\\|_|  \\___/|_| \\_\\\\___/

  ____ ____   ___ _____ _____ ___  _     ___
 / ___|  _ \\ / _ \\_   _|_   _/ _ \\| |   |_ _|
| |  _| |_) | | | || |   | || | | | |    | |
| |_| |  _ <| |_| || |   | || |_| | |___ | |
 \\____|_| \\_\\\\___/ |_|   |_| \\___/|_____|___|
`}
        </pre>
        <div className={styles.logoContainer}>
          <div className={`${styles.logo} ${styles.logoMobile}`}>AG</div>
          <button onClick={toggleLanguage} className={styles.languageToggle}>
            <Globe size={18} />
            {language === "es" ? "EN" : "ES"}
          </button>
          <a href={cvLinks[language]} target="_blank" rel="noopener noreferrer" className={styles.downloadBtnHeader}>
            <Download size={16} />
            {language === "es" ? "Descargar CV" : "Download CV"}
          </a>
        </div>
      </div>

      <nav className={styles.stickyNav}>
        <button onClick={() => navigateTo("career")}>{t.navCareer}</button>
        <button onClick={() => navigateTo("tech", "fullstack")}>{t.navTech}</button>
        <button onClick={() => navigateTo("portfolio", "portfolio")}>{t.portfolio}</button>
        <button onClick={() => navigateTo("contact")} className={styles.navContact}>
          <Mail size={14} /> {t.navContact}
        </button>
      </nav>

      <div className={styles.content}>
        <div className={styles.separator}>
          ===============================================================================================================================================
        </div>
        <h2>{t.title}</h2>
        <div className={styles.separator}>
          ====================================================================================================================================================
        </div>

        <h3 id="career" className={styles.anchor}>{t.career}</h3>
        <ul>
          <li>
            <button onClick={() => toggleSection("fullstack")} className={styles.sectionToggle}>
              <span>
                - {t.fullstack} <Code size={18} />
              </span>
            </button>
            <AnimatePresence>
              {openSection === "fullstack" && (
                <motion.div
                  className={styles.sectionContent}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 100, damping: 20 },
                        opacity: { duration: 0.3 },
                        staggerChildren: 0.08,
                        delayChildren: 0.1
                      }
                    },
                    hidden: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                        when: "afterChildren"
                      }
                    }
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <motion.ul variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    <motion.li variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>
                      {">"}
                      {t.emonkJob}
                    </motion.li>
                    <motion.li variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>
                      {">"}
                      {t.freelanceJob}
                    </motion.li>
                  </motion.ul>
                  <motion.p variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>{t.technologies}</motion.p>
                  <motion.div
                    id="tech"
                    className={styles.anchor}
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }}
                  >
                    {[siReact, siNextdotjs, siTypescript, siJavascript, siAngular, siNodedotjs, siPython, siPhp, siMysql, siDjango, siFlask, siDocker, siFirebase, siTailwindcss, siBootstrap, siSass, siHtml5, siCss3, siPwa, siGithubIcon].map((icon, i) => (
                      <motion.div key={i} variants={{ hidden: { scale: 0, opacity: 0, rotate: -15 }, visible: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 200 } } }}>
                        <TechIcon icon={icon} name={icon.title || ""} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <button onClick={() => toggleSection("teacher")} className={styles.sectionToggle}>
              <span>
                - {t.teacher} <GraduationCap size={18} />
              </span>
            </button>
            <AnimatePresence>
              {openSection === "teacher" && (
                <motion.div
                  className={styles.sectionContent}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 100, damping: 20 },
                        opacity: { duration: 0.3 },
                        staggerChildren: 0.08,
                        delayChildren: 0.1
                      }
                    },
                    hidden: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                        when: "afterChildren"
                      }
                    }
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <motion.p variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>{t.teacherDesc}</motion.p>
                  <motion.ul variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    <motion.li variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>
                      {">"}
                      {t.codoacodoJob}
                    </motion.li>
                    <motion.li variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>
                      {">"}
                      {t.coderhouseJob}
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <button onClick={() => toggleSection("telecom")} className={styles.sectionToggle}>
              <span>
                - <span className={styles.desktopOnly}>{t.telecom}</span>
                <span className={styles.mobileOnly}>{t.telecomMobile}</span>
                <Smartphone size={18} />
              </span>
            </button>
            <AnimatePresence>
              {openSection === "telecom" && (
                <motion.div
                  className={styles.sectionContent}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 100, damping: 20 },
                        opacity: { duration: 0.3 },
                        staggerChildren: 0.08,
                        delayChildren: 0.1
                      }
                    },
                    hidden: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                        when: "afterChildren"
                      }
                    }
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <motion.p variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>{t.telecomDesc}</motion.p>
                  <motion.ul variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    <motion.li variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>{">"}SOTO COMUNICACIONES (2018-2020)</motion.li>
                    <motion.li variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>{">"}BOOT ARGENTINA (2014-2018)</motion.li>
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li>
            <button onClick={() => toggleSection("dataAnalyst")} className={styles.sectionToggle}>
              <span>
                - {t.dataAnalyst} <BarChart2 size={18} />
              </span>
            </button>
            <AnimatePresence>
              {openSection === "dataAnalyst" && (
                <motion.div
                  className={styles.sectionContent}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 100, damping: 20 },
                        opacity: { duration: 0.3 },
                        staggerChildren: 0.08,
                        delayChildren: 0.1
                      }
                    },
                    hidden: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                        when: "afterChildren"
                      }
                    }
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <motion.p variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>{t.dataAnalystDesc}</motion.p>
                  <motion.ul variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    <motion.li variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } } }}>
                      {">"}
                      {t.liramaticJob}
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li id="portfolio" className={styles.anchor}>
            <button onClick={() => toggleSection("portfolio")} className={styles.sectionToggle}>
              <span>
                - {t.portfolio} <Briefcase size={18} />
              </span>
            </button>
            <AnimatePresence>
              {openSection === "portfolio" && (
                <motion.div
                  className={styles.sectionContent}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 100, damping: 20 },
                        opacity: { duration: 0.3 },
                        staggerChildren: 0.1,
                        delayChildren: 0.1
                      }
                    },
                    hidden: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                        when: "afterChildren"
                      }
                    }
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <p>{t.featuredProjects}</p>
                  <div className={styles.portfolioGrid}>
                    {portfolioItems.map((item, index) => (
                      <motion.div
                        key={index}
                        className={styles.portfolioItem}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8, y: 30 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            transition: {
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              delay: index * 0.05
                            }
                          }
                        }}
                        whileHover={{ scale: 1.04, y: -6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        onClick={() => setSelectedProject(item)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            setSelectedProject(item)
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                      >
                        <div className={styles.browserFrame}>
                          <div className={styles.browserBar}>
                            <span className={styles.browserDots}>
                              <i /><i /><i />
                            </span>
                          </div>
                          <div className={styles.browserScreen}>
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              className={item.mobile ? styles.screenshotMobile : styles.screenshot}
                            />
                          </div>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <ul className={styles.techBadges}>
                          {item.technologies.map((tech, i) => (
                            <li key={i} className={styles.techBadge}>
                              <TechIcon icon={tech.icon} name={tech.name} compact />
                              {tech.name}
                            </li>
                          ))}
                        </ul>
                        <div className={styles.cardActions} onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                            <AppWindow size={16} /> {item.mobile ? "Demo" : "Web"}
                          </a>
                          <a href={item.repo} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                            <Github size={16} /> Repo
                          </a>
                        </div>
                      </motion.div>
                    ))}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <section id="contact" className={styles.contactSection}>
          <h3>{t.contactTitle}</h3>
          <p>{t.contactText}</p>
          <div className={styles.contactActions}>
            <a href="mailto:arturogrottoli@gmail.com" className={`${styles.btnPrimary} ${styles.contactEmail}`}>
              <Mail size={18} /> arturogrottoli@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/arturo-grottoli/" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/Arturogrottoli" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              <Github size={18} /> GitHub
            </a>
            <a href={cvLinks[language]} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              <Download size={18} /> {t.downloadCV}
            </a>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalOverlay}
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <button
                className={styles.modalClose}
                onClick={() => setSelectedProject(null)}
                aria-label={t.close}
                autoFocus
              >
                <X size={20} />
              </button>
              <div className={styles.modalImageFrame}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  sizes="(max-width: 720px) 100vw, 420px"
                  className={styles.modalImage}
                />
              </div>
              <div className={styles.modalBody}>
                <h3 id="project-modal-title">{selectedProject.title}</h3>
                <p className={styles.modalDescription}>{selectedProject.details[language]}</p>
                <h4>{t.technologiesUsed}</h4>
                <ul className={styles.modalTechList}>
                  {selectedProject.technologies.map((tech, i) => (
                    <li key={i}>
                      <TechIcon icon={tech.icon} name={tech.name} />
                      <span>{tech.name}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.portfolioLinks}>
                  <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer" className={styles.portfolioLink}>
                    <Github size={16} /> Repo
                  </a>
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={styles.portfolioLink}>
                    <AppWindow size={16} /> Web
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

