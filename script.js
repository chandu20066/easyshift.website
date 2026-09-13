async function submitForm(form, statusId) {
  const status = document.getElementById(statusId);
  status.textContent = 'Sending...';
  try {
    const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Request failed');
    status.textContent = 'Thank you. Your enquiry was sent successfully.';
    form.reset();
  } catch (error) {
    status.textContent = 'Unable to send right now. Please contact us on WhatsApp: +91 72599 97101.';
  }
}
document.getElementById('contactForm')?.addEventListener('submit', function(event){event.preventDefault();submitForm(this,'formStatus');});
document.getElementById('customForm')?.addEventListener('submit', function(event){event.preventDefault();submitForm(this,'customStatus');});
