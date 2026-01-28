# 🤖 Interactive Academic Chatbot (Telegram + MongoDB)

## Overview 📋

This project is a template for building a complete academic virtual assistant using n8n. It connects to Telegram, answers frequently asked questions by querying MongoDB, keeps the community informed about key dates (via web scraping), and collects user feedback for continuous improvement.

![image.png](fileId:3268)

## How It Works

## Architecture and Workflow ⚙️

n8n: Orchestration of 3 workflows (chatbot, scraping worker, announcer).

Telegram: Frontend for user interaction and sending announcements.

MongoDB: Centralized database for FAQs, academic calendar, and feedback logs.

Web Scraping: HTTP Request and HTML Extract nodes to read the university's web calendar.

Cron: For automatic periodic executions (daily and weekly).

## Core Processes 🧠

Real-time reception of user queries via Telegram.

Querying MongoDB collections for FAQ answers and calendar dates.

Daily scraping of the university website to keep the calendar updated.

Instant logging of user feedback (👍/👎) in MongoDB.

Proactive sending of weekly announcements to the Telegram channel.

## Key Benefits ✅

Complete automation of student communication 24/7.

An always-accurate academic calendar database without manual intervention.

A built-in continuous improvement system through user feedback.

Proactive communication of important events to the entire community.

## Use Cases 💼

Automation of student support in universities, colleges, and institutions.

A virtual assistant for any organization needing to manage FAQs and a dynamic calendar.

An automated announcements channel to keep a community informed.

## Requirements 👨‍💻

n8n instance (self-hosted or cloud).

Credentials for a Telegram Bot (obtained from @BotFather).

Credentials for a MongoDB database (Connection URI).

URL of the academic calendar to be scraped.

## Authors 👥
- Doménica Amores
- Nicole Guevara
- Adrián Villamar
- Mentor: Jaren Pazmiño

Applicants to the CIAP Polytechnic Artificial Intelligence Club

![Logo_CIAP Tortuga y letras 2.png](fileId:3267)