const navMenu = document.getElementById('navMenu');
const toggleElement = document.getElementById('BurgerMenuId');
const toggleCloseMenu = document.getElementById('MenuCloseId');
const workSection = document.getElementById("workSection");

toggleElement.addEventListener('click', toggleMenu);
toggleCloseMenu.addEventListener('click', closeMenu);
document.getElementById('menuTitle').addEventListener('click', toggleDropdown);
document.querySelector(".order-button").addEventListener('click', scrollToWork);
document.querySelector(".tablet-order-button").addEventListener('click', scrollToWork);

function toggleMenu() {
    navMenu.classList.toggle('active'); 
}

function closeMenu() {
    navMenu.classList.remove('active'); 
}
  
function toggleDropdown(event) {
    event.preventDefault();
    const dropdownContent = document.getElementById('dropdownContent');
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "flex";
    } else {
        dropdownContent.style.display = "none";
    }
}


function scrollToWork() {
    workSection.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
            navMenu.classList.remove('active');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

