import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {};

function ThemeProvider(props) {
  /**
   * At the moment this component
   * exists only for importing './styles.css'
   */
  return props.children;
}

ThemeProvider.propTypes = propTypes;

export { ThemeProvider };
