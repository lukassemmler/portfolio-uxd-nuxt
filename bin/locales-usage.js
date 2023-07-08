const fs = require('fs');
const path = require('path');
const {Color} = require(path.resolve(__filename + './../../assets/lib/color'));

function readJsonFilesInDir(dir, onJson = () => { }) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const extension = path.extname(file).toLowerCase();
    if (extension !== '.json') continue;
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);
    onJson({ json, file, path: filePath });
  }
}

function readFilesInDirRecursively(dir, onFile = () => { }, whitelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const extension = path.extname(file).toLowerCase();
    if (whitelist.length > 0 && !whitelist.includes(extension)) continue;
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      readFilesInDirRecursively(filePath, onFile, whitelist);
      continue;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    onFile({ content, file, path: filePath, extension });
  }
}

const getAbsolutePath = (...relPath) => path.resolve(__filename, "../", ...relPath);

// Step 1: Load locale definitions
const localeDirRaw = '../locales';
const localeDir = getAbsolutePath(localeDirRaw);
const definitons = new Set();
readJsonFilesInDir(localeDir, ({ json: locale }) => {
  const keys = Object.keys(locale);
  keys.forEach(key => definitons.add(key));
});
console.log(definitons.size)

// Step 2: Get occurrences in files
const targetDirsRaw = [
  '../pages',
  '../components',
  '../layouts',
  '../assets/data',
];
const targetDirs = targetDirsRaw.map(dir => getAbsolutePath(dir));
//console.log(targetDirs);
const i18nProps = [
  "stringId",
  "labelId",
  "titleId",
  "titleRawId",
  "subtitleId",
  "descriptionId",
  "linkId",
  ];
  const rawJsonRegex = `"(?:${i18nProps.join('|')})":."([^"]+)"`;
  const jsonRegex = new RegExp(rawJsonRegex, "g");
  const textRegex = /\$t\(['"]([^'"]+?)['"]\)/g;
const occurrences = {};
for (const dir of targetDirs)
readFilesInDirRecursively(dir, ({content, file, path, extension}) => {
  const regex = extension === ".json" ? jsonRegex : textRegex;
  const matches = content.matchAll(regex);
  const ids = Array.from(matches).map(match => match[1]);
  const uniqueIds = new Set(ids);
  occurrences[path] = Array.from(uniqueIds.values()).sort();
});
console.log(occurrences);

// Step 3: Check if all definitions are used
const usedIds = new Set();
const undefinedIds = new Set();
for (const file in occurrences) {
  const occurrencesPerFile = occurrences[file];
  for (const id of occurrencesPerFile) {
    if (definitons.has(id)) {
      usedIds.add(id);
      continue;
    }
    undefinedIds.add(id);
  }
}
const unusedIds = [];
const definitionsAsArray = Array.from(definitons.values());
for (const definition of definitionsAsArray) {
  if (usedIds.has(definition)) continue;
  unusedIds.push(definition);
}
const stats = {
  //usedIds: Array.from(usedIds.values()).sort(),
  unusedIds: unusedIds,
  undefinedIds: Array.from(undefinedIds.values()).sort(),
};
console.log(stats);
