# Research-to-social post generator with Perplexity AI and Facebook Graph API

> 
## Who’s it for
Teams that want to turn a chat prompt into a researched, ready-to-post social update—optionally published to Facebook.

## What it does / How it works
- Chat Trigger receives the user prompt
- Topic Agent optionally calls a research sub-workflow for fresh sources
- Outputs are validated into a structured JSON
- Post Writing Agent crafts a concise Vietnamese post
- (Optional) Facebook Graph API publishes to your Page

## How to set up
1. Connect OpenAI & Facebook in **Credentials** (no API key inside nodes).
2. In **Tool: Call Perplexity Researcher**, set your research `workflowId`.
3. In **Publish: Facebook Graph API**, set your Page ID and edge.
4. Adjust prompts/tone and the `LANGUAGE` in **CONFIG**.
5. Test the flow with sample prompts in the chat.

## Requirements
- n8n (Cloud or self-hosted)
- OpenAI API key (stored in Credentials)
- Facebook Page publish permissions
- (Optional) a research workflow for Perplexity

## How to customize the workflow
- Add moderation/review gates before publishing.
- Duplicate the publish path for other platforms.
- Store outputs in Sheets/Notion/DB for auditing.
- Tune model choice & temperature for your brand voice.

## Security
- Avoid hardcoding secrets in HTTP or Code nodes.
- Keep identifiers (Page IDs, workflowIds) configurable in **CONFIG**.

## 📊 Basic Information

- **Workflow ID:** 8664
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 339
- **Downloads:** 33
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8664)

## 👤 Author

- **Name:** HoangSP
- **Username:** @hoangsp

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **facebookGraphApi** 
- **set** 
- **stickyNote** (×13)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
