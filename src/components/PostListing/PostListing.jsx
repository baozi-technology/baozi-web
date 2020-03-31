import React from "react";
import { Link } from "gatsby";
import styles from "./PostListing.module.scss";
import config from "../../../data/SiteConfig";
import Img from "gatsby-image";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        category: postEdge.node.frontmatter.category,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        author: postEdge.node.frontmatter.author,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    postList.forEach((post) => {
      var date = new Date(post["date"]);
      post["date"] = new Intl.DateTimeFormat(config.dateFormat).format(date);
    });
    return postList;
  }

  isMustRead(post) {
    if (post.tags.indexOf("must read") > -1) {
      return true;
    } else {
      return false;
    }
  }

  linkToPost(post) {
    const mustRead = this.isMustRead(post);
    return (
      <Link className={styles.link} to={post.path} key={post.title}>
        <div className={styles.insidePostContainer}>
          <div className={styles.titleAndDateContainer}>
            <h1 className={styles.title}>
              {mustRead ? (
                <span className={styles.mustRead}>
                  *MUST READ*
                  <br />
                </span>
              ) : null}
              {post.title}
            </h1>
            <p className={styles.dateAuthor}>
              {post.date +
                " - " +
                post.author +
                " - " +
                post.timeToRead +
                "min read"}
            </p>
            <p className={styles.category}>{"Category: " + post.category}</p>
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
    );
  }

  render() {
    const postList = this.getPostList();
    const lastPost = postList.pop();
    return (
      <div className={styles.postListingContainer}>
        {/* Your post list here. */
        postList.map((post) => (
          <div className={styles.postContainer}>
            {this.linkToPost(post)}
            <hr />
          </div>
        ))}
        <div className={styles.postContainer}>{this.linkToPost(lastPost)}</div>
      </div>
    );
  }
}

export default PostListing;
