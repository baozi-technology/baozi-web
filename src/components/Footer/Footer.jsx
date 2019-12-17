import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from 'gatsby';
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import Container from "../Container/Container"
import styles from "./Footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query FooterQuery {
    allFile(filter: {name: {eq: "baozi-only-logo"}, extension: {regex: "/png|gif/"}}) {
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
  const [logo, setLogo] = useState(logoPng);

  return (
      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerContainer}>
            <div className={styles.coreContentContainer}>
              <div className={styles.coreElementContainer}>
                <div className={styles.titleContainer}>
                  <h5 className={styles.title}>{config.copyright}</h5>
                </div>
                <div>
                  <p className={styles.reduceParagraphGap}>"BAOZI", "BAOZI TECHNOLOGY" and the logos are registered trademarks of Baozi Technology SAS.</p>
                  <p className={styles.reduceParagraphGap}>Nicolas retains full copyright over the articles.</p>
                  <p className={styles.reduceParagraphGap}>Unless otherwise stated, all contents of this site except the logos and the photos of Nicolas are licensed under the{" "} 
                      <a href="https://creativecommons.org/licenses/by-nd/4.0/"> CC-BY-ND 4.0 International license</a>.
                        In other words, share generously but give attribution and do no alter content. Quoting is fine.
                  </p>
                </div>
              </div>
              <div className={styles.coreElementContainer}>
                <div className={styles.titleContainer}>
                  <h5 className={styles.title}>DISCLAIMER</h5>
                </div>
                <div>
                  <p className={styles.reduceParagraphGap}>This work mostly exposes my personal opinions on various topics and may not reflect views from any entity I was, am now or will be affiliated with.</p>
                  <p className={styles.reduceParagraphGap}>I try my hardest to be kind, respectful, and transparent and ask the same respect from readers. For this reason, rude, offensive, or harmful comments will not be tolerated. You are welcome to disagree, but just do it nicely!</p>
                </div>
              </div>
              <div className={styles.coreElementContainer}>
                <div className={styles.titleContainer}>
                  <h5 className={styles.title}>THANKS</h5>
                </div>
                <div>
                  <p className={styles.reduceParagraphGap}>I made this website using{" "} 
                    <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
                      Gatsby Advanced Starter</a>{" "} 
                      and it is kindly hosted by{" "}  
                    <a href="httpspadding container small screen://www.netlify.com">
                    Netlify</a>. 
                  </p>
                  <p className={styles.reduceParagraphGap}>Found a gotcha'? Open an issue or send a pull-request <a href="https://github.com/baozi-technology/baozi-web">@ GitHub</a>!</p>
                </div>
              </div>
            </div>
            <div className={styles.userLinksContainer}>
              <UserLinks/>
            </div>
            <div title="Scroll to top" className={styles.logoToTopContainer}>
              <a onClick={() => scrollToTop()}>
                <img 
                  className={[styles.heightSet, styles.logo].join(' ')}
                  src={logo}
                  onMouseOver={() => {
                    setLogo(logoGif)
                  }}
                  onMouseOut={() => {
                    setLogo(logoPng)
                  }}
                />
              </a>
            </div>
            <div className={styles.noAnalyticsContainer}>
              <p className={styles.reduceParagraphGap}>No cookies - No analytics</p>
            </div>
            <div className={styles.legalNoticeContainer}>
              <Link activeClassName={styles.linkActive} to="/legal">Legal notice (fr)</Link>
            </div>
          </div>
        </Container>
      </footer>
  );
};

function scrollToTop() {
  document.getElementById("contentAndFooterContainer").scrollTo(0, 0);
}

export default Footer;
