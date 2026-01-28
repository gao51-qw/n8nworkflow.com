# Scrape & summarize Product Hunt feedback with BrowserAct & Gemini AI

> ![Product Hunt Launch Monitor](https://i.postimg.cc/zBFxDV3c/Screen-Shot-20251025115027.png)

## Product Hunt Launch Monitor - Scraping & Summarization of Product Hunt Feedbacks

### This n8n template provides automated competitive intelligence by scraping and summarizing Product Hunt launch feedback with a specialized AI analyst.

This workflow is essential for product managers, marketing teams, and founders who need to quickly gather and distill actionable insights from competitor launches to inform their own product strategy and positioning.

---
### **Self-Hosted Only** 
This Workflow uses a community contribution and is designed and tested for **self-hosted n8n instances** only.

---
### How it works
* The workflow can be triggered **manually** but is designed to be easily switched to a **Schedule Trigger** for continuous competitive monitoring.
* A **Google Sheet** node fetches a list of product names you wish to monitor, which the workflow processes in a loop.
* A **BrowserAct** node then initiates a web scraping task to collect all the public comments from the specified Product Hunt launch page.
* An **AI Agent**, powered by **Google Gemini**, acts as a competitive intelligence analyst, processing the raw comments.
* The AI distills the feedback into a structured format, providing a concise **Summary**, pinpointing key **Positive** and **Negative** feedback, and generating **Recommendations** for a similar product to be successful.
* The structured analysis is saved to a **Google Sheet** for easy review and tracking.
* Finally, a **Slack** notification confirms that the Product Hunt results have been processed and updated.

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**Product Hunt Launch Monitor**" Template
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))
* **Gemini** account for the AI Agent
* **Google Sheets** credentials for input and saving the analysis
* **Slack** credentials for sending notifications

---

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)

---
### Workflow Guidance and Showcase

* #### [Steal Your Competitor's Weaknesses (Product Hunt + BrowserAct + n8n)](https://youtu.be/87327LGJYi8)

## 📊 Basic Information

- **Workflow ID:** 9894
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 133
- **Downloads:** 13
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9894)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **n8n-nodes-browseract-workflows.browserAct** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** (×2)
- **stickyNote** (×13)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **slack** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
