// Festus Adebayo Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeContactForm();
    initializePageAnimations();
    initializeGallery();
    initializeMediaCards();
    updateCopyrightYear();
    initializeMoreAboutToggle();
});

// === Mobile Menu Toggle ===
// === Mobile Menu Toggle & Auto-Close ===
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}


// Navigation functionality
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const nameInput = this.querySelector('input[type="text"]');
            const name = nameInput ? nameInput.value : '';
            
            // Validate form
            if (!name) {
                showNotification('Please fill in your name.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            this.classList.add('loading');
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                this.classList.remove('loading');
            }, 2000);
        });
    }
}

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function initializePageAnimations() {
    // Select only text-based and card elements — skip all images and logo
    const elementsToAnimate = document.querySelectorAll(
        '.hero-content, .role-badges, .section-title, .about-card, .media-card, .contact-card, .congratulatory-section'
    );

    elementsToAnimate.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;

        // Make them visible after a short delay
        setTimeout(() => {
            el.classList.add('visible');
        }, 100 + (index * 100));
    });

    // Explicitly ensure no fade-in is ever applied to logo or image containers
    document.querySelectorAll('.nav-logo img, .hero-main-image img, .about-image img, .gallery-item img')
        .forEach(img => {
            img.classList.remove('fade-in', 'visible');
            img.style.opacity = '1';
            img.style.transform = 'none';
        });

    // Initialize scroll animations (only for text)
    initializeScrollAnimations();
}

function initializeScrollAnimations() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Only observe non-image elements
    const animatedElements = document.querySelectorAll(
        '.section-title, .about-card, .media-card, .contact-card, .congratulatory-section, .hero-content, .role-badges'
    );

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}


// Gallery functionality
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                openImageModal(img.src, img.alt);
            }
        });
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Image modal functionality
function openImageModal(src, alt) {
    // Remove existing modal
    const existingModal = document.querySelector('.image-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="this.parentElement.remove()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="this.closest('.image-modal').remove()">×</button>
                <img src="${src}" alt="${alt}" class="modal-image">
                <div class="modal-caption">${alt}</div>
            </div>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        const content = modal.querySelector('.modal-content');
        content.style.transform = 'scale(1)';
    }, 100);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Media cards functionality
function initializeMediaCards() {
    const mediaCards = document.querySelectorAll('.media-card');
    
    mediaCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Add click effect to media links
        const mediaLink = card.querySelector('.media-link');
        if (mediaLink) {
            mediaLink.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('This would open the full article in a new tab.', 'success');
            });
        }
    });
}

// More about toggle functionality
function initializeMoreAboutToggle() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const moreAboutContent = document.querySelector('.more-about-content');
    
    if (readMoreBtn && moreAboutContent) {
        // Initially hide the detailed content
        moreAboutContent.style.display = 'none';
        
        readMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (moreAboutContent.style.display === 'none') {
                moreAboutContent.style.display = 'block';
                this.textContent = 'Show Less';
                
                // Smooth scroll to the content
                moreAboutContent.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            } else {
                moreAboutContent.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    }
}

// Update copyright year
function updateCopyrightYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Role badges animation
function initializeRoleBadges() {
    const roleBadges = document.querySelectorAll('.role-badge');
    
    roleBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
        badge.classList.add('fade-in');
    });
}

// Social links functionality
function initializeSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('span').textContent;
            showNotification(`This would open ${platform} in a new tab.`, 'success');
        });
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initializeRoleBadges();
    initializeSocialLinks();
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Add loading animation
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initializeLazyLoading();

// Add smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    // Polyfill for smooth scrolling
    const originalScrollTo = window.scrollTo;
    window.scrollTo = function(options) {
        if (typeof options === 'object' && options.behavior === 'smooth') {
            const start = window.pageYOffset;
            const target = options.top || 0;
            const distance = target - start;
            const duration = 500;
            let startTime = null;
            
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                
                window.scrollTo(0, start + distance * easeInOutCubic(progress));
                
                if (progress < 1) {
                    requestAnimationFrame(animation);
                }
            }
            
            requestAnimationFrame(animation);
        } else {
            originalScrollTo.call(this, options);
        }
    };
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Add loading states and error handling
window.addEventListener('load', function() {
    // Remove any loading indicators
    document.body.classList.remove('loading');
    
    // Initialize any additional features after page load
    console.log('Festus Adebayo Website loaded successfully!');
});

// Handle errors gracefully
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // You could show a user-friendly error message here
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.image-modal');
        modals.forEach(modal => modal.remove());
    }
});

// Add scroll to top functionality
function addScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--accent-color);
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 5s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });
    
    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top
addScrollToTop();