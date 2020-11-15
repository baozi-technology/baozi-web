import React, { Component } from "react";
import styles from "./About.module.scss";
import { Link } from "gatsby";

class About extends Component {
  render() {
    return (
      <div className={styles.aboutContainer}>
        <div className={[styles.whatIdoContainer, styles.maxWidth].join(" ")}>
          <h2>What I do</h2>
          <p>
            Lots of my professional experiences revolve around softwares written
            for the physical world industries such as Aerospace and Defense. In
            my current job, I maintain a web application connected to devices
            that measure indoor air quality in real time.
          </p>
          <p>
            I always try to code in the language the most suitable for each
            project, regardless of my current knowledge and preferences. I am
            most experienced in Python and Java, but in my free time I favor
            functional languages such as Erlang/Elixir/OTP, Racket and
            OCaml/ReasonML.
          </p>
          <p>
            {" "}
            I recently started{" "}
            <Link to="/ranch-under-the-hood">
              getting involved in open-source projects
            </Link>
            . I love tweaking my{" "}
            <Link to="https://github.com/nicobao/setup/tree/master/vim">
              neovim config
            </Link>
            , and I spend lots of my time learning about the new technology and
            business trends.
          </p>
        </div>
        <div className={[styles.myValuesContainer, styles.maxWidth].join(" ")}>
          <h2>My values</h2>
          <p>
            I am the no bullshit type. Solid code and transparency are what
            matters to me. I measure quality by customer satisfaction. I don’t
            hesitate asking questions - I do it happily as part of team work.
          </p>
          <p>
            My fuel is passion. I enjoy the most working on meaningful and
            ambitious projects.
          </p>
        </div>
        <div className={[styles.whyBaoziContainer, styles.maxWidth].join(" ")}>
          <h2>Why Baozi?</h2>
          <p>
            Because it is so damn tasty! What a question! And also because it
            appears simple but it is internally extremely complex like all
            pieces of software ;).
          </p>
          <h2>I can help</h2>
          <p>
            Interested in working with me? I am available remotely or in Paris
            for any exciting open-source work written in a functional language.{" "}
            <a
              title="nicolas.gimenez@baozi.technology"
              href="mailto:nicolas.gimenez@baozi.technology"
            >
              Shoot me a message!
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
