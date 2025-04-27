import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Card.module.css";

const Card = ({ logo }) => {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <motion.div
      className={styles.container}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay.show && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.shadow} />
            <motion.h3
              className={styles.header}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              {logo.name}
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
      <img className={styles.img} src={logo.logo} alt={logo} />
    </motion.div>
  );
};

export default Card;
