import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import BioContent from "../components/BioContent/BioContent";
import ShowcaseContent from "../components/ShowcaseContent/ShowcaseContent";
import SEO from "../components/SEO/SEO";

class AboutPage extends Component {
  render() {
    const bioContent = <BioContent isLink={false} />;
    const showcaseContent = (
      <ShowcaseContent title="About" bioContent={bioContent}></ShowcaseContent>
    );
    return (
      <Layout showcaseContent={showcaseContent}>
        <Helmet title={`About | ${config.siteTitle}`} />
        <SEO />
        <About />
      </Layout>
    );
  }
}

export default AboutPage;
