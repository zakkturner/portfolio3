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

export default function Home() {
  const NavigationSlider = withNavigationHandlers(AwesomeSlider);
  const Slider = () => {
    return (
      <NavigationSlider
        className="awesome-slider"
        media={[
          {
            slug: "/",
            className: "home",
            children: () => <p>Home</p>,
          },
          {
            slug: "about",
            className: "about",
            children: () => <p>About</p>,
          },
        ]}
      />
    );
  };
  const Header = () => {
    return (
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="about">About</Link>
        </nav>
      </header>
    );
  };
  const slug = "/";
  return (
    // <Provider slug={slug}>
    //   <Header />
    //   <NavigationSlider />
    // </Provider>
    <AwesomeSlider animation="cubeAnimation" bullets="false">
      <div style={{ backgroundColor: "blue" }}>1</div>
      <div style={{ backgroundColor: "orange" }}>2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
    // <main class={styles.main}>
    //   <div className={styles.container}></div>;
    // </main>
  );
}
