import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const showNotification = (message, type) => {
    const existingNotification = document.querySelector('.notification')
    if (existingNotification) {
      existingNotification.remove()
    }

    const notification = document.createElement('div')
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
      </div>
    `

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      animation: slideIn 0.3s ease;
      max-width: 400px;
    `

    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease'
      setTimeout(() => notification.remove(), 300)
    }, 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error')
      showNotification('Please fill in all required fields.', 'error')
      setIsSubmitting(false)
      return
    }

    if (!isValidEmail(formData.email)) {
      setSubmitStatus('error')
      showNotification('Please enter a valid email address.', 'error')
      setIsSubmitting(false)
      return
    }

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          to_email: 'sekar6@illinois.edu',
        },
        publicKey
      )

      setSubmitStatus('success')
      showNotification("Thank you for your message! I'll get back to you soon.", 'success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      showNotification('Sorry, there was an error sending your message. Please try again or email me directly at sekar6@illinois.edu', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a question or interested in collaborating? Feel free to reach out!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <a href="mailto:sekar6@illinois.edu" className="contact-card" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-label">Email</div>
            <div className="contact-value">
              sekar6@illinois.edu
            </div>
          </a>

          <a href="https://www.linkedin.com/in/harshvardhan-sekar/" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className="contact-icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <div className="contact-label">LinkedIn</div>
            <div className="contact-value">
              linkedin.com/in/harshvardhan-sekar
            </div>
          </a>

          <a href="https://github.com/harshvardhan-sekar" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className="contact-icon">
              <i className="fab fa-github"></i>
            </div>
            <div className="contact-label">GitHub</div>
            <div className="contact-value">
              github.com/harshvardhan-sekar
            </div>
          </a>

          <a href="https://drive.google.com/drive/folders/1AXhb6GebVKAux7dnES2nw7B6RJAysFgu?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className="contact-icon">
              <i className="fas fa-file-pdf"></i>
            </div>
            <div className="contact-label">Resume</div>
            <div className="contact-value">
              Resume - Harshvardhan Sekar
            </div>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
            style={{ width: '100%' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
