# CallForge - 05 - Gong.io call analysis with Azure AI & CRM sync

> ![callforgecompressed.png](fileId:1007)

---

# **CallForge - AI Sales Call Processing & Insights Extraction**  
Automate **sales call analysis** with AI-powered insights for **sales, marketing, and product teams**.

## **Who is This For?**  
This workflow is designed for:  
✅ **Sales teams** looking to extract structured insights from Gong call transcripts.  
✅ **Marketing professionals** seeking AI-driven customer pain points & content strategy.  
✅ **Product teams** needing feedback from sales calls to **prioritize feature development**.  

## **🔍 What Problem Does This Workflow Solve?**  
Manually analyzing **Gong.io sales call transcripts** is slow, inconsistent, and lacks **structured insights**.  

With **CallForge**, you can:  
✔ **Extract AI-powered insights** about **use cases, objections, competitors, and next steps**.  
✔ **Provide structured marketing & product intelligence** to enhance strategy.  
✔ **Automatically store call insights in Notion and Salesforce** for easy access.  
✔ **Ensure resilience** with **automated reruns on failed workflows** (handling Notion API limits).  
✔ **Improve decision-making** with AI-powered **competitor and sentiment analysis**.  

---

## **📌 Key Workflow Features**  

### **🎤 AI-Powered Transcript Analysis**  
- Uses AI to **identify use cases, objections, competitors, and customer pain points**.  
- Categorizes insights for **sales, marketing, and product teams**.  

### **📌 AI Agent Breakdown**  
🔹 **Sales AI Agent** – Extracts **customer objections, pain points, competitors, and next steps**.  
🔹 **Marketing AI Agent** – Identifies **recurring topics, keyword trends, and content opportunities**.  
🔹 **Product AI Agent** – Captures **feature requests and AI/ML-related references**.  

### **📊 Structured Output Processing**  
- **Sales Data Processor** → Stores insights in **Notion & Salesforce** for sales tracking.  
- **Marketing Data Processor** → Extracts **SEO & content strategy insights** for marketing teams.  
- **Product AI Data Processor** → Logs **customer feedback** to prioritize **feature development**.  

### **💡 Competitor & Integration Analysis**  
- **Tracks competing products mentioned in calls**.  
- **Identifies integration needs**, flagging workarounds used by prospects.  

### **📢 Real-Time Slack Notifications**  
- **Alerts teams on workflow progress** and completed call analyses.  

### **🔄 Failure Resilience & Automated Re-Runs**  
- If a **Notion API limit is reached**, the process **resumes automatically**.  

---

## **🚀 How This Works**  

### **🛠 1. Trigger & Call Data Processing**  
- The workflow **retrieves Gong call transcripts and metadata**.  
- **Normalizes data**, correcting common mispronunciations like "n8n."  

### **🤖 2. AI Agents Analyze the Call**  
- **Sales Agent** – Extracts actionable insights for sales follow-ups.  
- **Marketing Agent** – Identifies **recurring themes** and **keyword trends**.  
- **Product Agent** – Captures **feature requests and AI/ML usage mentions**.  

### **📡 3. Data is Stored in Notion & Salesforce**  
- **Logs AI-extracted insights** in **Notion** for structured tracking.  
- **Pushes sales-related data** to **Salesforce** for team accessibility.  

### **🔔 4. Slack Alerts for Teams**  
- **Notifies sales, marketing, and product teams** about extracted insights. 

- [CallForge - 01 - Filter Gong Calls Synced to Salesforce by Opportunity Stage](https://n8n.io/workflows/3031-callforge-01-filter-gong-calls-synced-to-salesforce-by-opportunity-stage/)
- [CallForge - 02 - Prep Gong Calls with Sheets & Notion for AI Summarization](https://n8n.io/workflows/3032-callforge-02-prep-gong-calls-with-sheets-and-notion-for-ai-summarization/)
- [CallForge - 03 - Gong Transcript Processor and Salesforce Enricher](https://n8n.io/workflows/3033-callforge-03-gong-transcript-processor-and-salesforce-enricher/)
- [CallForge - 04 - AI Workflow for Gong.io Sales Calls](https://n8n.io/workflows/3034-callforge-04-ai-workflow-for-gongio-sales-calls/)
- [CallForge - 05 - Gong.io Call Analysis with Azure AI & CRM Sync](https://n8n.io/workflows/3035-callforge-05-gongio-call-analysis-with-azure-ai-and-crm-sync/)
- [CallForge - 06 - Automate Sales Insights with Gong.io, Notion & AI](https://n8n.io/workflows/3036-callforge-06-automate-sales-insights-with-gongio-notion-and-ai/)
- [CallForge - 07 - AI Marketing Data Processing with Gong & Notion](https://n8n.io/workflows/3037-callforge-07-ai-marketing-data-processing-with-gong-and-notion/)
- [CallForge - 08 - AI Product Insights from Sales Calls with Notion](https://n8n.io/workflows/3039-callforge-08-ai-product-insights-from-sales-calls-with-notion/)

 

---

## **📊 Sample Output Data**  

### **1️⃣ Sales Insights**  
```json
{
  "UseCases": [
    {
      "Summary": "A manufacturing company wants to automate inventory tracking and reduce manual entry delays.",
      "DepartmentTags": ["Operations"],
      "IndustryTags": ["Manufacturing"],
      "ImplementationStatus": "Evaluating"
    }
  ],
  "Objection": {
    "ObjectionTags": ["Feature Limitation"],
    "Nature": "The prospect wanted a deeper integration with their ERP system, which n8n currently lacks."
  },
  "CallSummary": "The call focused on automation for supply chain processes. The prospect expressed interest but wanted confirmation on ERP integration capabilities.",
  "NextSteps": ["Schedule a follow-up demo for ERP integration."]
}
```

### **2️⃣ Marketing Insights**  
```json
{
  "MarketingInsights": [
    {
      "Tag": "Workflow Template Request",
      "Summary": "The prospect requested a template for automating CRM lead tracking."
    }
  ],
  "RecurringTopics": [
    {
      "Topic": "CRM Integration",
      "Mentions": 3,
      "Context": "Discussed how n8n could sync CRM data automatically."
    }
  ],
  "ActionableInsights": [
    {
      "RecommendationType": "Tutorial",
      "Title": "How to Automate CRM Lead Tracking with n8n",
      "Topic": "CRM Integration",
      "Rationale": "The prospect expressed a need for CRM automation templates."
    }
  ]
}
```

### **3️⃣ Product Feedback**  
```json
{
  "ProductFeedback": [
    {
      "Sentiment": "Positive",
      "Feedback": "The external speaker praised the simplicity of n8n's UI, making it easier for non-developers to automate tasks."
    },
    {
      "Sentiment": "Negative",
      "Feedback": "The external speaker mentioned frustration over the lack of a dedicated ERP integration node."
    }
  ],
  "AI_ML_References": {
    "Exist": true,
    "Context": "The external speaker mentioned using AI for automating customer ticket categorization.",
    "Details": {
      "DevelopmentStatus": "Building",
      "Department": "Support",
      "RequiresAgents": true,
      "RequiresRAG": false,
      "RequiresChat": "Yes: External App (e.g., Slack)"
    }
  }
}
```

---

## **🔧 How to Customize This Workflow**  
💡 **🔗 Change Data Storage** – Swap **Notion for Airtable, HubSpot, or another CRM**.  
💡 **📩 Customize Slack Notifications** – Send alerts via **email, webhook, or another channel**.  
💡 **🛠 Modify AI Processing** – Adjust AI models or processing prompts.  
💡 **📊 Add More Integrations** – Sync insights with **Pipedrive, HubSpot, or another CRM**.  

---

## **🚀 Why Use This Workflow?**  
✔ **Automates Gong call transcript analysis**, eliminating manual work.  
✔ **Improves collaboration** by structuring insights for sales, marketing, and product teams.  
✔ **Boosts sales conversions** by identifying objections and next steps.  
✔ **Enhances marketing and SEO strategy** with AI-driven insights.  
✔ **Optimizes product roadmap decisions** based on customer feedback.  

This workflow **scales AI-powered sales intelligence** for better **decision-making, content strategy, and sales enablement**. 🚀  

## 📊 Basic Information

- **Workflow ID:** 3035
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 5130
- **Downloads:** 513
- **Created:** 2025/2/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3035)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **executeWorkflow** (×4)
- **set** (×5)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×3)
- **stickyNote** (×6)
- **merge** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
