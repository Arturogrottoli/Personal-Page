"use client"

import { useState } from "react"
import styles from "./page.module.css"
import { Download, Github, Linkedin, BarChart2, Smartphone, GraduationCap, Code, Briefcase } from "lucide-react"
import Image from "next/image"
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

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive online store built with React and Node.js",
      image: "/placeholder.svg?height=150&width=250",
      link: "https://example-ecommerce.com",
      technologies: "React, Node.js, MongoDB",
    },
    {
      title: "Task Management App",
      description: "A productivity app developed using Vue.js and Firebase",
      image: "/placeholder.svg?height=150&width=250",
      link: "https://example-taskapp.com",
      technologies: "Vue.js, Firebase, Vuex",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information app using Angular and OpenWeatherMap API",
      image: "/placeholder.svg?height=150&width=250",
      link: "https://example-weather.com",
      technologies: "Angular, TypeScript, RxJS",
    },
    {
      title: "Fitness Tracker",
      description: "A mobile app for tracking workouts and nutrition",
      image: "/placeholder.svg?height=150&width=250",
      link: "https://example-fitnesstracker.com",
      technologies: "React Native, Redux, Firebase",
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media managers",
      image: "/placeholder.svg?height=150&width=250",
      link: "https://example-socialdashboard.com",
      technologies: "Next.js, Chart.js, TailwindCSS",
    },
    {
      title: "CoderVision",
      description: "Plataforma de peliculas y series",
      image: "/placeholder.svg?height=150&width=250",
      link: "https://codervision.netlify.app/",
      technologies: "Html, Css, Js, Bootstrap",
    },
  ]

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
        <div className={`${styles.logo} ${styles.logoMobile}`}>AG</div>
      </div>

      <div className={styles.content}>
        <div className={styles.separator}>
          ============================================================================================================================================
        </div>
        <h2>Hola, soy Arturo, profesional IT con experiencia en programación y telecomunicaciones</h2>
        <div className={styles.separator}>
          ==========================================================================================================================================
        </div>

        <h3>Trayectoria:</h3>
        <ul>
          <li>
            <button onClick={() => toggleSection("fullstack")} className={styles.sectionToggle}>
              <span>
                - Programador Full Stack <Code size={18} />
              </span>
            </button>
            {openSection === "fullstack" && (
              <div className={styles.sectionContent}>
                <p>
                  Desarrollador web especializado en la creación de aplicaciones web completas, implementando soluciones
                  eficientes y escalables.
                </p>
                <ul>
                  <li>{">"}Emonk (2022-actual) - E-commerce admin, programador full stack.</li>
                  <li>
                    {">"}Freelance (2020-actual) - Desarrollo de sitios web personalizados para diversos clientes.
                  </li>
                </ul>
                <p>Tecnologías:</p>
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
            <button onClick={() => toggleSection("teacher")} className={styles.sectionToggle}>
              <span>
                - Docente <GraduationCap size={18} />
              </span>
            </button>
            {openSection === "teacher" && (
              <div className={styles.sectionContent}>
                <p>Instructor y mentor en diversos lenguajes de programación:</p>
                <ul>
                  <li>{">"}Profesor curso Full Stack Python Codo a codo (2021-2023)</li>
                  <li>{">"}Tutor coderhouse Desarrollo web, javascript, reactjs y SQL (2021-actualidad)</li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button onClick={() => toggleSection("telecom")} className={styles.sectionToggle}>
              <span>
                - <span className={styles.desktopOnly}>Profesional de las Telecomunicaciones</span>
                <span className={styles.mobileOnly}>PM Telecomunicaciones</span>
                <Smartphone size={18} />
              </span>
            </button>
            {openSection === "telecom" && (
              <div className={styles.sectionContent}>
                <p>
                  Gestión de proyectos en instalación de redes 3G y 4G, y mantenimiento de sitios. Experiencia en
                  optimización de redes, implementación de nuevas tecnologías y coordinación de equipos
                  multidisciplinarios para garantizar la máxima calidad y cobertura de servicio. Colaboración con
                  clientes multinacionales líderes en la industria, incluyendo Ericsson, Nokia y Huawei.
                </p>
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
                - Analista de Datos <BarChart2 size={18} />
              </span>
            </button>
            {openSection === "dataAnalyst" && (
              <div className={styles.sectionContent}>
                <p>
                  Experiencia en análisis y procesamiento de grandes volúmenes de información, utilizando SQL y Python
                  para la manipulación y visualización de datos.
                </p>
                <ul>
                  <li>
                    {">"}Liramatic (2021-actual) - Generación de reportes para flotas vehiculares mediante tableros
                    Power BI.
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button onClick={() => toggleSection("portfolio")} className={styles.sectionToggle}>
              <span>
                - Portfolio <Briefcase size={18} />
              </span>
            </button>
            {openSection === "portfolio" && (
              <div className={styles.sectionContent}>
                <p>Proyectos destacados:</p>
                <div className={styles.portfolioGrid}>
                  {portfolioItems.map((item, index) => (
                    <div key={index} className={styles.portfolioItem}>
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} width={250} height={150} />
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <p>Tecnologías: {item.technologies}</p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        Ver proyecto
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>

        <div className={styles.buttons}>
          <button className={styles.downloadBtn}>
            <span>Download CV</span>
            <Download size={18} />
          </button>
        </div>

        <div className={styles.socialLinks}>
          <h3>RRSS:</h3>
          <a href="https://github.com/Arturogrottoli" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/arturo-grottoli/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        </div>

        <div className={styles.contactInfo}>
          <span>Contacto: arturogrottoli@gmail.com</span>
        </div>
      </div>
    </main>
  )
}

