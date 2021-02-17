import styles from "./work.module.scss";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Project({ isActive, setIsActive }) {
  let project = useRef(null);
  const onEnter = function () {
    if (!isActive) {
      gsap.to(project, {
        duration: 0.8,
        css: { width: "400px" },
        ease: "power3.inOut",
      });
    }
  };
  const onLeave = function () {
    if (!isActive) {
      gsap.to(project, {
        duration: 0.8,
        css: { width: "20px" },
        ease: "power3.inOut",
      });
    }
    console.log(isActive);
  };

  const clickHandler = function () {
    setIsActive(true);
    const tl = gsap.timeline();

    tl.to(project, {
      duration: 1,
      css: { position: "fixed" },
      ease: "power3.inOut",
    }).to(project, {
      duration: 1,
      css: { width: "100%", height: "100%", top: 0 },
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
      onClick={clickHandler}
    ></div>
  );
}
