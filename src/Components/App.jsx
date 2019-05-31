/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Scores from "./Scores/Scores";
import PlayArea from "./PlayArea/PlayArea";
import GameControls from "./GameControls/GameControls";
import styles from "./App.module.css";
import Attribution from "./Attribution/Attribution";

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Scores />
        <PlayArea />
        <GameControls />
        <Attribution />
      </div>
    )
  }
}

export default App;
