/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import GameProgress from "./GameProgress/GameProgress";
import PlayArea from "./PlayArea/PlayArea";
import GameControls from "./GameControls/GameControls";
import Attribution from "./Attribution/Attribution";
import { LEVELUP_SCORE } from "../Constants/misc";
import styles from "./App.module.css";

const initialState = {
  isPaused: false,
  isGameOver: false,
  score: 0,
  level: 0
}

class App extends React.Component {
  state = initialState;

  updateGamePlay() {
    // const { isGameOver } = this.state;
    // if (isGameOver)
    //   setTimeout(() => { this.resetGamePlay(); }, GAMEOVER_RESET_INTERVAL);
    // else
    this.setState((prevState) => {
      return {
        isPaused: !prevState.isPaused//pauses and resumes game
      }
    });
  }
  resetGamePlay() {
    this.setState({
      ...initialState,
      isGameOver: false,
      isPaused: false
    })
  }

  gameOver() {
    this.setState({
      ...initialState,
      isGameOver: true,
      isPaused: true
    })
  }

  updateScore(scoreGained) {
    console.log('Updating score gain of', scoreGained);
    this.setState((prevState) => {
      return { score: prevState.score + scoreGained }
    });
    this.checkAndUpdateLevel();//should I pass it here ? would the state be already updated if i use this.state.score in the fn?
  }

  checkAndUpdateLevel() {
    const { score } = this.state;
    this.setState((prevState) => {
      const newLevel = Math.floor(score / LEVELUP_SCORE);
      if (newLevel !== prevState.level) {
        console.log('Level UP !! : ', newLevel);
        return {
          level: prevState.level + 1
        }
      }
    });
    return;
  }

  render() {
    const { isPaused, score, level, isGameOver } = this.state;
    return (
      <div className={styles.app}>
        <GameProgress score={score} level={level} />
        <PlayArea isPaused={isPaused} isGameOver={isGameOver} gameOver={() => this.gameOver()} changeGamePlay={() => this.updateGamePlay()} updateScore={(scoreGained) => this.updateScore(scoreGained)} />
        <GameControls isGameOver={isGameOver} isPaused={isPaused} changeGamePlay={() => this.updateGamePlay()} resetGamePlay={() => this.resetGamePlay()} />
        <Attribution />
      </div>
    )
  }
}

export default App;
