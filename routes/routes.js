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
  const userDBPath = path.join(__dirname, '..', 'data', 'userDB.json');
  const adminDBPath = path.join(__dirname, '..', 'data', 'adminDB.json');

  diffLogic(id, pw, userDBPath, adminDBPath)
    .then((userType) => {
      if (userType === 'admin') {
        res.send({ userType: 'admin' }); // 클라이언트에게 관리자임을 알림
      } else if (userType === 'user') {
        res.send({ userType: 'user' }); // 클라이언트에게 유저임을 알림
      } else {
        res.send({ userType: 'not_found' }); // 클라이언트에게 ID가 없음을 알림
      }
    })
    .catch((error) => {
      res.status(500).send({ error: 'Internal Server Error' });
    });
});


export default router;