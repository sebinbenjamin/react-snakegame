/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import Snake from "./Snake/Snake";
import Fruit from "./Fruit/Fruit";
import Reward from "./Reward/Reward";
import styles from "./PlayArea.module.css";

import { moveSnake } from "../../utils/snake.utils";
import { playerKeyDown, checkObjectCollision } from "../../utils/playarea.utils";
import { getRandomPositions } from "../../utils/misc.utils";
import {
  FRUIT_SCORE, REWARD_SCORE_CHANGEBY, REWARD_SPEED_FACTOR, INITIAL_SNAKE_SPEED,
  MAX_SPEED, FRUIT_SPEED_CHANGE, REWARD_MIN_INTERVAL, REWARD_INTERVAL_FACTOR, GAMEOVER_RESET_INTERVAL
} from '../../Constants/misc';

//all positions are in [x, y]
const initialState = {
  speed: INITIAL_SNAKE_SPEED,
  direction: 'UP',
  snakeParts: [[0, 2], [0, 0]],
  fruit: [70, 80],
  reward: [80, 80],
  showReward: false,
}

class PlayArea extends React.Component {
  state = initialState;
  gameClock = null;
  rewardClock = null;
  componentDidMount() {
    const { speed } = this.state;
    this.setState({
      fruit: getRandomPositions(),
      reward: getRandomPositions()
    });
    // for (let i = 0; i <= 100; i++) {
    //   this.playGame();
    // }

    this.rewardClock = setInterval(() => this.showRewards(), REWARD_MIN_INTERVAL + speed * Math.log2(speed * REWARD_INTERVAL_FACTOR));
    this.gameClock = setInterval(() => this.playGame(), speed);
    window.addEventListener('keydown', this.passPlayerKeyDown.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.passPlayerKeyDown);
    clearInterval(this.gameClock);
    clearInterval(this.rewardClock);
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
    const { isPaused, updateScore, isGameOver, gameOver } = this.props;
    const { fruit, snakeParts, reward, showReward, speed } = this.state;
    let newFruit = [...fruit], newReward = [...reward], newShowReward = showReward, newSpeed = speed, hasEatenFruit = false;

    if (this.checkIsSelfCollided(snakeParts)) {
      console.info('Snake self-collided, GAME OVER');
      gameOver();
      setTimeout(() => this.setState(initialState), GAMEOVER_RESET_INTERVAL)
    }
    else if (!isPaused && !isGameOver) {
      if (checkObjectCollision(fruit, snakeParts[0])) {
        updateScore(FRUIT_SCORE);
        hasEatenFruit = true;
        newFruit = getRandomPositions();
        newSpeed = Math.max(MAX_SPEED, newSpeed - FRUIT_SPEED_CHANGE);
        this.updateGamePlaySpeed(newSpeed);
      }
      if (checkObjectCollision(reward, snakeParts[0]) && showReward) {
        updateScore(FRUIT_SCORE * REWARD_SCORE_CHANGEBY);
        newShowReward = !newShowReward;
        newReward = getRandomPositions();
        console.info('Got a reward at', reward);
        newSpeed = (newSpeed + FRUIT_SPEED_CHANGE) * REWARD_SPEED_FACTOR;
        this.updateGamePlaySpeed(newSpeed);
        this.updateRewardInterval(newSpeed);
      }
      this.setState((prevState) => {
        return {
          snakeParts: moveSnake(prevState.snakeParts, prevState.direction, hasEatenFruit),
          fruit: newFruit, // is this a good practise to update the state ?
          reward: newReward, // uuh...does'nt react check if the values are chnaged ?
          showReward: newShowReward,
          speed: newSpeed
        }
      });
    }
  }

  showRewards() {
    const { speed } = this.state;
    if (speed <= 125)
      this.setState({
        showReward: true
      })
  }

  updateGamePlaySpeed(newSpeed) {
    const { speed } = this.state;//is it possible to get it from state after the setstate
    console.info('Speed Update from', speed, 'to', newSpeed);
    clearInterval(this.gameClock);
    this.gameClock = setInterval(() => this.playGame(), newSpeed);
  }

  updateRewardInterval(speed) {
    console.log('Reward interval set to', REWARD_MIN_INTERVAL + speed * Math.log2(speed * REWARD_INTERVAL_FACTOR));
    clearInterval(this.rewardClock);
    this.rewardClock = setInterval(() => this.showRewards(), REWARD_MIN_INTERVAL + speed * Math.log2(speed * REWARD_INTERVAL_FACTOR));
  }

  checkIsSelfCollided(snakeParts) {
    const [head, ...bodyParts] = [...snakeParts];
    const withoutFirstBodyPart = bodyParts.slice(1);
    return withoutFirstBodyPart.some(part => checkObjectCollision(part, head, 2));
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
  isPaused: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  updateScore: PropTypes.func.isRequired,
  gameOver: PropTypes.func.isRequired
}

export default PlayArea;
