import { useState } from 'react';
import { Send } from 'lucide-react';

const initialForm = { name: '', email: '', project: '', message: '' };

const PROJECT_LABELS = {
  'ai-integration': 'AI Integration / workflow',
  'full-stack':     'Full-stack web or mobile product',
  'automation':     'Business automation',
  'saas':           'SaaS product',
  'other':          'Something else',
};

export function ContactForm() {
  const [form, setForm]           = useState(initialForm);
  const [sent, setSent]           = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]         = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Non-2xx response');

      setSent(true);
      setForm(initialForm);
    } catch {
      setError('Failed to send — please email directly at ams@stickleyai.com');
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((c) => ({ ...c, [name]: value }));
  }

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="form__row">
        <label className="field">
          <span className="field__label">Name</span>
          <input type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="Your name" autoComplete="name" required />
        </label>
        <label className="field">
          <span className="field__label">Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="you@company.com" autoComplete="email" required />
        </label>
      </div>

      <label className="field">
        <span className="field__label">Project type</span>
        <select name="project" value={form.project} onChange={handleChange} required>
          <option value="" disabled>Select one</option>
          <option value="ai-integration">AI integration / workflow</option>
          <option value="full-stack">Full-stack web or mobile product</option>
          <option value="automation">Business automation</option>
          <option value="saas">SaaS product</option>
          <option value="other">Something else</option>
        </select>
      </label>

      <label className="field">
        <span className="field__label">Brief</span>
        <textarea name="message" rows="6" value={form.message} onChange={handleChange}
          placeholder="What are you building, where is it blocked, and what needs to be true when it ships?"
          required />
      </label>

      {error && (
        <div role="alert" className="form__status is-error">
          {error}
        </div>
      )}

      {!sent ? (
        <button className="form__submit" type="submit" disabled={submitting}>
          <span>{submitting ? 'Sending…' : 'Send inquiry'}</span>
          {!submitting && <Send />}
        </button>
      ) : (
        <div role="status" className="form__status is-success">
          Message sent! I&rsquo;ll reply within 24 hours.
        </div>
      )}
    </form>
  );
}
