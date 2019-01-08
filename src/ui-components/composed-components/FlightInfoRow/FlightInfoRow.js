import React from 'react';
import PropTypes from 'prop-types';
import s from './FlightInfoRow.css';

const propTypes = {};

function FlightInfoRow() {
  return (
    <div className={s.FlightInfoRow}>
      <div style={{ color: 'var(--body-text-color-2)' }} className={s.time}>
        16:40
      </div>
      <div className={s.destination}>Калининград</div>
      <div
        style={{ gridArea: 'flights', color: 'var(--body-text-primary-color)' }}
        className={s.flights}
      >
        SU1010 AF4436 KL3244 SU1226
      </div>
      <div>D5</div>
      <div style={{ color: 'var(--body-text-color-1)' }}>Ожидание посадки</div>
    </div>
  );
}

FlightInfoRow.propTypes = propTypes;

export { FlightInfoRow };
