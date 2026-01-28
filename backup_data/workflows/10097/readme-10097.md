# Ai website scraper & company intelligence

> #  AI Website Scraper & Company Intelligence

## **Description**

This workflow automates the process of transforming any website URL into a **structured, intelligent company profile**.  
It's triggered by a form, allowing a user to submit a website and choose between a **"basic"** or **"deep"** scrape.

The workflow extracts key information (mission, services, contacts, SEO keywords), stores it in a structured **Supabase** database, and archives a full JSON backup to **Google Drive**.  
It also features a secondary AI agent that automatically finds and saves competitors for each company, building a rich, interconnected database of company intelligence.

---

## **Quick Implementation Steps**

1. **Import the Workflow:** Import the provided JSON file into your **n8n instance**.
2. **Install Custom Community Node:**  
   You must install the community node from:  
  [https://www.npmjs.com/package/n8n-nodes-crawl-and-scrape](https://www.npmjs.com/package/n8n-nodes-crawl-and-scrape)
**FIRECRAWL  N8N Documentation**
  [https://docs.firecrawl.dev/developer-guides/workflow-automation/n8n](https://docs.firecrawl.dev/developer-guides/workflow-automation/n8n)


3. **Install Additional Nodes:**  
   `n8n-nodes-crawl-and-scrape` and `n8n-nodes-mcp` fire crawl mcp   .
4. **Set up Credentials:**  
   Create credentials in n8n for  **FIRE CRAWL API**,**Supabase**, **Mistral AI**, and **Google Drive**.
5. **Configure API Key (CRITICAL):**  
   - Open the **Web Search tool node**.  
   - Go to **Parameters → Headers** and replace the hardcoded **Tavily AI API key** with your own.
6. **Configure Supabase Nodes:**  
   - Assign your Supabase credential to all Supabase nodes.  
   - Ensure table names (e.g., `companies`, `competitors`) match your schema.
7. **Configure Google Drive Nodes:**  
   - Assign your Google Drive credential to the `Google Drive2` and `save to Google Drive1` nodes.  
   - Select the correct **Folder ID**.
8. **Activate Workflow:**  
   Turn on the workflow and open the **Webhook URL** in the “On form submission” node to access the form.

---

## **What It Does**

### **Form Trigger**
Captures user input: “Website URL” and “Scraping Type” (basic or deep).

### **Scraping Router**
A **Switch node** routes the flow:
- **Deep Scraping →** AI-based MCP Firecrawler agent.  
- **Basic Scraping →** Crawlee node.

### **Deep Scraping (Firecrawl AI Agent)**
- Uses **Firecrawl** and **Tavily Web Search**.
- Extracts a detailed JSON profile: mission, services, contacts, SEO keywords, etc.

### **Basic Scraping (Crawlee)**
- Uses `Crawl and Scrape` node to collect raw text.  
- A **Mistral-based AI extractor** structures the data into JSON.

### **Data Storage**
- Stores structured data in Supabase tables (`companies`, `company_basicprofiles`).
- Archives a full JSON backup to **Google Drive**.

### **Automated Competitor Analysis**
- Runs after a deep scrape.
- Uses Tavily web search to find competitors (e.g., from **Crunchbase**).
- Saves competitor data to Supabase, linked by `company_id`.

---

## **Who's It For**

- **Sales & Marketing Teams:** Enrich leads with deep company info.  
- **Market Researchers:** Build structured, searchable company databases.  
- **B2B Data Providers:** Automate company intelligence collection.  
- **Developers:** Use as a base for RAG or enrichment pipelines.

---

## **Requirements**

- **n8n instance** (self-hosted or cloud)
- **Supabase Account:** With tables like `companies`, `competitors`, `social_links`, etc.
- **Mistral AI API Key**
- **Google Drive Credentials**
- **Tavily AI API Key**
- *(Optional)* **Custom Nodes:**  
  - `n8n-nodes-crawl-and-scrape`  
 

---

## **How It Works**

### **Flow Summary**
1. **Form Trigger:** Captures “Website URL” and “Scraping Type”.
2. **Switch Node:**  
   - `deep` → MCP Firecrawler (AI Agent).  
   - `basic` → Crawl and Scrape node.
3. **Scraping & Extraction:**  
   - Deep path: Firecrawler → JSON structure.  
   - Basic path: Crawlee → Mistral extractor → JSON.
4. **Storage:**  
   - Save JSON to Supabase.  
   - Archive in Google Drive.
5. **Competitor Analysis (Deep Only):**  
   - Finds competitors via Tavily.  
   - Saves to Supabase `competitors` table.
6. **End:** Finishes with a `No Operation` node.

---

## **How To Set Up**

1. Import workflow JSON.
2. Install community nodes (especially `n8n-nodes-crawl-and-scrape` from npm).
3. Configure credentials (Supabase, Mistral AI, Google Drive).
4. Add your **Tavily API key**.
5. Connect Supabase and Drive nodes properly.
6. Fix disconnected “basic” path if needed.
7. Activate workflow.
8. Test via the webhook form URL.

---

## **How To Customize**

- **Change LLMs:** Swap Mistral for OpenAI or Claude.  
- **Edit Scraper Prompts:** Modify system prompts in AI agent nodes.  
- **Change Extraction Schema:** Update JSON Schema in extractor nodes.  
- **Fix Relational Tables:** Add `Items` node before Supabase inserts for arrays (social links, keywords).  
- **Enhance Automation:** Add email/slack notifications, or replace form trigger with a Google Sheets trigger.

---

## **Add-ons**

- **Automated Trigger:** Run on new sheet rows.  
- **Notifications:** Email or Slack alerts after completion.  
- **RAG Integration:** Use the Supabase database as a chatbot knowledge source.

---

## **Use Case Examples**

- **Sales Lead Enrichment:** Instantly get company + competitor data from a URL.  
- **Market Research:** Collect and compare companies in a niche.  
- **B2B Database Creation:** Build a proprietary company dataset.

---

## WORKFLOW IMAGE 
![Screenshot_22102025_152855_localhost.jpeg](fileId:3139)
---
## **Troubleshooting Guide**

| Issue | Possible Cause | Solution |
|-------|----------------|-----------|
| **Form Trigger 404** | Workflow not active | Activate the workflow |
| **Web Search Tool fails** | Missing Tavily API key | Replace the placeholder key |
| **FIRECRAWLER / find competitor fails** | Missing MCP node | Install `n8n-nodes-mcp` |
| **Basic scrape does nothing** | Switch node path disconnected | Reconnect “basic” output |
| **Supabase node error** | Wrong table/column names | Match schema exactly |

---

###  **Need Help or More Workflows?**
Want to customize this workflow for your business or integrate it with your existing tools?  
Our team at **Digital Biz Tech** can tailor it precisely to your use case  from automation logic to AI-powered enhancements.  

 **Contact:** [shilpa.raju@digitalbiz.tech](mailto:shilpa.raju@digitalbiz.tech)  
 **For more such offerings, visit us:** [https://www.digitalbiz.tech](https://www.digitalbiz.tech)

---

## 📊 Basic Information

- **Workflow ID:** 10097
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 847
- **Downloads:** 84
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10097)

## 👤 Author

- **Name:** DIGITAL BIZ TECH
- **Username:** @dbt

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **supabase** (×5)
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** (×4)
- **n8n-nodes-mcp.mcpClientTool** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **n8n-nodes-crawl-and-scrape.crawleeNode** 
- **formTrigger** 
- **switch** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **googleDrive** (×2)
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **noOp** 
- **convertToFile** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
