import React from 'react';

import Snake from "./Snake/Snake";
import Fruit from "./Fruit/Fruit";
import Reward from "./Reward/Reward";
import styles from "./PlayArea.module.css";

const initialState = {
  food: [50, 100],
  speed: 10,
  direction: 'UP',
  showReward: true,
  snakeParts: [[0, 8], [0, 6], [0, 4], [0, 2], [0, 0]],
  fruit: [80, 80],
  reward: [20, 10]
}

class PlayArea extends React.Component {
  state = initialState;
  render() {
    const { showReward, snakeParts, reward, fruit, direction } = this.state;

    return (
      <div className={styles.PlayArea}>
        <Snake snakeParts={snakeParts} direction={direction} />
        <Fruit x={fruit[0]} y={fruit[1]} />
        {showReward ? <Reward x={reward[0]} y={reward[1]} /> : null}
      </div>
    )
  }
}

export default PlayArea;
