# Team morale monitoring from Teams/Slack messages with Gemini AI

> ## AI Team Morale Monitor

### Who’s it for
For team leads, HR, and managers who want to monitor the emotional tone and morale of their teams based on message sentiment.

### How it works
1. **Trigger:** Runs every Monday at 9 AM.
2. **Config:** Defines your Teams and Slack channels.
3. **Fetch:** Gathers messages for the week.
4. **AI Analysis:** Evaluates tone and stress levels.
5. **Aggregate:** Computes team sentiment averages.
6. **Report:** Creates a readable morale summary.
7. **Slack Post:** Sends report to your workspace.

### How to set up
1. Connect Microsoft Teams and Slack credentials.
2. Enter your Team and Channel IDs in the **Workflow Configuration** node.
3. Adjust the schedule if desired.

### Requirements
- Microsoft Teams and Slack access.
- Gemini (or OpenAI) API credentials set in AI nodes.

### How to customize
- Modify the AI prompts for different insight depth.
- Replace Gemini with other LLMs if preferred.
- Change posting platform or format.

**Note:** This workflow uses *only* linguistic data — no personal identifiers or private metadata.

## 📊 Basic Information

- **Workflow ID:** 9926
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 99
- **Downloads:** 9
- **Created:** 2025/10/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9926)

## 👤 Author

- **Name:** higashiyama 
- **Username:** @kazushi

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **splitInBatches** 
- **code** (×3)
- **scheduleTrigger** 
- **set** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **slack** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
