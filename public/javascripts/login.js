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
        alert('일치하는 사용자가 없습니다.');
      }
    })
    .catch(error => console.error('에러 발생:', error));
});
