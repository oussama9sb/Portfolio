import { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import { observerAbout } from "../../utils/helper";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Particle from "./Particle";

import Word from "./Word";

import useMeasure from "react-use-measure";
import styles from "./About.module.css";
import "./About.css";
import AnimatedText from "./AnimatedText";

const paragraph = `As a dedicated front-end developer, I am passionate about crafting digital experiences that blend aesthetics with functionality. With a keen eye for design and a strong foundation in web technologies, I bring creativity and technical expertise to every project I undertake. My journey in the world of web development has equipped me with the skills to turn ideas into user-friendly, visually captivating, and responsive websites. I thrive on transforming concepts into interactive, dynamic, and user-centric web applications. My commitment to staying up-to-date with the latest industry trends and technologies allows me to create websites that not only look outstanding but also provide a seamless user experience.`;

const header = "Front-End Developer";

const About = () => {
  const [show, setShow] = useState(false);
  const [init, setInit] = useState(false);
  const element = useRef(null);
  const heading = useRef(null);
  let [ref, { width }] = useMeasure();

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: element,
    offset: ["start 0.9", "start start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: heading,
    offset: ["start end", "start 0.7"],
  });

  const words = paragraph.split(" ");

  useEffect(() => {
    observerAbout.observe(element.current);
    observerAbout.observe(heading.current);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && <Particle />}
      <section id="about" className={styles.container} ref={ref}>
        <motion.h2
          ref={heading}
          style={{ opacity: scrollYProgress2 }}
          className={`${styles.header} hiddenAbout`}
        >
          {header}
        </motion.h2>
        <AnimatedText
          element={element}
          width={width}
          show={show}
          setShow={setShow}
          words={words}
          Word={Word}
          scrollYProgress1={scrollYProgress1}
        />
      </section>
    </>
  );
};

export default About;
