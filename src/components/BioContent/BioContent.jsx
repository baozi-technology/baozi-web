import React, { useState } from "react"
import styles from "./BioContent.module.scss"
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

const BioContent = (props) => {
  const data = useStaticQuery(graphql`
  query BioQuery {
    allFile(filter: {name: {in: ["nico_catch_yuting", "me-eating-baozi-square-transparent"]}}) {
      edges {
        node {
          name
          relativePath
          extension
        }
      }
    }
  }
  `)
  var meEatingBaoziPath;
  var meNormalPath;
  data.allFile.edges.forEach(edge => {
    if(edge.node.extension == "gif") {
      meEatingBaoziPath=edge.node.relativePath;
    } else {
      meNormalPath=edge.node.relativePath;
    }
  });
  const meNormal  = (<img className={styles.avatar} src={meNormalPath}/>);
  const meEatingBaozi  = (<img className={styles.avatar} src={meEatingBaoziPath}/>);
  const [avatar, setAvatar] = useState(meNormal);

  const baozi = (<button 
    className={styles.baozi}
    onClick={handleBaoziClick}>
      eating baozi
      </button>);
  function handleBaoziClick(e) {
    if(avatar != meEatingBaozi) {
      setAvatar(meEatingBaozi);
      setTimeout(setBackNormalAvatar, 2500)
    }
  }
  function setBackNormalAvatar(){
    setAvatar(meNormal);
  }
  const isLink = props.isLink;
  const bio = (
    <span>Hi! I’m Nicolas – freelance fullstack software engineer based in France. 
        My main area of expertise is concurrent backend services dealing with various non-standard protocols.  
        My passions are solving complex problems using technology and {baozi}.
    </span>
  );
  var content;
  if(isLink) {
    content = (
      <p className={styles.bioContent}>
        {bio}{"  "}
        <Link className={styles.arrow} to="/about">&rarr;</Link>
      </p>
    );
  } else {
    content = (
      <p className={styles.bioContent}>
        {bio} 
      </p>
    );
  }
  return (
    <div className={styles.bioContentContainer}>
      <div className={styles.avatarContainer}>
        {avatar}
      </div>
      <div className={styles.bioContainer}>
        {content}
      </div>
    </div>
  );
}

export default BioContent;

BioContent.propTypes = {
  isLink: PropTypes.bool
};