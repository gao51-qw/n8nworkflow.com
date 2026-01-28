# Automate Morning Brew–style Reddit Digests and Publish to DEV using AI

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Who’s it for

Community managers, content marketers, and builders who want a daily, skimmable update from a subreddit—automatically summarized, formatted, and cross-posted to DEV Community.

Here is a [Link to video hackathon detailing this build.](https://youtube.com/live/5oAnKSCP4do) 

## What it does

* Collects fresh posts from a subreddit (seeded via RSS).
* Uses the **Bright Data** node to batch-scrape each post for richer fields (upvotes, comment count, comments).
* Flattens comments/replies with **JMESPath** and trims payload size.
* Summarizes into a Morning Brew–style brief (Top Stories, Quick Hits, Community Q\&A, Comment Spotlight).
* Converts to clean **Markdown** and **publishes to DEV** with **HTTP Request**.
* Optional: emails the same digest via Gmail.

## How to set up

1. **Trigger**: Start with Manual Trigger; swap to **Cron** (daily) when ready.
2. **RSS → URLs**: Set the subreddit RSS of your choice, just add .rss to the end of the subreddit URL.
3. **Update AI Prompt to fit your needs** 

## Requirements

* DEV Community API key.
* Bright Data account + the Bright Data api key [Found Here](https://brightdata.com/cp/setting/users).
* Optional: LLM provider credentials (OpenAI, Gemini).

## How to customize

* Swap DEV publishing for email/Slack; or post both.
* Add more subreddits and **dedupe by URL**.

## Best practices

* **No hardcoded API keys**—use credentials.
* Pin long-running outputs while building to save credits.
* Only collect **publicly available data** with Bright Data.


## 📊 Basic Information

- **Workflow ID:** 7632
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 295
- **Downloads:** 29
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7632)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **rssFeedRead** 
- **@brightdata/n8n-nodes-brightdata.brightData** (×3)
- **set** (×3)
- **aggregate** (×2)
- **splitInBatches** 
- **noOp** 
- **if** 
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **scheduleTrigger** 
- **markdown** 
- **httpRequest** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
