# Generate startup ideas from Reddit posts using Gemini AI and Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## **Workflow Description: Startup Idea Finder (n8n)**

## **What This Workflow Does:**
This n8n workflow helps entrepreneurs discover startup ideas by automatically scraping top posts from multiple subreddits that often discuss unmet needs or problems (e.g., posts containing phrases like “Why is there no tool that”, “I wish there was an app for”, “someone should make”, etc.). The workflow extracts key information from these posts and sends it to Google’s Gemini 1.5 Flash-8b AI model, which analyzes the problem and suggests possible solutions or startup ideas. All relevant data and AI-generated insights are then saved to a Google Sheet for easy review and tracking.

## **How It Works (Step-by-Step)**

**1.** **Manual Trigger:** The workflow starts with a manual trigger.
**2.** **Reddit Scraping:** It queries multiple subreddits for top posts matching specific keywords that indicate a problem or unmet need.
**3.** **Merge & Edit Fields:** The results are merged and filtered to keep only the necessary fields: title, selftext, ups, created, and url.
**4.** **AI Analysis:** The filtered post data is sent to the Gemini 1.5 Flash-8b model with a prompt asking for:
- An explanation of the core problem,
- Whether existing solutions exist,
- A new startup idea if not,
- The target user,
- An implementation overview.

**5.** **Google Sheets Logging:** Both the original post data and the AI’s output are appended as a new row in a Google Sheet for future reference.

## **APIs & Credentials Needed**
To use this workflow, you must set up the following credentials in your n8n instance:
- Reddit API: For scraping subreddit posts.
- Google Gemini (PaLM) API: For AI-powered analysis and idea generation.
- Google Sheets API: For saving results to your spreadsheet.

**Google Sheets Setup**
Before running the workflow, create a Google Sheet with the following columns (in this order):
***title, selftext, ups, created, url, output***

The workflow will automatically append new rows with the scraped post data and the AI-generated output.

## **Summary**
This workflow is a powerful tool for anyone looking to systematically discover and analyze real-world problems discussed online, and to generate actionable startup ideas using AI. Just set up your credentials, prepare your Google Sheet, and you’re ready to start finding your next big idea!



## 📊 Basic Information

- **Workflow ID:** 6094
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1521
- **Downloads:** 152
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6094)

## 👤 Author

- **Name:** Jayraj Pamnani
- **Username:** @jayrajpamnani

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **reddit** (×3)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheets** 
- **merge** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
