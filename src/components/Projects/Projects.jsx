import { useEffect, useRef } from "react";
import { observerProjects } from "../../utils/helper";
import { useScroll, motion } from "framer-motion";

import styles from "./Projects.module.css";
import ProjectContainer from "./projectContainer/projectContainer";
import Portfolio from "../../assets/Portfolio.png";
import CimaLounge from "../../assets/CimaLounge.png";
import Bloggers from "../../assets/Bloggers.png";
import ShoppingLounge from "../../assets/Shopping-Lounge.png";
import "./Projects.css";

const images = [
  {
    image: Portfolio,
    name: "Explore Site 1",
  },
  {
    image: CimaLounge,
    name: "Explore Site 2",
  },
  {
    image: Bloggers,
    name: "Explore Site 3",
  },
  {
    image: ShoppingLounge,
    name: "Explore Site 4",
  },
];

const Projects = () => {
  const header = useRef(null);

  useEffect(() => {
    observerProjects.observe(header.current);
  }, []);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: header,
    offset: ["start end", "start 0.7"],
  });

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.border} />
      <motion.h2
        ref={header}
        style={{ opacity: scrollYProgress2 }}
        className={`${styles.header} hiddenProjects`}
      >
        Recent Work Gallery
      </motion.h2>
      <div className={styles.gridContainer}>
        {images.map((image, i) => (
          <ProjectContainer imageObject={image} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
