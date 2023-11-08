import fs from "fs";

export function writeJSONFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error(`결과를 파일에 쓸 수 없습니다: ${filePath}`);
  }
}