# Generate LinkedIn agency content with GPT‑4o, Claude 4.5 and Gemini

> The Multi-Model Agency Content Engine is a high-performance editorial system designed for agencies. It solves the "blank page" problem by alternating between real-world social proof and strategic expertise.

Features
Dual-Track Logic: Automatically switches between Portfolio Case Studies (via Google Drive) and Strategic Thought Leadership (via Google Sheets).

Triple-AI Brain: Parallel processing using GPT-4o, Claude 4.5, and Gemini 1.5 to provide three distinct strategic angles for every post.

Human-in-the-Loop: Interactive Gmail approval system - review drafts side-by-side and approve with a single letter reply.

Clean Formatting: Custom code logic that strips AI artifacts and enforces LinkedIn-optimized typography.

Enterprise Reliability: Includes a global error-handling branch with instant email alerts.

## 📊 Basic Information

- **Workflow ID:** 12302
- **Complexity:** advanced
- **Node Count:** 62
- **Views:** 362
- **Downloads:** 36
- **Created:** 2025/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12302)

## 👤 Author

- **Name:** Ailin Werner
- **Username:** @ailinwerner

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **switch** (×2)
- **googleSheets** (×6)
- **code** (×4)
- **if** 
- **gmail** (×3)
- **scheduleTrigger** 
- **aggregate** (×2)
- **googleDrive** (×2)
- **limit** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×8)
- **merge** (×3)
- **httpRequest** (×3)
- **wait** 
- **noOp** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×3)
- **sort** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **stickyNote** (×12)
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 62 nodes with 46 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
