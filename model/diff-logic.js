import { writeJSONFile } from "./write-json.js";
/**
 * 
 * @param {JSON, Path} inputJSONdata 
 * @param {JSON, Path} outputJSONdata 
 * @returns Object
 */

export default function(id, pw, userDBPath, adminDBPath) {
  if (!userDBPath.endsWith('.json') || !adminDBPath.endsWith('.json')) {
    throw new Error(`매개변수 ${userDBPath}, ${adminDBPath}는 json 파일이 아닙니다.`);
  }
  let result = {};
  

  // const inputStringified = JSON.stringify(inputJSONData);
  // const outputStringified = JSON.stringify(outputJSONData);

  return result;
}