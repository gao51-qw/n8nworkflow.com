# Filter TikTok real estate videos for couples with AI, Apify and Google Sheets

> # Automated TikTok Real Estate Research for Couples

This workflow automates the process of finding real estate (rental) videos on TikTok, filtering them for a specific target audience (couples in their 20s), generating an explanation of why they are recommended, and saving the results to Google Sheets and Slack.

## Who’s it for
*   **Real Estate Agents & Marketers:** To research trending rental properties and video styles popular on social media.
*   **Content Curators:** To automatically gather and summarize niche content from TikTok.
*   **House Hunters:** To automate the search for "rental" videos tailored to couples.

## How it works / What it does
1.  **Trigger:** The workflow starts manually (on click).
2.  **Scrape TikTok:** It connects to **Apify** to run a "TikTok Scraper". It searches for videos with the hashtag `賃貸` (Rental) and retrieves metadata.
3.  **Filter & Extract (AI Agent 1):** An AI Agent (using **OpenRouter**) analyzes the retrieved video data to select properties suitable for "couples in their 20s" and outputs the video URL.
4.  **Generate Insights (AI Agent 2):** A second AI Agent reviews the URL/content and generates a specific reason why this property is recommended for the target audience, formatting the output with the URL and explanation.
5.  **Save to Database:** The final text (URL + Reason) is appended to a **Google Sheet**.
6.  **Notify Team:** The same recommendation text is sent to a specific **Slack** channel to alert the user.

## Requirements
*   **n8n:** Version 1.0 or later.
*   **Apify Account:** You need an API token and access to the `clockworks/tiktok-scraper` actor.
*   **OpenRouter Account:** An API Key to use Large Language Models (LLMs) for the AI Agents.
*   **Google Cloud Platform:** A project with the Google Sheets API enabled and OAuth credentials.
*   **Slack Workspace:** Permission to add apps/bots to a channel.

## How to set up
1.  **Import the Workflow:** Copy the JSON code and paste it into your n8n editor.
2.  **Configure Credentials:**
    *   **Apify:** Create a new credential in n8n using your Apify API Token.
    *   **OpenRouter:** Create a new credential using your OpenRouter API Key.
    *   **Google Sheets:** Connect your Google account via OAuth2.
    *   **Slack:** Connect your Slack account via OAuth2.
3.  **Configure Nodes:**
    *   **Google Sheets Node:** Select your specific Spreadsheet and Sheet from the dropdown lists (replace the placeholders `YOUR_SPREADSHEET_ID` etc. if they don't update automatically).
    *   **Slack Node:** Select the Channel where you want to receive notifications (replace `YOUR_CHANNEL_ID`).
4.  **Test:** Click "Execute Workflow" to run a test.

## How to customize the workflow
*   **Change the Search Topic:** Open the **Apify** node and change the `hashtags` value in the "Custom Body" JSON (e.g., change `"賃貸"` to `"DIY"` or `"Travel"`).
*   **Adjust the Persona:** Open the **AI Agent** nodes and modify the `text` prompt. You can change the target audience from "20s couples" to "students" or "families."
*   **Increase Volume:** In the **Apify** node, increase the `resultsPerPage` or `maxProfilesPerQuery` to process more videos at once (note: this will consume more API credits).
*   **Change Output Format:** Modify the **Google Sheets** node to map specific fields (like Video Title, Author, Likes) into separate columns instead of just one raw output string.

## 📊 Basic Information

- **Workflow ID:** 11091
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 93
- **Downloads:** 9
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11091)

## 👤 Author

- **Name:** furuidoreandoro
- **Username:** @furuidoreandoro

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@apify/n8n-nodes-apify.apify** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **googleSheets** 
- **slack** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
