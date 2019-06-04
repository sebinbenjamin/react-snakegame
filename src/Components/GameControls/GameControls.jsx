import React from 'react';
import PropTypes from 'prop-types';

import style from "./GameControls.module.css";
import playImage from "../../resources/images/play.svg"
import pauseImage from "../../resources/images/pause.svg"

const GameControls = (props) => {
  const { isPaused, changeGamePlay } = props;
  const gamePlayButtonStyle = {
    background: `url(${isPaused ? playImage : pauseImage}) center top/contain no-repeat`
  }

  return (
    <div className={style.GameControls}>
      <div className={style.flexContainer}>
        <button type="button" className={style.play} style={gamePlayButtonStyle} onClick={(event) => changeGamePlay(event)} />
        <span className={style.statusMsg}>{isPaused ? 'Gameplay Paused' : ''}</span>
        <button type="button" className={style.reset}>Reset</button>
      </div>
    </div>
  )
}

GameControls.propTypes = {
  isPaused: PropTypes.bool.isRequired,
  changeGamePlay: PropTypes.func.isRequired
}

export default GameControls;
