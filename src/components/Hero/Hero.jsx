import styles from "./Hero.module.css";

const Hero = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default Hero;
