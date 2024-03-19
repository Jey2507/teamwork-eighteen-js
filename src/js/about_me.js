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
const prevButtonSk = document.querySelector('.btn-prev');
const nextButtonSk = document.querySelector('.btn-next');
prevButtonSk.style.display = 'none';

const swiperSkills = new Swiper('.swiper-project', {
  preventInteractionOnTransition: true,
  // slidesPerView: 2,
  on: {
    slideChange: function () {
      nextButtonSk.style.display = swiperSkills.isEnd ? 'none' : 'block';
      prevButtonSk.style.display = swiperSkills.isBeginning ? 'none' : 'block';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

prevButtonSk.addEventListener('click', function () {
  swiperSkills.slidePrev();
});

nextButtonSk.addEventListener('click', function () {
  swiperSkills.slideNext();
});

// swiperSkills.on('slideChange', function () {
//   nextButtonSk.disabled = swiperSkills.isEnd ? true : false;
//   prevButtonSk.disabled = swiperSkills.isBeginning ? true : false;
// });
