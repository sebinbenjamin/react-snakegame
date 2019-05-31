import React from 'react';

import Scores from "./Components/Scores/Scores";
import PlayArea from "./Components/PlayArea/PlayArea";
import GameControls from "./Components/GameControls/GameControls";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    console.log();
    return (
      <div className={styles.app}>
        <Scores></Scores>
        <PlayArea></PlayArea>
        <GameControls></GameControls>
      </div>
    )
  }
}

export default App;
