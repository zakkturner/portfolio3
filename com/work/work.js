import styles from "./work.module.scss";
import { gsap } from "gsap/dist/gsap";
import { SplitText } from "gsap/dist/SplitText";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { MotionPathHelper } from "gsap/dist/MotionPathHelper";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
import Project from "./project";

gsap.registerPlugin(
  MotionPathPlugin,
  MorphSVGPlugin,
  //   MotionPathHelper,
  ScrollTrigger,
  SplitText
);

export default function Work() {
  let title = useRef(null);

  let path = useRef(null);
  useEffect(() => {
    MorphSVGPlugin.convertToPath("circle");
    let splitText = new SplitText(title, { type: "chars" });
    let text = splitText.chars;
    // prettier-ignore
    gsap.set(text, { opacity: 0, xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" });
    let tl = gsap.timeline({ yoyo: true, repeat: -1 });
    // prettier-ignore

    tl.to(text.reverse(), { duration: 5, opacity: 1, stagger: 0.2, ease: "power1.inOut" ,motionPath: { path: path,  autoRotate: true,
    } })
  });

  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={styles.work}>
      <div className={styles.work__top}>
        <div className={styles.work__top__svgCont}>
          <h4
            className={styles.work__top__svgCont_title}
            ref={(el) => {
              title = el;
            }}
          >
            PROJECTS
          </h4>
          <svg
            id="svg"
            width="300px"
            height="300px"
            className={styles.work__top__svgCont__svg}
            style={{
              strokeDashoffset: "785px",
              transform: "translate(0px)",
              opacity: "1",
            }}
          >
            {" "}
            <path
              style={{ strokeDasharray: "330.566px", stroke: "#08748C" }}
              strokeWidth="2"
              className={styles.work_work__top__svgCont__svg_circle}
              id="circle"
              d="m 0 300 a 3 3 0 1 0 227 -200"
              ref={(el) => {
                path = el;
              }}
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles.work__mid}>
        <div className={styles.work__mid__workCont}>
          {test.map((project) => {
            return <Project />;
          })}
        </div>
      </div>
    </div>
  );
}
