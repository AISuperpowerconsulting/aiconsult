// Contact Form Modals for AIConsult.ch

// Open modal
function openModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Close modal
function closeModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('contact-modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal on Escape key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.contact-modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Handle form submission
async function submitForm(event, formType) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet...';

    // Collect form data
    const formData = new FormData(form);
    formData.append('formType', formType);

    try {
        // Send to backend
        const response = await fetch('send-email.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            // Show success message
            showMessage('Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in der Regel innerhalb von 1-2 Arbeitstagen.', 'success');

            // Reset form and close modal
            form.reset();
            setTimeout(() => {
                closeModal(formType);
            }, 2000);
        } else {
            showMessage('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter adrian@aiconsult.ch', 'error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showMessage('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter adrian@aiconsult.ch', 'error');
    } finally {
        // Restore button state
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
}

// Show success/error message
function showMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;

    // Insert at top of modal content
    const modalContent = document.querySelector('.contact-modal[style*="block"] .modal-content');
    if (modalContent) {
        modalContent.insertBefore(messageDiv, modalContent.firstChild);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}
