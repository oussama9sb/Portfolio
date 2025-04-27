import { useEffect, useRef } from "react";
import { observerHeader } from "../../utils/helper";

import styles from "./Header.module.css";
import "./Header.css";

const Header = () => {
  const header = useRef(null);

  useEffect(() => {
    observerHeader.observe(header.current);
  }, []);

  return (
    <header ref={header} className={`${styles.container} hiddenHeader`}>
      <h1 className={styles.header}>
        FRONT-END <br /> <span>DEVELOPER</span>
      </h1>
      <p className={styles.paragraph}>
        Enthusiastic Front-End developer with expertise <br /> in crafting
        user-facing interfaces and aiming <br /> to create adaptable and
        responsive websites.
      </p>
    </header>
  );
};

export default Header;
