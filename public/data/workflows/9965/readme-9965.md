# Scrape, structure, and store news data using Decodo, Gemini AI and Google Sheets

> Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

Automatically scrape, structure, and log forum or news content using Decodo and Google Gemini AI. This workflow extracts key details like titles, URLs, authors, and engagement stats, then appends them to a Google Sheet for tracking and analysis.

## Who’s it for?
Ideal for data journalists, market researchers, or AI enthusiasts who want to monitor trending topics across specific domains.

## How it works
1. **Trigger:** Workflow runs on schedule.  
2. **Data Setup:** Defines forum URLs and geolocation.  
3. **Scraping:** Extracts raw text data using the Decodo API.  
4. **AI Extraction:** Gemini parses and structures the scraped text into clean JSON.  
5. **Data Storage:** Each news item is appended or updated in Google Sheets.  
6. **Logging:** Records scraping results for monitoring and debugging.

## How to set up
- Add your **Decodo**, **Google Gemini**, and **Google Sheets** credentials in n8n.  
- Adjust the **forum URLs**, **geolocation**, and **Google Sheet ID** in the `Workflow Config` node.  
- Set your preferred trigger interval in `Schedule Trigger`.  
- Activate and monitor from the n8n dashboard.

## 📊 Basic Information

- **Workflow ID:** 9965
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 193
- **Downloads:** 19
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9965)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **splitOut** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **crypto** 
- **wait** 
- **stickyNote** (×6)
- **googleSheets** (×2)
- **set** 
- **@decodo/n8n-nodes-decodo.decodo** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
