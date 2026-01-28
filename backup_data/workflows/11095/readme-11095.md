# Automate Pokemon card stock monitoring with Apify, AI, and Slack alerts

> # Pokemon Card Sales & Stock Monitor Workflow

## Who’s it for
This workflow is designed for **Pokemon Card Game (Pokéca)** players, collectors, or resellers in Japan who want to automate the discovery of new card releases and restock information. It is particularly useful for those who want to filter through social media noise and cross-reference rumors with official inventory data.

## How it works / What it does
1.  **Social Media Scraping:** The workflow triggers manually and uses **Apify** (specifically the "Tweet Scraper V2" actor) to search X (formerly Twitter) for Japanese keywords like "Pokemon Card" (ポケモンカード), "Sales Info", and "Pokeca".
2.  **Data Processing:** It splits the scraped tweets into batches to process them individually.
3.  **AI Analysis (Step 1 - Social Verification):** An **AI Agent** (powered by OpenRouter) analyzes the tweet text to determine if it contains valid sales or stock information. It utilizes an **HTTP Request Tool** to access the official Pokemon Card Map (`map.pokemon-card.com`) to identify mentioned retailers.
4.  **AI Analysis (Step 2 - Official Stock Check):** A second **AI Agent** takes the filtered information and checks official sources. It uses **HTTP Request Tools** to browse the official Pokemon Card Product page and the Pokemon Center Online store to verify if products are actually purchasable.
5.  **Notification:** Finally, the workflow compiles the findings into a "Sales Flash Report" and sends it to a specified **Slack** channel.

## How to set up
1.  **Import the Workflow:** Copy the JSON code block below and paste it into your n8n editor.
2.  **Configure Credentials:**
    *   **Apify:** Create an account on Apify, subscribe to the "Tweet Scraper V2" actor, and add your API Token to the n8n credential store.
    *   **OpenRouter:** Add your OpenRouter API key to power the LLM Chat Models.
    *   **Slack:** Connect your Slack account using OAuth2 or a Bot Token.
3.  **Configure Apify Node:** Ensure the `actorId` in the "Run an Actor" node matches the ID for the Tweet Scraper you intend to use.
4.  **Set Slack Destination:** Open the "Send a message" node. You will need to select the **Channel** where you want the alerts to appear.

## Requirements
*   **n8n Version:** A recent version of n8n that supports the `@n8n/n8n-nodes-langchain` (AI Agent) nodes.
*   **Apify Account:** Paid or free tier with enough compute units to run the scraper.
*   **OpenRouter Account:** To provide the Language Model (LLM) intelligence.
*   **Slack Workspace:** To receive the notifications.

## How to customize the workflow
*   **Automate Execution:** Currently, the workflow uses a "Manual Trigger". Replace this with a **Schedule Trigger** node (e.g., set to run every 30 minutes) to make it a fully automated monitoring bot.
*   **Adjust Search Terms:** In the **Apify** node, modify the `searchTerms` array in the JSON input to look for specific sets (e.g., "Shiny Treasure", "151") or other trading card games.
*   **Change Notification Channel:** If you prefer Discord, Line, or Telegram, remove the Slack node and replace it with the corresponding messaging node.
*   **Modify AI Logic:** You can adjust the system prompt in the **AI Agent** nodes to change how strict the AI is about what counts as "stock available" versus just "news".

## 📊 Basic Information

- **Workflow ID:** 11095
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 49
- **Downloads:** 4
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11095)

## 👤 Author

- **Name:** furuidoreandoro
- **Username:** @furuidoreandoro

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **httpRequestTool** (×3)
- **@apify/n8n-nodes-apify.apify** 
- **splitInBatches** 
- **noOp** 
- **slack** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
