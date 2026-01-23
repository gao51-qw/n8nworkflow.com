# Automate SEO content creation with Google SERP, Claude AI, and WordPress

> ## 👥 Who the Automation is for

This automation is perfect for bloggers, solopreneurs, business owners, and marketing teams who want to **scale SEO content creation**. 

Instead of spending hours on research and drafting, you can go from a single keyword idea to a ready-to-edit WordPress draft in minutes.<br><br>

## ⚙️ How the Automation Works

**Collect keywords** in a Google Sheet and mark the ones you want as “prioritized.”

Click “Prepare Content” → your keyword(s) are sent to n8n.

n8n pulls the top 10 Google **SERP** results.

**AI analyzes competitors** (tone, content type, gaps) and creates a **content brief.**

Another AI generates a **blog draft** based on the brief.

The draft is automatically uploaded to WordPress and your sheet updates.

👉 In short: **Keyword → SERP → Brief → Draft → WordPress.**<br><br>


## 🛠 How to Set Up [Full Setup Guide](https://opaque-face-45b.notion.site/Keyword-to-Blog-Post-Automation-221f1bceaabe808fb4efdc7c7be71bac)

Copy the Google Sheets Template.

Import the workflow into n8n.

Add your API keys: Google Custom Search, Claude AI, and WordPress credentials.

Test the webhook connection from Google Sheets.

**🎉 Done — you now have a one-click pipeline from keyword idea to WordPress draft.**

## 📊 Basic Information

- **Workflow ID:** 7503
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1638
- **Downloads:** 163
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7503)

## 👤 Author

- **Name:** Eugen
- **Username:** @callmeeugenius

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×6)
- **splitOut** (×2)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **httpRequest** (×2)
- **code** 
- **wordpress** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
