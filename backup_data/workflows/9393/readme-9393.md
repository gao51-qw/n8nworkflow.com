# Automate B2B lead generation & personalized cold emails with Apollo, Apify & GPT

> This n8n template automates targeted lead discovery, AI-driven data structuring, and personalized cold-email sending at controlled intervals. It’s ideal for sales teams, founders, and agencies that want to scale outreach without losing personalization.

Good to know

Can run on an interval (e.g., every 10 minutes) to fetch and process new leads.

Requires API keys for OpenAI (content + parsing) and Apify (lead discovery).

Emails are sent one-by-one with delays (the Wait node) to reduce spam risk.

Lead data is written to Google Sheets—we recommend separate sheets for leads with and without emails.

Works with Gmail, Outlook, or your own SMTP—just plug in your credentials.

How it works

Form Trigger (START)
A form collects: Job Title, Company Size, Keywords, Location.

Apollo URL Generator (GPT)
The model turns the form fields into a precise Apollo search URL.

Run Apify (Actor)
Apify fetches contacts/companies that match your preferences for downstream processing.

Limit
Caps how many records are prepared per run (e.g., max 5).

Parse Lead Data (GPT)

Extracts key fields (full name, email, title, LinkedIn, company, company links).

Synthesizes a short 2–3 sentence sales-ready summary for each lead.

Sorting (If)
Splits leads into with email vs. without email.

With email → main sheet + email pathway

Without email → a separate sheet for later enrichment

Email Magic (GPT)
Uses the parsed data to personalize your fixed email template for each lead (keeps structure/intent, swaps in the right details).

Sending Emails (Loop + Wait + Sender)

Loop Over sends messages individually.

Wait inserts a pause between sends (fully configurable).

Delivery via Gmail or SMTP (custom domain / Outlook).

Confirmation
After the loop finishes, a Gmail node sends a “campaign complete” confirmation.

How to use

Enable the workflow and open the start form.

Enter preferences: job title, company size, keywords, location.

Add credentials:

OpenAI (for parsing + email generation)

Apify (Bearer token in Run Apify)

Google (Sheets + optionally Gmail)

SMTP/Outlook (if not using Gmail)

Set limits (the Limit node) and send interval (the Wait node).

Choose sheets for leads with/without email.

Run—the workflow will fetch leads, prepare emails, and send them with spacing.

Requirements

OpenAI API key

Apify API token (access to the chosen Actor)

Google Sheets for storage

Gmail or SMTP/Outlook credentials for sending

An operational n8n instance

Customising this workflow

Email template: Edit the text in “Creating a email” while preserving placeholders.

Segmentation: Add more conditions (role, industry, country) and route to different templates/sheets.

Follow-ups: Add a second loop that reads statuses and sends timed reminders.

Data enrichment: Insert additional APIs before “Parse Lead Data.”

Anti-spam: Increase Wait duration, rotate senders, vary subject lines.

Reporting: Add a “send status” sheet and an error log.

Security & compliance tips

Store API keys in n8n Credentials, not plain-text nodes.

Respect GDPR/opt-out—track source and first-contact date in your sheet.

Start with a small batch, validate deliverability, then scale up.

In short

Automated lead capture → AI cleaning + summary → personalized emails → spaced sending → completion notice.
Scalable, customizable, and ready to plug into your preferred sender and template.

## 📊 Basic Information

- **Workflow ID:** 9393
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 268
- **Downloads:** 26
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9393)

## 👤 Author

- **Name:** Mirai
- **Username:** @mirai

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **googleSheets** (×2)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **httpRequest** 
- **limit** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×6)
- **if** 
- **splitInBatches** 
- **wait** 
- **noOp** 
- **gmail** (×2)
- **emailSend** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
