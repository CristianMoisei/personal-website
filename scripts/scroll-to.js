function smoothScroll() {

    var id = 'thrive-block';
    var yOffset = -100;

    if(window.innerWidth <= 960) {
        id = 'mobile-thrive-image';
        yOffset = 0;
    }

    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}