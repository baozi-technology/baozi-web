import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./UserLinks.module.scss";

const UserLinks = () => (
  <div className={styles.userLinks}>
    <div className={styles.contentContainer}>
      <a
        title="nicolas.gimenez@baozi.technology"
        href="mailto:nicolas.gimenez@baozi.technology"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
    <div className={styles.contentContainer}>
      <a href="https://github.com/baozi-technology">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
    <div className={styles.contentContainer}>
      <a href="https://www.linkedin.com/in/nicolas-gimenez-5155aba1/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </div>
);

export default UserLinks;
