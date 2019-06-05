/* eslint-disable import/prefer-default-export */
import { BOARD_USABLE_SIZE } from "../Constants/layout-size";

export const getRandomPositions = () => {
  return [getRandomIntInclusive(0, BOARD_USABLE_SIZE), getRandomIntInclusive(0, BOARD_USABLE_SIZE)]
}

/*
  Mozilla Developer Docs code used -->
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
*/
function getRandomIntInclusive(min = 0, max = 80) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}