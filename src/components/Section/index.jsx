import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      {<h2 className={style.title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
