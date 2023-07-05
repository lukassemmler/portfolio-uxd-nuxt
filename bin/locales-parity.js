/* 
 * Example output:
 * ```
 * # Locale lengths: 
 * {"de.json":692,"en.json":691}
 * 
 * # Missing string ids: 
 * String id 'alt_data-visualization_making-ooof-1' is defined in '[de.json]', but missing in '[en.json]'.
 * String id 'alt_data-visualization_mak-doof' is defined in '[de.json]', but missing in '[en.json]'.
 * String id 'alt_data-visualization_making-of-1' is defined in '[en.json]', but missing in '[de.json]'.
 * ```
 */

const fs = require('fs');
const path = require('path');
const {Color} = require(path.resolve(__filename + './../../assets/lib/color'));

function readJsonFilesInDir(dir, onJson = () => { }) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fileName = path.extname(file).toLowerCase();
    if (fileName !== '.json') continue;
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);
    onJson({ json, file, path: filePath });
  }
}

const directoryPathRaw = '../locales';
const directoryPath = path.resolve(__filename, "../", directoryPathRaw);

// Step 1: Collect occurences
const occurrences = {};
const locales = [];
const localeLengths = {};
readJsonFilesInDir(directoryPath, ({ json: locale, file }) => {
  locales.push(file);
  const keys = Object.keys(locale);
  localeLengths[file] = keys.length;
  //console.log(file, propLength, "keys");
  for (const key of keys) {
    const occurrence = occurrences[key];
    if (!occurrence) {
      const occurrencePerId = [file];
      occurrences[key] = occurrencePerId;
      continue;
    }
    if (occurrence.includes(file)) {
      console.warn(`Duplicate string id '${key}' in locale '${file}'. Skipping. `);
      continue;
    }
    occurrence.push(file);
    occurrence.sort();
  }
});

// Step 2: Check parity
const warnings = [];
for (const id in occurrences) {
  const missingLocales = [];
  const usages = occurrences[id];
  for (const locale of locales) {
    if (usages.includes(locale)) continue;
    missingLocales.push(locale);
  }
  if (missingLocales.length === 0) continue;
  warnings.push(
    `String id ${Color.Yellow}'${id}'${Color.Reset} ` 
    + `is defined in ${Color.Green}'[${usages.join(', ')}]'${Color.Reset}, `
    + `but missing in ${Color.Red}'[${missingLocales.join(', ')}]'${Color.Reset}. `);
}

// Step 3: Log results
console.log("# Locale lengths: \n" + Color.Blue + JSON.stringify(localeLengths) + Color.Reset + "\n");
console.log("# Missing string ids: ");
console.log(warnings.join("\n"));
