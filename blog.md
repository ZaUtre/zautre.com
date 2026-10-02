---
layout: page
title: News
subtitle: Field notes on Salesforce Commerce Cloud, performance, architecture and AI-accelerated delivery.
permalink: /blog/
description: "News and engineering insights from ZaUtre: SFCC migrations, composable commerce, performance, AI in commerce and Tokenwright."
---
{%- comment -%} Filter buttons are generated from the categories actually used by posts. {%- endcomment -%}
{%- capture cat_csv -%}{% for c in site.categories %}{{ c[0] | downcase }}{% unless forloop.last %},{% endunless %}{% endfor %}{%- endcapture -%}
{%- assign cats = cat_csv | split: ',' | uniq | sort -%}

{% include page-hero.html eyebrow="News & insights" title="Notes from the engine room." subtitle=page.subtitle %}

<section class="section section--tight">
  <div class="container">
    {% if site.posts.size > 0 %}
    <div class="filters" role="group" aria-label="Filter posts by topic" data-filters=".post-list" data-exact>
      <button class="filter-btn" type="button" data-filter="all" aria-pressed="true">All</button>
      {%- for c in cats %}
      {%- case c -%}
        {%- when 'ai' -%}{%- assign label = 'AI' -%}
        {%- when 'sfcc' -%}{%- assign label = 'SFCC' -%}
        {%- when 'ecommerce' -%}{%- assign label = 'E-commerce' -%}
        {%- else -%}{%- assign label = c | replace: '-', ' ' | capitalize -%}
      {%- endcase %}
      <button class="filter-btn" type="button" data-filter="{{ c }}" aria-pressed="false">{{ label }}</button>
      {%- endfor %}
    </div>

    <div class="post-list">
      {%- for post in site.posts %}
      <article class="post-card{% if forloop.first %} post-card--lead{% endif %}" data-categories="{{ post.categories | join: ' ' | downcase }}">
        <a class="post-card__link" href="{{ post.url | relative_url }}">
          <p class="post-card__meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>{% if post.author %}<span aria-hidden="true">·</span><span>{{ post.author }}</span>{% endif %}</p>
          <h2 class="post-card__title">{{ post.title }}</h2>
          <p class="post-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 34 }}</p>
          <div class="post-card__foot">
            <span class="tag-list">{% for category in post.categories %}<span class="tag">{{ category }}</span>{% endfor %}</span>
            <span class="link-arrow">Read {% include icon.html name="arrow" size="14" %}</span>
          </div>
        </a>
      </article>
      {%- endfor %}
    </div>
    <p class="filters__empty" hidden data-filters-empty>No posts in that topic yet.</p>
    {% else %}
    <p class="lead">We'll be publishing insights soon — check back for SFCC best practices, performance and more.</p>
    {% endif %}
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <div class="newsletter">
      <div>
        <p class="eyebrow">Stay in the loop</p>
        <h2 class="newsletter__title">Get the next post as soon as it ships.</h2>
        <p>Occasional, useful, no fluff. Follow us on LinkedIn or subscribe via RSS.</p>
      </div>
      <div class="newsletter__actions">
        <a class="btn btn--primary" href="https://www.linkedin.com/company/{{ site.linkedin_username }}" target="_blank" rel="noopener">{% include icon.html name="linkedin" size="16" %} Follow on LinkedIn</a>
        <a class="btn btn--ghost" href="{{ '/feed.xml' | relative_url }}">RSS feed</a>
      </div>
    </div>
  </div>
</section>
