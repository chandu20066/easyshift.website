// EasyShift website interactions
document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'Sending...';
    formStatus.textContent = '';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(contactForm)
      });

      if (!response.ok) throw new Error('Submission failed');
      contactForm.reset();
      formStatus.textContent = 'Thanks! Your enquiry has been sent to EasyShift.';
    } catch (error) {
      formStatus.textContent = 'Something went wrong. Please contact us on WhatsApp or email.';
    } finally {
      button.disabled = false;
      button.textContent = 'Send Message →';
    }
  });
}
