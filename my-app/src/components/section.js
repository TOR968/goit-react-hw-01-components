import React from 'react';
import PropTypes from 'prop-types';
import s from './section.module.css';

function Section({ title, children }) {
  return (
    <div>
      {<h2 className={s.section}>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;