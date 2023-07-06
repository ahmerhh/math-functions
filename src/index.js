/**
 * @function getRandomValueInRange
 * @param {float} minValue
 * @param {float} maxValue
 * @param {boolean} [shouldRound = false]
 * @returns {float|int}
 */
export function getRandomValueInRange(minValue, maxValue, shouldRound = false) {
    let value = Math.random() * (maxValue - minValue) + minValue;
    return shouldRound ? Math.round(value) : value;
  }
  
  /**
   * @function random
   * @alias getRandomValueInRange
   */
  export const random = getRandomValueInRange;
  
  /**
   * @function mapValueToRange
   * @param {float} value
   * @param {float} inputMin
   * @param {float} inputMax
   * @param {float} outputMin
   * @param {float} outputMax
   * @returns {float}
   */
  export function mapValueToRange(value, inputMin, inputMax, outputMin, outputMax) {
    if (value < inputMin) {
      return outputMin;
    }
  
    if (value > inputMax) {
      return outputMax;
    }
  
    return (value - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin;
  }
  
  /**
   * @function map
   * @alias mapValueToRange
   */
  export const map = mapValueToRange;
  
  /**
   * @function isPowerOfTwo
   * @param {float} value
   * @returns {boolean}
   */
  export function isPowerOfTwo(value) {
    return value !== 0 && (value & (value - 1)) === 0;
  }
  
  /**
   * @function isPOT
   * @alias isPowerOfTwo
   */
  export const isPOT = isPowerOfTwo;
  
  /**
   * @function roundToMultiple
   * @param {float} value
   * @param {float} multiple
   * @returns {float}
   */
  export function roundToMultiple(value, multiple) {
    return Math.round(value / multiple) * multiple;
  }
  
  /**
   * @function roundToMul
   * @alias roundToMultiple
   */
  export const roundToMul = roundToMultiple;
  