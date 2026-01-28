# Market research & business case generator with GPT-4o, Perplexity & Claude

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

🧠 Market Research & Business Case Study Generator
Category: AI + Research | GPT + Perplexity | Business Strategy
Skill Level: Intermediate
Use Case: Market Research, Business Planning, Strategic Analysis

📌 Description:
This template automates the creation of comprehensive, data-backed business case studies—perfect for entrepreneurs, analysts, consultants, and market researchers.

For more of such build + step-by-step video tutorials, check out:
https://www.youtube.com/@Automatewithmarc

Just send a simple message like:

“Give me a market opportunity analysis of a bicycle rental business in North Africa.”

And the workflow does the rest. It scopes your research topic, performs live web research, and crafts a well-structured 1500-word business case study—all automatically saved to Google Docs.

🔧 How It Works:
🟢 Chat Trigger:
Start the workflow by sending a prompt via the built-in Chat interface (Langchain Chat Trigger).

🧭 Research Scope Definer (GPT-4o):
Breaks down the user input into structured components like industry, geography, trends, and challenges.

🌐 Deep Research (Perplexity Sonar):
Performs live research to retrieve relevant industry data, consumer trends, competitive insights, and more.

📘 Business Case Writer (Claude Sonnet):
Synthesizes the findings into a detailed case study with sections including:
Executive Summary
Market Overview
Opportunity Analysis
Competitive Landscape
Risks & Challenges
Strategic Recommendations
Conclusion
📄 Google Docs Integration:
The final output is appended to a connected Google Doc, so all your insights are neatly stored and ready to share.
🧰 Tools Used:
OpenAI GPT-4o
Perplexity Sonar Deep Research
Anthropic Claude Sonnet
Google Docs
Chat Trigger
✅ Ideal For:
Business consultants & strategy teams
Market researchers & analysts
Startup founders & product managers
Educators & MBA students

## 📊 Basic Information

- **Workflow ID:** 5430
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 4459
- **Downloads:** 445
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5430)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **googleDocs** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.openAi** 
- **perplexity** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
