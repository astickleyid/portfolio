(function () {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  const successEl = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    successEl.hidden = true;
    errorEl.hidden = true;
    submitBtn.disabled = true;
    btnText.hidden = true;
    btnLoading.hidden = false;

    const body = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      project: form.project.value,
      message: form.message.value.trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error('Server error');

      form.reset();
      successEl.hidden = false;
    } catch {
      errorEl.hidden = false;
    } finally {
      submitBtn.disabled = false;
      btnText.hidden = false;
      btnLoading.hidden = true;
    }
  });
})();
