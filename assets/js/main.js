/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUpButton = document.getElementById('scroll-up');
    // Check if the page has scrolled down enough to show the scroll-up button
    this.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll') : scrollUpButton.classList.remove('show-scroll');
}
// Function to handle smooth scrolling to the top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add this option for smooth scrolling
    });
}
// Attach the scrollToTop function to the click event of the scroll-up button
document.getElementById('scroll-up').addEventListener('click', scrollToTop);
// Attach the scrollUp function to the scroll event of the window
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        if (sectionsClass) {
            sectionsClass.classList.add('active-link');
        }
    } else {
        if (sectionsClass) {
            sectionsClass.classList.remove('active-link');
        }
    }
});
};
window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data, .products__data , .steps__content , .footer__container`)
sr.reveal(`.home__img` , {origin: 'bottom'})
sr.reveal(`.products__cards` , {interval: 100})
sr.reveal(`.about__img , .testimonial__img` , {origin: 'right'})
sr.reveal(`.about__data , .testimonial__data` , {origin: 'left'})

