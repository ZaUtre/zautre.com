---
layout: page
title: About
subtitle: Dedicated e-commerce experts since 2015
permalink: /about/
---

<section class="about-header section section--gradient">
  <div class="container">
    <div class="section-header">
      <h1>{{ page.title }}</h1>
      <p class="subtitle">{{ page.subtitle }}</p>
    </div>
  </div>
</section>

<div class="about-intro section section--white">
  <div class="container">
    <p class="section-lead">Zautre is a dedicated team of web architects, developers and QA experts focused on delivering exceptional e-commerce solutions for retail and luxury brands worldwide.</p>
  </div>
</div>

<div class="about-section section section--light">
  <div class="container">
    <div class="section-header">
      <h2>Our Story</h2>
    </div>
    <div class="two-column grid grid--2col grid--center-items">
      <div>
        <p>Founded in 2015 in Sofia, Bulgaria, Zautre began with a clear vision: to become a trusted partner for businesses seeking high-quality e-commerce solutions. Our journey started with a focus on Salesforce Commerce Cloud (SFCC), and over the years, we've expanded our expertise while maintaining our core commitment to excellence.</p>
        <p>Today, we proudly serve renowned retail and luxury brands across the globe, helping them overcome technical challenges and achieve their digital commerce goals through our specialized expertise and client-centered approach.</p>
      </div>
      <div class="card--image">
        <img src="{{ '/assets/images/about-team.jpg' | relative_url }}" alt="Zautre team">
      </div>
    </div>
  </div>
</div>

<div class="about-section values-section section section--white">
  <div class="container">
    <div class="section-header">
      <h2>Our Values</h2>
    </div>
    <div class="values-grid grid grid--3col">
      <div class="value-card card">
        <h3>Technical Excellence</h3>
        <p>We are a tech-first company, committed to delivering in-depth technical expertise and building stable, long-lasting solutions that stand the test of time.</p>
      </div>
      <div class="value-card card">
        <h3>Partnership Approach</h3>
        <p>We value long-term relationships and see ourselves as an extension of your team rather than just a service provider. Your success is our success.</p>
      </div>
      <div class="value-card card">
        <h3>Problem-Solving Mindset</h3>
        <p>We love challenges and thrive in demanding environments, approaching complex problems with creativity and determination.</p>
      </div>
      <div class="value-card card">
        <h3>Transparent Communication</h3>
        <p>We believe in open, honest dialogue with our clients, providing candid feedback that serves the project's best interests, even when it's not the easiest path.</p>
      </div>
      <div class="value-card card">
        <h3>No-Overhead Process</h3>
        <p>We offer direct communication with technical experts, eliminating unnecessary layers and ensuring efficient project delivery.</p>
      </div>
      <div class="value-card card">
        <h3>Cultural Blend</h3>
        <p>Based in Sofia, Bulgaria, we uniquely combine Western precision and attention to detail with an Eastern holistic perspective, allowing us to see both the details and the big picture.</p>
      </div>
    </div>
  </div>
</div>

<div class="about-section section section--light">
  <div class="container">
    <div class="section-header">
      <h2>Our Approach</h2>
    </div>
    <div class="section-content">
      <p>At Zautre, we prioritize quality and efficiency in everything we do. Our 'can-do' attitude drives us to find solutions where others might see obstacles. We believe that the best results come from collaborative partnerships, where we work alongside our clients to understand their unique challenges and business objectives.</p>
      <p>Unlike larger agencies with complex hierarchies, our streamlined structure gives you direct access to the technical experts working on your project. This 'no-overhead' process leads to faster communication, more efficient problem-solving, and ultimately better outcomes for your business.</p>
    </div>
  </div>
</div>

<div class="about-section team-section section section--white">
  <div class="container">
    <div class="section-header">
      <h2>Meet Our Team</h2>
      <p class="subtitle">Our greatest asset is our team of talented professionals who bring diverse skills and a shared commitment to excellence to every project.</p>
    </div>
    
    <div class="team-grid grid grid--3col">
      {% for member in site.team %}
        <div class="team-member card">
          {% if member.image %}
          <div class="card--image">
            <img src="{{ member.image | relative_url }}" alt="{{ member.name }}">
          </div>
          {% endif %}
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            {% if member.bio %}
            <p class="member-bio">{{ member.bio }}</p>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="about-section certifications-section section section--light">
  <div class="container">
    <div class="section-header">
      <h2>Our Certifications</h2>
      <p class="subtitle">We're proud of our team's expertise and the official recognition of our skills.</p>
    </div>
    
    <div class="certifications-grid grid grid--3col-md">
      <div class="certification card">
        <img src="{{ '/assets/images/salesforce-partner-badge.png' | relative_url }}" alt="Salesforce Partner">
        <p>Official Salesforce Partner</p>
      </div>
      <div class="certification card">
        <p>14+ Salesforce Certified Experts</p>
      </div>
      <div class="certification card">
        <p>12+ Successfully Completed SFCC Projects</p>
      </div>
    </div>
  </div>
</div>

<div class="cta-section section section--gradient">
  <div class="container">
    <div class="section-header">
      <h2>Ready to work with us?</h2>
      <p class="subtitle">Let's discuss how our team can help your retail or luxury brand achieve its e-commerce goals.</p>
    </div>
    <div class="text-center">
      <a href="{{ '/contact' | relative_url }}" class="btn btn-primary">Get in Touch</a>
    </div>
  </div>
</div>