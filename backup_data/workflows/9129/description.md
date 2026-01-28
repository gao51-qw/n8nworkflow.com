## Who’s it for

This template is perfect for digital agencies, SDRs, lead generators, or outreach teams that want to automatically convert LinkedIn company profiles into high-quality cold emails. If you spend too much time researching and writing outreach messages, this workflow does all the heavy lifting for you.

---

## What it does

Once a LinkedIn company profile URL is submitted via a web form, the workflow:
1. Scrapes detailed company data using **Dumpling AI**
2. Enriches the contact (email, name, country) using **Dropcontact**
3. Sends company data and contact info to **GPT-4**, which generates:
   - A personalized subject line (max 8 words)
   - A short HTML cold email (4–6 sentences)
4. Sends the cold email via **Gmail**
5. Logs the lead details to **Airtable** for tracking

All AI-generated content follows strict formatting and tone guidelines, ensuring it's professional, human, and clean.

---

## How it works

1. **Form Trigger**: Collects the LinkedIn URL  
2. **Dumpling AI**: Extracts company name, description, size, location, website, etc.  
3. **Dropcontact**: Finds the contact's email and name based on enriched company details  
4. **GPT-4**: Writes a structured cold email and subject line in JSON format  
5. **Gmail**: Sends the personalized email to a fixed recipient  
6. **Airtable**: Logs the lead into a specified base/table for follow-up

---

## Requirements

- ✅ **Dumpling AI API key** (stored in HTTP header credentials)  
- ✅ **Dropcontact API key**  
- ✅ **OpenAI GPT-4 credentials**  
- ✅ **Gmail account** (OAuth2)  
- ✅ **Airtable** base & table set up with at least these fields:
  - `Name`
  - `LinkedIn Company URL`
  - `People`
  - `website`

---

## How to customize

- Modify the GPT prompt to reflect your brand tone or service offering  
- Replace Gmail with Slack, Outlook, or another communication tool  
- Add a “review and approve” step before sending emails  
- Add logic to avoid duplicates (e.g., check Airtable first)

---

&gt; This workflow lets you go from LinkedIn profile to inbox-ready cold email in less than a minute—with full AI support.
