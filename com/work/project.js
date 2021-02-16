import styles from "./work.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  return <div className={styles.work__mid__workCont__work}></div>;
}
