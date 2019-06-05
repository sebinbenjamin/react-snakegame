import React from 'react';
import PropTypes from 'prop-types';

import style from "./GameControls.module.css";
import playImage from "../../resources/images/play.svg"
import pauseImage from "../../resources/images/pause.svg"

const GameControls = (props) => {
  const { isPaused, isGameOver, changeGamePlay, resetGamePlay } = props;
  const gamePlayButtonStyle = {
    background: `url(${isPaused ? playImage : pauseImage}) center top/contain no-repeat`
  }
  let statusMsg = null;
  if (isGameOver)
    statusMsg = (<span className={style.GameOver} style={{'color': 'crimson'}}>GAME OVER</span>);
  else if (isPaused)
    statusMsg = (<span className={style.statusMsg}>Gameplay Paused</span>);
  else
    statusMsg = (<span className={style.statusMsg} />);

  return (
    <div className={style.GameControls}>
      <div className={style.flexContainer}>
        <button type="button" className={style.play} style={gamePlayButtonStyle} onClick={(event) => changeGamePlay(event)} />
        {statusMsg}
        <button type="button" className={style.reset} onClick={(event) => resetGamePlay(event)}>Reset</button>
      </div>
    </div>
  )
}

GameControls.propTypes = {
  isPaused: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  changeGamePlay: PropTypes.func.isRequired,
  resetGamePlay: PropTypes.func.isRequired
}

export default GameControls;
