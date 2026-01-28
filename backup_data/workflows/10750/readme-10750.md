# Automate blog-to-social media with GPT-4 for LinkedIn, X, and Reddit

> 
Turn your blog into a set-and-forget content engine: every new article is instantly repurposed into channel-specific social posts with visuals, keeping your brand visible on LinkedIn, X, and Reddit without extra copywriting time. Perfect for lean marketing teams who want consistent, always-on distribution from a single source of content.

# How it works
• Watches your blog RSS feed (or receives a single URL) and detects new articles.
• Saves each post in Postgres so every article is only processed once.
• Fetches the article HTML, extracts the main body content and sends it to OpenAI (GPT-4.1).
• OpenAI creates platform-optimized copy: 1 LinkedIn post, 1 X/Twitter post, 1 Reddit post + image prompts.
• Generates on-brand images with OpenAI and publishes everything automatically to LinkedIn, X, and Reddit.
• You can also trigger it manually or via webhook whenever you want to push a specific campaign.

![image1.png](fileId:3287)
![image2.png](fileId:3288)


# Setup Steps
• Time: around 20–40 minutes for someone familiar with n8n and the platforms.
• Create a Postgres table “rss_items” with fields: guid (PRIMARY KEY), title, link, published_at.
• Add credentials in n8n for:
  – Postgres
  – OpenAI
  – LinkedIn OAuth2
  – X/Twitter OAuth2 + OAuth1 (for media upload)
  – Reddit OAuth2
• In the RSS node, set your blog feed URL (for example: https://yourblog.com/feed).
• In the webhook node, confirm the URL/path you want external tools or other workflows to call with a “link” field.
• Run the manual trigger with one test blog URL to verify:
  – Article content is extracted correctly.
  – AI returns LinkedIn/X/Reddit posts and image prompts.
  – Posts and images appear correctly on all social accounts.
• Once tests look good, enable the Schedule Trigger so Blog2Social AI runs automatically at your chosen interval.

















## 📊 Basic Information

- **Workflow ID:** 10750
- **Complexity:** advanced
- **Node Count:** 51
- **Views:** 279
- **Downloads:** 27
- **Created:** 2025/11/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10750)

## 👤 Author

- **Name:** Le Nguyen
- **Username:** @leeseifer

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×4)
- **html** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **set** (×2)
- **linkedIn** 
- **twitter** 
- **wait** (×2)
- **scheduleTrigger** 
- **webhook** 
- **rssFeedRead** 
- **postgres** 
- **if** 
- **splitInBatches** 
- **respondToWebhook** 
- **merge** 
- **stickyNote** (×27)
- **reddit** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 51 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
