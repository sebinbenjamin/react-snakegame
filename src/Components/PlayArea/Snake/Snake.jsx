import React from 'react';
import PropTypes from 'prop-types';

import style from "./Snake.module.css"

const Snake = ({ snakeParts, direction }) => {
  return (
    <div className={style.Snake}>
      <div
        className={[style.SnakeHead, style[`${direction}`]].join(' ')}
        style={
          {
            left: snakeParts[0][0] + 'vh',
            bottom: snakeParts[0][1] + 'vh'
          }
        }
      />
      <div
        className={style.SnakeBody}
        style={
          {
            left: snakeParts[1][0] + 'vh',
            bottom: snakeParts[1][1] + 'vh'
          }
        }
      />
      <div
        className={style.SnakeBody}
        style={
          {
            left: snakeParts[2][0] + 'vh',
            bottom: snakeParts[2][1] + 'vh'
          }
        }
      />
      <div
        className={style.SnakeBody}
        style={
          {
            left: snakeParts[3][0] + 'vh',
            bottom: snakeParts[3][1] + 'vh'
          }
        }
      />
      <div
        className={style.SnakeBody}
        style={
          {
            left: snakeParts[4][0] + 'vh',
            bottom: snakeParts[4][1] + 'vh'
          }
        }
      />
    </div>
  )
}

Snake.propTypes = {
  snakeParts: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  direction: PropTypes.string.isRequired
}
export default Snake;
