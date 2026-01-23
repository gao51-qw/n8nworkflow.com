# Create & send GA4 report with insights via email

> ## Who’s it for
Marketing, growth, and analytics teams who want a **decision-ready GA4 summary**—automatically calculated, clearly color-coded, and emailed as a polished HTML report.

## How it works / What it does
- **Get Client (Form Trigger)** collects **GA4 Property ID (“Account ID”)**, **Key Event**, **date ranges (current & previous)**, **Client Name**, and **recipient email**.
- **Overall Metrics This Period / Previous Period (GA4 Data API)** pull sessions, users, engagement, bounce rate, and more for each range.
- **Form Submits This Period / Previous Period (GA4 Data API)** fetch key-event counts for conversion comparisons.
- **Code** normalizes form dates for API requests.
- **AI Agent** builds a **valid HTML email**:  
  - Calculates % deltas, applies **green for positive** (`#10B981`) and **red for negative** (`#EF4444`) changes.
  - Writes summary and recommendations.
  - Produces the **final HTML only**.
- **Send a message (Gmail)** sends the formatted HTML report to the specified email address with a contextual subject.

## How to set up
1) Add credentials: **Google Analytics OAuth2**, **OpenAI** (Chat), **Gmail OAuth2**.  
2) Ensure the form fields match your GA4 property and event names; **“Account ID” = GA4 Property ID**. 
Property ID - https://take.ms/vO2MG
Key event - https://take.ms/hxwQi
3) Publish the form URL and run a test submission.

## Requirements
GA4 property access (Viewer/Analyst) • OpenAI API key • Gmail account with send permission.

## Resources
Google OAuth2 (GA4) – https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/  
OpenAI credentials – https://docs.n8n.io/integrations/builtin/credentials/openai/  
Gmail OAuth2 – https://docs.n8n.io/integrations/builtin/credentials/google/  
GA4 Data API overview – https://developers.google.com/analytics/devguides/reporting/data/v1


## 📊 Basic Information

- **Workflow ID:** 8463
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 787
- **Downloads:** 78
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8463)

## 👤 Author

- **Name:** Simeon Penev
- **Username:** @monkatagpt

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **formTrigger** 
- **gmail** 
- **code** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
