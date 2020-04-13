import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import styles from "./Drawer.module.scss";
import UserLinks from "../UserLinks/UserLinks";

// see https://www.w3schools.com/howto/howto_js_sidenav.asp
export default class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.preventScrolling = this.preventScrolling.bind(this);
  }

  toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.closeDrawer();
  };

  openDrawer() {
    document.getElementById("drawerID").style.width = "200px";
    document.getElementById("drawerID").style.opacity = 1;
    document.getElementById("drawerOverlay").style.width = "100%";
    document.getElementById("drawerOverlay").style.height = "100%";
  }

  preventScrolling(e) {
    if (e != undefined) {
      e.preventDefault();
    }
  }

  closeDrawer(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    document.getElementById("drawerID").style.width = "0px";
    document.getElementById("drawerID").style.opacity = 0;
    document.getElementById("drawerOverlay").style.width = "0px";
    document.getElementById("drawerOverlay").style.height = "0px";
  }

  render() {
    return (
      <div>
        <div
          id="drawerOverlay"
          className={styles.drawerOverlay}
          onClick={this.toggleDrawer()}
          onKeyDown={this.toggleDrawer()}
          onScroll={this.preventScrolling()}
        />
        <div id="drawerID" className={styles.drawerContainer}>
          <div className={styles.drawerChild}>
            <Link
              className={styles.link}
              activeClassName={styles.linkActive}
              to="/"
            >
              Home
            </Link>
          </div>
          <div className={styles.drawerChild}>
            <Link
              className={styles.link}
              activeClassName={styles.linkActive}
              to="/ranch-under-the-hood"
            >
              Ranch doc
            </Link>
          </div>
          <div className={styles.drawerChild}>
            <Link
              className={styles.link}
              activeClassName={styles.linkActive}
              to="/about"
            >
              About
            </Link>
          </div>
          <div className={styles.drawerChild}>
            <UserLinks isSplit={true} />
          </div>
        </div>
        <FontAwesomeIcon
          className={styles.icon}
          color="#555"
          onClick={this.openDrawer}
          icon={faBars}
        />
      </div>
    );
  }
}
