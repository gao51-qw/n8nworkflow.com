# Generate LinkedIn posts and AI images from web pages with Airtop and GPT-4

> 
## Use Case
Turn any web page into a compelling LinkedIn post — complete with an AI-generated image. This automation is ideal for sharing content like blog posts, case studies, or product updates in a polished and engaging format.

## What This Automation Does
Given a page URL and optional user instructions, this automation:
- Scrapes the content of the webpage
- Uses AI to write a clear, educational, and LinkedIn-optimized post
- Generates a brand-aligned visual that matches the content
- Sends both to Slack for review and approval
- Handles feedback and revisions via Slack interactions

Input:
- **Page URL** — The link to the webpage (required)
- **Instructions** — Optional notes on tone, emphasis, or format

Output:
- LinkedIn post text
- AI-generated visual prompt and image
- Slack message with review/approval options

## How It Works
1. **Form Submission**: User inputs a web page and optional instructions.
2. **Web Scraping**: Uses Airtop to extract page content.
3. **Post Generation**: AI agent writes a post based on the page and instructions.
4. **Visual Generation**: Another AI model creates an image prompt; this is sent to a sub-workflow for image rendering.
5. **Slack Review Flow**:
   - Post and image sent to Slack for feedback
   - User can approve, request revisions, or decline
   - Revisions trigger reprocessing steps automatically
6. **Final Post Delivery**: Approved post and image are sent back to Slack, ready to publish.

## Setup Requirements
1. Airtop API key
2. OpenAI credentials for post and image prompt generation
3. Slack OAuth integration with a review channel
4. A sub-workflow for branded image generation

## Next Steps
- **Post Directly**: Add LinkedIn publishing to automate the full content workflow.
- **Template Variations**: Offer post style presets (e.g., technical, story-driven, short-form).
- **CRM Sync**: Save approved posts and stats in Airtable or Notion for team use.

[Read more about content generation with Airtop](https://www.airtop.ai/automations/generate-linkedin-post-and-image-from-a-webpage-n8n)

## 📊 Basic Information

- **Workflow ID:** 5774
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 974
- **Downloads:** 97
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5774)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** (×2)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **set** (×6)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **@n8n/n8n-nodes-langchain.textClassifier** (×2)
- **executeWorkflow** 
- **slack** (×3)
- **airtop** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
