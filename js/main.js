window.addEventListener('scroll', function() {
    let header = document.querySelector('.sticky_header');
    header.classList.toggle('sticky', window.scrollY > 10);
  });


var menuBtn = document.querySelector('.menu-btn');
var hamburger = document.querySelector('.menu-btn__hamburger');

var nav = document.querySelector('.nav');
var menuNav = document.querySelector('.nav-menu');
var navItems = document.querySelectorAll('.nav-menu__item');


var showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    }else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}



