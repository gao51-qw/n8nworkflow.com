## Overview
Stop applying manually. This workflow acts as your personal AI recruiter, automating the end-to-end process of finding high-quality jobs, tailoring your resume, and preparing personalized outreach emails to decision-makers.

## What this workflow does
* **Scrapes Real-Time Jobs:** Uses Apify to pull live job listings from LinkedIn based on your specific keywords (e.g., "AI Automation").
* **Smart Filtering:** Uses GPT-4o-mini to analyze job descriptions against your skills and automatically discards roles that aren't a good fit.
* **Hyper-Personalized Resume:** Uses GPT-4o to rewrite your "Master Resume" specifically for the target job description.
* **Document Generation:** Creates a new Google Doc with the tailored resume and automatically sets sharing permissions.
* **Decision Maker Enrichment:** Uses Anymail Finder to locate the verified email address of the Company CEO or Hiring Manager.
* **Cold Email Draft:** Generates a personalized pitch in Gmail (Drafts folder) with the link to your custom resume attached.

## Setup Requirements
To run this workflow, you will need to set up credentials in n8n for the following services. Please ensure you use n8n credentials and do not hardcode API keys into the HTTP nodes:
* **Google Drive & Docs:** To read your master resume and create new application files.
* **Apify Account:** To run the LinkedIn Job Scraper actor.
* **OpenAI API Key:** For logic (GPT-4o-mini) and writing (GPT-4o).
* **Anymail Finder API:** To find contact email addresses.
* **Gmail:** To create the draft emails.

## How to use
1. **Upload Resume:** Paste your "Master Resume" text into the first Google Docs node or connect your existing file.
2. **Configure Credentials:** Add your API keys in the n8n credentials section for all services listed above.
3. **Set Search Criteria:** Update the JSON body in the Apify node with your desired LinkedIn job search URL.
4. **Run:** Execute the workflow and watch your drafts folder fill up with ready-to-send applications.