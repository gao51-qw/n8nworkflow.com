# 🧠 AI blog post journalist (Perplexity for research, Anthropic Claude for blog)

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

🧠 AI-Powered Blog Post Generator
Category: Content Automation / AI Writing / Marketing

Description:
This automated workflow helps you generate fresh, SEO-optimized blog posts daily using AI tools—perfect for solo creators, marketers, and content teams looking to stay on top of the latest AI trends without manual research or writing.

For more of such builds and step-by-step Tutorial Guides, check out:
https://www.youtube.com/@Automatewithmarc

Here’s how it works:

Schedule Trigger kicks off the workflow daily (or at your preferred interval).

Perplexity AI Node researches the most interesting recent AI news tailored for a non-technical audience.

AI Agent (Claude via Anthropic) turns that news into a full-length blog post based on a structured prompt that includes title, intro, 3+ section headers, takeaway, and meta description—designed for clarity, engagement, and SEO.

Optional Memory & Perplexity Tool Nodes enhance the agent's responses by allowing it to clarify facts or fetch more context.

Google Docs Node automatically saves the final blog post to your selected document—ready for review, scheduling, or publishing.

Key Features:

Combines Perplexity AI + Claude AI (Anthropic) for research + writing

Built-in memory and retrieval logic for deeper contextual accuracy

Non-technical, friendly writing style ideal for general audiences

Output saved directly to Google Docs

Fully no-code, customizable, and extendable

Use Cases:

Automate weekly blog content for your newsletter or site

Repurpose content into social posts or scripts

Keep your brand relevant in the fast-moving AI landscape

Setup Requirements:

Perplexity API Key

Anthropic API Key

Google Docs (OAuth2 connected)



## 📊 Basic Information

- **Workflow ID:** 5202
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 7108
- **Downloads:** 710
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5202)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **perplexity** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **perplexityTool** 
- **googleDocs** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
