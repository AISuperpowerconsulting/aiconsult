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

    // Lead events (generate_lead) are sent from js/contact-forms.js after a successful submission

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
    const heroPrimaryCta = document.querySelector('.hero-actions .btn:not(.btn-line)');
    if (heroPrimaryCta) {
        heroPrimaryCta.addEventListener('click', () => {
            trackEvent('cta_click', {
                'cta_name': 'hero_primary',
                'cta_location': 'hero',
                'cta_text': heroPrimaryCta.textContent.trim()
            });
        });
    }

    const heroSecondaryCta = document.querySelector('.hero-actions .btn-line');
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
    const pricingButtons = document.querySelectorAll('.tag .btn');
    pricingButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const card = button.closest('.tag');
            const offerName = card.querySelector('h3')?.textContent || `Offer ${index + 1}`;
            const price = card.querySelector('.amount')?.textContent || 'unknown';

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
    // 4. NAVIGATION TRACKING
    // ========================================

    // Track navigation clicks
    document.querySelectorAll('.site-nav a').forEach(link => {
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
    const sectionsToTrack = ['#why-ai', '#offers', '#about', '#process', '#faq'];

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
