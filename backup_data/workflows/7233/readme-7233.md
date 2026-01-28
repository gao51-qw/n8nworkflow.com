# Automate lead enrichment & personalized outreach with HubSpot, Phantombuster & GPT

> ### How it works
This workflow enriches and personalizes your lead profiles by integrating HubSpot contact data, scraping social media information, and using AI to generate tailored outreach emails. It streamlines the process from contact capture to sending a personalized email — all automatically.

The system fetches new or updated HubSpot contacts, verifies and enriches their Twitter/LinkedIn data via Phantombuster, merges the profile and engagement insights, and finally generates a customized email ready for outreach.

### Step-by-step
**1. Trigger & Input**
- HubSpot Contact Webhook: Fires when a contact is created or updated in HubSpot.

- Fetch Contact: Pulls the full contact details (email, name, company, and social profiles).

- Update Google Sheet: Logs Twitter/LinkedIn usernames and marks their tracking status.

**2. Validation**
- Validate Twitter/LinkedIn Exists: Checks if the contact has a valid social profile before proceeding to scraping.

**3. Social Media Scraping (via Phantombuster)**
- Launch Profile Scraper & 🎯 Launch Tweet Scraper: Triggers Phantombuster agents to fetch profile details and recent tweets.

- Wait Nodes: Ensures scraping completes (30–60 seconds).

- Fetch Profile/Tweet Results: Retrieves output files from Phantombuster.

- Extract URL: Parses the job output to extract the downloadable .json or .csv data file link.

**4. Data Download & Parsing**
- Download Profile/Tweet Data: Downloads scraped JSON files.

- Parse JSON: Converts the raw file into structured data for processing.

**5. Data Structuring & Merging**
- Format Profile Fields: Maps stats like bio, followers, verified status, likes, etc.

- Format Tweet Fields: Captures tweet data and associates it with the lead’s email.

- Merge Data Streams: Combines tweet and profile datasets.

- Combine All Data: Produces a single, clean object containing all relevant lead details.

**6. AI Email Generation & Delivery**
- Generate Personalized Email: Feeds the merged data into OpenAI GPT (via LangChain) to craft a custom HTML email using your brand details.

- Parse Email Content: Cleans AI output into structured subject and body fields.

- Sends Email: Automatically delivers the personalized email to the lead via Gmail.

### Benefits
- Automated Lead Enrichment — Combines CRM and real-time social media data with zero manual research.

- Personalized Outreach at Scale — AI crafts unique, relevant emails for each contact.

- Improved Engagement Rates — Targeted messages based on actual social activity and profile details.

- Seamless Integration — Works directly with HubSpot, Google Sheets, Gmail, and Phantombuster.

- Time & Effort Savings — Replaces hours of manual lookup and email drafting with an end-to-end automated flow.

## 📊 Basic Information

- **Workflow ID:** 7233
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 337
- **Downloads:** 33
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7233)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **googleSheets** 
- **hubspot** 
- **webhook** 
- **if** 
- **httpRequest** (×6)
- **wait** (×2)
- **code** (×4)
- **extractFromFile** (×2)
- **set** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
