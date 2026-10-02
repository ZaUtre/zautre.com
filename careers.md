---
layout: page
title: Careers
subtitle: Work on complex commerce platforms for global brands — with direct impact and no bureaucracy.
permalink: /careers/
description: "Careers at ZaUtre: SFCC developers, QA engineers, architects and project managers in Sofia, Bulgaria. Work on platforms for global retail and luxury brands."
---

{% include page-hero.html eyebrow="Careers" title="Build commerce that has to be fast." subtitle=page.subtitle %}

<section class="section section--tight">
  <div class="container split">
    <div class="split__copy">
      <p class="eyebrow">Why ZaUtre</p>
      <h2>Senior work, real ownership.</h2>
      <p class="lead">We're always looking for talented, passionate people to help us deliver exceptional e-commerce solutions for retail and luxury brands.</p>
      <p>Joining ZaUtre means becoming part of a team that values technical excellence, collaborative problem-solving and personal growth. You'll work on challenging projects for renowned international brands while developing your skills in a supportive environment.</p>
      <p>Our no-overhead approach means direct impact without unnecessary bureaucracy — and with Tokenwright, you'll work at the frontier of AI-accelerated delivery.</p>
    </div>
    <div class="split__media">
      {% include picture.html src="/assets/images/careers-team.jpg" alt="ZaUtre team members together outdoors" width="1600" height="1200" class="media-frame" %}
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Benefits</p>
      <h2>What you get.</h2>
    </div>
    <div class="card-grid card-grid--3">
      <article class="card"><span class="card__num">01</span><h3>Challenging work</h3><p>Complex, rewarding projects for prestigious global brands in retail and luxury.</p></article>
      <article class="card"><span class="card__num">02</span><h3>Professional growth</h3><p>Continuous learning, including certification programmes like our SFCC Developer Training.</p></article>
      <article class="card"><span class="card__num">03</span><h3>Collaborative culture</h3><p>A supportive team that shares knowledge and celebrates success together.</p></article>
      <article class="card"><span class="card__num">04</span><h3>Direct impact</h3><p>See how your work drives client success, thanks to our flat structure.</p></article>
      <article class="card"><span class="card__num">05</span><h3>Work-life balance</h3><p>Flexible arrangements that respect your personal time.</p></article>
      <article class="card"><span class="card__num">06</span><h3>Team building</h3><p>Regular activities and events that build strong relationships.</p></article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        <p class="eyebrow">Open roles</p>
        <h2>Current openings.</h2>
      </div>
      <p class="section-head__lede">We're especially interested in technical architects, project managers, frontend and backend developers, and QA specialists.</p>
    </div>

    {% if site.data.jobs.size > 0 %}
    <div class="jobs">
      {% for job in site.data.jobs %}
      <article class="job">
        <div class="job__head">
          <h3>{{ job.title }}</h3>
          <span class="pill">{{ job.type }}</span>
        </div>
        <p>{{ job.description }}</p>
        <ul class="check-list check-list--compact">
          {% for req in job.requirements limit:3 %}
          <li>{% include icon.html name="check" size="15" stroke="2.25" %}<span>{{ req }}</span></li>
          {% endfor %}
        </ul>
        {%- capture apply_url -%}{% if job.link %}{{ job.link }}{% else %}/contact/?subject={{ 'Application: ' | append: job.title | uri_escape }}{% endif %}{%- endcapture -%}
        <a href="{{ apply_url | relative_url }}" class="btn btn--ghost btn--sm">Apply now {% include icon.html name="arrow" size="14" %}</a>
      </article>
      {% endfor %}
    </div>
    {% else %}
    <div class="card card--outline">
      <p>We don't have any specific openings at the moment, but we're always interested in meeting talented professionals.</p>
    </div>
    {% endif %}

    <p class="jobs__note">Don't see your role? Send your CV and a short introduction to <a href="mailto:careers@zautre.com">careers@zautre.com</a>.</p>
  </div>
</section>

{% include cta-band.html eyebrow="Join us" title="Love fast, well-built commerce? So do we." text="If you're passionate about e-commerce technology and want to work with a team that values expertise and collaboration, we'd love to hear from you." button="Get in touch" href="/contact/?subject=Career%20inquiry" %}
