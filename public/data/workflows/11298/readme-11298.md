# AI-powered content factory: RSS to blog, Instagram & TikTok with Slack approval

> This workflow automates the daily content creation process by monitoring trends, generating drafts for multiple platforms using AI, and requiring human approval before saving.

It acts as an autonomous "AI Content Factory" that turns raw news into polished content for SEO Blogs, Instagram, and TikTok/Reels.

## How it works
1. **Trend Monitoring:** Fetches the latest trend data via RSS (e.g., Google News or Google Trends).
2. **AI Filtering:** An AI Agent acts as an "Editor-in-Chief," selecting only the most viral-worthy topics relevant to your niche.
3. **Multi-Format Generation:** Three specialized AI Agents (using `gpt-4o-mini` for cost efficiency) run in parallel to generate:
    - An SEO-optimized Blog post structure.
    - An Instagram Carousel plan (5 slides).
    - A Short Video Script (TikTok/Reels).
4. **Human-in-the-Loop:** Sends a formatted message with interactive buttons to Slack. The workflow waits for your decision.
5. **Final Storage:** If approved, the content is automatically appended to Google Sheets.

## Who is this for
- Social Media Managers & Content Creators
- Marketing Agencies managing multiple accounts
- Anyone wanting to automate "research to draft" without losing quality control.

## Requirements
- **n8n:** Version 1.19.0+ (requires AI Agent nodes).
- **OpenAI:** API Key (works great with low-cost `gpt-4o-mini`).
- **Slack:** A workspace to receive notifications.
- **Google Sheets:** To store the approved content.

## How to set up
1. **Configure Credentials:** Set up your OpenAI, Slack, and Google Sheets credentials.
2. **Slack App:** Create a Slack App, enable "Interactivity," and set the Request URL to your n8n Production Webhook URL. Add the `chat:write` scope and install it to your workspace.
3. **Google Sheet:** Create a sheet with columns for `Blog`, `Instagram`, and `Script` (row 1 as headers).
4. **RSS Feed:** Change the RSS node URL to your preferred topic source.

## 📊 Basic Information

- **Workflow ID:** 11298
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 6915
- **Downloads:** 691
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11298)

## 👤 Author

- **Name:** Miki Arai
- **Username:** @mikia-n8n

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **merge** 
- **slack** 
- **wait** 
- **if** 
- **code** 
- **googleSheets** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
