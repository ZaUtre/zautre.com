---
layout: page
title: About
subtitle: A senior, certified Salesforce Commerce Cloud team in Sofia, Bulgaria — building for retail and luxury brands since 2015.
permalink: /about/
description: "ZaUtre is a team of SFCC architects, developers and QA engineers in Sofia, Bulgaria, serving retail and luxury brands since 2015. Official Salesforce Partner."
---

{% include page-hero.html eyebrow="About ZaUtre" title="Engineers first. Since 2015." subtitle=page.subtitle %}

<section class="section section--tight">
  <div class="container split">
    <div class="split__copy">
      <p class="eyebrow">Our story</p>
      <h2>A trusted partner for commerce that has to work.</h2>
      <p class="lead">ZaUtre is a dedicated team of web architects, developers and QA experts focused on delivering exceptional e-commerce solutions for retail and luxury brands worldwide.</p>
      <p>Founded in 2015 in Sofia, Bulgaria, ZaUtre began with a clear vision: to become a trusted partner for businesses seeking high-quality e-commerce solutions. Our journey started with a focus on Salesforce Commerce Cloud, and over the years we've expanded our expertise while keeping our core commitment to excellence.</p>
      <p>Today we serve renowned retail and luxury brands across the globe — and with <a href="{{ '/tokenwright/' | relative_url }}">Tokenwright</a>, we've productized what we know about SFCC delivery into an AI-accelerated service that quotes work in minutes.</p>
    </div>
    <div class="split__media">
      {% include picture.html src="/assets/images/about-team.jpg" alt="The ZaUtre team on a team hike, holding a ZaUtre banner" width="1600" height="1067" class="media-frame" %}
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Our values</p>
      <h2>How we work, in six lines.</h2>
    </div>
    <div class="card-grid card-grid--3">
      <article class="card"><span class="card__num">01</span><h3>Technical excellence</h3><p>A tech-first company, committed to in-depth expertise and stable, long-lasting solutions that stand the test of time.</p></article>
      <article class="card"><span class="card__num">02</span><h3>Partnership approach</h3><p>We value long-term relationships and act as an extension of your team rather than just a service provider.</p></article>
      <article class="card"><span class="card__num">03</span><h3>Problem-solving mindset</h3><p>We love challenges and thrive in demanding environments, approaching complex problems with creativity and determination.</p></article>
      <article class="card"><span class="card__num">04</span><h3>Transparent communication</h3><p>Open, honest dialogue and candid feedback that serves the project — even when it's not the easiest path.</p></article>
      <article class="card"><span class="card__num">05</span><h3>No-overhead process</h3><p>Direct communication with the technical experts doing the work. No unnecessary layers, faster delivery.</p></article>
      <article class="card"><span class="card__num">06</span><h3>Cultural blend</h3><p>Western precision and attention to detail combined with an Eastern holistic perspective — the details and the big picture.</p></article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container split split--reverse">
    <div class="split__copy">
      <p class="eyebrow">Our approach</p>
      <h2>Direct access to the people doing the work.</h2>
      <p>At ZaUtre, we prioritise quality and efficiency in everything we do. Our can-do attitude drives us to find solutions where others might see obstacles, and we believe the best results come from collaborative partnerships where we understand your challenges and business objectives.</p>
      <p>Unlike larger agencies with complex hierarchies, our streamlined structure gives you direct access to the technical experts working on your project. That no-overhead process means faster communication, more efficient problem-solving and better outcomes for your business.</p>
    </div>
    <div class="split__media">
      <div class="badge-panel">
        {% include picture.html src="/assets/images/salesforce-partner-badge.png" alt="Salesforce Partner" width="1022" height="300" %}
        <dl class="badge-panel__stats">
          <div><dt>14+</dt><dd>Salesforce certified experts</dd></div>
          <div><dt>12+</dt><dd>SFCC projects delivered end to end</dd></div>
          <div><dt>2015</dt><dd>Founded in Sofia, Bulgaria</dd></div>
        </dl>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Leadership</p>
      <h2>Meet the founders.</h2>
      <p class="section-head__lede">Our greatest asset is our team of talented professionals who bring diverse skills and a shared commitment to excellence to every project.</p>
    </div>
    <div class="team-grid">
      {%- assign members = site.team | sort: "order" -%}
      {%- for member in members %}
      <article class="person">
        {% if member.image %}{% include picture.html src=member.image alt=member.name width="400" height="400" class="person__photo" %}{% endif %}
        <div class="person__body">
          <h3>{{ member.name }}</h3>
          <p class="person__role">{{ member.role }}</p>
          {% if member.bio %}<p>{{ member.bio }}</p>{% endif %}
        </div>
      </article>
      {%- endfor %}
    </div>
  </div>
</section>

{% include cta-band.html title="Ready to work with us?" text="Let's discuss how our team can help your retail or luxury brand reach its e-commerce goals." %}
