import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
/* import BioContent from "../components/BioContent/BioContent"; */
/* import BioContentV1 from "../components/BioContent/BioContent_V1"; */
import BioContentV2 from "../components/BioContent/BioContent_V2";
import ShowcaseContent from "../components/ShowcaseContent/ShowcaseContent";

const Index = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;
  // no need for setting it to true React will know that is the case
  const bioContent = <BioContentV2 isLink />;
  const showcaseContent = (
    <ShowcaseContent title="Nicolas Gimenez" bioContent={bioContent} />
  );
  return (
    <Layout showcaseContent={showcaseContent}>
      <Helmet title={config.siteTitle} />
      <SEO />
      <PostListing postEdges={edges} />
    </Layout>
  );
};
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
