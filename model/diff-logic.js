import { readJSONFile } from './read-json.js';
import { writeJSONFile } from './write-json.js';
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
      return 'admin';
    } else if (isUser) {
      return 'user';
    } else {
      return;
    }
  } catch (error) {
    console.error('오류가 발생했습니다:', error);
  }
}
