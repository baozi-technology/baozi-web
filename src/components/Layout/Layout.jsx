import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../../data/SiteConfig";
import Footer from "../Footer/Footer";
import FooterV1 from "../Footer/Footer_V1";
import FooterV2 from "../Footer/Footer_V2";
/* import Header from "../Header/Header" */
import HeaderV1 from "../Header/Header_V1";
import HeaderV2 from "../Header/Header_V2";
import Container from "../Container/Container";
import Showcase from "../Showcase/Showcase";
import ShowcaseContent from "../ShowcaseContent/ShowcaseContent";
import styles from "./Layout.module.scss";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee  } from '@fortawesome/free-solid-svg-icons'

// library.add(fab)

const Layout = ({ showcaseContent, children }) => (
  <>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <div className={styles.siteContainer}>
      <div className={styles.headerContainer}>
        {/* <HeaderV1 /> */}
        <HeaderV2 />
      </div>
      <div id="contentAndFooterContainer">
        <div className={styles.contentContainer}>
          <Container>
            <Showcase showcaseContent={showcaseContent} />
            <main className={styles.main}>{children}</main>
          </Container>
        </div>
        <div className={styles.footerContainer}>
          {/* <Footer /> */}
          {/*  <FooterV1 /> */}
          <FooterV2 />
        </div>
      </div>
    </div>
  </>
);
export default Layout

Layout.propTypes = {
  showcaseContent: PropTypes.instanceOf(ShowcaseContent)
};
