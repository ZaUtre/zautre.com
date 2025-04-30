---
layout: page
title: Careers
subtitle: Join our team of e-commerce experts
permalink: /careers/
---

<div class="careers-intro">
  <p class="lead">At Zautre, we're always looking for talented, passionate individuals to join our team and help us deliver exceptional e-commerce solutions for retail and luxury brands.</p>
</div>

<div class="careers-section">
  <h2>Why Work With Us</h2>
  <div class="two-column">
    <div>
      <p>Joining Zautre means becoming part of a team that values technical excellence, collaborative problem-solving, and personal growth. You'll work on challenging projects for renowned international brands while developing your skills in a supportive environment.</p>
      <p>Our 'no-overhead' approach means you'll have direct impact on projects without unnecessary bureaucracy, allowing you to focus on what you do best - creating exceptional technical solutions.</p>
    </div>
    <div class="careers-image">
      <img src="{{ '/assets/images/careers-team.jpg' | relative_url }}" alt="Zautre team working">
    </div>
  </div>
</div>

<div class="careers-section benefits-section">
  <h2>Benefits</h2>
  <div class="benefits-grid">
    <div class="benefit-card">
      <h3>Challenging Work</h3>
      <p>Work on complex and rewarding projects for prestigious global brands in the retail and luxury space.</p>
    </div>
    <div class="benefit-card">
      <h3>Professional Growth</h3>
      <p>Continuous learning opportunities, including certification programs like our SFCC Developer Training.</p>
    </div>
    <div class="benefit-card">
      <h3>Collaborative Culture</h3>
      <p>Be part of a supportive team that shares knowledge and celebrates success together.</p>
    </div>
    <div class="benefit-card">
      <h3>Direct Impact</h3>
      <p>See the results of your work and how it contributes to client success through our flat organizational structure.</p>
    </div>
    <div class="benefit-card">
      <h3>Work-Life Balance</h3>
      <p>We understand the importance of balance and offer flexible arrangements that respect your personal time.</p>
    </div>
    <div class="benefit-card">
      <h3>Team Building</h3>
      <p>Regular team activities and events to foster camaraderie and build strong relationships.</p>
    </div>
  </div>
</div>

<div class="careers-section roles-section">
  <h2>Who We're Looking For</h2>
  <p>We're particularly interested in candidates with experience in the following roles:</p>
  
  <div class="roles-grid">
    <div class="role-card">
      <h3>Technical Architects</h3>
      <p>Experienced professionals who can design and oversee complex e-commerce implementations, particularly in SFCC environments.</p>
    </div>
    <div class="role-card">
      <h3>Project Managers</h3>
      <p>Detail-oriented leaders who excel at coordinating technical teams and delivering projects on time and within scope.</p>
    </div>
    <div class="role-card">
      <h3>Frontend Developers</h3>
      <p>Skilled developers with expertise in modern web technologies and e-commerce platforms, especially SFCC.</p>
    </div>
    <div class="role-card">
      <h3>Backend Developers</h3>
      <p>Technical experts with strong programming skills and experience with e-commerce platforms, particularly SFCC.</p>
    </div>
    <div class="role-card">
      <h3>QA Specialists</h3>
      <p>Both manual and automation testing professionals who ensure the highest quality standards in our deliverables.</p>
    </div>
  </div>
</div>

<div class="careers-section openings-section">
  <h2>Current Openings</h2>
  <div class="job-listings">
    {% for job in site.data.jobs %}
      <div class="job-card">
        <div class="job-header">
          <h3>{{ job.title }}</h3>
          <span class="job-type">{{ job.type }}</span>
        </div>
        <div class="job-details">
          <p>{{ job.description }}</p>
          <ul class="job-requirements">
            {% for req in job.requirements limit:3 %}
            <li>{{ req }}</li>
            {% endfor %}
          </ul>
        </div>
        <a href="{{ job.link | default: '/contact?job=' | append: job.title | uri_escape }}" class="btn">Apply Now</a>
      </div>
    {% endfor %}
  </div>
  
  <div class="no-openings" style="{% if site.data.jobs.size > 0 %}display: none;{% endif %}">
    <p>We don't have any specific openings at the moment, but we're always interested in meeting talented professionals.</p>
    <p>If you believe you'd be a good fit for our team, please send your resume and a brief introduction to <a href="mailto:careers@zautre.com">careers@zautre.com</a>.</p>
  </div>
</div>

<div class="cta-section">
  <div class="cta-content">
    <h2>Join Our Team</h2>
    <p>If you're passionate about e-commerce technology and want to work with a team that values expertise, creativity, and collaboration, we'd love to hear from you.</p>
    <a href="{{ '/contact' | relative_url }}?subject=Career%20Inquiry" class="btn btn-primary">Get in Touch</a>
  </div>
</div>