import { useEffect, useRef } from "react";
import { observerSkills } from "../../utils/helper";
import Marquee from "react-fast-marquee";

import Card from "./Card/Card";
import styles from "./Skills.module.css";
import "./Skills.css";

const logos = [
  {
    logo: "/css-3.svg",
    name: "CSS",
  },
  {
    logo: "/git-icon.svg",
    name: "Git",
  },
  {
    logo: "html-1.svg",
    name: "HTML",
  },
  {
    logo: "logo-javascript.svg",
    name: "JavaScript",
  },
  {
    logo: "/nodejs-3.svg",
    name: "Node.js",
  },
  {
    logo: "react-2.svg",
    name: "React",
  },
  {
    logo: "sass-1.svg",
    name: "SASS",
  },
  {
    logo: "tailwind-css-2.svg",
    name: "Tailwind CSS",
  },
  {
    logo: "redux.svg",
    name: "Redux",
  },
  {
    logo: "nextjs-2.svg",
    name: "Next.js",
  },
  {
    logo: "typescript.svg",
    name: "TypeScript",
  },
];

const Skills = () => {
  const header = useRef(null);

  useEffect(() => {
    observerSkills.observe(header.current);
  }, []);

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.border} />
      <h2 className={`${styles.header} hidden`} ref={header}>
        Creating Engaging Web Experience
      </h2>
      <div className={styles.secondContainer}>
        <div className={styles.logoContainer}>
          <Marquee>
            {logos.map((logo, i) => (
              <Card logo={logo} key={i} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
