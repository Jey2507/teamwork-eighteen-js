// JavaScript
const navMenu = document.getElementById('navMenu');
const toggleElement = document.getElementById('BurgerMenuId');
const toggleCloseMenu = document.getElementById('MenuCloseId');
const workSection = document.getElementById('projects');
const dropdownContent = document.getElementById('dropdownContent');

toggleElement.addEventListener('click', toggleMenu);
toggleCloseMenu.addEventListener('click', closeMenu);

document.querySelector('.order-button').addEventListener('click', scrollToWork);
document
  .querySelector('.tablet-order-button')
  .addEventListener('click', scrollToWork);

function toggleMenu() {
  navMenu.classList.toggle('active');
}

function closeMenu() {
  navMenu.classList.remove('active');
}


function scrollToWork() {
  workSection.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      navMenu.classList.remove('active');
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    closeMenu();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

toggleCloseMenu.addEventListener('click', closeMenu);


document.getElementById('menuTitle').addEventListener('click', function() {
  if (!linksAdded) {
    createLinks();
  }
});


document.getElementById('menuTitle').addEventListener('click', toggleLinksVisibility);

function toggleLinksVisibility() {
  const listItems = dropdownContent.querySelectorAll('.dropdown-item');
  listItems.forEach(item => {
    item.classList.toggle('hidden');
  });
}


const linksData = [
    { href: '#projects', text: 'Projects' },
    { href: '#benefits', text: 'Benefits' },
    { href: '#about', text: 'About me' },
    { href: '#faq', text: 'FAQ' }
];


let linksAdded = false;

function createLinks() {
  if (!linksAdded) {
    linksData.forEach((link, index) => {
     
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      a.classList.add('scroll');

    
      const li = document.createElement('li');
      li.classList.add('dropdown-item');
      li.appendChild(a);


      setTimeout(() => {
        dropdownContent.appendChild(li);
        li.classList.add('show');
      }, index * 100); 
    });


    linksAdded = true;
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scroll({
              top: offsetTop,
              behavior: 'smooth' 
          });
      }
  });
});


