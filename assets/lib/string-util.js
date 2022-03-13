export function replaceLinksWithLocalizedLinks(string, linkReplacer) {
  // Turns `[Some link](~/some/link)` into `[Some link](/en/some/link)` (output is based on locale settings) 
  const regex = /\[(.+?)\]\(\~(.+?)\)/g;
  const replacer = (match, p1, p2) => {
    return `[${p1}](${linkReplacer(p2)})`;
  }
  const replacedString = string.replace(regex, replacer);
  //console.log(replacedString);
  return replacedString;
};

export function replacePlaceholders(string, placeholders = {}) {
  const openingChar = "{";
  const closingChar = "}";
  const escapingChar = "\\";
  const placeholderPositions = getPlaceholderPositions(openingChar, closingChar, escapingChar, string);
  let currentString = string;
  for (const placeholderPosition of placeholderPositions) {
    const [start, end] = placeholderPosition;
    const placeholderName = currentString.substring(start + 1, end);
    if (!placeholders.hasOwnProperty(placeholderName))
      throw new Error(`No substitute for placeholder '${placeholderName}' is provided. `);
    const startString = currentString.substring(0, start);
    const endString = currentString.substring(end + 1);
    const substituteString = placeholders[placeholderName];
    currentString = startString + substituteString + endString;
  }
  return currentString;
}

function getPlaceholderPositions(openingChar, closingChar, escapingChar, string) {
  const placeholderPositions = [];
  let openingPosition = null;
  let closingPosition = null;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char !== openingChar && char !== closingChar)
      continue;
    const charIsEscaped = characterIsEscaped(escapingChar, string, i);
    if (charIsEscaped)
      continue;
    if (char === openingChar) {
      if (openingPosition !== null)
        throw new Error(`Placeholder opening position should be 'null', but is '${openingPosition}' instead. (Nesting of placeholders)' `);
      if (closingPosition !== null)
        throw new Error(`Placeholder closing position should be 'null', but is '${closingPosition}' instead. (Closing position did not get cleaned up)' `);
      openingPosition = i;
      continue;
    }
    if (char === closingChar) {
      if (openingPosition === null)
        throw new Error(`Placerholder opening position is 'null'. (Placeholder got closed before opening one)`);
      if (closingPosition !== null)
        throw new Error(`Placerholder closing position should be 'null', but is '${closingPosition}' instead. (Closing position did not get cleaned up)`);
      closingPosition = i;
      placeholderPositions.push([openingPosition, closingPosition]);
      openingPosition = null;
      closingPosition = null;
      continue;
    }
    throw new Error(`Unhandled character '${char}'. (Something went wrong in the loop algorithm)`);
  }
  return placeholderPositions;
}

function characterIsEscaped(escapingChar, string, index) {
  if (index - 1 < 0)
    return false;
  if (string[index - 1] === escapingChar && index - 1 === 0)
    return true;
  if (string[index - 1] === escapingChar && string[index - 2] !== escapingChar)
    return true;
  return false;
}
