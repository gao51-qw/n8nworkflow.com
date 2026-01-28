# Generate SEO-optimized WordPress blogs with Gemini, Tavily & human review

> Effortlessly generate, review, and publish SEO-optimized blog posts to WordPress using AI and automation.

## How It Works
AI Topic Generation: Gemini suggests trending blog topics matching your agency's services.

Content Research: Tavily fetches recent relevant articles for each generated topic.

Human Review: Choose the preferred article for publishing through a Telegram notification.

AI Rewriting: Gemini rewrites the selected article into a polished, SEO-friendly post.

Image Generation & Publishing: The workflow creates a featured image with Gemini or OpenAI, then publishes the post (with dynamic categories and images) to WordPress.

Audit Trail: Every published post is logged to Google Sheets, and final details are sent to Telegram.

## Set Up Steps
- Estimated setup time: 15–30 minutes (excluding API approval/wait times).

- Connect your WordPress, Gemini (Google), Tavily, Google Sheets, and Telegram accounts.

- Configure your preferred posting schedule in the “Schedule Trigger.”

- Adjust prompts or messages to fit your agency’s niche or editorial voice if needed.

## Note:
Detailed customizations and advanced configuration tips are included in the sticky notes within the workflow.

## 📊 Basic Information

- **Workflow ID:** 8356
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 1717
- **Downloads:** 171
- **Created:** 2025/9/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8356)

## 👤 Author

- **Name:** Aryan Shinde
- **Username:** @shindearyan

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **wordpress** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **httpRequest** (×8)
- **if** (×2)
- **code** (×2)
- **telegram** (×2)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×4)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
