import React from 'react';
import PropTypes from 'prop-types';

import style from "./Fruit.module.css"

const Fruit = (props) => {
  const { x, y } = props;
  const positionStyle = {
    left: x + 'px',
    bottom: y + 'px'
  };
  return (
    <div className={style.Fruit} style={positionStyle} />
  );
}

Fruit.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Fruit;
