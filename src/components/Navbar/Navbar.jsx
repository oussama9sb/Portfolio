import { useEffect, useRef, useState } from "react";
import { observerNavbar } from "../../utils/helper";
import { RxHamburgerMenu } from "react-icons/rx";

import styles from "./Navbar.module.css";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    observerNavbar.observe(element.current);
  }, []);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <nav ref={element} className={`${styles.container} hiddenNav`}>
      <div>
        <span className={styles.name}>OUSSAMA</span>
      </div>
      <ul className={styles.nav}>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#skills">Skills</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.hamContainer}>
        <RxHamburgerMenu onClick={handleOpen} className={styles.hamicon} />
        {open && (
          <div className={styles.listContainer}>
            <ul className={styles.navList}>
              <li className={styles.first}>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#skills">Skills</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
              <li className={styles.last}>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
