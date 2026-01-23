# Generate LinkedIn posts from web pages with GPT-4 and human review

> 
## Use Case
Turn any web page into a compelling LinkedIn post — complete with an AI-generated image. This automation is ideal for sharing content like blog posts, case studies, or product updates in a polished and engaging format.

## What This Automation Does
Given a page URL and optional user instructions, this automation:
- Scrapes the content of the webpage
- Uses AI to write a clear, educational, and LinkedIn-optimized post
- Sends both to Slack for review and approval
- Handles feedback and revisions via Slack interactions

Input:
- **Page URL** — The link to the webpage (required)
- **Instructions** — Optional notes on tone, emphasis, or format

Output:
- LinkedIn post text
- Slack message with review/approval options

## How It Works
1. **Form Submission**: User inputs a web page and optional instructions.
2. **Web Scraping**: Uses Airtop to extract page content.
3. **Post Generation**: AI agent writes a post based on the page and instructions.
4. **Slack Review Flow**:
   - Post and image sent to Slack for feedback
   - User can approve, request revisions, or decline
   - Revisions trigger reprocessing steps automatically
5. **Final Post Delivery**: Approved post is sent back to Slack, ready to publish.

## Setup Requirements
1. Generate an [Airtop API key](https://portal.airtop.ai/api-keys) completely free.
2. Configure your [OpenAI credentials](https://docs.n8n.io/integrations/builtin/credentials/openai/) for post and image prompt generation
3. [Slack OAuth](https://docs.n8n.io/integrations/builtin/credentials/slack/#slack-trigger-configuration) credentials and a Slack channel

## Next Steps
- **Post Directly**: Add LinkedIn publishing to automate the full content workflow.
- **Template Variations**: Offer post style presets (e.g., technical, story-driven, short-form).
- **CRM Sync**: Save approved posts and stats in Airtable or Notion for team use.

Read more about [generating social content using AI](https://www.airtop.ai/automations/generate-linkedin-post-from-a-webpage)

## 📊 Basic Information

- **Workflow ID:** 5775
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 809
- **Downloads:** 80
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5775)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **slack** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **airtop** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
