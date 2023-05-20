//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclik = () => {
    navbarNav.classList.toggle('active');
};
