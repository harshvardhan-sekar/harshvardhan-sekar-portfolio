import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.')
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setIsSubmitting(false)
    }, 2000)
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
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
