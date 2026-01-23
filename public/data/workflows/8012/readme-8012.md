# Automate LinkedIn profile research & email outreach with Apify, Gemini & Sheets

> ## This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for deep-dive lead research and hyper-personalized email generation. 

It transforms a basic list of LinkedIn profiles into a campaign-ready database by first enriching contacts with detailed career data and then using AI to craft unique, context-aware emails based on each individual's professional journey.

## Who's this workflow for?
- Sales Development Representatives (SDRs)
- Account Executives (AEs)
- B2B Marketers & Growth Hackers
- Recruiters & Talent Acquisition Specialists
- Startup Founders

## How it works
**1. Scheduled Data Fetch:** The workflow runs automatically on a schedule, fetching a list of leads (containing LinkedIn URLs) from a Google Sheet.

**2. Enrich Profiles with Apify:** For each lead that hasn't been processed, it uses an Apify actor to scrape their LinkedIn profile, extracting key information like their "About" section and detailed work experience.

**3. Update Central Database:** The scraped career history is saved back into a "Profile Data" column in the original Google Sheet, creating a rich, centralized lead profile.

**4. AI Email Personalization:** The workflow sends the complete, enriched profile data to a Google Gemini AI model via LangChain, using a sophisticated prompt that instructs it to act as an expert B2B copywriter.

**5. Craft a Unique Hook**: The AI analyzes the lead's entire career journey to find unique "nuggets"—like long tenure, specific achievements, or unusual career paths—and uses them to write a compelling opening line.

**6. Save the Final Email Draft:** The AI-generated subject line and personalized email body are saved back into the Google Sheet, leaving you with a ready-to-send, hyper-personalized outreach campaign.

## Setup Instructions
**1. Google Sheets Setup:**
- Connect your Google Sheets account to n8n.
- In all three Google Sheets nodes, select your credentials and update the Document ID and Sheet Name to match your lead list.
- Populate your sheet with initial lead data, including at least their LinkedIn URL.

**2. Apify Connection:**
- Connect your Apify account in the Runs Profile Extraction Actor node.

**3. Google Gemini AI Connection:**
- Connect your Google Gemini (PaLM) API account in the Google Gemini Chat Model node.

**4. Configure the Schedule:**
- In the Schedule Trigger node, set the interval for how often you want the workflow to run and process new leads.

**5. Activate Workflow:**
- Save the workflow and toggle the "Active" switch to ON. Your automated research and personalization engine is now active.

## Key Requirements to Use This Template
- n8n Instance: An active n8n account (Cloud or self-hosted).
- Google Account & Sheet: A pre-made Google Sheet with columns for First Name, Last Name, LinkedIn, Profile Data, Subject, and Email Body.
- Apify Account: An active Apify account with a plan that supports the LinkedIn Profile Scraper actor.
- Google Gemini AI Account: A Google Cloud account with the Vertex AI API (for Gemini models) enabled and an associated API Key.

## Connect with us
- Website: https://www.intuz.com/services
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)





## 📊 Basic Information

- **Workflow ID:** 8012
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 801
- **Downloads:** 80
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8012)

## 👤 Author

- **Name:** Intuz 
- **Username:** @intuz

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **googleSheets** (×4)
- **limit** 
- **@apify/n8n-nodes-apify.apify** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **scheduleTrigger** 
- **stickyNote** (×7)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
