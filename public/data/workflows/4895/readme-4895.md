# YouTube comment analysis with GPT-4o & automated email reports via Gmail

> **Description:**

Leverage the power of ChatGPT and YouTube API to monitor, analyze, and report on video feedback automatically. This n8n automation template fetches comments from a YouTube video, performs advanced AI sentiment analysis, identifies key themes, and emails a professional report—all triggered from a Google Sheet.

**What This Template Does:**

- 🔁 Auto-Triggers from Google Sheets every minute
- 🎥 Fetches YouTube video details and top comments
- 🧠 Uses GPT-4o for comment sentiment analysis, theme detection, viewer questions & improvement insights
- 📧 Generates and sends an HTML email report with all key insights
- 📝 Marks videos as “Mail Sent” in the sheet to prevent duplicate reports

**Setup Requirements:**

- YouTube API Credentials
- OpenAI API Credentials 
- Gmail credentials for email delivery
- Google Sheet with video tracking

**Ideal for:**

YouTube creators, marketers, social media analysts, or agencies seeking automated YouTube comment sentiment analysis and actionable content insights—without writing a line of code.

## 📊 Basic Information

- **Workflow ID:** 4895
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 184
- **Downloads:** 18
- **Created:** 2025/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4895)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **limit** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **set** 
- **youTube** 
- **httpRequest** 
- **code** (×2)
- **gmail** 
- **googleSheets** 
- **googleSheetsTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
