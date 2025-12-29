/**
 * Google Analytics 4 Event Tracking
 * AIConsult.ch - Comprehensive tracking setup
 */

// Utility function to safely send events to GA4
function trackEvent(eventName, eventParams = {}) {
    if (typeof gtag === 'function') {
        gtag('event', eventName, eventParams);
        console.log('📊 GA4 Event:', eventName, eventParams);
    } else {
        console.warn('⚠️ gtag not loaded - event not sent:', eventName);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 AIConsult.ch Tracking initialized');

    // ========================================
    // 1. FORM SUBMISSION TRACKING
    // ========================================

    // Main Contact Form
    const mainContactForm = document.getElementById('contactForm');
    if (mainContactForm) {
        mainContactForm.addEventListener('submit', (e) => {
            const topic = document.getElementById('topic')?.value || 'unknown';
            trackEvent('generate_lead', {
                'form_name': 'main_contact_form',
                'form_location': 'footer',
                'lead_type': topic,
                'value': 0,
                'currency': 'CHF'
            });
        });
    }

    // Modal Form: KI Einsteiger Workshop
    const workshopBeginnerForm = document.getElementById('form-workshop-beginner');
    if (workshopBeginnerForm) {
        workshopBeginnerForm.addEventListener('submit', (e) => {
            trackEvent('generate_lead', {
                'form_name': 'workshop_beginner',
                'form_location': 'modal',
                'lead_type': 'workshop',
                'value': 1800,
                'currency': 'CHF',
                'item_name': 'KI Einsteiger Workshop'
            });
        });
    }

    // Modal Form: KI Team Training Tag
    const trainingDayForm = document.getElementById('form-training-day');
    if (trainingDayForm) {
        trainingDayForm.addEventListener('submit', (e) => {
            trackEvent('generate_lead', {
                'form_name': 'training_day',
                'form_location': 'modal',
                'lead_type': 'training',
                'value': 3500,
                'currency': 'CHF',
                'item_name': 'KI Team Training Tag'
            });
        });
    }

    // Modal Form: Individuelle Beratung
    const consultingForm = document.getElementById('form-consulting');
    if (consultingForm) {
        consultingForm.addEventListener('submit', (e) => {
            trackEvent('generate_lead', {
                'form_name': 'consulting',
                'form_location': 'modal',
                'lead_type': 'consulting',
                'value': 280,
                'currency': 'CHF',
                'item_name': 'Individuelle KI Beratung'
            });
        });
    }

    // ========================================
    // 2. CTA BUTTON CLICK TRACKING
    // ========================================

    // Sticky CTA Button
    const stickyCta = document.getElementById('sticky-cta');
    if (stickyCta) {
        stickyCta.addEventListener('click', () => {
            trackEvent('cta_click', {
                'cta_name': 'sticky_button',
                'cta_location': 'floating',
                'cta_text': 'Gratis-Erstgespräch'
            });
        });
    }

    // Hero CTAs
    const heroPrimaryCta = document.querySelector('.hero-content .btn-primary');
    if (heroPrimaryCta) {
        heroPrimaryCta.addEventListener('click', () => {
            trackEvent('cta_click', {
                'cta_name': 'hero_primary',
                'cta_location': 'hero',
                'cta_text': heroPrimaryCta.textContent.trim()
            });
        });
    }

    const heroSecondaryCta = document.querySelector('.hero-content .btn-secondary');
    if (heroSecondaryCta) {
        heroSecondaryCta.addEventListener('click', () => {
            trackEvent('cta_click', {
                'cta_name': 'hero_secondary',
                'cta_location': 'hero',
                'cta_text': heroSecondaryCta.textContent.trim()
            });
        });
    }

    // Pricing Card Buttons (track which offer is clicked)
    const pricingButtons = document.querySelectorAll('.pricing-card button');
    pricingButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const card = button.closest('.pricing-card');
            const offerName = card.querySelector('h3')?.textContent || `Offer ${index + 1}`;
            const price = card.querySelector('.price')?.textContent || 'unknown';

            trackEvent('view_item', {
                'item_name': offerName,
                'price': price,
                'currency': 'CHF'
            });

            trackEvent('cta_click', {
                'cta_name': 'pricing_card',
                'cta_location': 'offers_section',
                'offer_name': offerName,
                'offer_price': price
            });
        });
    });

    // ========================================
    // 3. MODAL TRACKING
    // ========================================

    // Track modal opens (when user clicks "Workshop anfragen" etc.)
    window.openModal = function(modalId) {
        const modal = document.getElementById('modal-' + modalId);
        if (modal) {
            modal.style.display = 'block';

            // Track modal opening
            trackEvent('modal_open', {
                'modal_name': modalId,
                'modal_type': 'contact_form'
            });
        }
    };

    window.closeModal = function(modalId) {
        const modal = document.getElementById('modal-' + modalId);
        if (modal) {
            modal.style.display = 'none';

            trackEvent('modal_close', {
                'modal_name': modalId
            });
        }
    };

    // Close modal when clicking outside
    document.querySelectorAll('.contact-modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                const modalId = modal.id.replace('modal-', '');
                closeModal(modalId);
            }
        });
    });

    // ========================================
    // 4. NAVIGATION TRACKING
    // ========================================

    // Track navigation clicks
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('navigation_click', {
                'link_text': link.textContent.trim(),
                'link_destination': link.getAttribute('href')
            });
        });
    });

    // ========================================
    // 5. SCROLL DEPTH TRACKING
    // ========================================

    let scrollDepths = {
        25: false,
        50: false,
        75: false,
        100: false
    };

    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );

        Object.keys(scrollDepths).forEach(depth => {
            if (scrollPercent >= parseInt(depth) && !scrollDepths[depth]) {
                scrollDepths[depth] = true;
                trackEvent('scroll_depth', {
                    'percent_scrolled': depth
                });
            }
        });
    });

    // ========================================
    // 6. OUTBOUND LINK TRACKING
    // ========================================

    // Track clicks on AI platform logos and external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        // Only track external links (not own domain)
        if (!link.href.includes('aiconsult.ch')) {
            link.addEventListener('click', () => {
                trackEvent('click', {
                    'link_domain': new URL(link.href).hostname,
                    'link_url': link.href,
                    'link_text': link.textContent.trim() || link.getAttribute('aria-label') || 'unknown',
                    'outbound': true
                });
            });
        }
    });

    // ========================================
    // 7. SECTION VISIBILITY TRACKING
    // ========================================

    // Track when important sections come into view
    const sectionsToTrack = ['#why-ai', '#services', '#offers', '#testimonials', '#about', '#faq'];

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                trackEvent('section_view', {
                    'section_name': sectionId
                });
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    sectionsToTrack.forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
            sectionObserver.observe(section);
        }
    });

    // ========================================
    // 8. TIME ON PAGE TRACKING
    // ========================================

    let pageLoadTime = Date.now();
    let timeTracked = false;

    // Track engaged time after 30 seconds
    setTimeout(() => {
        if (!timeTracked) {
            trackEvent('user_engagement', {
                'engagement_time': 30,
                'engagement_level': 'interested'
            });
            timeTracked = true;
        }
    }, 30000);

    // Track before user leaves
    window.addEventListener('beforeunload', () => {
        const timeSpent = Math.round((Date.now() - pageLoadTime) / 1000);
        trackEvent('page_exit', {
            'time_on_page': timeSpent
        });
    });

    console.log('✅ Tracking setup complete - all events configured');
});
