import express from 'express';
import path from 'path';
import checkLogin from '../model/auth.js';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
 
router.post('/login', async (req, res) => {
  const { id, pw } = req.body;

  try {
    const userType = await checkLogin(id, pw);

    if (userType === 'admin') {
      res.send({ userType: 'admin' });
    } else if (userType === 'user') {
      res.send({ userType: 'user' });
    } else {
      res.send({ userType: 'newUser' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

export default router;