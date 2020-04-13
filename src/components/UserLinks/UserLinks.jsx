import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackExchange,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./UserLinks.module.scss";

const siteConfig = require("../../../data/SiteConfig");

// class UserLinks extends Component {
//   getLinkElements() {
//     const { userLinks } = this.props.config;
//     const { labeled } = this.props;
//     return userLinks.map(link => (
//       <FontAwesomeIcon
//       // key={link.label}
//       // href={link.url}
//       icon={faEnvelope}>
//         {/* {labeled ? link.label : ""} */}
//       </FontAwesomeIcon>
//       // <button
//       // key={link.label}
//       // href={link.url}
//       // className={link.iconClassName}>
//       //   {labeled ? link.label : ""}
//       // </button>
//     ));
//   }
//   render() {
//     const { userLinks } = this.props.config;
//     if (!userLinks) {
//       return null;
//     }
//     return <div className={styles.userLinks}>{this.getLinkElements()}</div>;
//   }
// }

function UserLinks({ isSplit = false }) {
  let toReturn;
  if (isSplit) {
    toReturn = (
      <div className={styles.userLinks}>
        <div className={styles.rowFlexContainer}>
          <div className={styles.contentContainer}>
            <a
              title={siteConfig.userEmail}
              href={"mailto:".concat(siteConfig.userEmail)}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <div className={styles.contentContainer}>
            <a href={siteConfig.userLinkedIn}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className={styles.rowFlexContainer}>
          <div className={styles.contentContainer}>
            <a href={siteConfig.userGitHub}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className={styles.contentContainer}>
            <a href={siteConfig.userStackExchange}>
              <FontAwesomeIcon icon={faStackExchange} />
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    toReturn = (
      <div className={styles.userLinksNotSplit}>
        <div className={styles.contentContainer}>
          <a
            title={siteConfig.userEmail}
            href={"mailto:".concat(siteConfig.userEmail)}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href={siteConfig.userLinkedIn}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href={siteConfig.userGitHub}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href={siteConfig.userStackExchange}>
            <FontAwesomeIcon icon={faStackExchange} />
          </a>
        </div>
      </div>
    );
  }
  return toReturn;
}

export default UserLinks;
