---
layout: post
title: "Building PICAsell: How AI Is Powering the Future of Recommerce"
date: 2026-05-27
author: Dimitar Peev
categories: [ai, innovation]
excerpt: Last year we were awarded an EU Innovation Grant to build PICAsell — a recommerce platform that uses AI and blockchain to help retailers give pre-owned products a second life. Here's what we've learned so far.
---

Last year we were awarded an EU Innovation Grant to build PICAsell — a recommerce platform that uses AI and blockchain to help retailers give pre-owned products a second life. Building it has taught us things about AI-assisted commerce that we didn't expect.

## The Problem We're Solving

Recommerce — the resale of pre-owned goods — is growing faster than new retail in almost every product category. For retailers, it represents an opportunity: a way to recapture revenue from the secondary market, deepen customer loyalty, and meet growing consumer demand for sustainability.

The operational challenge is significant, though. Unlike new products, pre-owned items are each unique. Every item needs individual assessment: condition grading, pricing, authentication, photography. At any meaningful volume, doing this manually is either slow, expensive, or both.

PICAsell addresses this through an AI-assisted intake workflow that reduces the time and expertise required to list a pre-owned item from an average of 20 minutes to under 3.

## How the AI Works

The core of PICAsell's AI capability is a multi-step product intelligence pipeline:

**1. Visual condition assessment.** A retailer photographs the item using a guided capture flow — the app instructs them to capture specific angles. The images are analysed by a computer vision model that identifies wear, damage, and condition indicators. The output is a standardised condition grade (New, Like New, Good, Fair) with supporting evidence surfaced for human review.

**2. Automated description generation.** The condition assessment, combined with product catalogue data (brand, model, materials), feeds into a language model that generates a product description optimised for discoverability and trust. Descriptions are brand-voice aware — a luxury resale listing reads differently than a sporting goods listing.

**3. Dynamic pricing.** Market price signals from comparable listings are combined with condition grade and demand data to generate a recommended price. The system learns from sale outcomes over time: items that sell quickly relative to their recommended price inform future recommendations.

**4. Provenance and authentication.** For high-value categories — luxury goods, limited-edition sportswear, collectibles — PICAsell uses blockchain to issue a verifiable provenance record at the point of intake. When the item sells, the record transfers to the new owner. This addresses one of the primary barriers to recommerce adoption in the luxury segment: the buyer's inability to verify authenticity independently.

## What We Didn't Expect

Building PICAsell has refined how we think about AI integration in commerce products generally.

**Trust calibration matters more than accuracy.** A 90% accurate condition grading model is not useful if retailers don't understand when to trust it and when to override it. We spent more time on the explainability layer — surfacing *why* the model made a particular assessment — than on pushing the model's accuracy from 90% to 92%. The explainability work drove adoption. The accuracy improvements on their own did not.

**The workflow design is the product.** AI handles the repetitive, pattern-matching parts of product intake. But the workflow around it — how retailers are guided through photography, how they review AI outputs, how exceptions are escalated — determines whether the system actually gets used. We iterated on the intake UX far more than we expected to.

**Integration complexity is the real bottleneck for retailers.** The technical capability to automate intake is not the constraint. The constraint is integrating a recommerce workflow into existing retail operations: connecting to the retailer's PIM, syncing inventory states, routing items through existing warehouse flows. This is where a commerce-native team — one that has built and maintained these integrations for primary commerce — has a real advantage.

## Current Status

PICAsell is in beta with a small number of retail partners across fashion and sporting goods. We're expanding the beta later this year, with a particular focus on luxury accessories — a category where authentication and provenance are highest-value.

If you're a retailer exploring recommerce and want to understand what an AI-assisted intake platform could mean for your operation, we'd be glad to have a conversation. [Reach out here](/contact).
