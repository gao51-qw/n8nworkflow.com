# AI agent: Scrape, summarize & save articles to Notion (Gemini, Browserless)

> This n8n workflow automates the process of saving web articles or links shared in a chat conversation directly into a Notion database, using Google's Gemini AI and Browserless for web scraping.

## Who is this AI automation template for?

It's useful for anyone wanting to reduce manual copy-pasting and organize web findings seamlessly within Notion. A smarter web clipping tool!

## What this AI automation workflow does

1.  Starts when a message is received
2.  Uses a Google Gemini AI Agent node to understand the context and manage the subsequent steps. It identifies if a message contains a request to save an article/link.
3.  If a URL is detected, it utilizes a tool configured with the Browserless API (via the HTTP Request node) to scrape the content of the web page.
4.  Creates a new page in a specified Notion database, populating it with thea summary scraped content, in a specific format, never leaving out any important details. It also saves the original URL, smart tags, publication date, and other metadata extracted by the AI.
5.  Posts a confirmation message (e.g., to a Discord channel) indicating whether the article was saved successfully or if an error occurred.

## Setup

1.  **Import Workflow:** Import this template into your n8n instance.
2.  **Configure Credentials & Notion Database:**
    * **Notion Database:**
        * Create or designate a Notion database (like the example "Knowledge Database") where articles will be saved.
         * Ensure this database has the following properties (fields):
            * `Name` (Type: Text) - *This will store the article title.*
            * `URL` (Type: URL) - *This will store the original article link.*
            * `Description` (Type: Text) - *This can store the AI-generated summary.*
            * `Tags` (Type: Multi-select) - *Optional, for categorization.*
            * `Publication Date` (Type: Date) - *Optional, 
store the date the article was published.
        * Ensure the n8n integration has access to this specific database.
	* If you require a different format to the Notion Database, not that you will have to update the Notion tool configuration in this n8n workflow accordingly.
    * **Notion Credential:** Obtain your Notion API key and add it as a Notion credential in n8n. Select this credential in the `save_to_notion` tool node.
    * **Configure `save_to_notion` Tool:** In the `save_to_notion` tool node within the workflow, set the 'Database ID' field to the ID of the Notion database you prepared above. Map the workflow data (URL, AI summary, etc.) to the corresponding database properties (`URL`, `Description`, etc.).  In the blocks section of the notion tool, you can define a custom format for the research page, allowing the AI to fill in the exact details you want extracted from any web page!
    * **Google Gemini AI:** Obtain your API key from [Google AI Studio](https://aistudio.google.com/app/apikey) or Google Cloud Console (if using Vertex AI) and add it as a credential. Select this credential in the "Tools Agent" node.
    * **Discord (or other notification service):** If using Discord notifications, create a Webhook URL ([instructions](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)) or set up a Bot Token. Add the credential in n8n and select it in the `discord_notification` tool node. Configure the target Channel ID.
    * **Browserless/HTTP Request:**
        * **Cloud:** Obtain your API key from [Browserless](https://www.browserless.io/) and configure the `website_scraper` HTTP Request tool node with the correct API endpoint and authentication header.
        * **Self-Hosted:** Ensure your Browserless Docker container is running and accessible by n8n. Configure the `website_scraper` HTTP Request tool node with your self-hosted Browserless instance URL.
6.  **Activate Workflow:** Save test and activate the workflow.

## How to customize this workflow to your needs

* **Change AI Model:** Experiment with different AI models supported by n8n (like OpenAI GPT models or Anthropic Claude) in the Agent node if Gemini 2.5 Pro doesn't fit your needs or budget, keeping in mind potential differences in context window size and processing capabilities for large content.
* **Modify Notion Saving:** Adjust the `save_to_notion` tool node to map different data fields (e.g., change the summary style by modifying the AI prompt, add specific tags, or alter the page content structure) to your Notion database properties.
* **Adjust Scraping:** Modify the prompt/instructions for the `website_scraper` tool or change the parameters sent to the Browserless API if you need different data extracted from the web pages. You could also swap Browserless for another scraping service/API accessible via the HTTP Request node.


## 📊 Basic Information

- **Workflow ID:** 3535
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 12814
- **Downloads:** 1281
- **Created:** 2025/4/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3535)

## 👤 Author

- **Name:** Mihai Farcas
- **Username:** @mihailtd

## 🏷️ Categories

- Document Extraction
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **notionTool** 
- **discordTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
