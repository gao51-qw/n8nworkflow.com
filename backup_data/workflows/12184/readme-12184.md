# Multi-agent LinkedIn content creation with GPT-4o, Google Sheets, and human review

> **Description:**
This is a Production-Grade Multi-Agent Content Engine designed for creators who prioritize technical authority over generic AI output.

Unlike standard "one-shot" prompts, this system uses a Chain-of-Thought (CoT) architecture to separate logical blueprinting from creative writing. It features a Persistent Memory loop via Google Sheets to ensure topic variety and a dedicated Compliance Editor to enforce strict branding rules (e.g., "Sentence Case" and spaced hyphens).

Built with enterprise resiliency in mind, it includes Global Error Handling and a Human-in-the-Loop Gmail approval gate with a 48-hour auto-timeout.

I built this to solve the 'Technical Content' bottleneck. It ensures that my social presence reflects the same high-quality engineering standards I apply to my client's n8n workflows.

**Key features:**
- Persistent Topic Memory: Automatically scans your Google Sheets history to prevent repeating technical topics.

- Multi-Agent Pipeline: Specialized agents for Topic Selection, Structural Architecture, Copywriting, and Brand Compliance.

- Style Enforcement: A final "Editor" agent that strips AI fluff and ensures a professional, human-sounding tone.

- Resilient Design: Features a global Error Trigger for instant failure notifications and an Approval Timeout to maintain system resources.

- Human-in-the-Loop: Sends a clean draft to Gmail for manual image pairing and final review before posting.

**How to setup**
- Google Sheets: Prepare a sheet with columns for Topic, Status, and Difficulty.

- Credentials: Connect your OpenAI (or Gemini) and Gmail accounts.

- IDs: Replace the placeholder Sheet ID and Recipient Email address in the nodes.

- Error Handling: Point the Error Trigger notification to your preferred email or Slack channel.

## 📊 Basic Information

- **Workflow ID:** 12184
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 404
- **Downloads:** 40
- **Created:** 2025/12/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12184)

## 👤 Author

- **Name:** Ailin Werner
- **Username:** @ailinwerner

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **gmail** (×2)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **stickyNote** (×7)
- **aggregate** 
- **errorTrigger** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
