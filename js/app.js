document.addEventListener('DOMContentLoaded', () => {
    // 0. Loader Logic
    const loader = document.getElementById('loader');
    if (loader) {
        loader.addEventListener('animationend', (e) => {
            if (e.animationName === 'loaderFadeOut') {
                loader.style.display = 'none';
            }
        });
    }

    // 1. Dynamic Year in Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Render Products
    const productGrid = document.getElementById('productGrid');
    if (productGrid && typeof products !== 'undefined') {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            // Build image HTML (handle 2 images if present)
            let imagesHtml = '';
            if (product.image2) {
                imagesHtml = `
                    <img src="${product.image}" loading="lazy" alt="${product.name}" class="product-image image-primary">
                    <img src="${product.image2}" loading="lazy" alt="${product.name}" class="product-image image-secondary">
                `;
                card.classList.add('has-two-images');
            } else {
                imagesHtml = `<img src="${product.image}" loading="lazy" alt="${product.name}" class="product-image">`;
            }

            card.innerHTML = `
                <div class="product-badge ${product.tagClass}">${product.tag}</div>
                <div class="img-wrapper">
                    ${imagesHtml}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">${product.price}</span>
                        <a href="${getWhatsAppUrl(product.name)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp btn-small">
                            <svg viewBox="0 0 24 24" class="icon-whatsapp" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.818-.728-1.372-1.626-1.533-1.924-.161-.297-.017-.458.132-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.347-.272.271-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                            </svg>
                            Ordenar
                        </a>
                    </div>
                </div>
            `;

            card.addEventListener('click', (e) => {
                if (e.target.closest('a.btn-whatsapp')) {
                    return; // Ignore clicks inside the button, allow link behavior
                }
                openModal(product);
            });

            productGrid.appendChild(card);
        });
    }

    // 3. Header Scrolled State
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenuBtn = document.querySelector('.close-menu');
    const campaignNav = document.getElementById('campaignNav');

    if (menuToggle && closeMenuBtn && campaignNav) {
        menuToggle.addEventListener('click', () => {
            campaignNav.classList.add('open');
            document.body.style.overflow = 'hidden'; // prevent scrolling
        });

        closeMenuBtn.addEventListener('click', () => {
            campaignNav.classList.remove('open');
            document.body.style.overflow = '';
        });
    }

    // 5. Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                animateObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.product-card, .section-header');
    animateElements.forEach(el => {
        animateObserver.observe(el);
    });

    // 6. Simple Parallax logic for background swap
    const parallaxBg1 = document.querySelector('.parallax-bg');
    const parallaxBg2 = document.querySelector('.parallax-bg-2');
    const catalogSection = document.getElementById('catalog');

    // Performance optimization for parallax
    let lastKnownScrollPosition = 0;
    let ticking = false;

    function applyParallaxEffects(scrollPos) {
        // Simple subtle parallax on elements
        if (parallaxBg1) parallaxBg1.style.transform = `translateY(${scrollPos * 0.1}px)`;
        if (parallaxBg2) parallaxBg2.style.transform = `translateY(${scrollPos * 0.1}px)`;

        // Background Opacity swap logic
        if (catalogSection && parallaxBg2 && parallaxBg1) {
            const catalogBottom = catalogSection.offsetTop + (catalogSection.offsetHeight * 0.7);
            if (scrollPos > catalogBottom) {
                if (parallaxBg2.style.opacity !== '0.5') {
                    parallaxBg2.style.opacity = '0.5';
                    parallaxBg1.style.opacity = '0';
                }
            } else {
                if (parallaxBg1.style.opacity !== '0.5') {
                    parallaxBg1.style.opacity = '0.5';
                    parallaxBg2.style.opacity = '0';
                }
            }
        }
    }

    document.addEventListener('scroll', () => {
        lastKnownScrollPosition = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                applyParallaxEffects(lastKnownScrollPosition);
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial check on load
    applyParallaxEffects(window.scrollY);

    // 7. Modal Logic
    const modal = document.getElementById('productModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');

    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalPrice = document.getElementById('modalPrice');
    const modalWaBtn = document.getElementById('modalWaBtn');
    const modalBadge = document.getElementById('modalBadge');

    function openModal(product) {
        if (!modal) return;

        modalImg.src = product.image;
        modalImg.alt = product.name;
        modalTitle.textContent = product.name;
        modalDesc.textContent = product.description;
        modalPrice.textContent = product.price;
        modalWaBtn.href = getWhatsAppUrl(product.name);

        modalBadge.className = `product-badge ${product.tagClass}`;
        modalBadge.textContent = product.tag;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }
});
