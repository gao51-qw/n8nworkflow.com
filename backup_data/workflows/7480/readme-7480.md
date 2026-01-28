# Generate personalized startup ideas with Claude analysis and Gmail reports

> ## Get Started with [n8n](https://n8n.partnerlinks.io/ds9podzjls6d) now!

## Who's it for
This workflow is designed for developers, entrepreneurs, and startup enthusiasts who want personalized, AI-driven startup idea generation and analysis. Perfect for solo developers seeking side project inspiration, startup accelerators evaluating concepts, or anyone looking to validate business ideas with professional-grade analysis.

## How it works
The workflow uses a three-stage Claude AI agent pipeline to create comprehensive startup analyses. The first agent generates innovative startup ideas based on your technical skills and preferences. The second agent acts as a venture capitalist, critically analyzing market viability, competition, and execution challenges. The third agent performs sentiment analysis and synthesizes a final recommendation with actionable next steps.

## How to set up
1. Configure Anthropic API credentials for all three Claude AI model nodes
2. Set up Gmail OAuth2 for email delivery
3. Fill out the "My Information" node with your developer profile
4. Update the recipient email address in the Gmail node
5. Test with the manual trigger before enabling daily automation

## Requirements
- [n8n account](https://n8n.partnerlinks.io/ds9podzjls6d)
- Anthropic API account for Claude AI access
- Gmail account with OAuth2 configured
- Basic understanding of developer skills and market preferences

## How to customize the workflow
Modify the AI agent prompts to focus on specific industries or business models. Adjust temperature settings for different creativity levels. Add database storage to track idea history. Configure the form trigger for team-wide idea generation or integrate with Slack for automated sharing.


## Got a good idea?
Visit my site https://techpoweredgrowth.com to get help getting to the next level
Or reach out to luka.zivkovic@techpoweredgrowth.com

## 📊 Basic Information

- **Workflow ID:** 7480
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 916
- **Downloads:** 91
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7480)

## 👤 Author

- **Name:** Luka Zivkovic
- **Username:** @zivkovic58

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×3)
- **formTrigger** 
- **scheduleTrigger** 
- **manualTrigger** 
- **code** (×2)
- **gmail** 
- **merge** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×3)
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
