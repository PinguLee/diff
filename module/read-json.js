import fs from "fs";

export function readJSONFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`파일을 읽을 수 없습니다: ${filePath}`);
  }
}