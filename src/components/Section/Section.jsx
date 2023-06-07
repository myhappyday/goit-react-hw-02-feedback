import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      {title && <Title>{title}</Title>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Section;
