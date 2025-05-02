---
layout: page
hero_video: hero.mp4
---

<div class="hero-video-container">
  <video autoplay muted loop playsinline poster="{{ '/assets/images/hero-poster.png' | relative_url }}">
    <source src="{{ page.hero_video | relative_url }}" type="video/mp4">
  </video>
  
  <div class="hero-overlay">
    <div class="hero-section">
      <h1>E-commerce solutions for tomorrow</h1>
      <p class="hero-subtitle">Specialized e-commerce solutions for retail and luxury brands</p>
      <div class="hero-cta">
        <a href="/services/sfcc-development" class="btn btn-primary">SFCC Development</a>
        <a href="/contact" class="btn btn-secondary">Contact Us</a>
      </div>
      <div class="platform-logos">
        <img src="/assets/images/logo-salesforce3.webp" alt="Salesforce Commerce Cloud Logo" class="platform-logo">
        <img src="/assets/images/magento-logo-bw.webp" alt="Magento Logo" class="platform-logo">
        <img src="/assets/images/Shopify-Logo-bw.webp" alt="Shopify Logo" class="platform-logo">
        <img src="/assets/images/commercetools-bw.webp" alt="Commercetools Logo" class="platform-logo">
      </div>
    </div>
  </div>
</div>

<section class="expertise-section">
  <h2>Salesforce Commerce Cloud Experts</h2>
  <p>Zautre is a dedicated team of web architects, developers and QA specialists focused on delivering exceptional e-commerce solutions for retail and luxury brands.</p>
  
  <div class="expertise-stats">
    <div class="stat">
      <span class="number">Since 2015</span>
      <span class="label">Trusted Partner</span>
    </div>
    <div class="stat">
      <span class="number">100%</span>
      <span class="label">Certified Engineering Team</span>
    </div>
    <div class="stat">
      <span class="number">100+</span>
      <span class="label">SFCC Projects</span>
    </div>
  </div>
</section>

<section class="services-section">
  <h2>Our Services</h2>
  <div class="services-grid">
    {% for service in site.services %}
      <div class="service-card">
        <h3>{{ service.title }}</h3>
        <p>{{ service.excerpt }}</p>
        <a href="{{ service.url }}" class="read-more">Learn More</a>
      </div>
    {% endfor %}
  </div>
</section>

<section class="featured-project">
  <h2>Featured Project</h2>
  {% assign featured_project = site.projects | where: "featured", true | first %}
  {% if featured_project %}
    <div class="project-showcase">
      <div class="project-info">
        <h3>{{ featured_project.title }}</h3>
        <p>{{ featured_project.excerpt }}</p>
        <a href="{{ featured_project.url }}" class="btn">View Project Details</a>
      </div>
      {% if featured_project.image %}
        <div class="project-image">
          <img src="{{ featured_project.image }}" alt="{{ featured_project.title }}">
        </div>
      {% endif %}
    </div>
  {% endif %}
</section>

<section class="testimonial-section">
  <h2>What Our Clients Say</h2>
  <div class="testimonial">
    <blockquote>
      "Zautre's technical knowledge was impressive. They showed great understanding of our business requirements and delivered a solution that exceeded our expectations."
    </blockquote>
    <cite>— Client from Retail Industry</cite>
  </div>
</section>

<section class="cta-section">
  <h2>Ready to transform your e-commerce experience?</h2>
  <p>Let's discuss how Zautre can help your retail or luxury brand achieve its digital commerce goals.</p>
  <a href="/contact" class="btn btn-large">Get in Touch</a>
</section>