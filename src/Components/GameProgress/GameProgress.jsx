import React from 'react';
import { PropTypes } from "prop-types";
import style from "./GameProgress.module.css";

const GameProgress = (props) => {
  const { score, level } = props;
  return (
    <div className={style.GameProgress}>
      <div className={style.flexContainer}>
        <div className={style.score}>
          Score :&nbsp;
          {score}
        </div>
        <div className={style.level}>
          Level : &nbsp;
          {level}
        </div>
        {/* <div className={style.highScore}> High Score : </div> */}
      </div>
    </div>
  )
}

GameProgress.propTypes = {
  score: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired
}

export default GameProgress;
