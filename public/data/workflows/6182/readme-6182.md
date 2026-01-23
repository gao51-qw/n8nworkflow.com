# Automate LinkedIn content creation with OpenAI, Google Sheets & LinkedIn API

> Build a completely automated LinkedIn content engine using n8n, OpenAI, Google Sheets, and the LinkedIn API. This workflow reads unpublished topics from a Google Sheet, generates engaging AI-powered post content and a relevant image, and publishes directly to LinkedIn — no manual effort required.

## How It Works
1. This system uses a scheduled trigger (e.g., daily at 9 AM) to:
3. Fetch the first **Unpublished** topic from your Google Sheet.
5. Generate a compelling, SEO-optimized post description using OpenAI.
7. Create a marketing image that includes the topic title visually.
9. Merge the content and image.
11. Publish the post to your LinkedIn profile.
13. Update the sheet to mark the topic as **Published**.

## Prerequisites
1.A Google Sheet with two columns: Topics and Status
2.A verified LinkedIn developer account and app
3.OpenAI API key
4.n8n cloud or self-hosted instance
5.LinkedIn OAuth2 credentials in n8n
6.Google Sheets OAuth2 credentials in n8n

## Google Sheet Example
| Topics                     | Status      |
| -------------------------- | ----------- |
| How to Automate LinkedIn   | Unpublished |
| Top AI Tools for Marketers | Unpublished |

##  Step-by-Step Setup
1. Clone or import the provided n8n workflow.
2. Create a Google Sheet with your post topics and mark them as Unpublished
3. Set up OAuth2 credentials in n8n for Google Sheets and LinkedIn.
4. Use the Schedule Trigger node to control posting frequency.
5. Adjust the OpenAI prompt to better match your tone.
6. Add a test topic and verify it generates, posts, and updates correctly.

## Customization Tips
1. Change posting frequency (daily/hourly) in the Schedule Trigger.
2. Modify the OpenAI prompt for different tones (professional, fun, educational).
3. Use a different image generation model or remove image generation if not needed.
4. Add approval steps before publishing, using Telegram/Slack/email nodes.

## 📊 Basic Information

- **Workflow ID:** 6182
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 101
- **Downloads:** 10
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6182)

## 👤 Author

- **Name:** Muhammad Qaisar Mehmood
- **Username:** @qaisar

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **merge** 
- **linkedIn** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **scheduleTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
