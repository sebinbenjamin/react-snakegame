import React from 'react';
import PropTypes from 'prop-types';

import Snake from "./Snake/Snake";
import Fruit from "./Fruit/Fruit";
import Reward from "./Reward/Reward";
import styles from "./PlayArea.module.css";

import { moveSnake } from "../../utils/snake.utils";
import { playerKeyDown, checkFruitCollision, checkRewardCollision } from "../../utils/playarea.utils";
import { getRandomPositions } from "../../utils/misc.utils";

//all positions are in [x, y]
const initialState = {
  speed: 1500,
  direction: 'UP',
  snakeParts: [[0, 2], [0, 0]],
  fruit: [70, 80],
  reward: [80, 80],
  showReward: false,
}

class PlayArea extends React.Component {
  state = initialState;

  componentDidMount() {
    const { speed } = this.state;
    this.setState({ fruit: getRandomPositions() });
    // for (let i = 0; i <= 100; i++) {
    //   this.playGame();
    // }
    setInterval(() => this.playGame(), speed);
    window.addEventListener('keydown', this.passPlayerKeyDown.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.passPlayerKeyDown);
  }

  setNewDirection(newDirection, that) {
    const { isPaused } = that.props;
    if (!isPaused) {
      that.setState({
        direction: newDirection
      });
    }
  }

  passPlayerKeyDown(event) {
    const { direction } = this.state;
    playerKeyDown(event, this.setNewDirection, direction, this);
  }

  playGame() {
    const { isPaused } = this.props;
    const { fruit, snakeParts, reward } = this.state;
    let newFruit = [...fruit], newReward = [...reward];

    if (!isPaused) {
      if (checkFruitCollision(fruit, snakeParts[0])) {
        newFruit = getRandomPositions();
        console.info('Got a fruit at', fruit);
        
      }
      if (checkRewardCollision(reward, snakeParts[0])) {
        newReward = getRandomPositions();
        console.info('Got a reward at', fruit);
      }
      this.setState((state) => {
        return {
          snakeParts: moveSnake(state.snakeParts, state.direction),
          fruit: newFruit, // is this a good practise to update the state ?
          reward: newReward // uuh...does'nt react check if the values are chnaged ?
        }
      });
    }
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

PlayArea.propTypes = {
  isPaused: PropTypes.bool.isRequired
}

export default PlayArea;
