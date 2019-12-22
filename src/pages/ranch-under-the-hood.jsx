import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";
import config from "../../data/SiteConfig";
import ranchHtml from 'raw-loader!../../content/ranch-under-the-hood/Ranch_Under_The_Hood.html'
import Asciidoctor from "../components/Asciidoctor/Asciidoctor";
import ArticleContent from "../components/ArticleContent/ArticleContent"
import ShowcaseContent from "../components/ShowcaseContent/ShowcaseContent"
import SEO from "../components/SEO/SEO";

class RanchPage extends React.Component {
  render() {
    const articleContent =
    (<ArticleContent subTitle="A deep dive into the home of cowboys."/>);
    const showcaseContent = 
      (<ShowcaseContent 
        title="Ranch: what's under the hood?" 
        articleContent={articleContent}>
      </ShowcaseContent>);
    return (
      <Layout showcaseContent={showcaseContent}>
        <div className="ranch-container">
            <Helmet title={`Ranch: what's under the hood? | ${config.siteTitle}`} />
            <SEO />
            {/* <p>doc: {doc}</p> */}
          <hr/>
          <Asciidoctor asciidocHtml={ranchHtml} />
        </div>
      </Layout>
    );
  }
}

export default RanchPage;