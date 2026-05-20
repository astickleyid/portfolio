import { useState } from 'react';
import clsx from 'clsx';
import { Send } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  project: '',
  message: '',
};

const PROJECT_LABELS = {
  'ai-integration': 'AI Integration / workflow',
  'full-stack': 'Full-stack web or mobile product',
  'automation': 'Business automation',
  'saas': 'SaaS product',
  'other': 'Something else',
};

// Submits via Formsubmit.co — no API key required.
// First submission triggers a one-time verification email to ams@stickleyai.com.
// Click that link once and all future submissions deliver directly to the inbox.
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/ams@stickleyai.com';

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');

    try {
      const payload = {
        name: form.name,
        email: form.email,
        _replyto: form.email,
        _subject: `Portfolio inquiry from ${form.name} — ${PROJECT_LABELS[form.project] || form.project}`,
        project: PROJECT_LABELS[form.project] || form.project,
        message: form.message,
        _captcha: 'false',
        _template: 'table',
      };

      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success !== 'false') {
        setStatus('success');
        setForm(initialForm);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      setStatus('error');
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="form__row">
        <label className="field">
          <span className="field__label">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>

        <label className="field">
          <span className="field__label">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
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
        <textarea
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          placeholder="What are you building, where is it blocked, and what needs to be true when it ships?"
          required
        />
      </label>

      <button className="form__submit" type="submit" disabled={status === 'loading'}>
        <span>{status === 'loading' ? 'Sending…' : 'Send inquiry'}</span>
        <Send />
      </button>

      {(status === 'success' || status === 'error') && (
        <div
          role="status"
          className={clsx('form__status', status === 'success' ? 'is-success' : 'is-error')}
        >
          {status === 'success'
            ? 'Message received. I will follow up soon.'
            : 'Failed to send — email me directly at ams@stickleyai.com.'}
        </div>
      )}
    </form>
  );
}
