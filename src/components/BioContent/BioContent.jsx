import React, { useState, useEffect } from "react";
import styles from "./BioContent.module.scss";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const BioContent = (props) => {
  const meEatingBaozi = "/avatars/me-eating-baozi-square-transparent.gif";
  const meNormal = "/avatars/nico_catch_yuting.jpg";

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

  const [click, setClick] = useState(false);

  const baozi = (
    <button className={styles.baozi} onClick={handleBaoziClick}>
      eating baozi
    </button>
  );

  function handleBaoziClick() {
    if (!click) {
      setClick(true);
      setTimeout(setBackNormalAvatar, 2500);
    }
  }

  function setBackNormalAvatar() {
    setClick(false);
  }
  const isLink = props.isLink;
  var bio = (
    <span>
      Hi! I’m Nicolas – fullstack software engineer based in France. My main
      areas of expertise are desktop applications and concurrent backend
      services dealing with various non-standard protocols. My passions are
      solving complex problems using technology and {baozi}.
    </span>
  );
  var content;
  if (isLink) {
    content = (
      <p className={styles.bioContent}>
        {bio}
        {"  "}
        <Link className={styles.arrow} to="/about">
          &rarr;
        </Link>
      </p>
    );
  } else {
    content = <p className={styles.bioContent}>{bio}</p>;
  }
  return (
    <div className={styles.bioContentContainer}>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src={!click ? meNormal : meEatingBaozi}
          alt="Oops, the profile pic did not load! Try refreshing the page."
        />
      </div>
      <div className={styles.bioContainer}>{content}</div>
    </div>
  );
};

export default BioContent;

BioContent.propTypes = {
  isLink: PropTypes.bool,
};
