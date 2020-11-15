import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";
import LegalNotice from "../components/LegalNotice/LegalNotice";
import config from "../../data/SiteConfig";
import ArticleContent from "../components/ArticleContent/ArticleContent";
import ShowcaseContent from "../components/ShowcaseContent/ShowcaseContent";
import SEO from "../components/SEO/SEO";

class Legal extends React.Component {
  render() {
    const articleContent = <ArticleContent />;
    const showcaseContent = (
      <ShowcaseContent
        title="Mentions légales (fr)"
        articleContent={articleContent}
      ></ShowcaseContent>
    );

    return (
      <Layout showcaseContent={showcaseContent}>
        <Helmet title={`About | ${config.siteTitle}`} />
        <SEO />
        <hr />
        <LegalNotice />
      </Layout>
    );
  }
}

export default Legal;
