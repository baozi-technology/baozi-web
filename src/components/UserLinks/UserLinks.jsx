import React, { Component } from "react";
import styles from "./UserLinks.module.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackExchange,
} from "@fortawesome/free-brands-svg-icons";

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

class UserLinks extends Component {
  render() {
    return (
      <div className={styles.userLinks}>
        <div className={styles.contentContainer}>
          <a
            title="nicolas.gimenez@baozi.technology"
            href="mailto:nicolas.gimenez@baozi.technology"
          >
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="https://github.com/baozi-technology">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="https://www.linkedin.com/in/nicolas-gimenez-5155aba1/">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.contentContainer}>
          <a href="https://stackexchange.com/users/10722664/n-gimenez?tab=accounts">
            <FontAwesomeIcon icon={faStackExchange}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default UserLinks;
