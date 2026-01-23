# LinkedIn profile extract and build JSON resume with Bright Data & Google Gemini

> ### Who this is for?

The LinkedIn Profile Extract and JSON Resume Builder is a powerful workflow that scrapes professional profile data from LinkedIn using Bright Data's infrastructure, then transforms that data into a clean, structured JSON resume using Google Gemini. The workflow is ideal for automating resume parsing, candidate profiling, or integrating into recruiting platforms.

This workflow is tailored for:

- HR professionals & recruiters automating resume screening

- Talent acquisition platforms enriching candidate profiles

- Developers & AI builders creating resume-parsing AI pipelines

- Data scientists working on labor market analytics

- Growth hackers profiling prospects via public data

### What problem is this workflow solving?

Parsing resumes or LinkedIn profiles into machine-readable formats is often a manual, error-prone process. Most scraping tools either fail due to anti-bot protections or return unstructured HTML that's hard to work with.

This workflow solves that by:

- Using Bright Data's Web Unlocker for reliable, CAPTCHA-free LinkedIn scraping

- Extracting clean text and structured profile data via Google Gemini LLM

- Automatically generating a standards-compliant JSON Resume and Skills

- Sending the resume to webhooks or storing it for downstream usage

### What this workflow does

- Accepts LinkedIn Profile URL and required metadata (Bright Data zone, webhook)

- Scrapes LinkedIn profile using Bright Data Web Unlocker

- Extracts clean content and skills using Google Gemini LLM

- Builds a JSON-formatted resume following the JSON resume schema

- Sends the JSON resume via Webhook Notification

- Persists the output by saving the file to disk

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1438)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Set URL and Bright Data Zone** node with the LinkedIn profile, Bright Data Zone and the Webhook notification URL. For testing purposes, you can obtain a webhook url using https://webhook.site/

### How to customize this workflow to your needs

**Add Language Translation**

Insert a translation LLM node to support multilingual profiles.

**Generate PDF Resumes**

Convert JSON to formatted PDF resumes using an HTML-to-PDF module.

**Push to ATS or CRM**

Add integration nodes to pipe data into applicant tracking systems (ATS), CRMs, or databases.

**Use Alternative LLMs**

Swap Gemini with OpenAI or Anthropic Claude if preferred.





## 📊 Basic Information

- **Workflow ID:** 4653
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 6449
- **Downloads:** 644
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4653)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **function** (×2)
- **readWriteFile** (×2)
- **stickyNote** (×4)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
