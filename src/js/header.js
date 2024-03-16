const toggleElement = document.getElementById('BurgerMenuId');
const navMenu = document.getElementById('navMenu');
const toggleCloseMenu = document.getElementById('MenuCloseId');



toggleElement.addEventListener('click', toggleMenu);
toggleCloseMenu.addEventListener('click', closeMenu);
document.getElementById('menuTitle').addEventListener('click', toggleDropdown);


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



// Функція, яка прокручує до секції Work together
function scrollToWork() {
 const workSection = document.getElementById("workSection");
    workSection.scrollIntoView({ behavior: 'smooth' });
}
