/* eslint-disable import/prefer-default-export */
import { primaryKeys, altKeys } from "../Constants/keys";

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
      break;
    default:
      // eslint-disable-next-line no-console
      console.warn('Pressed', event.key);
      break;
  }

  if (validDirectionChange(oldDirection, newDirection)) {
    console.log('called setNewDirection:', newDirection);
    setNewDirMethod(newDirection, that);
  }
}

export const validDirectionChange = (oldDirection, newDirection) => {
  console.log('oldDirection', oldDirection)
  console.log('newDirection', newDirection)
  console.log(newDirection === oldDirection)
  if (newDirection === oldDirection)
    return false;
  else if ((oldDirection === 'UP' && newDirection === 'DOWN') || (oldDirection === 'DOWN' && newDirection === 'UP'))
    return false;
  else if ((oldDirection === 'LEFT' && newDirection === 'RIGHT') || (oldDirection === 'RIGHT' && newDirection === 'LEFT'))
    return false;
  else
    return true;
}