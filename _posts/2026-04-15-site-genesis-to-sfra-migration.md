---
layout: post
title: "From Site Genesis to SFRA: What the Migration Really Takes"
date: 2026-04-15
author: Dimitar Peev
categories: [sfcc, development]
excerpt: After completing more than a dozen Site Genesis to SFRA migrations for brands across Europe, we've learned that the technical lift is only half the story. Here's what teams consistently underestimate.
---

After completing more than a dozen Site Genesis to SFRA migrations for brands across Europe, we've learned that the technical lift is only half the story. Here's what teams consistently underestimate.

## Why Brands Are Still on Site Genesis

Salesforce deprecated Site Genesis in favour of SFRA (Storefront Reference Architecture) years ago, yet a significant portion of active SFCC storefronts still run on it. The reason is straightforward: the migration has no obvious forcing function until something breaks. Maintenance costs creep up, community cartridge support thins out, and eventually a compliance requirement or a platform upgrade forces the decision. By that point, the technical debt has compounded.

## What Teams Underestimate

### 1. Cartridge inventory takes longer than expected

Most platforms have 20–40 custom or third-party cartridges accumulated over years. Each one needs to be audited: Is it still used? Is there an SFRA-compatible version? Does the vendor still support it? We've seen cartridges that are called in exactly one business flow, undocumented, that no one remembered adding.

Plan for at least two weeks of cartridge inventory work before writing a single line of migration code. The findings from this phase determine your entire timeline.

### 2. Business logic is buried in controllers

Site Genesis controllers accumulate business logic over years of quick fixes. SFRA moves to a pipeline model that encourages cleaner separation, but the migration doesn't automatically untangle that logic — someone has to read it, understand it, and consciously decide where it goes. For a mid-sized storefront, this review alone can take a month.

### 3. Custom checkout flows are the highest-risk surface

Checkout is where the most business-critical customisations live: loyalty integrations, payment providers, address validation, gift options, B2B quote flows. These rarely have comprehensive test coverage in Site Genesis implementations, because they were often built under deadline pressure. Before migration, write end-to-end tests against your existing checkout. They become your regression baseline.

### 4. QA scope balloons at the end

Teams often staff the QA phase too lean, expecting that a side-by-side comparison is sufficient. It isn't. SFRA renders differently, handles session state differently, and has different caching behaviours. Plan for a dedicated QA phase of at least three weeks for a mid-complexity store, longer if you have internationalisation requirements.

## What Actually Goes Well

Page Designer is often a pleasant surprise. Brands that migrate find that giving merchandising teams direct content control — without developer involvement for every banner change — pays back the migration cost in the first six months.

Performance is the other consistent win. SFRA's cleaner architecture is easier to optimise, and the move to SFRA is often the trigger for a broader performance audit that results in meaningfully faster page loads.

## Our Recommended Migration Approach

We run migrations in three phases:

1. **Parallel build** — the SFRA storefront is developed alongside the live Site Genesis store, with feature parity as the goal. No traffic is cut over until parity is confirmed.
2. **Shadow traffic** — a percentage of real production traffic is duplicated to the SFRA environment. Backend operations (inventory, order management) remain on the live store. This surfaces edge cases that testing never catches.
3. **Staged cutover** — we move traffic by geography or customer segment, not all at once. This limits blast radius if an issue surfaces post-launch.

The total timeline for a mid-complexity storefront — one with a custom checkout, several integrations, and a decade of accumulated cartridges — is typically 16–24 weeks when done properly. Attempts to compress this below 12 weeks almost always result in a deferred second project to fix the first one.

If your team is approaching this decision, we're happy to do a cartridge inventory assessment as a starting point. Reach out through our [contact page](/contact).
