document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.getElementById('home');
    window.addEventListener('scroll', function() {
        let offset = window.pageYOffset;
        homeSection.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});
