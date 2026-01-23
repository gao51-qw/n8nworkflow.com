# Automated meta ads analysis with Gemini AI, ScrapingFlash, and Google Sheets

> **This workflow acts as your personal AI-powered analyst for Meta Ads.** 

It's pretty straightforward:

1. First, it grabs a list of Facebook Ad Library URLs you want to check out from a Google Sheet.
2. Then, it automatically scrapes the active ads from those pages.

Here's the cool part: it sends each ad's image and text to Google Gemini, which analyzes it like an expert marketer would.

Finally, Gemini's full analysis—we're talking strengths, weaknesses, actionable suggestions, and a performance score—gets dropped neatly into another Google Sheet for you.

**Set up steps**

You should be ready to roll in about 5 minutes. There are no complex configurations, you just need to:

1. Connect your accounts: The workflow has placeholders waiting for your credentials for Google (for Sheets and the Gemini API) and ScrapingFlash.
2. Link your Google Sheets: Just point the first Google Sheets node to the sheet with your URLs, and tell the last node where you want to save the results.

All the nitty-gritty details and expressions are explained in the sticky notes inside the workflow itself!

## 📊 Basic Information

- **Workflow ID:** 6276
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 995
- **Downloads:** 99
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6276)

## 👤 Author

- **Name:** Paul-François GORIAUX
- **Username:** @pfgope

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **manualTrigger** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **httpRequest** 
- **splitOut** 
- **splitInBatches** 
- **limit** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
