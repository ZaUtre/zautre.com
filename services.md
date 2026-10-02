---
layout: page
title: Services
subtitle: Senior Salesforce Commerce Cloud engineering — from first architecture sketch to peak-day operations.
permalink: /services/
description: "SFCC development, performance engineering, team augmentation and conversational commerce for retail and luxury brands — plus Tokenwright, AI-accelerated SFCC delivery."
---
{%- assign tw = site.data.tokenwright -%}

{% include page-hero.html eyebrow="Services" title="Everything your storefront needs to be fast, stable and shippable." subtitle=page.subtitle %}

<section class="section section--tight">
  <div class="container">
    <div class="bento">
      {%- assign services = site.services | sort: "order" -%}
      {%- for s in services %}
      <a class="bento__card" href="{{ s.url | relative_url }}">
        <span class="bento__icon">{% include icon.html name=s.icon size="22" %}</span>
        <h2 class="bento__title">{{ s.title }}</h2>
        <p>{{ s.summary | default: s.excerpt }}</p>
        <span class="link-arrow">Learn more {% include icon.html name="arrow" size="14" %}</span>
      </a>
      {%- endfor %}
      <a class="bento__card bento__card--tw" href="{{ '/tokenwright/' | relative_url }}">
        <span class="bento__icon bento__icon--tw">{% include tokenwright-mark.svg size=28 %}</span>
        <span class="pill pill--tw">New · {{ tw.status }}</span>
        <h2 class="bento__title">{{ tw.name }}: Managed Tokens for SFCC</h2>
        <p>Productized, AI-accelerated delivery. Every task quoted in minutes against your actual code, with a firm cap, and delivered as a merge-ready pull request reviewed by a named senior operator.</p>
        <span class="link-arrow">See how it works {% include icon.html name="arrow" size="14" %}</span>
      </a>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        <p class="eyebrow">Disciplines</p>
        <h2>One team. Every discipline commerce needs.</h2>
      </div>
      <p class="section-head__lede">Our platform experience, agile delivery and deep technical skills give your business a solid foundation to grow on — whether you're launching a storefront, opening new channels or going headless.</p>
    </div>

    <div class="card-grid card-grid--3">
      <article class="card">
        <span class="card__num">01</span>
        <h3>Architecture</h3>
        <p>Broad expertise across every system in the commerce flow — B2C Commerce itself, OMS and ERP, and the third-party services your storefront depends on.</p>
      </article>
      <article class="card">
        <span class="card__num">02</span>
        <h3>Development</h3>
        <p>Only certified Salesforce Commerce Cloud developers. Based in Sofia (EET), used to working with teams across Europe, the US and Australia.</p>
      </article>
      <article class="card">
        <span class="card__num">03</span>
        <h3>Performance</h3>
        <p>Core Web Vitals, caching strategy, profiling and load testing — so the storefront is fast for shoppers and stable on peak days.</p>
      </article>
      <article class="card">
        <span class="card__num">04</span>
        <h3>Quality Assurance</h3>
        <p>QA engineers who specialise in commerce: manual and automated testing across every relevant browser and device, to the industry's highest standards.</p>
      </article>
      <article class="card">
        <span class="card__num">05</span>
        <h3>Project Management</h3>
        <p>Technically fluent project managers who keep teams on track and on budget, using agile practices exclusively.</p>
      </article>
      <article class="card">
        <span class="card__num">06</span>
        <h3>Analysis &amp; Consulting</h3>
        <p>We find the opportunities to raise conversion and efficiency — and we love a hard problem. The bigger the challenge, the better we work.</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Engagement models</p>
      <h2>Work with us the way that fits.</h2>
    </div>
    <div class="card-grid card-grid--3">
      <article class="card card--outline">
        {% include icon.html name="layers" size="22" class="card__icon" %}
        <h3>Complete projects</h3>
        <p>We provide the entire commerce technology team to build your storefront and all of its back-end integrations.</p>
      </article>
      <article class="card card--outline">
        {% include icon.html name="users" size="22" class="card__icon" %}
        <h3>Dedicated teams</h3>
        <p>A team shaped to your needs — a couple of developers for an integration, or a full squad with architecture and analysis on board.</p>
      </article>
      <article class="card card--outline">
        {% include icon.html name="activity" size="22" class="card__icon" %}
        <h3>Maintenance &amp; evolution</h3>
        <p>Going live is only the beginning. We take over running platforms in weeks, keep them healthy and keep shipping improvements.</p>
      </article>
    </div>
  </div>
</section>

{% include cta-band.html %}
