# 🚀 B2B Outreach Automation: Email Finder & Sequence Writer — n8n Template

This template is built for founders, SDR teams, and agencies who prospect on LinkedIn and want the entire cold-outreach pipeline automated. It turns a simple LinkedIn profile URL into a verified email and a fully personalized 5-step email sequence—then logs everything to Google Sheets for tracking and iteration.

No more switching tools, copying data, or writing follow-ups by hand.  
**One run = research → verified email → 1 intro + 4 follow-ups → clean sheet update.**

---

## 🔧 Workflow Capabilities
- **LinkedIn → Verified Email**: Finds professional emails from LinkedIn profiles using AnyMailFinder, including `email_status` (e.g., verified/catch-all).  
- **Contextual Research**: Pulls company insights with Perplexity and scrapes LinkedIn profile details via Apify for richer personalization.  
- **AI Email Writing**: Generates 1 personalized intro email + 4 strategic follow-ups with subject lines using OpenAI; enforces a strict JSON structure to avoid messy output.  
- **Google Sheets CRM**: Writes all results back to your sheet (emails, names, titles, subjects, bodies, status).  
- **Safe & Scalable**: Processes leads in batches, with optional wait/rate-limits to respect APIs; supports append-or-update logic to prevent duplicates.  

---

## ⚙️ How It Works
1. **Read** new leads from Google Sheets (rows where `Email status` is empty).  
2. **Discover** the contact’s email via AnyMailFinder using the LinkedIn URL.  
3. **Enrich** with Perplexity company research + Apify LinkedIn scrape; clean profile data into a concise summary.  
4. **Generate** a complete sequence (intro + 4 follow-ups) via OpenAI with your base template and service description.  
6. **Write Back** to Google Sheets: subjects, bodies, verified email, status, and core fields (Full Name, Title, Company).  
7. **Loop** to the next profile.  

---

## 🛠️ Easy Setup
- Connect APIs (**Google Sheets, OpenAI, AnyMailFinder, Apify, Perplexity**).  
- Add your keys & paste your email template.  
- Fill the Google Sheet, run a test, then scale.  

---



## 🎁 What You Get
- Production-ready **n8n workflow (JSON)** for Cloud or Self-Hosted.  
- Pre-mapped **Google Sheet structure**.  
- Step-by-step setup notes inside **Sticky Notes**.  
- **10 bonus cold email templates** to swap into the base prompt.  
