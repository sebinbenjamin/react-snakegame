import React from 'react';
import PropTypes from 'prop-types';

import style from "./GameControls.module.css";

const GameControls = (props) => {
  const { isPaused, changeGamePlay } = props;
  return (
    <div className={style.GameControls}>
      <div className={style.flexContainer}>
        <button type="button" className={style.play} onClick={(event) => changeGamePlay(event)} />
        {isPaused ? '' : 'Game Paused'}
        <button type="button"> Reset</button>
      </div>
    </div>
  )
}


GameControls.propTypes = {
  isPaused: PropTypes.bool.isRequired,
  changeGamePlay: PropTypes.func.isRequired
}

export default GameControls;
