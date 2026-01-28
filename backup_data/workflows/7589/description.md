Apollo Data Enrichment Using Company Id to automatically finds contacts for companies listed in your Google Sheet, enriches each person with emails and phone numbers via Apollo’s API, and writes verified contacts back to your procurement sheet while notifying your team on Telegram. 

![Screenshot 20250819 at 18.54.11.png](fileId:2149)

It removes the manual copy-paste scavenger hunt and turns hours of research into minutes like hiring a tireless intern who never asks for coffee.

## 💡 Why Use Apollo Data Enrichment Based Using Company Id?
- **Save time:** Automates enrichment of contacts from company IDs so you stop spending hours looking up emails and phone numbers.  
- **Solve noisy data:** Only queries relevant titles and email status filters so your outbound team sees fewer dead leads.  
- **Improve outcomes:** Ensures enriched, outreach ready contacts (emails/phones) land in your sheet. Faster follow-up, higher reply rates.  
- **Competitive edge:** Targets granular procurement roles (manager/head/lead/director) and marks processed companies to avoid duplicate work  makes your outreach becomes smarter and cleaner.

## ⚡ Perfect For
- **Outbound/BDR teams:** who need contacts ready for outreach  
- **Data ops / Growth teams:** who maintain lead lists and enrichment pipelines

## 🔧 How It Works
- **⏱ Trigger:** Scheduled trigger “Run Every X Minutes” that periodically picks unprocessed companies.  
- **📎 Process:** Reads companies from the Google Sheet, fetches the Apollo Company ID, builds title/seniority/email-status filters, calls Apollo `mixed_people/search` and then `people/match` for full contact details.  
- **🤖 Smart Logic:** Title Converter separates seniority from core titles, the Build Search Filters code node constructs precise Apollo query strings, and an If node branches when no people are found.  
- **💌 Output:** Writes enriched contacts into the *Purchasing / Procurement Roles* Google Sheet, updates *Leadsfeeder* to mark companies as processed, accepts phone updates via webhook and notifies via Telegram.  

## 🔐 Quick Setup
1. Import JSON file to your [n8n instances](https://n8n.partnerlinks.io/khaisastudio)  
2. Add credentials: Google Sheets OAuth2, Apollo API Key (HTTP Header Auth), Telegram Bot Token  
3. Customize: adjust `person titles` array, `person_seniorities`, `contact_email_status`, `Page` and `Per Page` settings in the **Define Search Settings** / **Title Converter** nodes  
4. Update: Google Sheet Data
5. Test: run the workflow with a small set of companies and verify rows appear in the sheet and Telegram notifications arrive

## 🧩 You'll Need
- Active [n8n instances](https://n8n.partnerlinks.io/khaisastudio)
- Google account with access to spreadsheet id
- Apollo API Key (HTTP Header Auth)  
- Telegram Bot token (for alerts)  
- Webhook enabled

## 🛠️ Level Up Ideas
- Push enriched contacts directly into your CRM (HubSpot, Pipedrive, Salesforce) to start sequences automatically  
- Add deduplication and scoring (e.g., prefer “verified” or “likely to engage” emails) and deprioritize unverified ones  
- Respect rate limits and add exponential backoff + request batching for large company lists

## Support

Made by: **[Khaisa Studio](https://khaisa.studio?utm_source=n8n-official)**
Category: `lead generation`, `data enrichment pipeline`, `apollo.io enrichment` 

Need custom work? **[Contact Us!](https://khaisa.studio/pages/contact)**
