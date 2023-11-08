import express from 'express';
import path from 'path';
import diffLogic from '../model/diff-logic.js';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.post('/login', (req, res) => {
  const { id, pw } = req.body;
  const adminDBPath = path.join(__dirname, '..', 'data', 'adminDB.json');
  const userDBPath = path.join(__dirname, '..', 'data', 'userDB.json');

  const userType = diffLogic(id, pw, userDBPath, adminDBPath);
  res.send(userType);
});

export default router;