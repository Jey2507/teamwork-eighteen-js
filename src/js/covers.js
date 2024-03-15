
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