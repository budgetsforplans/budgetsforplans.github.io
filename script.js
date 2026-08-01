/**
 * Budgets For Plans Website JavaScript
 * Handles smooth scrolling, animations, and interactive elements
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
            });
        }
    });
});

if (!prefersReducedMotion.matches && 'IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation.
    document.addEventListener('DOMContentLoaded', () => {
        const animatedElements = document.querySelectorAll(
            '.overview-card, .safe-spend-card, .safe-spend-visual, .feature-item, .scenario-step, .premium-tier'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    });

    // Add fade-in animation when element is visible.
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const createMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    const menuButton = document.createElement('button');

    if (!navMenu) {
        return;
    }

    menuButton.className = 'mobile-menu-button';
    menuButton.type = 'button';
    menuButton.textContent = '☰';
    menuButton.setAttribute('aria-controls', navMenu.id || 'primaryNavigation');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');

    // Show on mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const setMenuOpen = (isOpen) => {
        navMenu.classList.toggle('open', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    };

    const handleMobile = () => {
        if (!mediaQuery.matches) {
            setMenuOpen(false);
        }
    };

    if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleMobile);
    } else {
        mediaQuery.addListener(handleMobile);
    }

    handleMobile();

    menuButton.addEventListener('click', () => {
        setMenuOpen(!navMenu.classList.contains('open'));
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mediaQuery.matches) {
                setMenuOpen(false);
            }
        });
    });

    document.querySelector('.nav-brand').parentElement.appendChild(menuButton);
};

// Initialize mobile menu
createMobileMenu();

// Keep feature accordions compact by allowing only one open at a time
const setupFeatureAccordions = () => {
    const featureAccordions = document.querySelectorAll('.category-collapsible');

    featureAccordions.forEach((accordion) => {
        accordion.addEventListener('toggle', () => {
            if (!accordion.open) {
                return;
            }

            featureAccordions.forEach((otherAccordion) => {
                if (otherAccordion !== accordion) {
                    otherAccordion.open = false;
                }
            });
        });
    });
};

// Show a compact download CTA on mobile after users scroll through initial content
const setupMobileStickyCta = () => {
    const stickyCta = document.getElementById('mobileStickyCta');

    if (!stickyCta) {
        return;
    }

    const mobileQuery = window.matchMedia('(max-width: 768px)');

    const updateStickyCta = () => {
        if (!mobileQuery.matches) {
            stickyCta.classList.remove('visible');
            return;
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

        stickyCta.classList.toggle('visible', progress >= 0.3);
    };

    window.addEventListener('scroll', updateStickyCta, { passive: true });
    window.addEventListener('resize', updateStickyCta);

    if (mobileQuery.addEventListener) {
        mobileQuery.addEventListener('change', updateStickyCta);
    } else {
        mobileQuery.addListener(updateStickyCta);
    }

    updateStickyCta();
};

// Scroll progress indicator (optional)
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

// Initialize scroll progress
createScrollProgress();
setupFeatureAccordions();
setupMobileStickyCta();
