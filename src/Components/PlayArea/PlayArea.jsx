import React from 'react';
import PropTypes from 'prop-types';

import Snake from "./Snake/Snake";
import Fruit from "./Fruit/Fruit";
import Reward from "./Reward/Reward";
import styles from "./PlayArea.module.css";

import { moveSnake } from "../../utils/snake.utils";
import { playerKeyDown } from "../../utils/playarea.utils";
import { getRandomPositions } from "../../utils/misc.utils";

//all positions are in [x, y], where x and y are the coordinates on a 
const initialState = {
  speed: 500,
  direction: 'UP',
  snakeParts: [[0, 8], [0, 6], [0, 4], [0, 2], [0, 0]],
  fruit: [80, 80],
  reward: [20, 10],
  showReward: true,
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
    if (!isPaused) {
      this.setState((state) => {
        return {
          snakeParts: moveSnake(state.snakeParts, state.direction)
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
