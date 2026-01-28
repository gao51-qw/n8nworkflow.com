# 🔗 LinkedIn Scraper + Apollo + Apify + AI Outreach Workflow

A fully automated, end‑to‑end B2B lead generation and AI‑powered outreach system built using **n8n**, **Apollo**, **Apify**, **OpenAI**, **Tavily**, **Google Sheets**, and **Instantly.ai**.

This workflow transforms a simple form submission (job titles, company size, keywords, and location) into a complete sales‑ready outreach pipeline.

## 🚀 What This Workflow Does

This automation:

1. **Collects targeting criteria** via an n8n form (Job Title, Keywords, Location, Company Size, Campaign ID).
2. **Generates a fully structured Apollo search URL** using an LLM.
3. **Triggers an Apify Apollo Scraper Actor** and retrieves rich lead data.
4. **Cleans, normalizes, and structures each lead** using OpenAI.
5. **Uploads validated lead data to Google Sheets**, ensuring no duplicates.
6. **Runs deep company research using Tavily** to retrieve:

   * Company overview
   * Website product/service descriptions
   * Recent website news or blog posts
   * Third‑party sentiment from G2/Reddit
7. **Synthesizes all company information** into a comprehensive summary.
8. **Generates a personalized cold email body** using OpenAI, tailored to each lead.
9. **Uploads each lead + personalized message** into an **Instantly.ai campaign**.
10. **Loops through all leads** automatically until campaign is fully populated.

## 🧠 Why This Workflow Is Powerful

* Removes 100% of manual scraping.
* Creates **high‑quality, personalized outreach** at scale.
* Ensures every lead has:

  * Verified email
  * Company insights
  * Personalized messaging
* Produces higher reply rates using contextual relevance.
* Fully modular — replace models, adjust prompts, or add CRM integrations.

## 🛠️ Ideal Use Cases

* Agency founders running outbound campaigns for clients.
* SaaS founders targeting specific industries.
* B2B marketers wanting automated lead feeds.
* SDR teams scaling multistep personalized outreach.

## ⚡ Final Result

A continuous, automated pipeline that:

* Scrapes leads
* Enriches them
* Researches their companies
* Generates personalized messages
* Adds them to Instantly campaigns

— all triggered by a single form submission.
