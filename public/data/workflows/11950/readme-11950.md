# Generate YouTube video ideas from comments with GPT-4o-mini and Google Sheets

> #Analyse YouTube Comments via AI Agent and Create Video Topics

[![Watch the video](https://img.youtube.com/vi/mdfcb0SyKPw/maxresdefault.jpg)](https://www.youtube.com/watch?v=mdfcb0SyKPw)


## Description
Identifying what your audience wants can be a manual and time-consuming process. This workflow automates your content research by analyzing comments from your latest YouTube videos using an AI Agent. Every week, it fetches feedback, stores it in Google Sheets for backup, and uses OpenAI to suggest the **TOP 5 SEO-optimized video topics** based on real viewer requests.

The final content strategy is delivered directly to your Gmail inbox, allowing you to focus on creating rather than researching.

## What it Does
*   **Weekly Trigger:** The workflow starts automatically every Friday (customizable) via the **Schedule Trigger**.
*   **Fetches Video Data:** It pulls the latest 5 videos from your specified YouTube playlist.
*   **Retrieves Comments:** Uses the **YouTube API (HTTP Request)** to fetch up to 100 comment threads per video.
*   **Data Archiving:** All retrieved comments are saved into a **Google Sheet**, ensuring you have a permanent backup of audience feedback.
*   **AI Analysis:** A **JavaScript node** formats the comments and passes them to an **AI Agent**. Powered by **OpenAI (GPT-4o-mini)**, the agent identifies recurring themes and requests.
*   **Structured Output:** The **Output Parser** ensures the AI provides exactly 5 video titles in a clean, professional format.
*   **Email Delivery:** The **Gmail node** sends a summary of the suggested content plan directly to your inbox.

## Use Cases
*   **YouTube Creators:** Automatically find out what tutorials or "How-to" videos your audience is asking for.
*   **Social Media Managers:** Generate weekly reports on audience sentiment and demand for clients.
*   **Educational Channels:** Identify specific pain points or questions students are mentioning in the comments.

## Customization
*   **YouTube Node:** Replace the `Playlist ID` with the ID of the playlist you want to monitor.
*   **Google Sheets:** Select your own Spreadsheet and Sheet Name in the **Append row in sheet** node.
*   **AI Agent Prompt:** You can modify the prompt to change the tone of the titles (e.g., "Make them clickbaity" or "Make them educational").
*   **Gmail Node:** Update the "To" email address to your own email.

## Requirements
*   An **n8n instance** (Cloud or Self-hosted).
*   **Google Cloud Credentials** (With YouTube Data API v3, Google Sheets API, and Gmail API enabled).
*   **OpenAI API Key** (For the AI Agent analysis).

## How to Set Up
1.  **Connect Credentials:** Link your YouTube, Google Sheets, Gmail, and OpenAI accounts to their respective nodes.
2.  **Configure Playlist:** In the "Get many playlist items" node, enter your YouTube Playlist ID.
3.  **Select Sheet:** In the "Append row in sheet" node, pick your target Google Sheet.
4.  **Update Gmail:** In the "Send a message" node, set your recipient email address.
5.  **Activate:** Save the workflow and toggle it to **Active**.



## 📊 Basic Information

- **Workflow ID:** 11950
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 133
- **Downloads:** 13
- **Created:** 2025/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11950)

## 👤 Author

- **Name:** Websensepro
- **Username:** @websensepro

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **youTube** 
- **code** (×3)
- **httpRequest** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
