//header__background
const scrollHeader = () => {

    const header = document.getElementById('header');
    this.scrollY >= 50 ?
        header.classList.add('scroll-header') :
        header.classList.remove('scroll-header');

}

window.addEventListener('scroll', scrollHeader);


//swiper
const swiperPopular = new Swiper(".popular__container", {

    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//accordion
const accordionItems = document.querySelectorAll('.value__accordion-item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header');

    accordionHeader.addEventListener('click', ()=> {

        const openItem = document.querySelector('.accordion-open');

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

//scroll
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
              sectionTop = section.offsetTop - 58,
              sectionId = section.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

//scroll-up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

//cart
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

if ( cartShop ) {
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}
if ( cartClose ) {
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__title, .popular__container, .subscribe__container, .footer__container')
sr.reveal('.home__description, footer__info', {delay: 500})
sr.reveal('.home__search', {delay: 600})
sr.reveal('.home__value', {delay: 700})
sr.reveal('.home__images', {delay: 800, origin: 'bottom'})
sr.reveal('.logos__img', {interval: 100})
sr.reveal('.value__images, .contact__content', {origin: 'left'})
sr.reveal('.contact__images, .value__content', {origin: 'left'})