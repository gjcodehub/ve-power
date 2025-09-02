    // Home section slideshow logic
    function setupHomeSlideshow() {
        const slideshow = document.getElementById('home-slideshow');
        if (!slideshow) return;
        const slides = slideshow.querySelectorAll('.slide');
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        let current = 0;

        function showSlide(idx) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === idx ? '1' : '0';
            });
        }

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });
        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        // Optional: auto-slide every 5 seconds
        let autoSlide = setInterval(() => {
            current = (current + 1) % slides.length;
            showSlide(current);
        }, 5000);

        slideshow.addEventListener('mouseenter', () => clearInterval(autoSlide));
        slideshow.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                current = (current + 1) % slides.length;
                showSlide(current);
            }, 5000);
        });

        showSlide(current);
    }

    // After loading all sections, setup slideshow if home section exists
    Promise.all(
        [
            { id: 'home', file: 'pages/home.html' },
            { id: 'about', file: 'pages/about.html' },
            { id: 'services', file: 'pages/services.html' },
            { id: 'products', file: 'pages/products.html' },
            { id: 'contact', file: 'pages/contact.html' }
        ].map(section =>
            fetch(section.file)
                .then(response => response.text())
                .then(html => `<div id="${section.id}" class="page-section">${html}</div>`)
        )
    ).then(allSections => {
        pageContent.innerHTML = allSections.join('');
        setupHomeSlideshow();
    });
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const pageContent = document.getElementById('page-content');

    // List of menu sections and their files
    const sections = [
        { id: 'home', file: 'pages/home.html' },
        { id: 'about', file: 'pages/about.html' },
        { id: 'services', file: 'pages/services.html' },
        { id: 'products', file: 'pages/products.html' },
        { id: 'contact', file: 'pages/contact.html' }
    ];

    // Load all sections into #page-content
    Promise.all(
        sections.map(section =>
            fetch(section.file)
                .then(response => response.text())
                .then(html => `<div id="${section.id}" class="page-section">${html}</div>`)
        )
    ).then(allSections => {
        pageContent.innerHTML = allSections.join('');

        // Home section slideshow logic
        const slideshow = document.getElementById('home-slideshow');
        if (slideshow) {
            const slides = slideshow.querySelectorAll('.slide');
            const prevBtn = document.getElementById('prev-slide');
            const nextBtn = document.getElementById('next-slide');
            let current = 0;
            let autoSlide;

            function showSlide(idx) {
                slides.forEach((slide, i) => {
                    slide.style.opacity = i === idx ? '1' : '0';
                    slide.style.zIndex = i === idx ? '2' : '1';
                });
            }

            function startAutoSlide() {
                autoSlide = setInterval(() => {
                    current = (current + 1) % slides.length;
                    showSlide(current);
                }, 5000);
            }

            function stopAutoSlide() {
                clearInterval(autoSlide);
            }

            prevBtn.addEventListener('click', () => {
                stopAutoSlide();
                current = (current - 1 + slides.length) % slides.length;
                showSlide(current);
                startAutoSlide();
            });
            nextBtn.addEventListener('click', () => {
                stopAutoSlide();
                current = (current + 1) % slides.length;
                showSlide(current);
                startAutoSlide();
            });

            slideshow.addEventListener('mouseenter', stopAutoSlide);
            slideshow.addEventListener('mouseleave', startAutoSlide);

            showSlide(current);
            startAutoSlide();
        }
    });

    // Event listeners for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1); // Remove '#'
            const section = document.getElementById(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            mobileMenu.classList.add('hidden');
        });
    });

    // Event listener for mobile menu button
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Set footer year automatically
    const footerYear = document.getElementById('footer-year');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});
