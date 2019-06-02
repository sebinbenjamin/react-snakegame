import React from 'react';

import Snake from "./Snake/Snake";
import Fruit from "./Fruit/Fruit";
import Reward from "./Reward/Reward";
import styles from "./PlayArea.module.css";

import { moveSnake } from "../../utils/snake.utils";

//all positions are in [x, y], where x and y are the coordinates on a 
const initialState = {
  speed: 500,
  direction: 'UP',
  snakeParts: [[0, 8], [0, 6], [0, 4], [0, 2], [0, 0]],
  fruit: [80, 80],
  reward: [20, 10],
  showReward: true
}

class PlayArea extends React.Component {
  state = initialState;

  componentDidMount() {
    const { speed } = this.state;
    // for (let i = 0; i <= 160; i++) {
    //   this.playGame();
    // }
    setInterval(() => this.playGame(), speed);
  }

  playGame() {
    this.setState((state) => {
      return {
        snakeParts: moveSnake(state.snakeParts, state.direction)
      }
    });
  }

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
