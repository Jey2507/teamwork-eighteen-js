import Accordion from 'accordion-js';
import Swiper from 'swiper';
import 'swiper/css';

const accordion = new Accordion('.about-me-list', {
  showMultiple: true,
  openOnInit: [0],
});

const accordionItems = document.querySelectorAll('.ac-list-item');

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

//--------------SWIPER----------------------------------//

const nextButtonSk = document.querySelector('.swiper-skills-btn');

const swiperSkills = new Swiper('.swiper-about', {
  preventInteractionOnTransition: true,
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

nextButtonSk.addEventListener('click', function () {
  swiperSkills.slideNext();
});

const slides = document.querySelectorAll('.skill-item');

nextButtonSk.addEventListener('click', function () {
  const activeSlide = document.querySelector('.active-slide');
  const activeIndex = Array.from(slides).indexOf(activeSlide); // Отримуємо індекс активного слайда

  activeSlide.classList.remove('active-slide');

  let nextIndex = (activeIndex + 1) % slides.length; // Визначаємо індекс наступного слайда (з зацикленням)
  if (nextIndex === 0) {
    // Перевіряємо, чи індекс наступного слайда дорівнює 0
    slides[nextIndex].classList.add('active-slide'); // Робимо перший слайд активним
  } else {
    slides[nextIndex].classList.add('active-slide'); // Додаємо клас active-slide на наступний слайд
  }
});
