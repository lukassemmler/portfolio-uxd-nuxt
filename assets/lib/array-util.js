export function columnizeArray(array, columnCount, index) {
  const length = array.length;
  // This could be a problem with the Math.ceil (rounding might add up to more than the array length), but it will do for now.
  const countPerColumn = Math.ceil(length / columnCount);
  const start = countPerColumn * index;
  const end = countPerColumn * (index + 1);
  return array.slice(start, end);
}
