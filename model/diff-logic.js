import { readJSONFile } from './read-json.js';
/**
 * 
 * @param {JSON, Path} inputJSONdata 
 * @param {JSON, Path} outputJSONdata 
 * @returns Object
 */
export default async function(id, pw, userDBPath, adminDBPath) {
  try {
    const adminData = await readJSONFile(adminDBPath);
    const userData = await readJSONFile(userDBPath);

    const isAdmin = adminData.id === id && adminData.pw === pw;
    const userIndex = userData.id.indexOf(id);
    const isUser = userIndex !== -1 && userData.pw[userIndex] === pw;

    if (isAdmin) {
      console.log('어드민 계정으로 환영합니다.');
    } else if (isUser) {
      console.log('등록된 사용자로 환영합니다.');
    } else {
      console.log('인식되지 않습니다. 게스트로 로그인합니다.'); // 인증되지 않음
    }

    // 추가 작업을 수행하거나 필요한 값 반환 가능합니다.
    // 예를 들어:
    // const inputStringified = JSON.stringify(inputJSONData);
    // const outputStringified = JSON.stringify(outputJSONData);
    // return result;

  } catch (error) {
    console.error('오류가 발생했습니다:', error);
    // 오류를 처리하거나 필요한 경우 오류 객체를 반환할 수 있습니다.
  }
}
