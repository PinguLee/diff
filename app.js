import { readJSONFile } from "./module/read-json.js";
import { writeJSONFile } from "./module/write-json.js";
import { compareData } from "./module/compare-data.js";

import diffLogic from "./model/diff-logic.js";

const inputJSONPath = "./config/fromDB-data.json";
const outputJSONPath = "./config/differences.json";

const resultObject = diffLogic(inputJSONPath, outputJSONPath);
console.log(resultObject);