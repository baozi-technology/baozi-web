import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styles from "./ArticleContent.module.scss";

const ArticleContent = ({ cover, subTitle }) => {
  if (subTitle) {
    return (
      <div className={styles.articleContentContainer}>
        {cover ? (
          <div>
            <div className={styles.subTitleContainer}>
              <h2 className={styles.subTitle}>{subTitle}</h2>
            </div>
            <div className={styles.coverContainer}>
              <Img className={styles.cover} fluid={cover} />
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.subTitleContainer}>
              <h2 className={styles.subTitle}>{subTitle}</h2>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={styles.articleContentContainer}>
      {cover ? (
        <div>
          <div className={styles.coverContainer}>
            <Img className={styles.cover} fluid={cover} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ArticleContent;

ArticleContent.propTypes = {
  subTitle: PropTypes.string
};
