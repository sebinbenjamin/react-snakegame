/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { PART_SIZE, BOARD_USABLE_SIZE } from "../Constants/layout-size";

const getNextHeadPos = (currHead, direction) => {
  const snakeHead = [...currHead];
  const moveLength = PART_SIZE.body / 2; //half of the part size is used for left+right margin

  //if snake moves out of BOARD_USABLE_SIZE, then beam it back, else move the head in the current direction.
  switch (direction) {
    case 'UP':
      if ((snakeHead[1] + moveLength) > BOARD_USABLE_SIZE) {
        snakeHead[1] = -moveLength;
      }
      return [snakeHead[0], snakeHead[1] + moveLength];
    case 'DOWN':
      if ((snakeHead[1] - moveLength) < 0) {
        snakeHead[1] = BOARD_USABLE_SIZE + moveLength;
      }
      return [snakeHead[0], snakeHead[1] - moveLength];
    case 'LEFT':
      if ((snakeHead[0] - moveLength) < 0) {
        snakeHead[0] = BOARD_USABLE_SIZE + moveLength;
      }
      return [snakeHead[0] - moveLength, snakeHead[1]];
    case 'RIGHT':
      if ((snakeHead[0] + moveLength) > BOARD_USABLE_SIZE) {
        snakeHead[0] = -moveLength;
      }
      return [snakeHead[0] + moveLength, snakeHead[1]];
    default:
      console.error('Invalid Direction !', direction);
  }
}

export const moveSnake = ([...snakeParts], direction) => {
  const [oldSnakeHead, ...oldSnakeBody] = Array.from(snakeParts);
  const newSnakeBody = oldSnakeBody.slice(0, -1);//remove last element in the snake's body
  const [newHeadX, newHeadY] = getNextHeadPos(oldSnakeHead, direction);
  // console.info('New position:', { newHeadX, newHeadY });
  return [[newHeadX, newHeadY], oldSnakeHead, ...newSnakeBody];
}