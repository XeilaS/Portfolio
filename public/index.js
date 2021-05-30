const nav = document.getElementById('changeclass');

window.addEventListener('scroll', () => {
    console.log('scroll !');
    if (window.scrollY > 500) {
        nav.classList.add('scroll');
    } else {
    }
});
