/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import GameProgress from "./GameProgress/GameProgress";
import PlayArea from "./PlayArea/PlayArea";
import GameControls from "./GameControls/GameControls";
import Attribution from "./Attribution/Attribution";
import styles from "./App.module.css";

const initialState = {
  isPaused: false
}

class App extends React.Component {
  state = initialState;

  updateGamePlay() {
    this.setState((prevState) => {
      return {
        isPaused: !prevState.isPaused
      }
    })
  }

  render() {
    const { isPaused } = this.state;
    return (
      <div className={styles.app}>
        <GameProgress />
        <PlayArea isPaused={isPaused} />
        <GameControls isPaused={isPaused} changeGamePlay={() => { this.updateGamePlay() }} />
        <Attribution />
      </div>
    )
  }
}

export default App;
