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
  // slidesPerView: 6,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

function setSlidesPerView() {
  const screenWidth = window.innerWidth;
  let slidesPerView;

  if (screenWidth >= 1440) {
    slidesPerView = 6;
  } else if (screenWidth >= 768) {
    slidesPerView = 3;
  } else {
    slidesPerView = 2;
  }

  swiperSkills.params.slidesPerView = slidesPerView;
  swiperSkills.update();
}

setSlidesPerView();

window.addEventListener('resize', setSlidesPerView);

nextButtonSk.addEventListener('click', function () {
  swiperSkills.slideNext();
});

const slides = document.querySelectorAll('.skill-item');

slides.forEach(slide => {
  slide.addEventListener('click', function () {
    const currentActiveSlide = document.querySelector('.active-slide');

    currentActiveSlide.classList.remove('active-slide');
    slide.classList.add('active-slide');
  });
});

nextButtonSk.addEventListener('click', function () {
  const activeSlide = document.querySelector('.active-slide');
  const activeIndex = Array.from(slides).indexOf(activeSlide);
  activeSlide.classList.remove('active-slide');

  let nextIndex = (activeIndex + 1) % slides.length;
  slides[nextIndex].classList.add('active-slide');
});
