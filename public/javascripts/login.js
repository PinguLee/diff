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
    .catch(error => console.error('에러 발생:', error));
});