import { readJSONFile, writeJSONFile } from './fileOperations.js';

const checkLogin = async (id, pw) => {
  try {
    const userData = await readJSONFile('./data/db.json');
    const foundUser = userData.find(user => user.id === id && user.pw === pw);

    if (foundUser) {
      return foundUser.id === 'admin' ? 'admin' : 'user';
    } else {
      userData.push({ id, pw });
      await writeJSONFile('./data/db.json', userData);
      return 'newUser';
    }
  } catch (error) {
    throw new Error('Authentication process failed.');
  }
};

export default checkLogin;
