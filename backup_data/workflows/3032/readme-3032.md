# CallForge - 02 - prep Gong calls with sheets & notion for AI summarization

> ![callforgecompressed.png](fileId:1004)
---

# **CallForge - AI Gong Sales Call Processor**  
Streamline your sales call analysis with **CallForge**, an automated workflow that extracts, enriches, and refines **Gong.io** call data for AI-driven insights.

## **Who is This For?**  
This workflow is designed for:  
✅ **Sales teams** looking to automate sales call insights.  
✅ **Revenue operations (RevOps) professionals** optimizing call data processing.  
✅ **Businesses using Gong.io** to analyze and enhance sales call transcripts.  

## **What Problem Does This Workflow Solve?**  
Manually analyzing sales calls is **time-consuming** and prone to **inconsistencies**. While Gong provides raw call data, interpreting these conversations and improving **AI-generated summaries** can be challenging.  

With **CallForge**, you can:  
✔️ **Automate transcript extraction** from Gong.io.  
✔️ **Enhance AI insights** by adding **product and competitor data**.  
✔️ **Reduce errors** from AI-generated summaries by correcting mispronunciations.  
✔️ **Eliminate duplicate calls** to prevent redundant processing.  

## **What This Workflow Does**  

### **1. Extracts Gong Call Data**  
- Retrieves **call recordings, metadata, meeting links, and duration** from Gong.  

### **2. Removes Duplicate Entries**  
- **Queries Notion** to ensure that already processed calls are not duplicated.  

### **3. Enriches Call Data**  
- **Fetches integration details** from Google Sheets.  
- **Retrieves competitor insights** from Notion.  
- **Merges data** to provide AI with a more comprehensive context.  

### **4. Prepares AI-Friendly Transcripts**  
- **Cleans up transcripts** for structured AI processing.  
- **Reduces prompt complexity** for more accurate OpenAI outputs.  

### **5. Sends Processed Data to an AI Call Processor**  
- **Delivers the cleaned and enriched transcript** to an AI-powered workflow for generating structured call summaries.  

## **How to Set Up This Workflow**  

### **1. Connect Your APIs**  
🔹 **Gong API Access** – Set up your Gong API credentials in n8n.  
🔹 **Google Sheets Credentials** – Provide API access for retrieving integration data.  
🔹 **Notion API Setup** – Connect Notion to fetch competitor insights and store processed data.  
🔹 **AI Processing Workflow** – Ensure an OpenAI-powered workflow is in place for structured summaries.  

- [CallForge - 01 - Filter Gong Calls Synced to Salesforce by Opportunity Stage](https://n8n.io/workflows/3031-callforge-01-filter-gong-calls-synced-to-salesforce-by-opportunity-stage/)
- [CallForge - 02 - Prep Gong Calls with Sheets & Notion for AI Summarization](https://n8n.io/workflows/3032-callforge-02-prep-gong-calls-with-sheets-and-notion-for-ai-summarization/)
- [CallForge - 03 - Gong Transcript Processor and Salesforce Enricher](https://n8n.io/workflows/3033-callforge-03-gong-transcript-processor-and-salesforce-enricher/)
- [CallForge - 04 - AI Workflow for Gong.io Sales Calls](https://n8n.io/workflows/3034-callforge-04-ai-workflow-for-gongio-sales-calls/)
- [CallForge - 05 - Gong.io Call Analysis with Azure AI & CRM Sync](https://n8n.io/workflows/3035-callforge-05-gongio-call-analysis-with-azure-ai-and-crm-sync/)
- [CallForge - 06 - Automate Sales Insights with Gong.io, Notion & AI](https://n8n.io/workflows/3036-callforge-06-automate-sales-insights-with-gongio-notion-and-ai/)
- [CallForge - 07 - AI Marketing Data Processing with Gong & Notion](https://n8n.io/workflows/3037-callforge-07-ai-marketing-data-processing-with-gong-and-notion/)
- [CallForge - 08 - AI Product Insights from Sales Calls with Notion](https://n8n.io/workflows/3039-callforge-08-ai-product-insights-from-sales-calls-with-notion/)


### **2. Customize to Fit Your Needs**  
💡 **Modify Data Sources** – Update connections if using a different CRM, database, or analytics tool.  
💡 **Adjust AI Processing Logic** – Optimize transcript formatting based on your preferred AI model.  
💡 **Expand Data Enrichment** – Integrate CRM data, industry benchmarks, or other insights.  

## **Why Use CallForge?**  
By automating Gong call processing, **CallForge** empowers sales teams to:  
📈 **Gain valuable AI-driven insights** from calls.  
⚡ **Speed up decision-making** with cleaner, structured data.  
🛠 **Improve sales strategies** based on enriched, accurate transcripts.  

🚀 **Start automating your Gong call analysis today!**

## 📊 Basic Information

- **Workflow ID:** 3032
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 1577
- **Downloads:** 157
- **Created:** 2025/2/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3032)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **gong** 
- **stickyNote** (×6)
- **executeWorkflow** (×2)
- **executeWorkflowTrigger** 
- **aggregate** (×4)
- **googleSheets** 
- **set** (×3)
- **notion** (×2)
- **merge** 
- **splitOut** 
- **compareDatasets** 
- **splitInBatches** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
