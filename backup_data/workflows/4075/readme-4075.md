# Automated tweet generator & publisher with GPT-4, Discord, and Google Sheets

> # AI Twitter Content Machine – Write, Refine & Publish Tweets on Autopilot

This workflow is perfect for creators, solopreneurs, and personal brands who want to consistently publish bold, high-performing content on X (Twitter) — without writing a single line themselves. After a one-time setup, it automatically generates tweet ideas, writes in your voice, evaluates post quality, avoids duplicates, and publishes directly to Twitter. All approvals and rewrites are handled in a conversational loop powered by OpenAI, Discord, and Google Sheets.

Whether you’re building a personal brand or growing your startup audience, this tool will help you stay active, edgy, and relevant — with zero friction.

## How it works
- Distill what your flow does in a few high-level steps.
- Loads your brand brief from a sub-workflow.
- Generates a tweet idea aligned with your tone.
- Checks Google Sheets to ensure the idea hasn’t been used.
- Writes the post.
- Evaluates it using a feedback sub-workflow — if the quality score is below 0.7, it rewrites the post.
- Refines tone and voice using a Rewriter Agent that mimics your past content (from a Google Sheet).
- Sends the final post to a Discord channel for manual approval.
- On approval, posts directly to Twitter (X) and logs it to Google Sheets (History and Examples tabs).

## Set up steps
- Give users an idea of how long setup will take. Don’t describe every detail.
- Keep detailed descriptions in sticky notes inside your workflow.

## Key benefits
- No burnout, no block – Stop spending energy thinking what to tweet. AI handles everything.
- Style-matching – Posts sound like you, not a generic robot. Based on your real writing.
- Fast & scalable – Publish once or five times a day — it’s up to you.
- Avoid duplicates – Each idea is checked against your post history.
- Human-in-the-loop – You approve final posts via Discord. No rogue tweets.

## Integrations required
- n8n
- OpenAI API
- Google Sheets
- Twitter (OAuth2)
- Discord (for approval)
- Notion (optional for brand brief storage)


## 📊 Basic Information

- **Workflow ID:** 4075
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 3194
- **Downloads:** 319
- **Created:** 2025/5/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4075)

## 👤 Author

- **Name:** LukaszB
- **Username:** @lukaszb

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **discord** (×5)
- **if** (×2)
- **executeWorkflow** (×2)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **manualTrigger** 
- **stickyNote** (×11)
- **googleSheetsTool** (×2)
- **twitter** 
- **googleSheets** (×2)
- **executeWorkflowTrigger** 
- **notion** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
