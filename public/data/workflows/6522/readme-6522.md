# Auto-generate WordPress blog posts from Reddit RSS with Groq AI & Pexels images

> ## Who’s it for

This template is ideal for **creators, bloggers, and automation enthusiasts** who want to auto-generate blog posts from AI-generated content — without lifting a finger. Whether you're running a tech blog, AI newsletter, or just want to keep your WordPress site fresh, this workflow does the heavy lifting.

---

## How it works

This n8n workflow automatically publishes WordPress posts using trending content from Reddit RSS feeds (like `/r/artificial` and `/r/MachineLearning`), enhanced with AI writing and royalty-free images.

1. **RSS Feed Trigger**: Fetches new Reddit posts every minute from multiple AI-related subreddits.
2. **AI Blog Writer**: Uses an LLM (Groq / GPT-4o) to convert Reddit titles + content into a full blog article (title, content, category, tags, image keyword).
3. **Image Generator**: Queries the Pexels API using the keyword provided by the AI to fetch a relevant blog image.
4. **Category & Tag Manager**: Automatically creates or reuses categories and tags in WordPress.
5. **WordPress Publisher**: Posts the article in draft or published form — complete with featured image and metadata.

Everything is dynamically generated — no hardcoded text or API keys!

---

## How to set up

Estimated time: **15–20 minutes**

You’ll need:

* 🧠 **Groq** or **OpenAI** API key (for AI article generation)
* 🖼️ **Pexels API** key (for fetching featured images)
* 📰 **WordPress API** credentials (with media + post permissions)

**Customization via Sticky Notes**:

* Choose your own RSS feeds (or subreddit URLs)
* Modify the AI prompt to match your writing style
* Set post status (`draft` or `publish`)
* Add your WordPress API URL and credentials

---

## Requirements

* Free n8n account (or self-hosted instance)
* API credentials (Groq/OpenAI, Pexels, WordPress)
* Working WordPress site with REST API access
* Sticky notes explaining:

  * Setup instructions
  * AI prompt format
  * Required credential names

## 📊 Basic Information

- **Workflow ID:** 6522
- **Complexity:** advanced
- **Node Count:** 53
- **Views:** 1675
- **Downloads:** 167
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6522)

## 👤 Author

- **Name:** Ranjan Kumar
- **Username:** @iamranjank09

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** (×9)
- **httpRequest** (×16)
- **if** 
- **merge** (×7)
- **switch** (×5)
- **filter** (×5)
- **wordpress** (×2)
- **code** 
- **rssFeedReadTrigger** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 53 nodes with 51 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
