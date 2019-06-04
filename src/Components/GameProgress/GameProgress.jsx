import React from 'react';

import style from "./GameProgress.module.css";

const GameProgress = () => {
  return (
    <div className={style.GameProgress}>
      <div className={style.flexContainer}>
        <div className={style.score}> Score </div>
        <div className={style.level}> Level </div>
        <div className={style.highScore}> High Score </div>
      </div>
    </div>
  )
}

export default GameProgress;
