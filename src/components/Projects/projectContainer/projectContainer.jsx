import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

import { observerProjects } from "../../../utils/helper";

import styles from "./projectContainer.module.css";
import "./projectContainer.css";

const ProjectContainer = ({ imageObject }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    observerProjects.observe(element.current);
  }, []);

  const { image, name, url } = imageObject;

  return (
    <div className={styles.proContainer}>
      <motion.div
        className={`${styles.col1}  hiddenProject`}
        ref={element}
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <AnimatePresence>
          {showOverlay && (
            <a target="_blank" href={url}>
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.shadow} />
                <motion.h3
                  className={styles.secondHeader}
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  exit={{ y: 10 }}
                >
                  {name}
                  <MdArrowOutward className={styles.arrow} />
                </motion.h3>
              </motion.div>
            </a>
          )}
        </AnimatePresence>
        <img
          className={showOverlay ? `${styles.img}` : ""}
          src={image}
          alt="nature"
        />
      </motion.div>
    </div>
  );
};

export default ProjectContainer;
