---
layout: page
title: Contact
subtitle: Tell us about your storefront. You'll hear back from an engineer — not a sales queue.
permalink: /contact/
description: "Contact ZaUtre's SFCC engineers in Sofia, Bulgaria. Platform builds, takeovers, performance reviews and team augmentation for retail and luxury brands."
---

{% include page-hero.html eyebrow="Contact" title="Let's talk about your platform." subtitle=page.subtitle %}

<section class="section section--tight">
  <div class="container contact-grid">
    <div class="form-card">
      <h2 class="form-card__title">Send us a message</h2>
      <form class="form" action="https://formspree.io/f/xrbqybvg" method="POST" data-contact-form>
        <div class="form__row">
          <div class="field">
            <label for="name">Your name <span aria-hidden="true">*</span></label>
            <input type="text" name="name" id="name" autocomplete="name" required>
          </div>
          <div class="field">
            <label for="email">Work email <span aria-hidden="true">*</span></label>
            <input type="email" name="email" id="email" autocomplete="email" required>
          </div>
        </div>
        <div class="form__row">
          <div class="field">
            <label for="company">Company</label>
            <input type="text" name="company" id="company" autocomplete="organization">
          </div>
          <div class="field">
            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject">
          </div>
        </div>
        <div class="field">
          <label for="message">How can we help? <span aria-hidden="true">*</span></label>
          <textarea name="message" id="message" rows="6" required placeholder="A few lines about your storefront, timeline and what's slowing you down."></textarea>
        </div>
        <div class="field field--captcha">
          <div class="g-recaptcha" data-sitekey="6Lf44y0rAAAAAII3xboOsDq6cbfICiEiU80EqyaK" data-theme="dark"></div>
          <p class="field__hint" data-captcha-hint>Spam protection loads when you start typing.</p>
        </div>
        <div class="form__actions">
          <button type="submit" class="btn btn--primary btn--lg">Send message {% include icon.html name="arrow" size="18" %}</button>
          <p class="form__note">We reply within one business day.</p>
        </div>
        <p class="form__error" role="alert" hidden data-form-error></p>
      </form>
    </div>

    <aside class="contact-side">
      <div class="side-card">
        <h2 class="side-card__title">Direct lines</h2>
        <ul class="contact-list">
          <li>{% include icon.html name="mail" size="18" %}<div><span>Email</span><a href="mailto:{{ site.email }}">{{ site.email }}</a></div></li>
          <li>{% include icon.html name="phone" size="18" %}<div><span>Phone</span><a href="tel:{{ site.phone }}">{{ site.phone }}</a></div></li>
          <li>{% include icon.html name="pin" size="18" %}<div><span>Office</span>{{ site.address }}</div></li>
        </ul>
        <div class="contact-social">
          <a href="https://www.linkedin.com/company/{{ site.linkedin_username }}" target="_blank" rel="noopener" class="btn btn--ghost btn--sm">{% include icon.html name="linkedin" size="16" %} LinkedIn</a>
          <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener" class="btn btn--ghost btn--sm">{% include icon.html name="github" size="16" %} GitHub</a>
        </div>
      </div>

      <div class="map-frame">
        <iframe title="Map: ZaUtre office, 84 Cherni Vrah Blvd., Sofia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0009025732144!2d23.30953417687784!3d42.67044771964663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84f2d5c60b81%3A0x8a8a40797f16bfd7!2s84%20Cherni%20Vrah%20Blvd%2C%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2sus!4v1714425362340!5m2!1sen!2sus" width="600" height="260" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>

      {% include tokenwright-strip.html title="Have a specific SFCC task? Tokenwright quotes it against your code in minutes." %}
    </aside>
  </div>
</section>
