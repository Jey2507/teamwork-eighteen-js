import Accordion from 'accordion-js';
const accordion = new Accordion('.accordion-container', {
  showMultiple: true,
});

const accordionItems = document.querySelectorAll('.faq-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.ac-header');
  const button = item.querySelector('.ac-trigger');
  const content = item.querySelector('.ac-text');

  header.addEventListener('click', () => {
    if (content.classList.contains('active')) {
      accordion.close(content);
    } else {
      button.click();
    }
  });
});
