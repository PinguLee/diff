import { readFile } from 'fs';

/**
 * JSON 파일을 비동기적으로 읽습니다
 * @param {string} filePath - JSON 파일 경로
 * @returns {Promise<Object>} - 파싱된 JSON 데이터로 resolve되는 Promise
 */
const readJSONFile = (filePath) => {
  return new Promise((resolve, reject) => {
    if (!filePath.endsWith('.json')) {
      reject(new Error(`${filePath} 파일은 JSON 파일이 아닙니다`));
    }

    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
};

export { readJSONFile };