import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout/Layout";
// import UserInfo from "../components/UserInfo/UserInfo";
// import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import ShowcaseContent from "../components/ShowcaseContent/ShowcaseContent"
import ArticleContent from "../components/ArticleContent/ArticleContent"
import styles from "./post.module.scss"
import Commento from "../components/Commento/Commento"

	export default class PostTemplate extends React.Component {
	  render() {
	    const { data, pageContext } = this.props;
	    const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext;
	    const postNode = data.markdownRemark;
	    const id = postNode.id;
	    const tableOfContents = postNode.tableOfContents;
	    const post = postNode.frontmatter;
	    if (!post.id) {
	      post.id = slug;
	    }
	    if (!post.category_id) {
	      post.category_id = config.postDefaultCategoryID;
	    }
	    var articleContent;
	    if(post.cover) {
	      articleContent =
	      (<ArticleContent cover={post.cover.childImageSharp.fluid}/>);
	    } else {
	      articleContent =
	      (<ArticleContent/>);     
	    }
	    const showcaseContent = 
	    (<ShowcaseContent 
	      title={post.title}
	      articleContent={articleContent}/>);
	    return (
	      <Layout showcaseContent={showcaseContent}>
		<div>
		  <Helmet>
		    <title>{`${post.title} | ${config.siteTitle}`}</title>
		  </Helmet>
		  <SEO postPath={slug} postNode={postNode} postSEO />
		  <hr/>
		  <div className={styles.postPageContainer}>
		    <div className={styles.contentContainer}>
		      {/* <div className={styles.tableOfContentsContainer} dangerouslySetInnerHTML={{__html: tableOfContents}}/> */}
		      <div className={styles.actualContentContainer}>
			<div className={styles.theArticle} dangerouslySetInnerHTML={{ __html: postNode.html }} />
		      </div>
		    </div>
		    <div className={styles.socialLinks}>
			{/* <PostTags tags={post.tags} /> */}
			<SocialLinks postPath={slug} postNode={postNode} />
		    </div>
		    {/* <UserInfo config={config} /> */}
		  </div>
		  <div className={styles.prevNextContainer}>
		    <div className={styles.prevContainer}>
			<div className={[styles.nextPrevText, styles.maxWdith].join(' ')}>
			  Previous article:
			</div>
			<div className={styles.maxWidth}>
			  <Link to={nextslug}>
			    {nexttitle} {/* date reverse order... */}
			  </Link>
			</div>
		    </div>
		    <div className={styles.nextContainer}>
			<div className={[styles.nextPrevText, styles.maxWdith].join(' ')}>
			  Next article:
			</div>
			<div className={styles.maxWidth}>
			  <Link to={prevslug}>
			    {prevtitle} {/* date reverse order... */}
			  </Link>
			</div>
		    </div>
		  </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      tableOfContents
      frontmatter {
        title
        cover {
          relativePath
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date
        category
        tags
      }
      fields {
        slug
        date
      }
      id
    }
  }
`;
