(() => {
    const slides = document.querySelectorAll('.carousel img');
    const delay  = 10000;          // 10 s between changes
    let index    = 0;

    // show the very first slide
    slides[0].classList.add('active');

    setInterval(() => {
        slides[index].classList.remove('active');      // fade out current
        index = (index + 1) % slides.length;           // advance + loop
        slides[index].classList.add('active');         // fade in next
}, delay);
})();
