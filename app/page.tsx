"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
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
  siPwa,
  siNodedotjs,
  siDocker,
  siAngular,
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
      title: "EPUBify",
      description: "Convert PDFs, articles, emails and text into EPUB files ready for any e-reader.",
      image: "https://i.ibb.co/Kx6X2t7n/epub.png",
      link: "https://turiepubify.vercel.app/",
      repo: "https://github.com/Arturogrottoli/Kindlify",
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siTypescript, name: "TypeScript" },
        { icon: siTailwindcss, name: "Tailwind" },
        { icon: siPwa, name: "PWA" },
      ],
    },
    {
      title: "Plant App",
      description: "Mobile app to identify plants using AI.",
      image: "https://i.ibb.co/ynCMfrYk/Whats-App-Image-2026-03-03-at-6-56-47-PM.jpg",
      link: "https://expo.dev/accounts/turidevs-organization/projects/plant-app/builds/492f5b38-c002-487c-84f1-e76f8676b202",
      repo: "https://github.com/Arturogrottoli/plant-app",
      technologies: [
        { icon: siReact, name: "React Native" },
        { icon: siTypescript, name: "TypeScript" },
        { icon: siNodedotjs, name: "Node.js" },
      ],
    },
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
      link: "https://corazonverde.vercel.app/",
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
      link: "https://setlistfm-to-spotify.vercel.app/",
      repo: "https://github.com/Arturogrottoli/setlistfm-to-spotify",
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
      image: "https://i.ibb.co/dsVbsWyN/cocotransporte.png",
      link: "https://transportecoco.vercel.app/",
      repo: "https://github.com/Arturogrottoli/transportescoco",
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siReact, name: "React" },
        { icon: siTailwindcss, name: "Tailwind" }
      ],
    },
    {
      title: "Dibujantis Portfolio",
      description: "Portfolio of the illustrator Dibujantis",
      image: "https://i.ibb.co/KckSS8R8/dibujantis.png",
      link: "https://dibujantis.vercel.app/",
      repo: "https://github.com/Arturogrottoli/Dibujantis",
      technologies: [
        { icon: siNextdotjs, name: "Next.js" },
        { icon: siReact, name: "React" },
        { icon: siTailwindcss, name: "Tailwind" }
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
        { icon: siNextdotjs, name: "Next.js" },
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
        { icon: siPwa, name: "PWA" },
      ],
    },
    {
      title: "Ecommerce React with API",
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
        { icon: siJavascript, name: "JavaScript" }
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
          <li>
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
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={200}
                          priority={index < 4}
                          // Forzamos el fit para que no se recorte (evita el "zoom feo").
                          style={{ width: "100%", height: "180px", objectFit: "contain" }}
                        />
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
                      </motion.div>
                    ))}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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

