import * as React from "react";
import Helmet from "react-helmet";
import config from "../../../data/SiteConfig";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Showcase from "../Showcase/Showcase";
import ShowcaseContent from "../ShowcaseContent/ShowcaseContent";
import styles from "./Layout.module.scss";
import PropTypes from "prop-types";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee  } from '@fortawesome/free-solid-svg-icons'

// library.add(fab)

export default class Layout extends React.Component {
  render() {
    const showcaseContent = this.props.showcaseContent;
    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className={styles.siteContainer}>
          <div className={styles.headerContainer}>
            <Header />
          </div>
          <div id="contentAndFooterContainer">
            <div className={styles.contentContainer}>
              <Container>
                <Showcase showcaseContent={showcaseContent} />
                <main className={styles.main}>{this.props.children}</main>
              </Container>
            </div>
            <div className={styles.footerContainer}>
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Layout.propTypes = {
  showcaseContent: PropTypes.instanceOf(ShowcaseContent),
};
