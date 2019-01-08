import React from 'react';
import PropTypes from 'prop-types';
import s from './ListItem.css';

const propTypes = {};

function ListItem(props) {
  return <div className={s.ListItem} {...props} />;
}

ListItem.propTypes = propTypes;

export { ListItem };
