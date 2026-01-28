# Auto-bidder for Freelancer.com with Telegram approval and AI proposals

> # 🔁 Auto-Bidder for Freelancer.com with Telegram Approval and AI Proposals

This **n8n template** automates your freelance bidding workflow on [Freelancer.com](https://freelancer.com), combining API calls, Telegram interactions, and AI-generated proposals. Ideal for freelancers who want to bid smarter, faster, and hands-free.

## ✨ Features

- 🔍 **Skill-Based Project Search**  
  Searches for active projects on Freelancer.com using your chosen skill keywords (e.g., `n8n`, `Python`, `Django`).

- 🚫 **Duplicate Bid Prevention**  
  Automatically checks if you’ve already bid on a project and skips it.

- 🤖 **AI Proposal Generation**  
  Generates short, persuasive, and customized proposals using an AI agent.

- 📬 **Telegram Notifications**  
  Sends project summaries to Telegram with inline buttons to **Bid** or **Cancel**.

- ✅ **Auto-Bid Submission**  
  When you approve a project via Telegram, the bid is submitted with predefined values (amount, period, milestone).

- ⏱️ **Manual or Scheduled Execution**  
  Supports both on-demand and scheduled workflows (hourly, daily, etc.).

## 📌 Requirements

- Freelancer.com API token (OAuth)
- Telegram Bot API token
- OpenAI API key (for proposal generation)

## 📎 Use Cases

- Freelancers automating repetitive bidding tasks
- Agencies managing client profiles
- Developers experimenting with AI + API + chat integration

## 🔗 Included Workflows

- `freelancerMain` – Kicks off execution with skill input
- `freelancerAgent` – Performs project search, bidding logic, Telegram prompts, and AI proposal generation

---

&gt; 💡 Tip: You can easily customize the skill query list, bid amount logic, or prompt format in the workflow settings.


## 📊 Basic Information

- **Workflow ID:** 6048
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 292
- **Downloads:** 29
- **Created:** 2025/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6048)

## 👤 Author

- **Name:** Mohamed Abdelwahab
- **Username:** @mohelwah

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×3)
- **if** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×5)
- **telegram** (×3)
- **splitOut** (×3)
- **splitInBatches** 
- **aggregate** 
- **executeWorkflowTrigger** 
- **manualTrigger** 
- **executeWorkflow** 
- **scheduleTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
