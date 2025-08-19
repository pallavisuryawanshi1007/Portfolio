// Turn pages when clicking next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');

            // Set z-index for closed pages to be behind others
            setTimeout(() => {
                pageTurn.style.zIndex = 10;
            }, 500);
        } else {
            pageTurn.classList.add('turn');

            // Set a higher z-index for turned pages
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    });
});

// Contact Me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.Contact-me');

contactMeBtn.onclick = (e) => {
    e.preventDefault();

    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            page.style.zIndex = 20 + index;
        }, (index + 1) * 300);
    });
};

// Back Profile button -> close all pages and go back to profile
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = (e) => {
    e.preventDefault();

    const totalPages = pages.length;
    for (let i = totalPages - 1; i >= 0; i--) {
        const page = pages[i];
        const delay = (totalPages - 1 - i) * 300;

        setTimeout(() => {
            page.classList.remove('turn');

            // Correctly reset the stacking order for a smooth transition
            // This ensures pages are placed correctly as they close
            setTimeout(() => {
                page.style.zIndex = 10 - i;
            }, 500);
        }, delay);
    }
};

// Opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageleft = document.querySelector('.book-page.page-left');

// Opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = '-1';
}, 2800);

// Opening animation: flip all right pages one by one
let totalPages = pages.length;

setTimeout(() => {
    for (let i = totalPages - 1; i >= 0; i--) {
        setTimeout(() => {
            pages[i].classList.remove('turn');
            pages[i].style.zIndex = 10 + (totalPages - 1 - i);
        }, (totalPages - i) * 200);
    }
}, 2100);

