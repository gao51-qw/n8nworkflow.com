# Source top GitHub talent by language & location with Gemini AI and BrowserAct

> ![Source Top GitHub Contributors](https://i.postimg.cc/8CRC5SGm/Screen-Shot-20251025120602.png)

## AI-Powered Top GitHub Talent Sourcing (by Language & Location) to Google Sheet

### This n8n template is a powerful talent sourcing engine that finds, analyzes, and scores GitHub contributors using a custom AI formula.

This workflow is ideal for technical recruiters, hiring managers, and team leads who want to build a pipeline of qualified candidates based on specific technical skills and location.

---
### **Self-Hosted Only** 
This Workflow uses a community contribution and is designed and tested for **self-hosted n8n instances** only.

---
### How it works
* The workflow runs on a **Schedule Trigger** (e.g., hourly) to constantly find new candidates.
* A **BrowserAct** node ("Run a workflow task") initiates a scraping job on GitHub based on your criteria (e.g., "Python" developers in "Berlin").
* A second **BrowserAct** node ("Get details") waits for the scraping to complete. If the job fails, a **Slack** alert is sent.
* A **Code** node processes the raw scraped data, splitting the list of developers into individual items.
* An **AI Agent**, powered by **Google Gemini**, analyzes each profile. It scores their resume/summary and calculates a final weighted `FinalScore` based on their followers, repositories, and resume quality.
* The structured and scored candidate data is then saved to a **Google Sheet**, using the "Name" column to prevent duplicates.
* A final **Slack** message is sent to notify you that the GitHub contributors list has been successfully updated.

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**Source Top GitHub Contributors by Language & Location**" Template
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))
* **Gemini** account for the AI Agent
* **Google Sheets** credentials for saving leads
* **Slack** credentials for sending notifications

---

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)

---
### Workflow Guidance and Showcase

* #### [Automate Talent Sourcing: Find GitHub Devs with n8n & Browseract](https://youtu.be/TnhnXunNMMU)

## 📊 Basic Information

- **Workflow ID:** 9891
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 73
- **Downloads:** 7
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9891)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **n8n-nodes-browseract-workflows.browserAct** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×9)
- **slack** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
