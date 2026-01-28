# Analyze sales deal outcomes with Azure OpenAI and Google Sheets reporting

> **Description:**

Turn raw sales deal outcomes into actionable insights with this smart n8n workflow template! Automatically pull deal data from Google Sheets, analyze won/lost reasons with AI, generate structured insights, and deliver polished weekly reports—no manual effort needed.

This automation connects to your sales feedback sheet, processes deal outcomes with an AI model, classifies win/loss reasons, summarizes key patterns, and creates professional HTML email digests. The enriched insights are stored in Google Sheets and shared via automated email reports—giving sales, product, and leadership teams a clear view of what drives success or loss.

**What This Template Does:**
 📊 Captures sales deal outcomes from Google Sheets
 🧠 Uses AI to analyze win/loss reasons and extract themes
 📂 Categorizes top won & lost patterns for each deal
 📝 Summarizes deal insights into structured JSON
 📈 Stores enriched insights in a dedicated Google Sheet
 📧 Generates and sends a polished HTML weekly digest email
 🌟 100% automated: from data collection to insights reporting

**Built-in Logic Ensures:**

 ✔️ Clean JSON-based AI output (won reasons, lost reasons, patterns)
 ✔️ Original deal details remain tied to AI insights
 ✔️ Weekly digest emails include structured summaries & recommendations

**Requirements:**

- Google Sheets with deal outcome data (won/lost + reasons)
- Google Sheets account for storing enriched insights
- Azure OpenAI (or compatible) account for AI analysis
- n8n instance (self-hosted or cloud)

**Setup Instructions:**
- Google Sheets Node: Connect to your sales feedback sheet and fetch all deal data.
- Clean Data: Use a Code or Set node to remove extra fields and format data.
- Loop Over Deals: Add a Loop Over Items node for individual analysis.
- AI Analysis: Use Azure OpenAI Chat Model to extract win/loss reasons and patterns.
- Parse Results: Add a Parse AI Response node to structure insights.
- Store Insights: Save enriched results back to Google Sheets.
- Generate Report: Fetch processed data and use AI to create an HTML email summary.
- Send Email: Deliver the report using an Email node.
 
**Perfect For:**
- Sales teams analyzing why deals are won or lost
- Product managers learning from customer objections & success drivers
- Leadership teams tracking patterns in deal performance
- Analysts turning unstructured feedback into scalable insights

## 📊 Basic Information

- **Workflow ID:** 8479
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 44
- **Downloads:** 4
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8479)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **code** (×3)
- **googleSheets** (×3)
- **emailSend** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **splitInBatches** 
- **set** 
- **stickyNote** (×14)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
