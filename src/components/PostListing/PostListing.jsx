import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./PostListing.module.scss";
import config from "../../../data/SiteConfig";

// (postEdges) is destructured(extracted) from the props.
const PostListing = ({ postEdges }) => {
  const postList = postEdges.map(postEdge => {
    // no more need for double array iteration. In one go you get the same information.
    const originalDate = new Date(postEdge.node.fields.date);
    const formattedDate = new Intl.DateTimeFormat(config.dateFormat).format(
      originalDate
    );
    return {
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      category: postEdge.node.frontmatter.category,
      title: postEdge.node.frontmatter.title,
      date: formattedDate,
      author: postEdge.node.frontmatter.author,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    };
  });
  return (
    <div className={styles.postListingContainer}>
      {/* Your post list here. to avoid warnings and such as each item that will be rendered by React should have a unique identifier array index was used.
      it's not the ideal solution as it could lead to some other issues and you should use some kind of unique identifier.
      */
      postList.map((post,index) => (
        <div className={styles.postContainer} key={index}>
          <Link className={styles.link} to={post.path} key={post.title}>
            <div className={styles.insidePostContainer}>
              <div className={styles.titleAndDateContainer}>
                <h1 className={styles.title}>
                  {post.tags.indexOf("must read") > -1 ? (
                    <span className={styles.mustRead}>
                      *MUST READ*
                      <br />
                    </span>
                  ) : null}
                  {post.title}
                </h1>
                <p className={styles.dateAuthor}>
                  {`${post.date 
                    } - ${ 
                    post.author 
                    } - ${ 
                    post.timeToRead 
                    }min read`}
                </p>
                <p className={styles.category}>
                  {`Category: ${  post.category}`}
                </p>
              </div>
              <div className={styles.coverContainer}>
                <Img
                  className={styles.cover}
                  fluid={post.cover.childImageSharp.fluid}
                />
              </div>
              <div className={styles.excerptContainer}>
                <p>{post.excerpt}</p>
              </div>
            </div>
          </Link>
          <hr />
        </div>
      ))}
      {/*  <div className={styles.postContainer}>{this.linkToPost(lastPost)}</div> */}
    </div>
  );
};

export default PostListing;
