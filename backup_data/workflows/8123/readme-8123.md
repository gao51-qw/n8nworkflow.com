# Generate meta & TikTok ad copy with OpenAI and Slack approval workflow

> ## Who's it for

Marketing teams, copywriters, and agencies who need to quickly generate and iterate on ad copies for Meta and TikTok campaigns. Perfect for brands that want AI-powered copy generation with human review and approval built into the workflow.

## What it does

This workflow automates the ad copy creation process by:
- Collecting brand and product information through a form
- Using AI to generate tailored ad copies based on brand type (Fashion or Problem-Solution)
- Sending copies to Slack for team review and approval
- Handling revision requests with feedback incorporation
- Limiting revisions to 3 rounds to maintain efficiency

## How to set up

1. **Configure your OpenAI credentials** in the OpenAI nodes
2. **Set up Slack integration** and select your review channel in all Slack nodes
3. **Customize the AI prompts** in the OpenAI nodes to match your brand voice
4. **Test the form** to ensure file uploads and data collection work properly
5. **Activate the workflow** when ready

## Requirements

- OpenAI API access (GPT-3.5 or GPT-4)
- Slack workspace with appropriate channel permissions
- Self-hosted n8n instance (for file upload functionality)

## How to customize

- Adjust the AI prompts in OpenAI nodes to match your specific industry or brand guidelines
- Modify the revision limit in the "Edit Fields: Revision Counter Max 3" node
- Add additional brand types in the form dropdown and corresponding AI nodes
- Customize Slack messages to match your team's communication style

## 📊 Basic Information

- **Workflow ID:** 8123
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 307
- **Downloads:** 30
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8123)

## 👤 Author

- **Name:** Chris Rudy
- **Username:** @chrisrudy

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **formTrigger** 
- **slack** (×6)
- **if** (×4)
- **set** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
