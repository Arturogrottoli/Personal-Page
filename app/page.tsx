"use client"

import { useState } from "react"
import styles from "./page.module.css"
import { Download, Github, Linkedin, BarChart2, Smartphone, GraduationCap, Code, Briefcase, Globe } from "lucide-react"
import Image from "next/image"
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
} from "simple-icons"

const TechIcon = ({ icon, name }: { icon: any; name: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "24px", height: "24px", fill: "#33ff33", margin: "0 5px" }}
  >
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
)

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
      title: "E-commerce Platform",
      description: "A fully responsive online store built with React and Node.js",
      image: "https://via.placeholder.com/250x150.png?text=E-commerce+Platform",
      link: "https://example-ecommerce.com",
      technologies: "React, Node.js, MongoDB",
    },
    {
      title: "Task Management App",
      description: "A productivity app developed using Vue.js and Firebase",
      image: "https://via.placeholder.com/250x150.png?text=Task+Management+App",
      link: "https://example-taskapp.com",
      technologies: "Vue.js, Firebase, Vuex",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information app using Angular and OpenWeatherMap API",
      image: "https://via.placeholder.com/250x150.png?text=Weather+Dashboard",
      link: "https://example-weather.com",
      technologies: "Angular, TypeScript, RxJS",
    },
    {
      title: "Fitness Tracker",
      description: "A mobile app for tracking workouts and nutrition",
      image: "https://via.placeholder.com/250x150.png?text=Fitness+Tracker",
      link: "https://example-fitnesstracker.com",
      technologies: "React Native, Redux, Firebase",
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media managers",
      image: "https://via.placeholder.com/250x150.png?text=Social+Media+Dashboard",
      link: "https://example-socialdashboard.com",
      technologies: "Next.js, Chart.js, TailwindCSS",
    },
    {
      title: "Online Learning Platform",
      description: "A platform for creating and taking online courses",
      image: "https://via.placeholder.com/250x150.png?text=Online+Learning+Platform",
      link: "https://example-elearning.com",
      technologies: "Django, React, PostgreSQL",
    },
  ]

  const cvLinks = {
    es: "/cv-arturo-grottoli-es.pdf",
    en: "/cv-arturo-grottoli-en.pdf",
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
          =====================================================================================================================
        </div>
        <h2>{t.title}</h2>
        <div className={styles.separator}>
          ================================================================================
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
                </div>
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
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} width={250} height={150} />
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <p>
                        {t.technologies} {item.technologies}
                      </p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {t.viewProject}
                      </a>
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

