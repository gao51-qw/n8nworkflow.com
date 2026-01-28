# Auto-rename workflow nodes with AI (Gemini/Claude) for better readability (beta)

> ## Rename Workflow Nodes with AI for Clarity

This workflow automates the tedious process of renaming nodes in your n8n workflows. Instead of manually editing each node, it uses an AI language model to analyze its function and assign a concise, descriptive new name. This ensures your workflows are clean, readable, and easy to maintain.

### Who's it for?

This template is perfect for n8n developers and power users who build complex workflows. If you often find yourself struggling to understand the purpose of different nodes at a glance or spend too much time manually renaming them for documentation, this tool will save you significant time and effort.

### How it works / What it does

The workflow operates in a simple, automated sequence:

1.  **Configure Suffix:** A "Set" node at the beginning allows you to easily define the suffix that will be appended to the new workflow's name (e.g., "- new node names").
2.  **Fetch Workflow:** It then fetches the JSON data of a specified n8n workflow using its ID.
3.  **AI-Powered Renaming:** The workflow's JSON is sent to an AI model (like Google Gemini or Anthropic Claude), which has been prompted to act as an n8n expert. The AI analyzes the `type` and `parameters` of each node to understand its function.
4.  **Generate New Names:** Based on this analysis, the AI proposes new, meaningful names and returns them in a structured JSON format.
5.  **Update and Recreate:** A Code Node processes these suggestions, updates all node names, and correctly rebuilds the connections and expressions.
6.  **Create & Activate New Workflow:** Finally, it creates a new workflow with the updated name, deactivates the original to avoid confusion, and activates the new version.

## 📊 Basic Information

- **Workflow ID:** 10317
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 83
- **Downloads:** 8
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10317)

## 👤 Author

- **Name:** Dr. Christoph Schorsch
- **Username:** @upfastai

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** 
- **n8n** (×4)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
