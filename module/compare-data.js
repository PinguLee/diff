/**
 * 비교 결과 반환
 * @param {*} inputJSONData - 첫 번째 JSON 데이터.
 * @param {*} outputJSONData - 두 번째 JSON 데이터.
 * @returns {boolean} - 데이터가 동일한지 여부를 반환.
 */
export function compareData(inputJSONData, outputJSONData) {
  const inputStringified = JSON.stringify(inputJSONData);
  const outputStringified = JSON.stringify(outputJSONData);
  return inputStringified === outputStringified;
}
