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
      if (data.userType === 'admin') {
        alert('관리자로 로그인되었습니다.');
        // 관리자 페이지로 리디렉션 또는 필요한 작업 수행
      } else if (data.userType === 'user') {
        alert('사용자로 로그인되었습니다.');
        // 사용자 페이지로 리디렉션 또는 필요한 작업 수행
      } else {
        alert('인증되지 않았습니다.');
        // 인증되지 않은 사용자에 대한 처리
      }
    })
    .catch(error => console.error('에러 발생:', error));
});