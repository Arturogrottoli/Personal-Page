"use client"

import { useState } from "react"
import styles from "./page.module.css"
import { Download, Github, Linkedin, BarChart2, Smartphone, GraduationCap, Code, Briefcase, Globe, AppWindow } from "lucide-react"
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
  siPwa
} from "simple-icons"

interface IconType {
  path: string;
}

const TechIcon = ({ icon, name }: { icon: IconType; name: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "24px", height: "24px", fill: "#33ff33", margin: "0 5px" }}
  >
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);


export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [language, setLanguage] = useState<"es" | "en">("es")

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const t = translations[language]

  const portfolioItems = [

    {
      title: "Movie Points Tracker",
      description: "Watchlist app with points, user login, and database support.",
      image: "https://i.ibb.co/0ycnvSwj/moviepoint.png",
      link: "https://python-movies.vercel.app/",
      repo: "https://github.com/Arturogrottoli/python-movies",
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siPwa, name: "PWA" },
        { icon: siTailwindcss, name: "Tailwind" },
        { icon: siPython, name: "Python" }
      ],
    },
    {
      title: "Corazon Verde",
      description: "Farm-raised chickens raised naturally",
      image: "https://i.ibb.co/KxmqFsm6/corazon-verde.png",
      link: "https://setlistspotify.vercel.app/",
      repo: "https://github.com/Arturogrottoli/corazonverde",
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siCss3, name: "CSS3" },
        { icon: siTailwindcss, name: "Tailwind" }
      ],
    },
    {
      title: "Setlistfm to Spotify",
      description: "Converts shows from Setlist.fm into Spotify playlists",
      image: "https://i.ibb.co/tpztnSs8/setlisttospoty.png",
      link: "https://setlistspotify.vercel.app/",
      repo: "https://github.com/Arturogrottoli/setlistfm-to-spotify",
      technologies: [
        { icon: siReact, name: "React" },
        { icon: siPwa, name: "PWA" },
        { icon: siTailwindcss, name: "Tailwind" }
      ],
    },
    {
      title: "Transportes CoCo",
      description: "Transportation company for people and pets.",
      image: "https://i.ibb.co/dsVbsWyN/cocotransporte.png",
      link: "https://transportecoco.vercel.app/",
      repo: "https://github.com/Arturogrottoli/transportescoco",
      technologies: [
        { icon: siReact, name: "React" },
        { icon: siCss3, name: "CSS3" },
        { icon: siBootstrap, name: "Bootstrap" }
      ],
    },
    {
      title: "Dibujantis Portfolio",
      description: "Portfolio of the illustrator Dibujantis",
      image: "https://i.ibb.co/KckSS8R8/dibujantis.png",
      link: "https://www.dibujantis.com",
      repo: "https://github.com/Arturogrottoli/Dibujantis",
      technologies: [
        { icon: siReact, name: "React" },
        { icon: siCss3, name: "CSS3" },
        { icon: siBootstrap, name: "Bootstrap" }
      ],
    },
    {
      title: "Cliff Hostel",
      description: "A surf hostel in Chapadmalal page, Next Js and Tailwind",
      image: "https://i.postimg.cc/RFPfDbH1/Captura.png",
      link: "https://cliff-hostel.vercel.app/",
      repo: "https://github.com/Arturogrottoli/Cliff-Hostel",
      technologies: [
        { icon: siTypescript, name: "Typescript" },
        { icon: siTailwindcss, name: "Tailwind" },
        { icon: siReact, name: "Next.js" },
      ],
    },
    {
      title: "Tu CryptoBro",
      description: "An app to check cryptocurrency prices via an API",
      image: "https://i.postimg.cc/25hTjQhy/Captura-de-pantalla-2025-02-22-164023.png",
      link: "https://tu-crypto-bro.vercel.app/",
      repo: "https://github.com/Arturogrottoli/TuCryptoBro",
      technologies: [
        { icon: siTypescript, name: "Typescript" },
        { icon: siTailwindcss, name: "Tailwind" },
        { icon: siReact, name: "React" },
      ],
    },
    {
      title: "Ecommerce React",
      description: "E-commerce of products fetched from a generic API.",
      image: "https://i.ibb.co/k2q9KR2G/tiendaonline.png",
      link: "https://possible-hook.surge.sh/",
      repo: "https://github.com/Arturogrottoli/E-commerce-React",
      technologies: [
        { icon: siReact, name: "React" },
        { icon: siCss3, name: "CSS3" },
        { icon: siBootstrap, name: "Bootstrap" }
      ],
    },
    {
      title: "Reftel Technology Solutions",
      description: "Intercom systems and VAR service applied to football.",
      image: "https://i.ibb.co/LdRNGL5J/reftel.png",
      link: "https://reftelcomunicaciones.netlify.app/",
      repo: "https://github.com/Arturogrottoli/Reftel-Comunicaciones",
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
      image: "https://i.ibb.co/rRg9q122/casacasfutbol.png",
      link: "https://curved-powder.surge.sh",
      repo: "https://github.com/Arturogrottoli/Reactivo",
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
      image: "https://i.ibb.co/j92gdsF9/Coder-Vision.png",
      link: "https://codervision.netlify.app",
      repo: "https://github.com/Arturogrottoli/CoderVision",
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
      image: "https://i.ibb.co/mr6jgYvk/Captura-de-pantalla-2026-01-14-185732.png",
      link: "https://arturogrottoli.github.io/Mija/",
      repo: "https://github.com/Arturogrottoli/Mija",
      technologies: [
        { icon: siHtml5, name: "HTML5" },
        { icon: siCss3, name: "CSS3" },
        { icon: siJavascript, name: "JavaScript" },
        { icon: siTailwindcss, name: "Tailwind" }
      ],
    },
  ]
  

  const cvLinks = {
    es: "https://drive.google.com/file/d/1ga0Xbs_w5VIdSnmIEWLlTpoU8htanfyf/view?usp=sharing",
    en: "https://drive.google.com/file/d/1hTQ5SBo65fPY_tIqIgvEjaFtzu4YgyEt/view?usp=sharing",
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <pre className={styles.asciiArt}>
          {`
    _    ____ _____ _   _ ____   ___       ____ ____   ___ _____ _____ ___  _     ___ 
   / \\  |  _ \\_   _| | | |  _ \\ / _ \\     / ___|  _ \\ / _ \\_   _|_   _/ _ \\| |   |_ _|
  / _ \\ | |_) || | | | | | |_) | | | |   | |  _| |_) | | | || |   | || | | | |    | | 
 / ___ \\|  _ < | | | |_| |  _ <| |_| |   | |_| |  _ <| |_| || |   | || |_| | |___ | | 
/_/   \\_\\_| \\_\\|_|  \\___/|_| \\_\\\\___/     \\____|_| \\_\\\\___/ |_|   |_| \\___/|_____|___|
`}
        </pre>
        <div className={styles.logoContainer}>
          <div className={`${styles.logo} ${styles.logoMobile}`}>AG</div>
          <button onClick={toggleLanguage} className={styles.languageToggle}>
            <Globe size={18} />
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.separator}>
          ===============================================================================================================================================
        </div>
        <h2>{t.title}</h2>
        <div className={styles.separator}>
          ====================================================================================================================================================
        </div>

        <h3>{t.career}</h3>
        <ul>
          <li>
            <button onClick={() => toggleSection("fullstack")} className={styles.sectionToggle}>
              <span>
                - {t.fullstack} <Code size={18} />
              </span>
            </button>
            {openSection === "fullstack" && (
              <div className={styles.sectionContent}>
                <p>{t.fullstackDesc}</p>
                <ul>
                  <li>
                    {">"}
                    {t.emonkJob}
                  </li>
                  <li>
                    {">"}
                    {t.freelanceJob}
                  </li>
                </ul>
                <p>{t.technologies}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
                  <TechIcon icon={siHtml5} name="HTML5" />
                  <TechIcon icon={siCss3} name="CSS3" />
                  <TechIcon icon={siGithubIcon} name="GitHub" />
                  <TechIcon icon={siPhp} name="PHP" />
                  <TechIcon icon={siPython} name="Python" />
                  <TechIcon icon={siJavascript} name="JavaScript" />
                  <TechIcon icon={siReact} name="React" />
                  <TechIcon icon={siMysql} name="MySQL" />
                  <TechIcon icon={siDjango} name="Django" />
                  <TechIcon icon={siFlask} name="Flask" />
                  <TechIcon icon={siNextdotjs} name="Next.js" />
                  <TechIcon icon={siSass} name="Sass" />
                  <TechIcon icon={siBootstrap} name="Bootstrap" />
                  <TechIcon icon={siTypescript} name="Typescript" />
                  <TechIcon icon={siTailwindcss} name="Tailwind" />
                  
                </div>
              </div>
            )}
          </li>
          
          <li>
            <button onClick={() => toggleSection("teacher")} className={styles.sectionToggle}>
              <span>
                - {t.teacher} <GraduationCap size={18} />
              </span>
            </button>
            {openSection === "teacher" && (
              <div className={styles.sectionContent}>
                <p>{t.teacherDesc}</p>
                <ul>
                  <li>
                    {">"}
                    {t.codoacodoJob}
                  </li>
                  <li>
                    {">"}
                    {t.coderhouseJob}
                  </li>
                </ul>
              </div>
            )}
          </li>
          
          <li>
            <button onClick={() => toggleSection("telecom")} className={styles.sectionToggle}>
              <span>
                - <span className={styles.desktopOnly}>{t.telecom}</span>
                <span className={styles.mobileOnly}>{t.telecomMobile}</span>
                <Smartphone size={18} />
              </span>
            </button>
            {openSection === "telecom" && (
              <div className={styles.sectionContent}>
                <p>{t.telecomDesc}</p>
                <ul>
                  <li>{">"}SOTO COMUNICACIONES (2018-2020)</li>
                  <li>{">"}BOOT ARGENTINA (2014-2018)</li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button onClick={() => toggleSection("dataAnalyst")} className={styles.sectionToggle}>
              <span>
                - {t.dataAnalyst} <BarChart2 size={18} />
              </span>
            </button>
            {openSection === "dataAnalyst" && (
              <div className={styles.sectionContent}>
                <p>{t.dataAnalystDesc}</p>
                <ul>
                  <li>
                    {">"}
                    {t.liramaticJob}
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button onClick={() => toggleSection("portfolio")} className={styles.sectionToggle}>
              <span>
                - {t.portfolio} <Briefcase size={18} />
              </span>
            </button>
            {openSection === "portfolio" && (
              <div className={styles.sectionContent}>
                <p>{t.featuredProjects}</p>
                <div className={styles.portfolioGrid}>
                {portfolioItems.map((item, index) => (
  <div key={index} className={styles.portfolioItem}>
    <img src={item.image} alt={item.title} />
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <div className={styles.portfolioLinks}>
      <a href={item.repo} target="_blank" rel="noopener noreferrer" className={styles.portfolioLink}>
        <Github size={16} /> Repo
      </a>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.portfolioLink}>
        <AppWindow size={16} /> Web
      </a>
    </div>
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      {item.technologies.map((tech, i) => (
        <TechIcon key={i} icon={tech.icon} name={tech.name} />
      ))}
    </div>
  </div>
))}

                </div>
              </div>
            )}
          </li>
        </ul>

        <div className={styles.buttons}>
          <a href={cvLinks[language]} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
            <span>{t.downloadCV}</span>
            <Download size={18} />
          </a>
        </div>

        <div className={styles.socialLinks}>
          <h3>{t.socialLinks}</h3>
          <a href="https://github.com/Arturogrottoli" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/arturo-grottoli/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        </div>

        <div className={styles.contactInfo}>
          <span>{t.contact} arturogrottoli@gmail.com</span>
        </div>
      </div>
    </main>
  )
}

