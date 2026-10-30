// Contact Form for AIConsult.ch

// Web3Forms access key (free at https://web3forms.com – enter adrian@aiconsult.ch, key arrives by email).
// While empty, the form opens a pre-filled email instead of sending, so no request is ever lost.
const WEB3FORMS_ACCESS_KEY = '';
const CONTACT_EMAIL = 'adrian@aiconsult.ch';

const IS_EN = document.documentElement.lang.startsWith('en');
const TEXT = IS_EN ? {
    sending: 'Sending...',
    sent: 'Thank you! Your enquiry has arrived. I will get back to you within 2 working days.',
    mailto: `Your email program has opened with your enquiry. If not, please write directly to ${CONTACT_EMAIL}.`,
    failed: `Sending did not work. Please write directly to ${CONTACT_EMAIL} or call +41 79 740 10 21.`
} : {
    sending: 'Wird gesendet...',
    sent: 'Vielen Dank! Ihre Anfrage ist angekommen. Ich melde mich innerhalb von 2 Arbeitstagen.',
    mailto: `Ihr E-Mail-Programm wurde mit Ihrer Anfrage geöffnet. Falls nicht, schreiben Sie bitte direkt an ${CONTACT_EMAIL}.`,
    failed: `Das Senden hat leider nicht geklappt. Bitte schreiben Sie direkt an ${CONTACT_EMAIL} oder rufen Sie an: +41 79 740 10 21.`
};

// Offer metadata for GA4 lead tracking (value = list price in CHF)
const LEAD_TOPICS = {
    startpaket: { label: 'KI-Startpaket', value: 2400 },
    vertrieb: { label: 'Workshop KI im Vertrieb & KAM', value: 2200 },
    ecommerce: { label: 'E-Commerce-Automatisierung', value: 3800 },
    beratung: { label: 'Beratung / Sparring', value: 220 },
    other: { label: 'Potenzialcheck / Kennenlernen', value: 0 }
};

function trackLead(topic, method) {
    if (typeof trackEvent !== 'function') return;
    const info = LEAD_TOPICS[topic] || LEAD_TOPICS.other;
    trackEvent('generate_lead', {
        'form_name': 'main_contact_form',
        'lead_type': topic,
        'item_name': info.label,
        'value': info.value,
        'currency': 'CHF',
        'method': method
    });
}

function openMailFallback(formData, topic) {
    const info = LEAD_TOPICS[topic] || LEAD_TOPICS.other;
    const lines = [];
    formData.forEach((value, key) => {
        if (value) lines.push(`${key}: ${value}`);
    });
    const subject = encodeURIComponent(`${IS_EN ? 'Enquiry via aiconsult.ch' : 'Anfrage über aiconsult.ch'}: ${info.label}`);
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

// Sends the form; resolves to 'sent' or 'mailto', rejects if the request failed
async function sendLead(form) {
    const formData = new FormData(form);
    const topic = formData.get('topic') || 'other';

    if (!WEB3FORMS_ACCESS_KEY) {
        openMailFallback(formData, topic);
        trackLead(topic, 'mailto');
        return 'mailto';
    }

    const info = LEAD_TOPICS[topic] || LEAD_TOPICS.other;
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `Neue Anfrage über aiconsult.ch: ${info.label}`);
    formData.append('from_name', 'AIConsult.ch Website');

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.success) {
        throw new Error(result.message || `HTTP ${response.status}`);
    }

    trackLead(topic, 'web3forms');
    return 'sent';
}

function showFormStatus(form, message, type) {
    let status = form.querySelector('.form-status');
    if (!status) {
        status = document.createElement('p');
        status.className = 'form-status';
        status.setAttribute('role', 'status');
        form.appendChild(status);
    }
    status.textContent = message;
    status.dataset.type = type;
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const topicSelect = document.getElementById('topic');

    // Offer buttons preselect the matching topic before scrolling to the form
    document.querySelectorAll('[data-topic]').forEach(button => {
        button.addEventListener('click', () => {
            if (topicSelect) topicSelect.value = button.dataset.topic;
        });
    });

    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Honeypot: bots fill hidden fields, people don't
        if (contactForm.querySelector('[name="botcheck"]')?.checked) return;

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = TEXT.sending;

        try {
            const outcome = await sendLead(contactForm);
            if (outcome === 'sent') {
                contactForm.reset();
                showFormStatus(contactForm, TEXT.sent, 'success');
            } else {
                showFormStatus(contactForm, TEXT.mailto, 'info');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFormStatus(contactForm, TEXT.failed, 'error');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
});
