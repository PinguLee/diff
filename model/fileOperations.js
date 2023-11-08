import { readFile, writeFile } from 'fs/promises';

const readJSONFile = async (filePath) => {
  try {
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error('Error reading JSON file.');
  }
};

const writeJSONFile = async (filePath, data) => {
  try {
    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    throw new Error('Error writing to JSON file.');
  }
};

export { readJSONFile, writeJSONFile };
