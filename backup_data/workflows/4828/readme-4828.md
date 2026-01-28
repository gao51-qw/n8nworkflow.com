# Generate SEO Arabic articles and save to Notion

> This workflow automatically creates in-depth, SEO-friendly Arabic articles based on any keyword you provide. It researches the topic, generates a full article outline, writes every section in Arabic, and saves the final article directly to your Notion workspace—all in a few clicks.

---

### How It Works

- **Step 1:** You submit a simple web form with your keyword and (optionally) an article title.
- **Step 2:** The workflow researches the topic using advanced AI, gathers trending questions from Google, and creates a detailed, structured outline.
- **Step 3:** Each section of the article is written in Arabic by AI, following best SEO practices and including real FAQs.
- **Step 4:** The completed article is automatically formatted and saved to your Notion database, ready for review or publishing.

---

### Setup Instructions

- **What you need:**
    - An **OpenAI API key** (for AI-powered writing and outline generation)
    - An **OpenRouter API key** (for research via Perplexity/Sonar AI)
    - A **Notion account** and **Notion API integration** (for saving articles)
    - **DataForSEO account** (for fetching Google "People Also Ask" questions)
- **How to set up:**
    1. Import the workflow into your n8n instance.
    2. Connect your API credentials for OpenAI, OpenRouter, Notion, and (optionally) DataForSEO.
    3. Update your Notion database ID in the workflow settings.
    4. Deploy the workflow. Fill out the web form to generate your first article.
- **Setup time:** 10–20 minutes if you already have your accounts.

---

**Tip:**

You can fully customize the outline and writing prompts for your target audience or topic. The workflow is modular—easy to adapt for different languages or content styles.

## 📊 Basic Information

- **Workflow ID:** 4828
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 711
- **Downloads:** 71
- **Created:** 2025/6/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4828)

## 👤 Author

- **Name:** Mahmoud Ashraf
- **Username:** @ashrafai

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **splitOut** (×2)
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **stickyNote** (×6)
- **httpRequest** (×2)
- **notion** 
- **set** 
- **code** (×2)
- **form** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
