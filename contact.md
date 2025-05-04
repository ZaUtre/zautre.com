---
layout: page
title: Contact
subtitle: Get in touch with our e-commerce experts
permalink: /contact/
---

<section class="contact-header section section--gradient">
  <div class="container">
    <div class="section-header">
      <h1>{{ page.title }}</h1>
      <p class="subtitle">{{ page.subtitle }}</p>
    </div>
  </div>
</section>

<div class="contact-intro section section--white">
  <div class="container">
    <p class="section-lead">Ready to discuss your e-commerce project or have questions about our services? We'd love to hear from you. Our team is ready to provide the expertise and solutions your retail or luxury brand needs.</p>
  </div>
</div>

<section class="contact-main section section--light">
  <div class="container">
    <div class="contact-grid grid grid--2col">
      <div class="contact-form-container card">
        <h2>Send Us a Message</h2>
        <form class="contact-form" action="https://formspree.io/f/your-formspree-id" method="POST">
          <div class="form-group">
            <label for="name">Your Name *</label>
            <input type="text" name="name" id="name" required>
          </div>
          <div class="form-group">
            <label for="email">Your Email *</label>
            <input type="email" name="email" id="email" required>
          </div>
          <div class="form-group">
            <label for="company">Company</label>
            <input type="text" name="company" id="company">
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject">
          </div>
          <div class="form-group">
            <label for="message">Your Message *</label>
            <textarea name="message" id="message" rows="6" required></textarea>
          </div>
          <div class="form-group">
            <div class="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
      <div class="contact-info card">
        <h2>Our Information</h2>
        <div class="info-section">
          <h3>Address</h3>
          <p>{{ site.address }}</p>
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0009025732144!2d23.30953417687784!3d42.67044771964663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84f2d5c60b81%3A0x8a8a40797f16bfd7!2s84%20Cherni%20Vrah%20Blvd%2C%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2sus!4v1714425362340!5m2!1sen!2sus" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="info-section">
          <h3>Contact Details</h3>
          <ul class="contact-details">
            <li><strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
            <li><strong>Phone:</strong> <a href="tel:{{ site.phone }}">{{ site.phone }}</a></li>
          </ul>
        </div>
        <div class="info-section social-connect">
          <h3>Connect With Us</h3>
          <div class="social-links">
            <a href="https://github.com/zautre" target="_blank" rel="noopener" aria-label="GitHub">
              <img src="https://cdn.simpleicons.org/github/24292f" alt="GitHub" class="icon" width="24" height="24" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/company/zautre" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.068 0-1.143.925-2.069 2.069-2.069 1.143 0 2.068.926 2.068 2.069 0 1.142-.925 2.068-2.068 2.068zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.222 0z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section section section--gradient">
  <div class="container">
    <div class="section-header">
      <h2>Ready to start your project?</h2>
      <p class="subtitle">Let's discuss how Zautre can help your retail or luxury brand achieve its digital commerce goals.</p>
    </div>
    <div class="text-center">
      <a href="mailto:{{ site.email }}" class="btn btn-large">Contact Our Team</a>
    </div>
  </div>
</section>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
  // Form validation
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        if (!grecaptcha.getResponse()) {
          e.preventDefault();
          alert('Please complete the reCAPTCHA verification.');
        }
      });
    }
  });
</script>