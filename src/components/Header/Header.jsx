import React, { useState } from 'react';
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
  var logoGifPath;
  var logoPngPath;
  data.allFile.edges.forEach(edge => {
    if(edge.node.extension == "gif") {
      logoGifPath=edge.node.relativePath;
    } else {
      logoPngPath=edge.node.relativePath;
    }
  });

  const logoPng  = (<img className={styles.heightSet} src={logoPngPath}/>);
  const logoGif  = (<img className={styles.heightSet} src={logoGifPath}/>);
  const [logo, setLogo] = useState(logoPng);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div title="Jump to home page" className={styles.logoContainer}>
          <Link 
            onMouseOver={() => {
              setLogo(logoGif)
            }}    
            onMouseOut={() => {
              setLogo(logoPng)
            }}        
            to="/">
              {logo}
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