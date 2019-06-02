import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';

import style from "./Snake.module.css"

const Snake = ({ snakeParts, direction }) => {
  const snakeBody = snakeParts.slice(1);
  const snakeHead = snakeParts[0];
  return (
    <div className={style.Snake}>
      <div
        className={[style.SnakeHead, style[`${direction}`]].join(' ')}
        style={
          {
            left: snakeHead[0] + 'vh',
            bottom: snakeHead[1] + 'vh'
          }
        }
      />
      {
        snakeBody.map((bodyPart, index) => {
          return (
            <div
              key={uid(index)}
              className={[style.SnakeBody, style[`${direction}`]].join(' ')}
              style={
                {
                  left: bodyPart[0] + 'vh',
                  bottom: bodyPart[1] + 'vh'
                }
              }
            />
          )
        })
      }
    </div>
  )
}

Snake.propTypes = {
  snakeParts: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  direction: PropTypes.string.isRequired
}

export default Snake;
