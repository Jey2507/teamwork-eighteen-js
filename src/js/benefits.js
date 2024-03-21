document
  .querySelector('.text-btn-benefits')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  });
