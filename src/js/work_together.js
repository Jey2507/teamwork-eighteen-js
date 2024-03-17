const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = form.elements.email.value;
  const comments = form.elements.comments.value;

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      comments: comments,
    }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById('modal').style.display = 'block';
        form.reset()
      } else {
        alert('Помилка при відправці заявки. Будь ласка, спробуйте ще раз.');
      }
    })
    .catch(error => {
      alert('Помилка при відправці заявки. Будь ласка, спробуйте ще раз.');
    });
});
