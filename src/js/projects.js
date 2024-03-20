import Swiper from 'swiper';
import 'swiper/css';

const prevButton = document.querySelector('.pr-btn-prev');
const nextButton = document.querySelector('.pr-btn-next');

const swiperProjects = new Swiper('.swiper-projects', {
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

prevButton.disabled = true;

prevButton.addEventListener('click', function () {
  swiperProjects.slidePrev();
});

nextButton.addEventListener('click', function () {
  swiperProjects.slideNext();
});

swiperProjects.on('slideChange', function () {
  nextButton.disabled = swiperProjects.isEnd ? true : false;
  prevButton.disabled = swiperProjects.isBeginning ? true : false;
});
