# Extract actionable security insights from HackerOne reports with Google Gemini

> A streamlined AI-powered tool that extracts actionable technical insights from HackerOne security reports for advanced bug bounty hunters.

## How It Works
Send any HackerOne report URL (e.g., https://hackerone.com/reports/123456) to the chat interface. The AI agent will:

1. Fetch the report JSON automatically
2. Analyze for unique techniques, payloads, and root causes
3. Extract reusable insights in a structured format
Summarize with practical pentesting value

## Setup Requirements

1. Google Gemini API credentials configured
2. Chat interface deployed and accessible
3. HackerOne report URLs

## Output Format

1. Summary: One-liner impact statement
2. Techniques: Payloads, code snippets, exploitation steps
3. Pro Tips: Reusable insights for future hunts

Perfect for rapid triage and building your personal exploit knowledge base.

## 📊 Basic Information

- **Workflow ID:** 6301
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 605
- **Downloads:** 60
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6301)

## 👤 Author

- **Name:** Kunsh
- **Username:** @ethicxlhuman

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
