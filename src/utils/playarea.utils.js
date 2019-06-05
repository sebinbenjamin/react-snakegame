/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { primaryKeys, altKeys } from "../Constants/keys";
import { SAFE_DISTANCE } from "../Constants/layout-size";

export const playerKeyDown = (event, setNewDirMethod, oldDirection, that) => {
  let newDirection = oldDirection;
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
    case primaryKeys.PAUSE || altKeys.PAUSE:
      event.preventDefault();
      that.props.changeGamePlay();
      break;
    default:
      // eslint-disable-next-line no-console
      console.warn('Pressed', event.key);
      break;
  }

  if (validDirectionChange(oldDirection, newDirection)) {
    console.info('Direction Update', { oldDirection, newDirection });
    setNewDirMethod(newDirection, that);
  }
}

export const validDirectionChange = (oldDirection, newDirection) => {
  if (newDirection === oldDirection)
    return false;
  else if ((oldDirection === 'UP' && newDirection === 'DOWN') || (oldDirection === 'DOWN' && newDirection === 'UP'))
    return false;
  else if ((oldDirection === 'LEFT' && newDirection === 'RIGHT') || (oldDirection === 'RIGHT' && newDirection === 'LEFT'))
    return false;
  else
    return true;
}

export const checkObjectCollision = (object, snakeHead) => {
  if ((Math.abs(object[0] - snakeHead[0]) < SAFE_DISTANCE) && (Math.abs(object[1] - snakeHead[1]) < SAFE_DISTANCE)){
    console.info(object, 'collided with snake head at',snakeHead);
    return true;
  }
  return false;
}

