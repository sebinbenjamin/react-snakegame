import React from 'react';
import PropTypes from 'prop-types';

import style from "./Reward.module.css"

const Reward = (props) => {
  const { x, y } = props;
  const positionStyle = {
    left: x + 'vh',
    bottom: y + 'vh'
  };

  return (
    <div className={style.Reward} style={positionStyle} />
  )
}

Reward.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Reward;