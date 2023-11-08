document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault(); // 폼 기본 동작 방지

  const data = {
    id: document.getElementById('idInput').value,
    pw: document.getElementById('pwInput').value
  };

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      // 서버에서 받은 응답을 처리
      if (data.userType === 'admin') {
        window.location.href = '/admin';
      } else if (data.userType === 'user') {
        window.location.href = '/user';
      } else {
        alert('계정이 존재하지 않아 자동 회원가입 처리했습니다.');
        window.location.href = '/user';
      }
    })
    .catch(error => console.error('에러 발생:', error));
});



/*
A를 바탕
1. 사용자에게 id, pw 입력받기
2. 입력받은 id pw를 db.json과 비교
존재하는 id pw 면 로그인 페이지로 이동 (id가 admin 이면 별도의 관리자 페이지로 이동)
존재하지 않는 id pw면 입력받은 내용을 db.json에 추가 후 로그인 페이지로 이동
*/