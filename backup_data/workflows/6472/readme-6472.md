# Generate weekly animal rights action briefings from U.S. House bills with Gemini AI

> ## 🐾 Who’s it for

Animal advocates & campaigners who want a **weekly briefing on animal-related bills** with clear, actionable steps—no manual research needed.

## ⏱ What it does

Every Monday at 8 AM, this workflow:

1. **Fetches all House bills** scheduled for the week.
2. **Cleans and downloads bill PDFs.**
3. **Analyzes each bill with Gemini** (relevance, urgency, stance, key action points).
4. **Filters irrelevant bills** using built-in thresholds.
5. **Runs a research subworkflow** for lobbying, sponsor, and coalition intel.
6. **Generates a ready-to-send HTML action email** with scripts, contacts, and deadlines.

## ⚙️ How to set up

1. **Import this workflow** into n8n.
2. **Download & import** the [Research Subworkflow](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/) and select it in the “Research” node.
3. **Add email credentials** (SMTP, Gmail, etc.) in the Email node.
4. (Optional) **Adjust Gemini prompt or thresholds** for your priorities.

## 🔑 Requirements

* **Gemini API key** (via Google AI Studio or Vertex AI).
* **Email provider credentials**.
* **Research subworkflow** (linked above).

## 🎛 How to customize

* **Edit the Gemini prompt** to focus on specific issues (e.g., wildlife, farmed animals).
* **Change relevance/urgency thresholds** to include more or fewer bills.
* **Tweak the HTML email design** or call-to-action style.

## 📊 Basic Information

- **Workflow ID:** 6472
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 244
- **Downloads:** 24
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6472)

## 👤 Author

- **Name:** Open Paws
- **Username:** @openpaws

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **splitOut** 
- **extractFromFile** 
- **html** 
- **noOp** 
- **set** 
- **if** 
- **stickyNote** (×8)
- **aggregate** 
- **executeWorkflow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
