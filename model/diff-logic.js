import { readFileSync } from 'fs';
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

  const readUserData = (filePath) => {
    const data = readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  };

  const adminData = readUserData(adminDBPath);
  const userData = readUserData(userDBPath);
  
  const isAdmin = adminData.id === id && adminData.pw === pw;
  const isUser = userData.id.includes(id) && userData.pw[userData.id.indexOf(id)] === pw;

  if (isAdmin) {
    return 'admin'; // 관리자로 로그인
  } else if (isUser) {
    return 'user'; // 유저로 로그인
  } else {
    return 'unauthorized'; // 인증되지 않음
  }

  // const inputStringified = JSON.stringify(inputJSONData);
  // const outputStringified = JSON.stringify(outputJSONData);

  //return result;
}