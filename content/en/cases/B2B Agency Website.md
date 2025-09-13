---
title: Website for B2B Agency Anvoria
description: A corporate website for a company providing business process outsourcing services.
seoDescription: A portfolio website for the B2B agency Anvoria, developed with Nuxt.js. The project includes service pages, pricing, a contact form with Telegram integration, and lead storage in MongoDB.
year: 2025
sort: 1
layout: project
tags:
  - Vue.js
icons:
  - devicon:nuxt
  - devicon:tailwindcss
published: true
link: https://anvoria.ru
image: /image/hhholographic.png
---

# Website for B2B Agency Anvoria

## Introduction

This is a portfolio website project for "Anvoria" a company specializing in business process outsourcing, including call center services, recruitment, and chatbot development. My task was to develop the entire website from scratch, covering both the client-side and server-side.

A key feature is the contact form. It not only collects applications using validation with `vee-validate` and `zod` but also instantly notifies managers via Telegram and saves all leads to a MongoDB database for further analysis.

## Links

- Git Repository - **current project**

## Technology Stack Selection

**Nuxt.js** was chosen as the main framework. It is ideal for creating fast, SEO-optimized websites. The built-in server-side functionality (`/server`) made it easy to implement an API for the contact form without needing a separate backend server.

For styling, I used **TailwindCSS**, which significantly accelerated the development of the responsive interface. The **MongoDB** database was chosen for its flexibility and ease of integration with the Nuxt.js Node.js environment via `nuxt-mongoose`.

## Workflow

During the project, I implemented the following functionality:

- Developed a multi-page site structure using Nuxt's file-based routing.
- Created numerous reusable UI components (buttons, modals, input fields).
- Implemented a complex contact form with client-side and server-side validation using `vee-validate` and `zod`.
- Set up a server endpoint (`/api/leads`) to receive form data.
- Integrated `node-telegram-bot-api` to send notifications about new applications to a manager's chat.
- Connected `nuxt-mongoose` to save all leads to a MongoDB database.
- Used `runtimeConfig` in Nuxt for securely storing API keys and tokens.
- Independently configured a VPS for deploying the application, including setting up Nginx as a reverse proxy and running the application under the PM2 process manager.

<!-- ## Screenshots

::gallery
---
alts:
  - Home page
  - Services page
  - Pricing
  - Contact form
  - Mobile version
images:
  - /image/cases/anvoria/image-1.jpg
  - /image/cases/anvoria/image-2.jpg
  - /image/cases/anvoria/image-3.jpg
  - /image/cases/anvoria/image-4.jpg
  - /image/cases/anvoria/image-5.jpg
---
:: -->
