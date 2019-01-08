import React from 'react';
import PropTypes from 'prop-types';
import s from './List.css';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  renderItem: PropTypes.func.isRequired
};

function List({ items, renderItem }) {
  return (
    <div className={s.List}>
      {items.map((item, index) => renderItem({ item, index }))}
    </div>
  );
}

List.propTypes = propTypes;

export { List };
