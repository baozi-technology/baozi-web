import React from 'react';
import styles from "./Showcase.module.scss"
import Container from "../Container/Container"
import ShowcaseContent from '../ShowcaseContent/ShowcaseContent';
import PropTypes from 'prop-types';

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
  