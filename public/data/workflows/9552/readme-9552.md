# Automated daily news summaries with OpenRouter AI & Gmail delivery

> ### Daily AI News Summary & Gmail Delivery

This n8n template demonstrates how to build an autonomous AI agent that automatically scours the web for the latest news, intelligently summarizes the top stories, and delivers a professional, formatted news digest directly to your email inbox.

Use cases are many: Create a personalized daily briefing to start your day informed, keep your team updated on industry trends and competitor news, or automate content curation for your newsletter.

**Good to know**

*   At the time of writing, costs will depend on the LLM you select via **OpenRouter** and your usage of the **Tavily Search API**. Both services offer free tiers to get started.
*   This workflow requires API keys and credentials for OpenRouter, Tavily, and Gmail.
*   The AI Agent's system prompt is configured to produce summaries in **Japanese**. You can easily change the language and topics by editing the prompt in the "AI News Agent" node.

**How it works**

1.  The workflow begins on a daily schedule, which you can configure to your preferred time.
2.  A **Code node** dynamically generates a search query for the current day's most important news across several categories.
3.  The **AI Agent** receives this query. It uses its attached tools to perform the task:
    *   It uses the **Tavily News Search** tool to find relevant, up-to-date articles from the web.
    *   It then uses the **OpenRouter Chat Model** to analyze the search results, identify the most significant stories, and write a summary for each.
    *   The agent's output is strictly structured into a JSON format, containing a main title and an array of individual news stories.
4.  Another **Code node** takes this structured JSON data and transforms it into a clean, professional HTML-formatted email.
5.  Finally, the **Gmail node** sends the beautifully formatted email to your specified recipient.

**How to use**

*   Before you start, you must add your credentials for **OpenRouter**, **Tavily**, and **Gmail** in their respective nodes.
*   Customize the schedule in the "Schedule Trigger" node to set the daily delivery time.
*   Change the recipient's email address in the final "Send a message" (Gmail) node.

**Requirements**

*   OpenRouter account (for access to various LLMs)
*   Tavily AI account (for the real-time search API)
*   Google account with Gmail enabled for sending emails via OAuth2

**Customising this workflow**

*   **Change the delivery channel:** Easily swap the final Gmail node for a Slack, Discord, or Telegram node to send the news summary to a team channel.
*   **Focus the news topics:** Modify the "Prepare News Query" node to search for highly specific topics, such as "latest advancements in artificial intelligence" or "financial news from the European market."
*   **Archive the news:** Add a node after the AI Agent to save the structured JSON data to a database or Google Sheet, allowing you to build a searchable news archive over time.

## 📊 Basic Information

- **Workflow ID:** 9552
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 631
- **Downloads:** 63
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9552)

## 👤 Author

- **Name:** Yusuke Yamamoto
- **Username:** @yusuke-yamamoto

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** (×2)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
