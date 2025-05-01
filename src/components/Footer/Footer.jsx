import { useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { observerFooter } from "../../utils/helper";

import styles from "./Footer.module.css";
import "./Footer.css";

const Footer = () => {
  const element = useRef(null);

  useEffect(() => {
    observerFooter.observe(element.current);
  }, []);

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.border} />
      <div ref={element} className="footer hiddenFooter">
        <h2 className={styles.header}>GET IN TOUCH</h2>
        <div className={styles.btnContainer}>
          <ul className={styles.list}>
            <li>
              <a target="_blank" href="https://github.com/oussama9sb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="58px"
                  height="58px"
                  className={styles.github}
                >
                  <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
                </svg>
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="58px"
                  height="58px"
                  className={styles.facebook}
                >
                  <path d="M24,4C12.972,4,4,12.972,4,24c0,10.006,7.394,18.295,17,19.75V29h-4c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1h4v-3.632	C21,15.617,23.427,13,27.834,13c1.786,0,3.195,0.124,3.254,0.129C31.604,13.175,32,13.607,32,14.125V17.5c0,0.553-0.448,1-1,1h-2	c-1.103,0-2,0.897-2,2V24h4c0.287,0,0.56,0.123,0.75,0.338c0.19,0.216,0.278,0.502,0.243,0.786l-0.375,3	C31.555,28.624,31.129,29,30.625,29H27v14.75c9.606-1.455,17-9.744,17-19.75C44,12.972,35.028,4,24,4z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpddFVjRzFfrRRFmMMZpMHBZhfRzvSMMnmHcvwmGmNprMdrjmbVMTMkbCKBWrrxvcHWTqV"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="58px"
                  height="58px"
                  className={styles.gmail}
                >
                  <path d="M 10.5 8 C 6.9280619 8 4 10.928062 4 14.5 L 4 33.5 C 4 37.071938 6.9280619 40 10.5 40 L 37.5 40 C 41.071938 40 44 37.071938 44 33.5 L 44 14.5 C 44 10.928062 41.071938 8 37.5 8 L 10.5 8 z M 10.5 11 L 37.5 11 C 38.093018 11 38.640276 11.157774 39.126953 11.412109 L 24 19.589844 L 8.8730469 11.412109 C 9.3597237 11.157774 9.9069817 11 10.5 11 z M 10 18.84375 L 22.572266 25.638672 C 23.018266 25.879672 23.509 26 24 26 C 24.491 26 24.981734 25.879672 25.427734 25.638672 L 38 18.84375 L 38 36.951172 C 37.835551 36.974343 37.671413 37 37.5 37 L 10.5 37 C 10.328587 37 10.164449 36.974343 10 36.951172 L 10 18.84375 z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <span className={styles.clause}>
          Made with <FaHeart /> By Oussama
        </span>
      </div>
    </footer>
  );
};

export default Footer;
