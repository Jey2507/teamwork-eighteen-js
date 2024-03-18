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
        document.getElementById('modal').style.display = 'flex';
        form.reset();
      } else {
        alert('Помилка при відправці заявки. Будь ласка, спробуйте ще раз.');
      }
    })
    .catch(error => {
      alert('Помилка при відправці заявки. Будь ласка, спробуйте ще раз.');
    });
});
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#backdrop');
const backdrop = document.querySelector('#backdrop');
const window = document.querySelector('backdrop');
function closeModal() {
  modal.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
