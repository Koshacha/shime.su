---
title: Telegram Bot for a B2B Company
description: A multifunctional bot to automate interactions with clients and partners.
seoDescription: A Telegram bot for a B2B company, developed with NestJS and Telegraf.js. The project features a modular architecture, interactive wizards, an admin panel, and CI/CD using Docker and Drone.
year: 2025
sort: 2
layout: project
tags:
  - Backend
icons:
  - devicon:nestjs
  - devicon:typescript
  - devicon:docker
published: true
image: /image/tg-bot.jpg
---

# Telegram Bot for a B2B Company

## Introduction

This project is a multifunctional Telegram bot developed for a B2B company. The main goal was to automate and simplify interactions with clients and partners by providing them with a convenient tool for obtaining information and solving common tasks. The bot serves as the primary point of contact, reducing the workload on managers and speeding up processes.

As the project is under an NDA, the portfolio will only feature a video demonstrating its functionality.

## Links

- Git Repository: **Private (NDA)**

## Technology Stack Selection

**NestJS** with **TypeScript** was chosen for development. This decision ensured strong typing, a clear modular architecture, and scalability, which is crucial for the project's maintenance and future development.

For interacting with the Telegram API, the **Telegraf.js** library was used with the `nestjs-telegraf` integration. It provides a user-friendly interface for all Telegram features, including interactive scenes/wizards.

For deployment, I set up containerization using **Docker** and **Docker Compose**, as well as a CI/CD pipeline in **Drone CI**. This allowed for the automation of building and deploying the application with each update.

## Modules and Functionality

The bot's architecture is built on modules, each responsible for its own logical part.

| Module         | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| **Start**      | Handles welcoming new users and basic navigation.                            |
| **Info**       | Provides general information about the company, services, and partners.      |
| **FAQ**        | Implements a section with frequently asked questions for user self-service.  |
| **Support**    | Contains an interactive wizard for creating technical support tickets.       |
| **Khabarovsk** | A region-specific module with a wizard for submitting verification requests. |
| **Admin**      | Functionality for bot administrators (e.g., broadcasts or user management).  |

## Workflow

During the project, I completed the following tasks:

- Designed and implemented the modular application architecture using NestJS.
- Developed interactive multi-step wizards to collect data from users, such as for verification requests or support tickets.
- Implemented an access control system using guards to separate logic for administrators and regular users.
- Configured dialogue state management (session management) to ensure the correct operation of the wizards.
- Prepared and configured the deployment environment by writing a `Dockerfile` and `docker-compose.yml`.
- Set up CI/CD in Drone CI to automate the building and deployment of the project to the server.
