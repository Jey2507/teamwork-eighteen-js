import Swiper from 'swiper';
import 'swiper/css';

let buttonLeft, buttonRight;

buttonLeft = document.querySelector('.swiper-button-prev-review');
buttonRight = document.querySelector('.swiper-button-next-review');

document.addEventListener('DOMContentLoaded', async () => {
	try {
		const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
		const data = await response.json();
		if (Array.isArray(data) && data.length > 0) {
			renderReviews(data);
		} else {
			renderNoReviewsMessage();
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	}

	const swiperReview = new Swiper('.swiper-container', {
		direction: 'horizontal',
		slidesPerView: 'auto',
		spaceBetween: 16,
		pagination: {
			el: '.swiper-pagination',
		},

		navigation: {
			nextEl: '.swiper-button-next-review',
			prevEl: '.swiper-button-prev-review',
		},

	});

	buttonLeft.disabled = true;
	swiperReview.on('slideChange', () => {

		if (swiperReview.isBeginning) {
			buttonLeft.disabled = true;
			buttonRight.disabled = false;
		} else if (swiperReview.isEnd) {
			buttonLeft.disabled = false;
			buttonRight.disabled = true;
		} else {
			buttonLeft.disabled = false;
			buttonRight.disabled = false;
		}
		swiperReview.update();
	});

	buttonLeft.addEventListener('click', function () {
		swiperReview.slidePrev();
	});

	buttonRight.addEventListener('click', function () {
		swiperReview.slideNext();
	});



});

function renderReviews(reviews) {
	const reviewContainer = document.querySelector('.reviews-list');
	if (!reviewContainer) {
		console.error('Review container not found.');
		return;
	}
	const markup = reviews.map(({ _id, author, avatar_url, review }) => {
		return `<li class="reviews-item swiper-slide">
      <div class="reviews-item-box">
        <img
          sizes="(min-width: 1440px) 72px, (min-width: 768px) 72px, (min-width: 375px) 72px"
          src="${avatar_url}"
          alt="${author}"
          class="reviews-item-img"
          width="48"
          height="48"
        />
        <h3 class="reviews-item-title">${author}</h3>
        <p class="reviews-item-desc">${review}</p>
      </div>
    </li>`;
	}).join("");
	reviewContainer.innerHTML = markup;



}

function renderNoReviewsMessage() {
	const reviewContainer = document.querySelector('.reviews-list');
	if (!reviewContainer) {
		console.error('Review container not found.');
		return;
	}
	reviewContainer.innerHTML = "<p>No reviews found</p>";
}

