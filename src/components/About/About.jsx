import React, { Component } from "react";
import styles from "./About.module.scss"
import { Link } from 'gatsby';

class About extends Component {
  render() {
    return (
      <div className={styles.aboutContainer}>
        <div className={[styles.whatIdoContainer, styles.maxWidth].join(' ')}>
          <h2>What I do</h2>
          <p>Most of my professional experiences revolve around softwares written for the physical world industries such as Aerospace and Defense. 
            Only recently did I start doing web development, a very different industry in many ways.</p>
          <p>I always try to code in the language the most suitable for each project, 
            regardless of my current knowledge and preferences. Disclaimer: I am most experienced in Python and Java but I am rather language-agnostic.</p>
          <p> I recently started{" "} 
            <Link to="/ranch-under-the-hood">contributing to open-source projects</Link> 
            {" "}and I am excited about releasing my own work Soon™.
          </p>
          <p>I spend lots of my time learning about the new technology and business trends.</p>
        </div>
        <div className={[styles.myValuesContainer, styles.maxWidth].join(' ')}>
          <h2>My values</h2>
          <p>I am the no bullshit type. Solid code and transparency are what matters to me. 
            I measure quality by customer satisfaction. 
            I don’t hesitate asking questions - I do it happily as part of team work.
          </p>
          <p>My fuel is passion. I enjoy the most working on meaningful and ambitious projects.</p>
        </div>
        <div className={[styles.whyBaoziContainer, styles.maxWidth].join(' ')}>
          <h2>Why Baozi?</h2>
          <p>Because it is so damn tasty! What a question! And also because it appears simple
            but it is internally extremely complex like all pieces of software ;). More about this flawless analogy Soon™ on this blog.</p>
          <p>Baozi Technology SAS registered in France is my company under which I operate on freelance basis.</p>
          <h2>I can help</h2>
          <p>As of now, I am engaged in a full-time contract with a client. 
            However, starting from the summer 2020 I will be available remotely or in Paris for any exciting freelance work. If you are interested in working with me, <a title="nicolas.gimenez@baozi.technology" href="mailto:nicolas.gimenez@baozi.technology">shoot me a message!</a></p>
        </div>
      </div>
    );
  }
}

export default About;
