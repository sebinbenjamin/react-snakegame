import React from 'react';
import PropTypes from 'prop-types';

import style from "./Snake.module.css"

const Snake = ({ body }) => {
  const snakeHeadPos = {
    left: body[0][0] + 'px',
    bottom: body[0][1] + 'px'
  };
  
  return (
    <div className={style.Snake}>
      <div className={style.SnakeHead} style={snakeHeadPos} />
      <div className={style.SnakeBody} />
    </div>
  );
}

Snake.propTypes = {
  body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
}
export default Snake;
