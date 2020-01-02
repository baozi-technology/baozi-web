import React, { useState } from "react";
import { Link } from "gatsby";
import styles from "./BioContent.module.scss";
import PropTypes from "prop-types";

// the {isLink} is used to destructure the prop inside, that is injected in the parent component
const BioContentV2 = ({ isLink }) => {
  const [eating,setIsEating]= useState(false)
  // click handler for the button triggers the 
  const handleBaoziClick = () => {
    setIsEating(true);
    setTimeout(() => {
      setIsEating(false);
    }, 2500);

  };
  return (
    <div className={styles.bioContentContainer}>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src={!eating?'avatars/nico_catch_yuting.jpg':'avatars/me-eating-baozi-square-transparent.gif'}
          alt="Oops, the profile pic did not load! Try refreshing the page."
        />
      </div>
      <div className={styles.bioContainer}>
        {isLink ? (
          <p className={styles.bioContent}>
            <span>
              Hi! I’m Nicolas – freelance fullstack software engineer based in
              France. My main area of expertise is concurrent backend services
              dealing with various non-standard protocols. My passions are
              solving complex problems using technology and{" "}
              <button type="button" className={styles.baozi} onClick={handleBaoziClick}>
                eating baozi
              </button>
              .
            </span>
            {"  "}
            <Link className={styles.arrow} to="/about">
              &rarr;
            </Link>
          </p>
        ) : (
          <p className={styles.bioContent}>
            {" "}
            <span>
              Hi! I’m Nicolas – freelance fullstack software engineer based in
              France. My main area of expertise is concurrent backend services
              dealing with various non-standard protocols. My passions are
              solving complex problems using technology and{" "}
              <button type="button" className={styles.baozi} onClick={handleBaoziClick}>
                eating baozi
              </button>
              .
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default BioContentV2;

BioContentV2.propTypes = {
  isLink: PropTypes.bool
};
