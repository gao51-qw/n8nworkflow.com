# Evaluate tool usage accuracy in multi-agent AI workflows using evaluation nodes

> Who's it for
------------

This workflow is ideal for AI developers running multi-agent systems in n8n who need to quantitatively evaluate tool usage behavior. If you're building autonomous agents and want to verify their decisions against ground-truth expectations, this workflow gives you plug-and-play observability.

What it does
------------

This template uses n8n's built-in Evaluation Trigger and Evaluation nodes to assess whether an AI agent correctly used all the expected tools. It supports:

-   Dataset-driven testing of agent behavior

-   Logging actual tools to compare them with the expected tools

-   Assigning performance metrics (tool_called = true/false)

-   Persisting output back to Google Sheets for further debugging

The workflow can be triggered by either the chat input or the dataset row evaluation. It routes through a multi-tool agent node powered by the best LLMs. The agent has access to tools such as web search, calculator, vector search, and summarizer tools. The workflow then aims to validate tool use decisions by extracting the intermediate steps from the agent (i.e., action + observation) and comparing the tools that were called with the expected tools. If the tools that were called during the workflow execution match, then it's a pass; otherwise, it's documented as a fail. The evaluation nodes take care of that process. 

How to set it up
----------------

1.  Connect your Google Sheets OAuth2 credential. Replace the document with your own test dataset.

2.  Set your desired models and configure the different agent tools, such as the summarizer and vector store. The default vector store used is Qdrant, so the user must create this vector store with a few samples of queries + web search results.

3.  Run from either the chat trigger or the evaluation trigger to test.

Requirements
------------

-   Google Sheets OAuth2 credential

-   OpenRouter / OpenAI credentials for AI agents and embeddings

-   Firecrawl and Qdrant credentials for web + vector search

How to customize
----------------

-   Edit the Search Agent system message to define tool selection behavior

-   Add more metric columns in the Evaluation node for complex scoring

-   Add new tool nodes and link them to the agent block

-   Swap in your own summarizer

## 📊 Basic Information

- **Workflow ID:** 5523
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 13322
- **Downloads:** 1332
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5523)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **noOp** 
- **evaluationTrigger** 
- **evaluation** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
