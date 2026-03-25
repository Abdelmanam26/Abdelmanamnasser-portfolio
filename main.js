const progressBars = document.querySelectorAll('.progress');

const showProgress = () => {
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-width');
        bar.style.width = value;
    });
};

window.addEventListener('scroll', () => {
    const sectionPos = document.querySelector('.skills').getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if(sectionPos < screenPos) {
        showProgress();
    }
});

window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links li a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});