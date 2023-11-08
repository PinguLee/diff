import diffLogic from "./model/diff-logic.js";

const inputJSONPath = './data/fromDB-data.json';
const outputJSONPath = './data/differences.json';

diffLogic(inputJSONPath , outputJSONPath);