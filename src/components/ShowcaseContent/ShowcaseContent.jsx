import React from "react";
import styles from "./ShowcaseContent.module.scss";
import BioContent from "../BioContent/BioContent";
import PropTypes from "prop-types";
import ArticleContent from "../ArticleContent/ArticleContent";

const ShowcaseContent = ({ title, bioContent, articleContent }) => {
  var content;
  if (bioContent) {
    content = bioContent;
  } else {
    content = articleContent;
  }
  return (
    <div className={styles.showcaseContent}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default ShowcaseContent;

ShowcaseContent.propTypes = {
  title: PropTypes.string.isRequired,
  bioContent: PropTypes.instanceOf(BioContent),
  articleContent: PropTypes.instanceOf(ArticleContent),
  articleContent: (props, propName, componentName) => {
    if (
      (!props.articleContent && !props.bioContent) ||
      (props.articleContent && props.bioContent)
    ) {
      return new Error(
        `Only one props between 'articleContent' or 'bioContent' must be specified in '${componentName}'.`
      );
    }
  },
};
