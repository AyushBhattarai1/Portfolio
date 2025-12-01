import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="main-content">
      <section className="page-header">
        <h1>GET IN TOUCH</h1>
        <p>Let's talk boxes</p>
      </section>

      <section className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>NAME</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>EMAIL</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>MESSAGE</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your boxy ideas..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            SEND MESSAGE
          </button>
        </form>

        <div className="contact-info">
          <div className="info-box">
            <h3>◼ EMAIL</h3>
            <p>hello@boxy.site</p>
          </div>
          <div className="info-box">
            <h3>◼ LOCATION</h3>
            <p>Box City, Square State</p>
          </div>
          <div className="info-box">
            <h3>◼ SOCIAL</h3>
            <p>@boxydesign</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
