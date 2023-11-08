import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'pass') {
    res.send('로그인 성공!');
  } else {
    res.send('아이디 또는 비밀번호가 잘못되었습니다.');
  }
});

export default router;
