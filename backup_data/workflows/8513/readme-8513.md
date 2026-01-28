# UTM marketing attribution reports with Google Sheets, GPT-4o & Gmail

> ## Description
Turn raw marketing data into actionable insights with this n8n Source/UTM Attribution and Reporting workflow! It automatically aggregates lead submissions, calculates Cost Per Lead (CPL) per channel, and generates AI-powered weekly attribution reports—delivered straight to your inbox in a professional HTML format.

**What This Template Does**

 📅 Runs hourly to process new lead submissions
 📊 Aggregates leads by source (Instagram, LinkedIn, Google Ads, etc.)
 💰 Calculates key metrics like Cost Per Lead (CPL)
 🧠 Uses AI to generate executive-ready HTML reports
 📈 Highlights top-performing sources and growth opportunities
 📧 Sends polished reports via Gmail automatically

**Prerequisites**
- Google Sheets with lead submission data
- Google Forms (or similar) as the data input source
- n8n instance (self-hosted or cloud)
- Azure OpenAI (GPT-4o-mini) API key for AI-powered reporting
- Gmail API credentials for automated report delivery

**Step-by-Step Setup**
- Trigger workflow hourly with n8n Scheduler.
- Fetch new lead submissions from Google Sheets.
- Aggregate and group data by Source/UTM parameters.
- Calculate CPL using spend + lead count per channel.
- Standardize column names for consistent reporting.
- Send raw + aggregated data to Azure OpenAI for report generation.
- Format into a professional HTML report (with insights & recommendations).
- Send report via Gmail node to stakeholders.

**Customization Ideas**
- Replace Gmail with Slack/Teams notifications for real-time sharing.
- Add visual charts (Google Data Studio / Looker) for more analytics.
- Use additional UTM fields (campaign, adgroup, creative) for deeper granularity.
- Extend reporting to include ROI and ROAS calculations.

**Key Benefits**

✅ Hands-free attribution tracking and analysis
 ✅ Accurate CPL metrics per channel
 ✅ AI-generated reports with actionable insights
 ✅ Saves time vs. manual data crunching
 ✅ Weekly reports ensure marketing strategy stays optimized

**Perfect For**

- Marketing teams managing multi-channel campaigns
- Agencies providing client attribution reports
- Business owners optimizing ad spend efficiency
- Growth teams tracking lead quality by source


## 📊 Basic Information

- **Workflow ID:** 8513
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 162
- **Downloads:** 16
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8513)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **gmail** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **code** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
