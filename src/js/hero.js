const Instargam = document.getElementById('IG');
const Facebook = document.getElementById('FB');
const YouTube = document.getElementById('YT');
const GitHub= document.getElementById('GH');



Facebook.addEventListener('click', () => {
  window.location.href = 'https://www.facebook.com/goITclub/';
});

YouTube.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/c/GoIT';
});

GitHub.addEventListener('click', () => {
  window.location.href = 'https://github.com/Jey2507/teamwork-eighteen-js';
});

Instargam.addEventListener('click', () => {
  const url = 'https://www.instagram.com/goitclub/';
  const windowFeatures = 'width=800,height=600,scrollbars=yes,resizable=yes';
  window.open(url, '_blank', windowFeatures);
});