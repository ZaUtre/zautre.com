---
layout: page
title: Projects
subtitle: Case studies from retail and luxury brands — platform builds, takeovers, architecture and performance.
permalink: /projects/
description: "SFCC case studies: Dior, Montblanc, Shiseido, Samsoe Samsoe, Active Brands, Multiopticas and more — platform builds, zero-downtime takeovers, architecture and performance."
filters:
  - key: architecture
    label: Architecture
  - key: integrations
    label: Integrations
  - key: maintenance
    label: Maintenance
  - key: accessibility
    label: Accessibility
  - key: cartridge
    label: Cartridges
  - key: loyalty
    label: Loyalty
  - key: testing
    label: Testing
---

{% include page-hero.html eyebrow="Selected work" title="Storefronts that can't go down — and didn't." subtitle=page.subtitle %}

<section class="section section--tight">
  <div class="container">
    <div class="filters" role="group" aria-label="Filter case studies" data-filters=".work-grid">
      <button class="filter-btn" type="button" data-filter="all" aria-pressed="true">All <span class="filter-btn__count" data-count-for="all"></span></button>
      {%- for f in page.filters %}
      <button class="filter-btn" type="button" data-filter="{{ f.key }}" aria-pressed="false">{{ f.label }} <span class="filter-btn__count" data-count-for="{{ f.key }}"></span></button>
      {%- endfor %}
    </div>

    <div class="work-grid">
      {%- assign featured = site.projects | where: "featured", true -%}
      {%- assign rest = site.projects | where_exp: "p", "p.featured != true" -%}
      {%- for project in featured %}{% include project-card.html project=project headline="h2" eager=true %}{% endfor -%}
      {%- for project in rest %}{% include project-card.html project=project headline="h2" %}{% endfor -%}
    </div>
    <p class="filters__empty" hidden data-filters-empty>No case studies match that filter yet.</p>
  </div>
</section>

{% include cta-band.html title="Ready to become our next case study?" text="Let's talk about what your platform needs next — a takeover, a rebuild, or making what you have faster." %}
