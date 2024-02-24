const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
// New
// const dropDownMenuItem = document.querySelector('.dropdown_menu i a');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    console.log(isOpen);

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

// New 
document.onclick = function(e) {
    if (e.target.id === 'home' || e.target.id === 'home-a' || e.target.id === 'about' || e.target.id === 'about-a' || e.target.id === 'service' || e.target.id === 'service-a' || e.target.id === 'contact' || e.target.id === 'contact-a'){
        dropDownMenu.classList.remove('open');
        console.log(e.target.id);
        
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
        console.log(`after click ${isOpen}`);
    }
}

// vision and Mission
toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    console.log(isOpen);

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

// document.onclick = function(e) {
//     console.log(`id is ${e.target.id}`);
//     console.log("test");
// }

// // Swiper
// var swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     pagination: {
//       el: ".swiper-pagination",ref
//       clickable: true,
//     },
//   });



// +++++++++++++++++++

ScrollReveal({ 
    reset: true,
    distance : '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.sectors-title h1', { delay: 100, origin: 'tight' });
ScrollReveal().reveal('.under-line', { delay: 100, origin: 'left' });

ScrollReveal().reveal('.first-col', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.second-col', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.square-img-container', { delay: 200, origin: 'right' });

ScrollReveal().reveal('.three-col-1', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.three-col-2', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.three-col-3', { delay: 200, origin: 'right' });

ScrollReveal().reveal('.sec-r-col-img', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.sec-r-col-img-first', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.sec-r-col-second', { delay: 200, origin: 'bottom' });



// Nav Bar 
ScrollReveal().reveal('.third-col', { delay: 200, origin: 'right', interval:200 });

// --------------
ScrollReveal().reveal('.container-page-2-content', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.vision-1 h1', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.vision-1 p', { delay: 400, origin: 'top' });
ScrollReveal().reveal('.mession-1 h1', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.mession-1 p', { delay: 400, origin: 'top' });

// --------------
ScrollReveal().reveal('.company-name', { delay: 400, origin: 'top' });
ScrollReveal().reveal('.company-image', { delay: 300, origin: 'bottom' });

// nav bar 
// ScrollReveal().reveal('.navbar', { delay: 600, origin: 'top' });
// ScrollReveal().reveal('.logo', { delay: 300, origin: 'left' });
// ScrollReveal().reveal('.links', { delay: 300, origin: 'right' });
// ------------
ScrollReveal().reveal('.bg-img-container img', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.blur-blocks img', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.content-container img, .vission-mission-company-name', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.content-container .vission-mission-copy-right', { delay: 300, origin: 'bottom' });

//
ScrollReveal().reveal('.vision-h1, .vision-p', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.mission-h1, .mission-p', { delay: 300, origin: 'left' });

// ScrollReveal().reveal('.main-container-bg', { delay: 300, origin: 'top' });

// ScrollReveal().reveal('', { delay: 600, origin: 'bottom' });
// to applay same animation
// ScrollReveal().reveal('.sectors-title, .section-2-title', { delay: 500, origin: 'left' });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});