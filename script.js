
const menuIcon = document.getElementById('menu-icon');
const menuBox = document.querySelector('.menu-box'); 
const menuLinks = document.querySelectorAll('.menu-box a');


//show /hide menu icon
menuIcon.addEventListener('click', function() {
    menuBox.classList.toggle('show');
});

 // Hide menu when any menu link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
        menuBox.classList.remove('show');
    });
});

// for multiple text
const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'C/C++ Developer', 'Graphic Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });