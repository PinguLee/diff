import fs from 'fs';

// JSON 데이터를 파일에 쓰는 함수
export function writeJSONFile(filePath, data) {
  return new Promise((resolve, reject) => {
    // JSON 형식의 문자열로 변환
    const jsonData = JSON.stringify(data, null, 2); // null, 2 는 들여쓰기를 위한 옵션

    // 파일에 쓰기
    fs.writeFile(filePath, jsonData, 'utf8', (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve('Data has been written to the file');
    });
  });
}
