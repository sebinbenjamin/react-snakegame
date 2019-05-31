import React from 'react';

import Snake from "./Snake/Snake";
import Fruit from "./Fruit/Fruit";
import Reward from "./Reward/Reward";
import styles from "./PlayArea.module.css";

const initialState = {
  food: [50, 100],
  speed: 200,
  direction: 'RIGHT',
  showReward: true,
  snake: [[10, 10],[50,50]],
  fruit: [120, 300],
  reward: [100, 120]
}

class PlayArea extends React.Component {
  state = initialState;
  render() {
    const { showReward, snake, reward, fruit } = this.state;

    return (
      <div className={styles.PlayArea}>
        <Snake body={snake} />
        <Fruit x={fruit[0]} y={fruit[1]} />
        {showReward ? <Reward x={reward[0]} y={reward[1]} /> : null}
      </div>
    )
  }
}

export default PlayArea;
