import React from 'react';
import PropTypes from 'prop-types';
import Container from "../Container/Container"
import ShowcaseContent from '../ShowcaseContent/ShowcaseContent';
import styles from "./Showcase.module.scss"

const Showcase = ({showcaseContent}) => {
  return (
    <section id={styles.showcase}>
      <Container>
        {showcaseContent}
      </Container>
    </section>
  );
};

export default Showcase;

Showcase.propTypes = {
  showcaseContent: PropTypes.instanceOf(ShowcaseContent),
};
  