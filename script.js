/*=============== SHOW MENU ===============*/
const navList = document.getElementById('nav-list');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

console.log(navList)

// MENU SHOW
if(navToggle){
    navToggle.addEventListener('click', () => {
        navList.classList.add('show-menu')
    })
}
// MENU HIDE
if(navClose){
    navClose.addEventListener('click', () => {
        navList.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navList = document.getElementById('nav-list');
    navList.classList.remove('show-menu')
}

navLink.forEach((link) =>  link.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);



