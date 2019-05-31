import React from 'react';

import Snake from "./Snake/Snake";
import Fruit from "./Fruit/Fruit";
import Reward from "./Reward/Reward";
import styles from "./PlayArea.module.css";

class PlayArea extends React.Component {
  render() {
    return (
      <div className={styles.PlayArea}>
        <Snake></Snake>
        <Fruit></Fruit>
        <Reward></Reward>
      </div>
    )
  }
}

export default PlayArea;
