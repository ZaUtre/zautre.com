---
layout: home
meta_title: "ZaUtre · Fast Salesforce Commerce Cloud engineering"
description: "Senior Salesforce Commerce Cloud engineering for retail and luxury brands — performance, architecture and zero-downtime delivery. Builders of Tokenwright: SFCC work quoted in minutes."
class: page-home
showcase:
  - montblanc
  - samsoe-samsoe
  - multiopticas
  - shiseido
  - dior
  - activebrands
clients:
  - Dior
  - Montblanc
  - Shiseido
  - Samsoe Samsoe
  - Active Brands
  - Kari Traa
  - Dæhlie
  - Sweet Protection
  - Multiopticas
  - EDITED
  - Zenkraft
---
{%- assign tw = site.data.tokenwright -%}

<section class="hero" aria-labelledby="hero-title">
  <div class="hero__bg" aria-hidden="true"><div class="hero__grid"></div><div class="hero__glow"></div><div class="hero__beam"></div></div>
  <div class="container hero__inner">
    <div class="hero__copy">
      <p class="eyebrow eyebrow--pill"><span class="dot dot--good" aria-hidden="true"></span>Salesforce Commerce Cloud · since 2015</p>
      <h1 class="hero__title" id="hero-title">Fast storefronts.<br><span class="hero__title-accent">Faster delivery.</span></h1>
      <p class="hero__lede">ZaUtre is a senior engineering team that builds and runs Salesforce Commerce Cloud for retail and luxury brands — tuned for Core Web Vitals, peak traffic and zero-downtime change. And with <a href="{{ '/tokenwright/' | relative_url }}">Tokenwright</a>, SFCC work is now quoted in minutes and shipped as merge-ready PRs in days.</p>
      <div class="hero__actions">
        <a class="btn btn--primary btn--lg" href="{{ '/contact/' | relative_url }}">Talk to an engineer {% include icon.html name="arrow" size="18" %}</a>
        <a class="btn btn--ghost btn--lg" href="{{ '/tokenwright/' | relative_url }}">{% include tokenwright-mark.svg size=20 %} Meet Tokenwright</a>
      </div>
      <ul class="hero__trust">
        <li>{% include icon.html name="check" size="15" stroke="2.25" %}Official Salesforce Partner</li>
        <li>{% include icon.html name="check" size="15" stroke="2.25" %}14+ certified experts</li>
        <li>{% include icon.html name="check" size="15" stroke="2.25" %}No account-manager layer</li>
      </ul>
    </div>
    <div class="hero__hud">
      {% include perf-hud.html %}
    </div>
  </div>
</section>

<section class="clients" aria-label="Selected clients">
  <p class="clients__label">Trusted with storefronts for</p>
  <div class="marquee">
    <div class="marquee__track">
      {%- for round in (1..2) %}
      <ul class="marquee__list"{% if round == 2 %} aria-hidden="true"{% endif %}>
        {%- for c in page.clients %}
        <li>{{ c }}</li>
        {%- endfor %}
      </ul>
      {%- endfor %}
    </div>
  </div>
</section>

{% include tokenwright-promo.html %}

<section class="section proof" aria-labelledby="proof-title">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Measured outcomes</p>
      <h2 id="proof-title">Speed is a feature.<br>Stability is the baseline.</h2>
      <p class="section-head__lede">Numbers from our case studies — delivered on live storefronts, not projected in a pitch deck.</p>
    </div>

    <div class="stats">
      <a class="stat" href="{{ '/projects/montblanc/' | relative_url }}" data-reveal>
        <span class="stat__value"><span data-count="4">4</span><small>wks</small></span>
        <span class="stat__label">Full platform takeover, from first call to running maintenance</span>
        <span class="stat__src">Montblanc · Samsoe Samsoe</span>
      </a>
      <a class="stat" href="{{ '/projects/samsoe-samsoe/' | relative_url }}" data-reveal>
        <span class="stat__value"><span data-count="100">100</span><small>%</small></span>
        <span class="stat__label">Uptime held through every platform transition</span>
        <span class="stat__src">Montblanc · Samsoe Samsoe · Multiopticas</span>
      </a>
      <a class="stat" href="{{ '/projects/multiopticas/' | relative_url }}" data-reveal>
        <span class="stat__value"><span data-count="99.9" data-decimals="1">99.9</span><small>%</small></span>
        <span class="stat__label">Platform uptime, including peak seasonal traffic</span>
        <span class="stat__src">Multiopticas</span>
      </a>
      <a class="stat" href="{{ '/projects/multiopticas/' | relative_url }}" data-reveal>
        <span class="stat__value"><span data-count="65">65</span><small>%</small></span>
        <span class="stat__label">Faster critical incident response after takeover</span>
        <span class="stat__src">Multiopticas</span>
      </a>
      <a class="stat" href="{{ '/projects/multiopticas/' | relative_url }}" data-reveal>
        <span class="stat__value"><span data-count="40">40</span><small>%</small></span>
        <span class="stat__label">Fewer bug reports through proactive maintenance</span>
        <span class="stat__src">Multiopticas</span>
      </a>
      <a class="stat" href="{{ '/projects/shiseido/' | relative_url }}" data-reveal>
        <span class="stat__value"><span data-count="4">4</span><small>+ yrs</small></span>
        <span class="stat__label">Architecture for a codebase serving sites worldwide</span>
        <span class="stat__src">Shiseido</span>
      </a>
    </div>
  </div>
</section>

<section class="section capabilities" aria-labelledby="cap-title">
  <div class="container">
    <div class="section-head section-head--split" data-reveal>
      <div>
        <p class="eyebrow">What we do</p>
        <h2 id="cap-title">Senior SFCC engineering, end&nbsp;to&nbsp;end.</h2>
      </div>
      <p class="section-head__lede">Architecture, build, performance and run — by certified engineers you talk to directly. No layers, no handoffs, no surprises.</p>
    </div>

    <div class="bento">
      {%- assign services = site.services | sort: "order" -%}
      {%- for s in services %}
      <a class="bento__card" href="{{ s.url | relative_url }}" data-reveal>
        <span class="bento__icon">{% include icon.html name=s.icon size="22" %}</span>
        <h3>{{ s.title }}</h3>
        <p>{{ s.summary | default: s.excerpt }}</p>
        <span class="link-arrow">Learn more {% include icon.html name="arrow" size="14" %}</span>
      </a>
      {%- endfor %}
      <a class="bento__card bento__card--tw" href="{{ '/tokenwright/' | relative_url }}" data-reveal>
        <span class="bento__icon bento__icon--tw">{% include tokenwright-mark.svg size=28 %}</span>
        <span class="pill pill--tw">New · {{ tw.status }}</span>
        <h3>{{ tw.name }}: Managed Tokens for SFCC</h3>
        <p>Plain-English request in, firm token quote in minutes, merge-ready pull request in days — reviewed line by line by a named senior operator.</p>
        <span class="link-arrow">See how it works {% include icon.html name="arrow" size="14" %}</span>
      </a>
    </div>
  </div>
</section>

<section class="section playbook" aria-labelledby="playbook-title">
  <div class="container playbook__grid">
    <div class="playbook__copy" data-reveal>
      <p class="eyebrow">Performance engineering</p>
      <h2 id="playbook-title">How we make Commerce Cloud fast — and keep it fast.</h2>
      <p>Performance isn't a sprint before Black Friday. We set budgets, wire them into delivery and watch real users, so every release is held to the same contract.</p>
      <ol class="pillars">
        <li><span class="pillars__n">01</span><div><h3>Measure</h3><p>Field data first: Core Web Vitals from real shoppers, then lab traces and the B2C Commerce code profiler to find the cause.</p></div></li>
        <li><span class="pillars__n">02</span><div><h3>Cache</h3><p>Page caching with remote includes for personalised slots, plus eCDN and image-service settings tuned to your catalogue.</p></div></li>
        <li><span class="pillars__n">03</span><div><h3>Trim</h3><p>JavaScript and third-party budgets per template. Every tag earns its bytes or gets deferred.</p></div></li>
        <li><span class="pillars__n">04</span><div><h3>Guard</h3><p>Budgets enforced in CI, load tests before peak, alerts on regressions — so fast stays fast.</p></div></li>
      </ol>
      <a class="link-arrow" href="{{ '/services/performance-engineering/' | relative_url }}">Explore performance engineering {% include icon.html name="arrow" size="14" %}</a>
    </div>

    <div class="playbook__code" data-reveal>
      <div class="code-window">
        <div class="code-window__bar"><span class="hud__dots" aria-hidden="true"><i></i><i></i><i></i></span><span>perf-budget.yml</span></div>
<pre class="code-window__body" tabindex="0"><code><span class="c"># The contract every release is held to</span>
<span class="k">core_web_vitals</span>:          <span class="c"># p75 · real users · mobile</span>
  <span class="k">lcp</span>: <span class="v">2.5s</span>               <span class="c"># largest contentful paint</span>
  <span class="k">inp</span>: <span class="v">200ms</span>              <span class="c"># interaction to next paint</span>
  <span class="k">cls</span>: <span class="v">0.1</span>                <span class="c"># cumulative layout shift</span>
<span class="k">storefront</span>:
  <span class="k">page_cache</span>: <span class="v">on</span>          <span class="c"># remote includes for personal bits</span>
  <span class="k">images</span>: <span class="v">webp/avif</span>       <span class="c"># sized, lazy below the fold</span>
  <span class="k">third_party</span>: <span class="v">deferred</span>   <span class="c"># consent-gated and budgeted</span>
  <span class="k">js_budget</span>: <span class="v">150kb</span>        <span class="c"># per template, compressed</span>
<span class="k">backend</span>:
  <span class="k">controllers</span>: <span class="v">profiled</span>   <span class="c"># quotas, API timeouts, caching</span>
  <span class="k">jobs</span>: <span class="v">off-peak</span>          <span class="c"># feeds never fight checkout</span>
<span class="k">release</span>:
  <span class="k">ci_gate</span>: <span class="v">lighthouse</span>     <span class="c"># regressions block the merge</span>
  <span class="k">peak</span>: <span class="v">load-tested</span>       <span class="c"># before every major campaign</span></code></pre>
        <div class="code-window__status"><span class="dot dot--good" aria-hidden="true"></span>This site ships under the same budgets — check the live panel above.</div>
      </div>
    </div>
  </div>
</section>

<section class="section work" aria-labelledby="work-title">
  <div class="container">
    <div class="section-head section-head--split" data-reveal>
      <div>
        <p class="eyebrow">Selected work</p>
        <h2 id="work-title">Trusted with storefronts that can't go down.</h2>
      </div>
      <a class="link-arrow" href="{{ '/projects/' | relative_url }}">All case studies {% include icon.html name="arrow" size="14" %}</a>
    </div>
    <div class="work-grid">
      {%- for id in page.showcase -%}
        {%- assign p = site.projects | where: "slug", id | first -%}
        {%- if p %}{% include project-card.html project=p %}{% endif -%}
      {%- endfor %}
    </div>
  </div>
</section>

<section class="section voices" aria-labelledby="voices-title">
  <div class="container">
    <div class="section-head" data-reveal>
      <p class="eyebrow">Client voices</p>
      <h2 id="voices-title">The partner teams keep.</h2>
    </div>
    <div class="voices__grid">
      {%- assign quoted = site.projects | where_exp: "p", "p.testimonial" -%}
      {%- for p in quoted %}
      <figure class="voice" data-reveal>
        <blockquote><p>{{ p.testimonial }}</p></blockquote>
        <figcaption>
          <span class="voice__name">{{ p.testimonial_author }}</span>
          <span class="voice__role">{% if p.testimonial_author_position %}{{ p.testimonial_author_position }}, {% endif %}{{ p.testimonial_position | default: p.client }}</span>
        </figcaption>
      </figure>
      {%- endfor %}
    </div>
  </div>
</section>

{% include cta-band.html %}
