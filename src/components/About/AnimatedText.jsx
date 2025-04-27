import styles from "./About.module.css";
import "./About.css";

const AnimatedText = ({
  element,
  width,
  show,
  setShow,
  words,
  Word,
  scrollYProgress1,
}) => {
  return (
    <p ref={element} className={`${styles.paragraph} hiddenAbout`}>
      {width <= 780
        ? !show
          ? words.slice(0, 30).map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              if (i === 29) {
                return (
                  <Word
                    key={i}
                    range={[start, end]}
                    progress={scrollYProgress1}
                  >
                    {word}
                    <button
                      className={styles.btn}
                      onClick={() => setShow(true)}
                    >
                      Show more...
                    </button>
                  </Word>
                );
              }
              return (
                <Word key={i} range={[start, end]} progress={scrollYProgress1}>
                  {word}
                </Word>
              );
            })
          : words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              if (i === 105) {
                return (
                  <Word
                    key={i}
                    range={[start, end]}
                    progress={scrollYProgress1}
                  >
                    {word}
                    <button
                      className={styles.btn}
                      onClick={() => setShow(false)}
                    >
                      Show less...
                    </button>
                  </Word>
                );
              }

              return (
                <Word key={i} range={[start, end]} progress={scrollYProgress1}>
                  {word}
                </Word>
              );
            })
        : words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress1}>
                {word}
              </Word>
            );
          })}
    </p>
  );
};

export default AnimatedText;
