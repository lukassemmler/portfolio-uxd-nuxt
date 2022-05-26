/**
 * Returns positive remainder of a modulo operation
 * Using this makes modulo behave more like in Python, where -1 % 4 returns 3.
 * @param {number} value 
 * @param {number} quotient 
 * @returns {number} Positive remainder
 */
export function positiveModulo(value, quotient) {
  // Based on https://thomaspoignant.medium.com/how-to-get-always-a-positive-modulo-remainder-9ac965361ff4
  return ((value % quotient) + quotient) % quotient;
}
