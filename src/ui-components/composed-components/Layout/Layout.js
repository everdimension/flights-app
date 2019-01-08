import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import './Layout.css';

const propTypes = {};

function Layout(props) {
  return props.children;
}

Layout.propTypes = propTypes;

export { Layout };
