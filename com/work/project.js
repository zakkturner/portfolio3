import styles from "./work.module.scss";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  let project = useRef(null);

  const onEnter = function () {
    console.log("enter");
    gsap.to(project, {
      duration: 0.8,
      css: { width: "400px" },
      ease: "power3.inOut",
    });
  };
  const onLeave = function () {
    console.log("enter");
    gsap.to(project, {
      duration: 0.8,
      css: { width: "20px" },
      ease: "power3.inOut",
    });
  };

  return (
    <div
      className={styles.work__mid__workCont__work}
      ref={(el) => {
        project = el;
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    ></div>
  );
}
