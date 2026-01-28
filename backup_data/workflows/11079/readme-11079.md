# Transform Long-Form Content into Social Snippets with GPT-4o-mini and Meta Auto-Publishing

> ## 📊 Description
Automate your content repurposing workflow by transforming long-form articles, blogs, and newsletters into short, high-signal, AI-ready social media snippets. ✍️🤖 This workflow fetches pending content from Airtable, generates 30-word snippets, data points, and quote-style insights using GPT-4o-mini, and updates the original record with all generated fields. If Facebook is selected as a target platform, the workflow automatically posts the best snippet via the Meta Graph API and logs the result. Perfect for content, marketing, and social media teams scaling daily publishing without manual rewriting. 🚀📣

## 🔁 What This Template Does
1️⃣ Fetches “pending” long-form content from Airtable. 📥
 2️⃣ Processes all records in batches to avoid rate limits. 🔁
 3️⃣ Sends full content + metadata to GPT-4o-mini to generate structured snippets. 🤖
 4️⃣ Ensures valid JSON output via the structured parser. 📐
 5️⃣ Updates Airtable with:
 — 30-word snippets
 — data points
 — quote insights
 — a recommended primary snippet
 — timestamps & status
 6️⃣ Checks if Facebook is selected as a posting platform. ⚙️
 7️⃣ Automatically publishes the recommended snippet using the Meta Graph API. 📤
 8️⃣ Updates Airtable again with post status + response. 📝
 9️⃣ Sends a success notification to Slack with full details. 💬

## ⭐ Key Benefits
✅ Automates creation of platform-ready social media snippets
 ✅ Produces AI-friendly, high-signal content that works for LLM discovery
 ✅ Eliminates manual rewriting for LinkedIn, Facebook, Twitter, Instagram
 ✅ Automatically posts to Meta if selected — hands-free publishing
 ✅ Maintains clean, structured content in Airtable for future reuse
 ✅ Saves time for marketing, growth, and social teams

## 🧩 Features
- Airtable integration for content fetch + update
- GPT-4o-mini AI snippet generation
- Structured JSON parser for clean, reliable AI output
- Auto-detection of selected social platforms
- Facebook Graph API publishing
- Slack notifications for success
- Scheduled automation for hands-free daily processing
- Full audit trail with timestamps

## 🔐 Requirements
- Airtable Personal Access Token
- OpenAI API key (GPT-4o-mini)
- Facebook Graph API credentials (for auto-posting)
- Slack API credentials
- n8n with LangChain nodes enabled

## 🎯 Target Audience
- Content marketing teams repurposing long-form content
- Social media managers publishing daily posts
- Growth teams optimizing content for AI search engines
- Agencies producing content at scale for multiple clients


## 📊 Basic Information

- **Workflow ID:** 11079
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 41
- **Downloads:** 4
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11079)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **airtable** (×3)
- **splitInBatches** 
- **set** (×3)
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **slack** (×2)
- **scheduleTrigger** 
- **facebookGraphApi** 
- **stickyNote** (×9)
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
