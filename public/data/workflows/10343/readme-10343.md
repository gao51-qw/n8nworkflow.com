# Detect Reddit problems & auto-comment solutions with Google Gemini & Sheets

> # | N8N Workflow | AI Reddit Problem Detection & Auto-Solution Commenter 🤖

*This n8n workflow automates Reddit community engagement by detecting posts that discuss problems and automatically replying with AI-generated solutions — powered by Google Gemini.*

*It’s designed for developers, automation creators, and brands who want to provide helpful, automated responses to Reddit users discussing issues in their niche.*

## How It Works

- The workflow starts with a Manual Trigger (When clicking ‘Execute workflow’).
- Search for a Post: It scans the r/n8n subreddit (or any subreddit you set) for recent posts containing the keyword “Why I stopped using”.
- Filter Posts (If Node): Filters posts that have 2 or more upvotes and non-empty text, ensuring only quality discussions are analyzed.
- Edit Fields: Extracts post details such as title, body text, upvotes, creation time, and subreddit ID for AI processing.

**AI Agent + Google Gemini Chat Model:**
 - The first AI node analyzes the post and decides whether it’s describing a problem or frustration related to AI automation.
 
 - Gemini responds with “Yes” or “No.”

**Conditional Branch (If1 Node):**
- If “Yes,” the post is confirmed as discussing a problem.
- The workflow then triggers the second AI Agent.

**AI Agent 2 + Gemini:**
- The second AI node uses Gemini to generate a helpful and concise solution addressing the issue mentioned in the Reddit post (for example, offering a fix, suggestion, or new idea).

**Merge & Log Data:**
- The AI’s findings (post details + solution) are merged and saved into a connected Google Sheet for tracking community insights.

**Comment on Reddit:**
- The workflow automatically posts the AI-generated solution as a comment reply on the original Reddit thread, engaging users directly.

## How To Use
- Import the provided JSON workflow into your n8n dashboard.

- Set up the required credentials:

 - Reddit OAuth2 API – for searching and posting comments.

 - Google Gemini (PaLM) API – for AI text analysis and solution generation.

- Google Sheets API – for logging post data and AI results.

- Adjust the subreddit name, search keyword, or prompts to fit your niche.

- Click Execute Workflow to run the automation.

## Requirements
- Reddit Developer Account (OAuth2 credentials).
- Google Gemini (PaLM) API account for AI processing.
- Google Sheets account for saving analysis results.

## How To Customize
- Change the search keyword (e.g., “help with automation,” “issue with API,” etc.).
- Modify the AI prompts to tailor the solution style (technical, friendly, educational, etc.).
- Edit the Google Sheet fields to capture more or fewer details.
- Enable/disable the comment node if you want to manually approve replies before posting.
- Adjust the Gemini model name (e.g., models/gemini-2.0-flash) or parameters for faster or more creative responses.


## 📊 Basic Information

- **Workflow ID:** 10343
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 169
- **Downloads:** 16
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10343)

## 👤 Author

- **Name:** Kamran habib
- **Username:** @virtualdepth

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **merge** (×2)
- **reddit** (×2)
- **googleSheets** 
- **if** (×2)
- **set** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
