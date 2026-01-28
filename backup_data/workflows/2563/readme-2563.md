# ✨ Vision-based AI agent scraper - with Google Sheets, ScrapingBee, and Gemini

> ## Important Notes:
### Check Legal Regulations:  
This workflow involves scraping, so **ensure you comply with the legal regulations** in your country before getting started. **Better safe than sorry**!

## Workflow Description:  
**😮‍💨 Tired of struggling with XPath, CSS selectors, or DOM specificity when scraping ?**

This AI-powered solution is here to simplify your workflow! With a **vision-based AI Agent**, you can extract data effortlessly **without worrying about how the DOM is structured**.  

This workflow leverages a **vision-based AI Agent**, integrated with Google Sheets, ScrapingBee, and the Gemini-1.5-Pro model, to **extract structured data from webpages**. The AI Agent primarily **uses screenshots for data extraction** but switches to HTML scraping when necessary, ensuring high accuracy.  

### Key Features:
- **Google Sheets Integration**: Manage URLs to scrape and store structured results.  
- **ScrapingBee**: Capture full-page screenshots and retrieve HTML data for fallback extraction.  
- **AI-Powered Data Parsing**: Use Gemini-1.5-Pro for vision-based scraping and a Structured Output Parser to format extracted data into JSON.  
- **Token Efficiency**: HTML is converted to Markdown to optimize processing costs.  

This template is designed for e-commerce scraping but can be customized for various use cases.


## 📊 Basic Information

- **Workflow ID:** 2563
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 36934
- **Downloads:** 3693
- **Created:** 2024/11/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2563)

## 👤 Author

- **Name:** Dataki
- **Username:** @dataki

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **splitOut** 
- **googleSheets** (×2)
- **stickyNote** (×15)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **executeWorkflowTrigger** 
- **markdown** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
