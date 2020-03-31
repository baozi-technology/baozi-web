import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import BioContent from "../components/BioContent/BioContent";
import ShowcaseContent from "../components/ShowcaseContent/ShowcaseContent";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const bioContent = <BioContent isLink={true} />;
    const showcaseContent = (
      <ShowcaseContent
        title="Nicolas Gimenez"
        bioContent={bioContent}
      ></ShowcaseContent>
    );

    return (
      <Layout showcaseContent={showcaseContent}>
        <Helmet title={config.siteTitle} />
        <SEO />
        <PostListing postEdges={postEdges} />
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            category
            cover {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
            author
          }
        }
      }
    }
  }
`;
