# Convert documents to Markdown with MinerU API and GPT-4o-mini

> ## How it works
- This workflow automates the conversion of various document formats (such as PDF, Word, and PPT) into Markdown. It connects to the MinerU API service, which leverages OCR, formula, and table recognition to produce high-quality output. Users can initiate the process by simply uploading a document through an n8n chat interface.

## Set up steps

- Ensure you have a local n8n instance running.
- Set up and run the MinerU MCP (MinerU Computing Platform) server locally.
- Import this workflow into your n8n instance.
- Configure your AI model credentials (e.g., for OpenAI, add your API Key and Base URL).
- Click the "Write Files from Disk" node and edit the file path to your desired local save location.
- Click the "MCP Client" node and input your MinerU MCP server address (e.g., http://localhost:8000/sse).
- Click the "Open Chat" button to upload a file, send a message, and test the workflow.

## 📊 Basic Information

- **Workflow ID:** 4808
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1338
- **Downloads:** 133
- **Created:** 2025/6/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4808)

## 👤 Author

- **Name:** AdrianWang
- **Username:** @adrian-wang

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **if** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **readWriteFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
