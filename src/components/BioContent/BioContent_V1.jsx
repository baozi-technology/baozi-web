import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styles from "./BioContent.module.scss";
import PropTypes from "prop-types";

// the {isLink} is used to destructure the prop inside, that is injected in the parent component
const BioContentV1 = ({ isLink }) => {
  const [eating,setIsEating]= useState(false)
  const bioResult = useStaticQuery(graphql`
    {
      mainBio: file(relativePath: { eq: "avatars/nico_catch_yuting.jpg" }) {
        publicURL
      }
      gifBio: file(
        relativePath: { eq: "avatars/me-eating-baozi-square-transparent.gif" }
      ) {
        publicURL
      }
    }
  `);

  // destructures the query result
  const { mainBio, gifBio } = bioResult;

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
          src={!eating?mainBio.publicURL:gifBio.publicURL}
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

export default BioContentV1;

BioContentV1.propTypes = {
  isLink: PropTypes.bool
};
