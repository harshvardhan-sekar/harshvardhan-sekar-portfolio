import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status message when user starts typing
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Basic validation
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
      // EmailJS configuration
      // You'll need to add these as environment variables or replace with your values
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          to_email: 'sekar6@illinois.edu', // Your email address
        },
        publicKey
      )

      setSubmitStatus('success')
      showNotification('Thank you for your message! I\'ll get back to you soon.', 'success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      showNotification('Sorry, there was an error sending your message. Please try again or email me directly at sekar6@illinois.edu', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const showNotification = (message, type) => {
    // Remove existing notifications
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

    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease'
      setTimeout(() => notification.remove(), 300)
    }, 5000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect!</h2>
        <p className="contact-subtitle">Interested in collaborating or have a question? I'd love to hear from you!</p>
        <div className="contact-content">
          <div className="contact-info">
            <a href="mailto:sekar6@illinois.edu" className="contact-item contact-link">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>sekar6@illinois.edu</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/harshvardhan-sekar/" target="_blank" rel="noopener noreferrer" className="contact-item contact-link">
              <i className="fab fa-linkedin"></i>
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/harshvardhan-sekar</p>
              </div>
            </a>
            <a href="https://github.com/harshvardhan-sekar" target="_blank" rel="noopener noreferrer" className="contact-item contact-link">
              <i className="fab fa-github"></i>
              <div>
                <h4>GitHub</h4>
                <p>github.com/harshvardhan-sekar</p>
              </div>
            </a>
            <a href="https://drive.google.com/drive/folders/1AXhb6GebVKAux7dnES2nw7B6RJAysFgu?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact-item contact-link">
              <i className="fas fa-file-pdf"></i>
              <div>
                <h4>View my Resume</h4>
                <p>Resume - Harshvardhan Sekar</p>
              </div>
            </a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
