import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import diffLogic from '../model/diff-logic.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.post('/login', (req, res) => {
  const { id, pw } = req.body;
  const adminDBPath = '../data/adminDB.json';
  const userDBPath = '../data/userDB.json';

  diffLogic(id, pw, adminDBPath, userDBPath);
});

export default router;