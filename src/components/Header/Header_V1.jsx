import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styles from "./Header.module.scss";
import Drawer from "../Drawer/Drawer";

const HeaderV1 = () => {
  const [hover, setHover] = useState(false);
  const logoResult = useStaticQuery(graphql`
    {
      mainLogo: file(
        relativePath: { eq: "logos/baozi-technology-full-logo.jpg" }
      ) {
        publicURL
      }
      gifLogo: file(
        relativePath: { eq: "logos/baozi-technology-full-logo.gif" }
      ) {
        publicURL
      }
    }
  `);
  // destructure the query result
  const {mainLogo,gifLogo}= logoResult
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div title="Jump to home page" className={styles.logoContainer}>
          <Link to="/">
            <img
              onMouseOver={() => {
                console.log("entered mouse over");
                setHover(true);
              }}
              onMouseOut={() => {
                console.log("entered onMouseOut");
                setHover(false);
              }}
              className={styles.heightSet}
              src={!hover ? mainLogo.publicURL : gifLogo.publicURL}
              alt="Baozi Technology"
            />
          </Link>
        </div>
        <div className={styles.toggleMenuContainer}>
          <Drawer />
        </div>
        <div className={styles.navContainer}>
          <nav className={styles.siteNav}>
            <div className={styles.siteNavItemFirst}>
              <Link activeClassName={styles.linkActive} to="/">
                Home
              </Link>
            </div>
            <div className={styles.siteNavItemMiddle}>
              <Link
                activeClassName={styles.linkActive}
                to="/ranch-under-the-hood"
              >
                Ranch doc
              </Link>
            </div>
            <div className={styles.siteNavItemMiddle}>
              <Link activeClassName={styles.linkActive} to="/about">
                About
              </Link>
            </div>
            <div className={styles.siteNavItemLast}>
              <a
                title="nicolas.gimenez@baozi.technology"
                href="mailto:nicolas.gimenez@baozi.technology"
              >
                Message me
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderV1;
