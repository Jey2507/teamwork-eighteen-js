const Instargam = document.getElementById('IG');
const Facebook = document.getElementById('FB');
const YouTube = document.getElementById('YT');
const GitHub= document.getElementById('GH');


Instargam.addEventListener('click', () => {
  const url = 'https://www.instagram.com/goitclub/';
  const pageFeatures = 'width=800,height=600,scrollbars=yes,resizable=yes';
  page.open(url, '_blank', pageFeatures);
});

Facebook.addEventListener('click', () => {
  const url = 'https://www.facebook.com/goITclub/';
  const pageFeatures = 'width=800,height=600,scrollbars=yes,resizable=yes';
  page.open(url, '_blank', pageFeatures);
});

YouTube.addEventListener('click', () => {
  const url = 'https://www.youtube.com/c/GoIT';
  const pageFeatures = 'width=800,height=600,scrollbars=yes,resizable=yes';
  page.open(url, '_blank', pageFeatures);
});

GitHub.addEventListener('click', () => {
  const url = 'https://github.com/Jey2507/teamwork-eighteen-js';
  const pageFeatures = 'width=800,height=600,scrollbars=yes,resizable=yes';
  page.open(url, '_blank', pageFeatures);
});