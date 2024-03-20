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
      comment: comments,
    }),
  })
    .then(response => response.json())
    .then(data => {
      showModal(data.title, data.message);
      form.reset();
    })
    .catch(error => {
      console.log('error = ' + error);
      alert('Помилка при відправці заявки. Будь ласка, спробуйте ще раз.');
    });
});
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#backdrop');
const backdrop = document.querySelector('#backdrop');
const modalTitle = document.querySelector('#modaltitle');
const modalMessage = document.querySelector('#lowercase');

function closeModal() {
  modal.classList.remove('visible')
  setTimeout(()=> {
    modal.classList.add('hidden');
  }, 250)
  document.body.style.overflow = '';
}

function showModal(title, message) {
  modal.classList.remove('hidden');
  setTimeout(()=> {
    modal.classList.add('visible');
  }, 10)
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  document.body.style.overflow = 'hidden';
}

closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
