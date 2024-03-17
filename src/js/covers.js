import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

let buttonLeft, buttonRight;

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

	const swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		slidesPerView: 'auto',
		spaceBetween: 12,
		pagination: {
			el: '.swiper-pagination',
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});


	swiper.on('slideChange', () => {
		buttonLeft = document.querySelector('.swiper-button-prev');
		buttonRight = document.querySelector('.swiper-button-next');
		if (swiper.isBeginning) {
			buttonLeft.disabled = true;
			buttonRight.disabled = false;
		} else if (swiper.isEnd) {
			buttonLeft.disabled = false;
			buttonRight.disabled = true;
		} else {
			buttonLeft.disabled = false;
			buttonRight.disabled = false;
		}
		swiper.update();
	});

	buttonLeft = document.querySelector('.swiper-button-prev');
	buttonLeft.addEventListener('click', function () {
		swiper.slidePrev();
	});

	buttonRight = document.querySelector('.swiper-button-next');
	buttonRight.addEventListener('click', function () {
		swiper.slideNext();
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





























/*

document.addEventListener('DOMContentLoaded', async () => {
	try {
		const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
		const data = await response.json();
		if (Array.isArray(data) && data.length > 0) {
			renderReviews(data);
		} else {
			console.log('No reviews found.');
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	}
});



function renderReviews(reviews) {
	const reviewContainer = document.querySelector('.reviews-list');
	const markup = reviews.map(({ _id, author, avatar_url, review }) => {
		return `<li class="reviews-item">
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
					<p class="reviews-item-desc">
						${review}
					</p>
				</div>
			</li>`;
	}).join("");
	reviewContainer.innerHTML = markup;
}
*/