const toggleElement = document.getElementById('BurgerMenuId');
const navMenu = document.getElementById('navMenu');
const toggleCloseMenu = document.getElementById('MenuCloseId');



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
  
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  }

// Функція, яка прокручує до секції Work together куди треба додати айді
function scrollToWork() {
 const workSection = document.getElementById("workSection");
    workSection.scrollIntoView({ behavior: 'smooth' });
}

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const sectionId = this.getAttribute('href'); 
        const section = document.querySelector(sectionId); 

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); 
        }
    });
});
  
