# Automated blog post generation with GPT-4 and publishing to Ghost CMS

> 🧠 Writes original, thought-provoking blog posts using AI  
🕓 Runs every 12 hours automatically  
✍️ Publishes directly to Ghost blog with title, tags, and SEO meta  

🔧 Features

    Scheduled every 12 hours

    OpenAI generates a multi-part blog post with metadata

    Markdown-compatible output (no HTML)

    Automatically published to Ghost CMS using authenticated API (🔐 no hardcoded keys)

    Fully modular and general-purpose — edit prompt for any blog theme!

⚙️ Nodes Overview
Step	Node Type	Purpose
1️⃣	Schedule Trigger	Runs every 12 hours
2️⃣	OpenAI	Generates blog post + meta info
3️⃣	Code	Extracts content, title, meta, and tags
4️⃣	Code	Formats content as Ghost mobiledoc payload
5️⃣	HTTP Request	Publishes post to Ghost via Admin API
📝 OpenAI Prompt (Generalized)

Write a high-quality blog post on a creative or thought-provoking topic. The tone should be engaging and immersive. Length: 2–4 paragraphs.

Then add a brief paragraph offering an alternative perspective or logical counterpoint.

Finally, generate:
- Blog post title
- Meta description
- 5 tags

🔐 Notes

    ✅ No hardcoded API keys

    🛠️ Ghost Admin API credentials must be set using the Credential Manager

    📌 Prompt and Ghost URL are both easily customizable

## 📊 Basic Information

- **Workflow ID:** 5934
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 2875
- **Downloads:** 287
- **Created:** 2025/7/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5934)

## 👤 Author

- **Name:** Thomas
- **Username:** @darkrangeholdings

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** 
- **code** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
