import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styles from "./Header.module.scss"
import Drawer from "../Drawer/Drawer"

const Header = () => {
  const data = useStaticQuery(graphql`
  query HeaderQuery {
    allFile(filter: {name: {eq: "baozi-technology-full-logo"}, extension: {regex: "/jpg|gif/"}}) {
      edges {
        node {
          relativePath
          extension
        }
      }
    }
  }
  `);
  var logoGif;
  var logoPng;
  data.allFile.edges.forEach(edge => {
    if(edge.node.extension == "gif") {
      logoGif=edge.node.relativePath;
    } else {
      logoPng=edge.node.relativePath;
    }
  });

  // https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
  useEffect(() => {
    // https://fr.reactjs.org/docs/hooks-effect.html
    preLoadImage(logoGif);
    preLoadImage(logoPng);
  });

  function preLoadImage(imgFileName) {
    const img = new Image();
    img.src = imgFileName;
  }

  const [logo, setLogo] = useState(logoPng);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div title="Jump to home page" className={styles.logoContainer}>
          <Link       
            to="/">
                <img 
                onMouseOver={() => {
                  setLogo(logoGif)
                }}    
                onMouseOut={() => {
                  setLogo(logoPng)
                }}  
                className={styles.heightSet}
                src={logo}
                alt="Baozi Technology"
              />
          </Link>
        </div>
        <div className={styles.toggleMenuContainer}>
            <Drawer/>
        </div>
        <div className={styles.navContainer}>
          <nav className={styles.siteNav}>
            <div className={styles.siteNavItemFirst}>
              <Link activeClassName={styles.linkActive} to="/">Home</Link>
            </div>
            <div className={styles.siteNavItemMiddle}>
              <Link activeClassName={styles.linkActive} to="/ranch-under-the-hood">Ranch doc</Link>
            </div>
            <div className={styles.siteNavItemMiddle}>
              <Link activeClassName={styles.linkActive} to="/about">About</Link>
            </div>
            <div className={styles.siteNavItemLast}>
              <a title="nicolas.gimenez@baozi.technology" href="mailto:nicolas.gimenez@baozi.technology">Message me</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;