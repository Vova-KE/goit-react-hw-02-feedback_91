import React from 'react';
import style from './style.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2 className={style.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
