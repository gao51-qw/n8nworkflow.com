# Generate deep research markdown reports with GPT, Tavily Search, and Google Sheets

> **This workflow generates deep researched report in markdown format and saves it in Google Sheet, that I then use for generating blogs for my website - [Architjn Blogs](https://architjn.com/blog)**

## How it works
1. User submits a search topic through a form.
2. AI generates five deep-dive subtopics for that main topic.
3. AI creates a research report intro, title, and table of contents based on those topics.
4. Each subtopic is sent to a search API (Tavily) to collect top 5 sources.
5. AI writes detailed Markdown content for each subtopic using retrieved sources.
6. Final content, ToC, intro, and clickable sources are saved to a Google Sheet.

## Set up steps
- Requires connections to OpenRouter (AI), Tavily (search API), and Google Sheets.
- Import into n8n and connect credentials for the above services.
- Configure Google Sheet with proper column headers and grant edit access.
- Estimated setup time: 20–30 minutes with working API keys.
- Includes embedded instructions and markdown-style annotations for guidance.

## 📊 Basic Information

- **Workflow ID:** 5040
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 551
- **Downloads:** 55
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5040)

## 👤 Author

- **Name:** Archit Jain
- **Username:** @architjn

## 🏷️ Categories

- Content Creation
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **splitOut** (×3)
- **merge** (×3)
- **set** 
- **googleSheets** (×6)
- **stickyNote** (×4)
- **formTrigger** 
- **splitInBatches** 
- **httpRequest** 
- **code** (×2)
- **aggregate** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
