import express from 'express';
import path from 'path';
import checkLogin from '../model/auth.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
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
    res.status(500).send({ error: 'Authentication process failed.' });
  }
});

export default router;
