import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import Container from "../Container/Container";
import styles from "./Footer.module.scss";

// https://github.com/gatsbyjs/gatsby/issues/10415
const Footer = () => {
  const logoDynamic = "/logos/baozi-only-logo.gif";
  const logoStatic = "/logos/baozi-only-logo.png";

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
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.coreContentContainer}>
            <div className={styles.coreElementContainer}>
              <div className={styles.titleContainer}>
                <h5 className={styles.title}>{config.copyright}</h5>
              </div>
              <div>
                <p className={styles.reduceParagraphGap}>
                  "BAOZI", "BAOZI TECHNOLOGY" and the logos are registered
                  trademarks.
                </p>
                <p className={styles.reduceParagraphGap}>
                  Unless otherwise stated, all contents of this site except the
                  logos and the photos of Nicolas are licensed under the{" "}
                  <a href="https://creativecommons.org/licenses/by/4.0/deed.en">
                    {" "}
                    Creative Commons Attribution 4.0 International License
                  </a>
                  . In other words, share generously but provide attribution.
                </p>
              </div>
            </div>
            <div className={styles.coreElementContainer}>
              <div className={styles.titleContainer}>
                <h5 className={styles.title}>DISCLAIMER</h5>
              </div>
              <div>
                <p className={styles.reduceParagraphGap}>
                  This work mostly exposes my personal opinions on various
                  topics and may not reflect views from any entity I was, am now
                  or will be affiliated with.
                </p>
              </div>
            </div>
            <div className={styles.coreElementContainer}>
              <div className={styles.titleContainer}>
                <h5 className={styles.title}>THANKS</h5>
              </div>
              <div>
                <p className={styles.reduceParagraphGap}>
                  This website is based on{" "}
                  <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
                    Gatsby Advanced Starter
                  </a>{" "}
                  and hosted on <a href="https://www.netlify.com">Netlify</a>.
                </p>
                <p className={styles.reduceParagraphGap}>
                  Special thanks to{" "}
                  <a href="https://github.com/jonniebigodes">João Cardoso</a>{" "}
                  for his contribution.
                </p>
                <p className={styles.reduceParagraphGap}>
                  Found a gotcha'? Open an issue or send a pull-request{" "}
                  <a href="https://github.com/baozi-technology/baozi-web">
                    @ GitHub
                  </a>
                  !
                </p>
              </div>
            </div>
          </div>
          <div className={styles.userLinksContainer}>
            <UserLinks />
          </div>
          <div title="Scroll to top" className={styles.logoToTopContainer}>
            <a onClick={() => scrollToTop()}>
              <img
                className={[styles.heightSet, styles.logo].join(" ")}
                src={!hover ? logoStatic : logoDynamic}
                onMouseOver={() => {
                  setHover(true);
                }}
                onMouseOut={() => {
                  setHover(false);
                }}
                alt="Scroll to top"
              />
            </a>
          </div>
          <div className={styles.noAnalyticsContainer}>
            <p className={styles.reduceParagraphGap}>
              No cookies - No analytics
            </p>
          </div>
          <div className={styles.legalNoticeContainer}>
            <Link activeClassName={styles.linkActive} to="/legal">
              Legal notice (fr)
            </Link>
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
