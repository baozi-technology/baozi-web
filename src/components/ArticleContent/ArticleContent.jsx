import React, { Component } from "react"
import styles from "./ArticleContent.module.scss"
import PropTypes from 'prop-types';
import Img from "gatsby-image"

const ArticleContent = (props) => {
  const cover = props.cover;
  const subTitle = props.subTitle;
  var content;
  if(subTitle) {
      if(cover) {
        content = (
            <div>
                <div className={styles.subTitleContainer}>
                    <h2 className={styles.subTitle}>
                        {subTitle}
                    </h2>
                </div>
                <div className={styles.coverContainer}>
                    <Img className={styles.cover}        
                    fluid={cover}
                    />
                </div>
            </div>
        );         
      } else {
        content = (
            <div>
                <div className={styles.subTitleContainer}>
                    <h2 className={styles.subTitle}>
                        {subTitle}
                    </h2>
                </div>
            </div>
        );              
      }
  } else {
    if(cover) {
      content = ( 
        <div>
            <div className={styles.coverContainer}>
                <Img className={styles.cover}        
                fluid={cover}
                />
            </div>
        </div>);
    } else {
        content = null;
    }
  }
  return (
    <div className={styles.articleContentContainer}>
        {content}
    </div>
  );
}

export default ArticleContent;

ArticleContent.propTypes = {
  subTtitle: PropTypes.string,
};