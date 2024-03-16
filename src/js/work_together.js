document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email');

    fetch('https://example.com/api/requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('modal').style.display = 'block';
            email.value = '';
        } else {
            alert('Помилка при відправці заявки. Будь ласка, спробуйте ще раз.');
        }
    })
    .catch(error => {
        alert('Помилка при відправці заявки. Будь ласка, спробуйте ще раз.');
    });
});