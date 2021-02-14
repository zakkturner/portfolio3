import styles from "./initial.module.scss";
import { gsap } from "gsap/dist/gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useRef, useEffect } from "react";

gsap.registerPlugin(SplitText);

export default function Initial() {
  let first = useRef(null);

  useEffect(() => {
    let firstSplit = new SplitText(first, { type: "words, chars" });
    let firstChars = firstSplit.chars;
    const tl1 = gsap.timeline();

    tl1
      .from(
        firstChars,
        {
          duration: 1,
          y: -200,
          opacity: 0,
          stagger: 0.2,
          ease: "power3.inOut",
        },
        "first"
      )
      .from(
        firstChars,
        {
          duration: 0.8,
          x: 200,
          stagger: 0.2,
          delay: 0.3,
          ease: "power3.inOut",
        },
        "first"
      );
  });

  return (
    <div className={styles.initial}>
      <div className={styles.initial__headingCont}>
        <h1
          className={styles.initial__headingCont_title}
          ref={(el) => {
            first = el;
          }}
        >
          Zach
        </h1>
      </div>
      <div className={styles.initial__headingCont}>
        <h1 className={styles.initial__headingCont_title}>Turner</h1>
      </div>
      <div className={styles.initial__headingCont}>
        <h1 className={styles.initial__headingCont_title}>
          Front End Developer
        </h1>
      </div>
      <div className={styles.initial__headingCont}>
        <h1 className={styles.initial__headingCont_title}>Based in ATL, GA</h1>
      </div>
    </div>
  );
}
