const home = document.getElementById('homeMenu');
const services = document.getElementById('servicesMenu');
const skills = document.getElementById('skillsMenu');
const portfolio = document.getElementById('portfolioMenu');
const contact = document.getElementById('contactMenu');


const menu = [home, services, skills, portfolio, contact]

function changeActiveMenu(menuName) {
    menu.forEach((menu) => {menu.classList.remove('active')});
    document.getElementById(menuName).classList.add('active');
}