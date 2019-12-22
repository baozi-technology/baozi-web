import React, { useState, useEffect } from "react"
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
  var meEatingBaozi;
  var meNormal;
  data.allFile.edges.forEach(edge => {
    if(edge.node.extension == "gif") {
      meEatingBaozi=edge.node.relativePath;
    } else {
      meNormal=edge.node.relativePath;
    }
  });

  // https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
  useEffect(() => {
    // https://fr.reactjs.org/docs/hooks-effect.html
    preLoadImage(meEatingBaozi);
    preLoadImage(meNormal);
  });

  function preLoadImage(imgFileName) {
    const img = new Image();
    img.src = imgFileName;
  }

  const [avatar, setAvatar] = useState(meNormal);

  var avatarImage = (
    <img 
      className={styles.avatar}
      src={avatar}
      alt="Oops, profile pic did not load!"
    />
  );
  var baozi = (<button 
    className={styles.baozi}
    onClick={handleBaoziClick}>
      eating baozi
      </button>);


  function handleBaoziClick() {
    if(avatar != meEatingBaozi) {
      setAvatar(meEatingBaozi);
      setTimeout(setBackNormalAvatar, 2500);
    }
  }

  // function handleBaoziClick(() => {
  //   if(avatar != meEatingBaozi) {
  //     const timer = setTimeout(() => {
  //       setBackNormalAvatar()
  //     }, 2500);
  //     return () => clearTimeout(timer);
  //   }
  // };

  function setBackNormalAvatar(){
    setAvatar(meNormal);
  }
  const isLink = props.isLink;
  var bio = (
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
        {avatarImage}
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