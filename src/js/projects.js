import Swiper from 'swiper';
import 'swiper/css';

// const btnPrev = document.querySelector('.swiper-button-prev');
// const btnNext = document.querySelector('.swiper-button-next');

// const swiper = new Swiper('.swiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'progressbar',
//   },
//   navigation: {
//     nextEl: btnNext,
//     prevEl: btnPrev,
//   },
// });

// btnPrev.addEventListener('click', () => {
//   swiper.allowSlidePrev();
// });

// btnNext.addEventListener('click', () => {
//   swiper.allowSlideNext();
// });

// const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100,
// });

// const swiper = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();
const swiper = new Swiper('.swiper', {
  // Опції Swiper тут
  // Наприклад:
  //   slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Обробники подій для кнопок next і prev
var prevButton = document.querySelector('.swiper-button-prev');
var nextButton = document.querySelector('.swiper-button-next');

prevButton.addEventListener('click', function () {
  swiper.slidePrev();
});

nextButton.addEventListener('click', function () {
  swiper.slideNext();
});

swiper.on('slideChange', function () {
  nextButton.disabled = swiper.isEnd ? true : false;
  prevButton.disabled = swiper.isBeginning ? true : false;
});
