import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";
import Initial from "../com/initial/initial";
import Work from "../com/work/work";

export default function Home() {
  return (
    // <Provider slug={slug}>
    //   <Header />
    //   <NavigationSlider />
    // </Provider>
    <AwesomeSlider animation="cubeAnimation" bullets={false} fillParent={true}>
      <div className={styles.main}>
        <Initial />
      </div>
      <div className={styles.main}>
        <Work />
      </div>
      <div>3</div>
    </AwesomeSlider>
    // <main class={styles.main}>
    //   <div className={styles.container}></div>;
    // </main>
  );
}
