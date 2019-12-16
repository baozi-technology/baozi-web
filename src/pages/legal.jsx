import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";
import LegalNotice from "../components/LegalNotice/LegalNotice";
import config from "../../data/SiteConfig";
import ArticleContent from "../components/ArticleContent/ArticleContent";
import ShowcaseContent from "../components/ShowcaseContent/ShowcaseContent";

class Legal extends React.Component {
  render() {
    const articleContent =
    (<ArticleContent subTitle="Baozi Technology SAS is a French company - this is a legal obligation"/>);
    const showcaseContent = 
      (<ShowcaseContent 
        title="Mentions légales (fr)" 
        articleContent={articleContent}>
      </ShowcaseContent>);

    return (
      <Layout showcaseContent={showcaseContent}>
        <Helmet title={`About | ${config.siteTitle}`} />
        <hr/>
        <LegalNotice/>
      </Layout>
    );
  }
}

export default Legal;