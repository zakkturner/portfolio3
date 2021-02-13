import React from "react";
import {
  withNavigationContext,
  Link,
} from "react-awesome-slider/dist/navigation";
import styles from "./nav.module.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className={styles.pageHeader}>
      <div className={styles.pageHeader__wrapper}>
        <nav className={styles.pageHeader__wrapper__nav}>
          <Link className={slug === "" ? "selected" : null} href="/">
            home
          </Link>
          <Link
            className={slug === "page-two" ? "selected" : null}
            href="/about"
          >
            about
          </Link>
          <Link
            className={slug === "page-three" ? "selected" : null}
            href="/work"
          >
            work
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
