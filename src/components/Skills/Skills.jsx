import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { useScroll, motion } from "framer-motion";
import { observerSkills } from "../../utils/helper";

import useMeasure from "react-use-measure";
import Card from "./Card/Card";
import styles from "./Skills.module.css";
import "./Skills.css";

const Skills = () => {
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
  ];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const header = useRef(null);

  let [ref, { width }] = useMeasure();

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: header,
    offset: ["start end", "start 0.7"],
  });

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width - 142;

    observerSkills.observe(header.current);

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.border} />
      <motion.h2
        className={`${styles.header} hidden`}
        ref={header}
        style={{ opacity: scrollYProgress2 }}
      >
        Creating Engaging Web Experience
      </motion.h2>
      <div className={styles.secondContainer}>
        <motion.div
          className={styles.logoContainer}
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <Card logo={logo} key={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
