/* eslint-disable import/prefer-default-export */
import { primaryKeys, altKeys } from "../Constants/keys";

export const playerKeyDown = (event, that) => {
  const oldDirection = that.state.direction;
  let newDirection = that.state.direction;
  switch (event.keyCode) {
    case primaryKeys.UP || altKeys.UP:
      newDirection = 'UP';
      event.preventDefault();
      break;
    case primaryKeys.DOWN || altKeys.DOWN:
      newDirection = 'DOWN';
      event.preventDefault();
      break;
    case primaryKeys.LEFT || altKeys.LEFT:
      newDirection = 'LEFT';
      event.preventDefault();
      break;
    case primaryKeys.RIGHT || altKeys.RIGHT:
      newDirection = 'RIGHT';
      event.preventDefault();
      break;
  }

  if (validDirectionChange(oldDirection, newDirection))
    that.setState({
      direction: newDirection
    });
}

export const validDirectionChange = (oldDirection, newDirection) => {
  if (newDirection == oldDirection)
    return false;
  else if (oldDirection == 'UP' && newDirection == 'DOWN' || oldDirection == 'DOWN' && newDirection == 'UP')
    return false;
  else if (oldDirection == 'LEFT' && newDirection == 'RIGHT' || oldDirection == 'RIGHT' && newDirection == 'LEFT')
    return false;

  return true;
}