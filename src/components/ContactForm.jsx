import { useState } from 'react';
import clsx from 'clsx';
import { Send } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  project: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setErrorMessage('The form failed to send. Email me directly at astickleyid@gmail.com.');
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            required
          />
        </label>
      </div>

      <label className="field">
        <span>Project type</span>
        <select name="project" value={form.project} onChange={handleChange} required>
          <option value="" disabled>
            Select one
          </option>
          <option value="ai-integration">AI integration / workflow</option>
          <option value="full-stack">Full-stack web or mobile product</option>
          <option value="automation">Business automation</option>
          <option value="saas">SaaS product</option>
          <option value="other">Something else</option>
        </select>
      </label>

      <label className="field">
        <span>Brief</span>
        <textarea
          name="message"
          rows="7"
          value={form.message}
          onChange={handleChange}
          placeholder="What are you building, where is it blocked, and what needs to be true when it ships?"
          required
        />
      </label>

      <button className="contact-form__submit" type="submit" disabled={status === 'loading'}>
        <span>{status === 'loading' ? 'Sending...' : 'Send inquiry'}</span>
        <Send size={16} />
      </button>

      {(status === 'success' || status === 'error') && (
        <div
          className={clsx(
            'contact-form__status',
            status === 'success' ? 'is-success' : 'is-error'
          )}
        >
          {status === 'success'
            ? 'Message received. I will follow up soon.'
            : errorMessage}
        </div>
      )}
    </form>
  );
}
