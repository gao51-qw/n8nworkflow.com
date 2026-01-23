# Social Media Content Automation workflow

> ## Transform Your Social Media Strategy with AI-Powered Content Generation!

### Stop spending hours crafting social media posts.

This automated workflow uses AI to generate professional, platform-specific content and publishes it across your social channels on schedule.

## What This Workflow Does?

This workflow creates a complete social media publishing system, incorporarint automated actions such as:

- Content Planning: Pull post ideas from a Google Sheet on schedule
- AI Content Creation: Generate tailored content for each platform using OpenAI
- Multi-Platform Publishing: Post to LinkedIn and Twitter with proper formatting
- Content Tracking: Log all scheduled posts in a Google Sheet
- Notification System: Get email confirmations when content is scheduled

## Perfect For:

Marketing teams looking to scale content creation
Social media managers handling multiple accounts
Small businesses without dedicated social media staff
Content creators needing consistent publishing schedules

## Setup Instructions:

Required Accounts
Before setting up the workflow, make sure you have:

- OpenAI API Key: For AI-powered content generation
- Google Account: To access Google Sheets for content ideas and tracking
- LinkedIn Account: With developer access for publishing
- Twitter/X Account: With developer access for publishing
- Email Account: For sending notifications

## 📊 Basic Information

- **Workflow ID:** 3104
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 251
- **Downloads:** 25
- **Created:** 2025/3/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3104)

## 👤 Author

- **Name:** Joseph
- **Username:** @js9600

## 🏷️ Categories

- AI
- Content Creation

## 🔗 Nodes Used

- **splitInBatches** (×2)
- **scheduleTrigger** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **twitter** 
- **emailSend** 
- **stickyNote** (×3)
- **linkedIn** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
