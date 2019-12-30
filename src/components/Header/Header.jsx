import React, { useState, useEffect } from 'react';
import {  Link } from 'gatsby';
import styles from "./Header.module.scss"
import Drawer from "../Drawer/Drawer"

// https://github.com/gatsbyjs/gatsby/issues/10415
const Header = () => {

  const logoDynamic = '/logos/baozi-technology-full-logo.gif';
  const logoStatic = '/logos/baozi-technology-full-logo.jpg';

  // https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
  useEffect(() => {
    // https://fr.reactjs.org/docs/hooks-effect.html
    preLoadImage(logoDynamic);
    preLoadImage(logoStatic);
  });

  function preLoadImage(imgFileName) {
    const img = new Image();
    img.src = imgFileName;
  }

  const [hover, setHover] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div title="Jump to home page" className={styles.logoContainer}>
          <Link to="/">
            <img
              onMouseOver={() => {
                setHover(true);
              }}
              onMouseOut={() => {
                setHover(false);
              }}
              className={styles.heightSet}
              src={!hover ? logoStatic: logoDynamic}
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

export default Header;