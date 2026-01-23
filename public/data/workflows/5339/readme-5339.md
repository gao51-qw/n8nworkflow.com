# Tech news_curator - analyze daily news using AI_agents with Mistral

> Using Mistral API, you can use this n8n workflow to automate the process of: collecting, filtering, analyzing, and summarizing news articles from multiple sources. The sources come from pre-built RSS feeds and a custom DuckDuckGo node, which you can change if you need.
It will deliver the most relevant news of the day in a concise manner.



****++How It Works++****

1.     The workflow begins each weekday at noon.

2.     The news are gathered from RSS feeds and a custom DuckDuckGo node, using HTTPS GET when needed.

3.     News not from today or containing unwanted keywords are filtered out.

4.     The first AI Agent will select the top news from their titles alone and generate a general title & summary.

5.     The next AI Agent will summarize the full content of the selected top news articles.

6.     The general summary and title will be combined with the top 10 news summaries into a final output.



**++Requirements++**

-     An active n8n instance (self-hosted or cloud).

-     Install the custom DuckDuckGo node: **n8n-nodes-duckduckgo-search**

-     A Mistral API key

-     Configure the Sub-Workflow for the content which requires HTTP GET requests. It is provided in the template itself.




++*Fair Notice*++

This is an older version of the template. There is a superior updated version which isn't restricted to tech news, with enhanced capabilities such as communication through different channels (email, social media) and advanced keyword filtering. It was recently published in n8n. You can find it [here](https://n8n.io/workflows/6157-multi-source-news-curator-with-mistral-ai-analysis-summaries-and-custom-channels/). If you are interested or would like to discuss specific needs, then feel free to contact us.

## 📊 Basic Information

- **Workflow ID:** 5339
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 1663
- **Downloads:** 166
- **Created:** 2025/6/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5339)

## 👤 Author

- **Name:** Hybroht
- **Username:** @hybroht

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **merge** (×3)
- **aggregate** (×2)
- **rssFeedRead** (×8)
- **filter** (×3)
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **splitOut** 
- **scheduleTrigger** 
- **httpRequest** (×2)
- **set** (×11)
- **stickyNote** (×8)
- **markdown** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **n8n-nodes-duckduckgo-search.duckDuckGo** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 39 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
