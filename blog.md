---
layout: page
title: News
subtitle: E-commerce expertise and industry insights
permalink: /blog/
---

<div class="blog-intro">
  <p class="lead">Stay updated with the latest e-commerce trends, technical insights, and best practices for retail and luxury brands. Our team of experts shares valuable knowledge to help you stay ahead in the digital commerce landscape.</p>
</div>

<div class="blog-filters">
  <div class="filter-group">
    <label>Filter by:</label>
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="sfcc">SFCC</button>
    <button class="filter-btn" data-filter="ecommerce">E-commerce</button>
    <button class="filter-btn" data-filter="technology">Technology</button>
    <button class="filter-btn" data-filter="retail">Retail</button>
  </div>
</div>

<div class="blog-grid">
  {% for post in site.posts %}
    <div class="blog-card" data-categories="{{ post.categories | join: ' ' }}">
      {% if post.image %}
      <div class="blog-image">
        <a href="{{ post.url | relative_url }}">
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
        </a>
      </div>
      {% endif %}
      <div class="blog-content">
        <div class="blog-meta">
          <span class="date">{{ post.date | date: "%B %d, %Y" }}</span>
          {% if post.author %}
          <span class="author">by {{ post.author }}</span>
          {% endif %}
        </div>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        <div class="blog-tags">
          {% for category in post.categories %}
          <span class="tag">{{ category }}</span>
          {% endfor %}
        </div>
        <a href="{{ post.url | relative_url }}" class="read-more">Read More</a>
      </div>
    </div>
  {% endfor %}
</div>

{% if site.posts.size == 0 %}
<div class="no-posts">
  <p>We'll be publishing insightful articles soon. Check back later for valuable content on e-commerce trends, SFCC best practices, and more.</p>
</div>
{% endif %}

<div class="newsletter-section">
  <div class="newsletter-content">
    <h2>Subscribe to Our Newsletter</h2>
    <p>Get the latest e-commerce insights delivered directly to your inbox.</p>
    <form class="newsletter-form" action="https://formspree.io/f/your-formspree-id" method="POST">
      <div class="form-group">
        <input type="email" name="email" placeholder="Your email address" required>
        <button type="submit" class="btn">Subscribe</button>
      </div>
    </form>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter blog posts
        blogCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'flex';
          } else {
            const categories = card.getAttribute('data-categories');
            if (categories && categories.includes(filter)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  });
</script>