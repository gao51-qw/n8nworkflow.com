# Scrape Google Maps by area & generate outreach messages for lead generation

> ### This n8n workflow automates lead extraction from Google Maps, enriches data with AI, and stores results for cold outreach.

It uses the [Bright Data](https://brightdata.com/) community node and Bright Data MCP for scraping and AI message generation.

### **How it works**

1. **Form Submission**
    
    User provides Google Maps starting location, keyword and country.
    
2. **Bright Data Scraping**
    
    [Bright Data](https://brightdata.com/) community node triggers a Maps scraping job, monitors progress, and downloads results.
    
3. **AI Message Generation**
    
    Uses Bright Data MCP with LLMs to create a personalized cold call script and talking points for each lead.
    
4. **Database Storage**
    
    Enriched leads and scripts are upserted to Supabase.
    

### **How to use**

Set up all the credentials, create your Postgres table and submit the form. The rest happens automatically.

### **Requirements**

- LLM account (OpenAI, Gemini…) for API usage.
- [Bright Data](https://brightdata.com/) account for API and MCP usage.
- Supabase account (or other Postgres database) to store information.

## 📊 Basic Information

- **Workflow ID:** 6993
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 6127
- **Downloads:** 612
- **Created:** 2025/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6993)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **wait** (×2)
- **set** (×5)
- **noOp** 
- **formTrigger** 
- **merge** 
- **postgres** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **if** (×4)
- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **limit** 
- **httpRequest** 
- **@brightdata/n8n-nodes-brightdata.brightData** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
