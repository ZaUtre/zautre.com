---
layout: page
title: Projects
subtitle: Delivering results for retail and luxury brands worldwide
permalink: /projects/
---

<div class="projects-intro">
  <p class="lead">Explore our case studies to see how Zautre has helped retail and luxury brands overcome challenges and achieve exceptional results with our e-commerce solutions.</p>
</div>

<div class="projects-filters">
  <div class="filter-group">
    <label>Filter by:</label>
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="sfcc">SFCC</button>
    <button class="filter-btn" data-filter="architecture">Architecture</button>
    <button class="filter-btn" data-filter="loyalty">Loyalty</button>
    <button class="filter-btn" data-filter="integrations">Integrations</button>
    <button class="filter-btn" data-filter="analytics">Analytics</button>
    <button class="filter-btn" data-filter="composable-commerce">Composeable Commerce</button>
  </div>
</div>

<div class="projects-grid">
  {% for project in site.projects %}
    <div class="project-card" data-categories="{{ project.categories | join: ' ' }}">
      {% if project.image %}
      <div class="project-image">
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
      </div>
      {% endif %}
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        {% if project.client %}
        <p class="client">{{ project.client }}</p>
        {% endif %}
        <p>{{ project.solution }}</p>
        <div class="project-tags">
          {% for tag in project.technologies limit:3 %}
          <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
        <a href="{{ project.url | relative_url }}" class="btn">View Case Study</a>
      </div>
    </div>
  {% endfor %}
</div>

<div class="cta-section">
  <div class="cta-content">
    <h2>Ready to become our next success story?</h2>
    <p>Let's discuss how we can help your retail or luxury brand achieve exceptional e-commerce results.</p>
    <a href="{{ '/contact' | relative_url }}" class="btn btn-primary">Contact Us</a>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'block';
          } else {
            const categories = card.getAttribute('data-categories');
            if (categories && categories.includes(filter)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  });
</script>