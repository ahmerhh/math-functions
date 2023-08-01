/**
 * Get a random value within a specified range.
 * 
 * @param {number} minValue - Minimum value of the range.
 * @param {number} maxValue - Maximum value of the range.
 * @param {boolean} [shouldRound = false] - Whether to round the result to an integer.
 * @returns {number} - Random value within the specified range.
 */
export function getRandomValueInRange(minValue, maxValue, shouldRound = false) {
  const value = Math.random() * (maxValue - minValue) + minValue;
  return shouldRound ? Math.round(value) : value;
}

/**
 * Alias for getRandomValueInRange.
 */
export const random = getRandomValueInRange;

/**
 * Map a value from one range to another.
 * 
 * @param {number} value - Value to map.
 * @param {number} inputMin - Minimum of the input range.
 * @param {number} inputMax - Maximum of the input range.
 * @param {number} outputMin - Minimum of the output range.
 * @param {number} outputMax - Maximum of the output range.
 * @returns {number} - Mapped value.
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
 * Alias for mapValueToRange.
 */
export const map = mapValueToRange;

/**
 * Check if a number is a power of two.
 * 
 * @param {number} value - Number to check.
 * @returns {boolean} - Whether the number is a power of two.
 */
export function isPowerOfTwo(value) {
  return value !== 0 && (value & (value - 1)) === 0;
}

/**
 * Alias for isPowerOfTwo.
 */
export const isPOT = isPowerOfTwo;

/**
 * Round a value to the nearest multiple.
 * 
 * @param {number} value - Value to round.
 * @param {number} multiple - Multiple to round to.
 * @returns {number} - Rounded value.
 */
export function roundToMultiple(value, multiple) {
  return Math.round(value / multiple) * multiple;
}

/**
 * Alias for roundToMultiple.
 */
export const roundToMul = roundToMultiple;
