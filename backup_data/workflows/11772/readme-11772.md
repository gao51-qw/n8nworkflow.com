# Generate AI stock reports w/ fundamental, technical, & news analysis (Free APIs)

> ### This template deploys a multi-agent system that fully automates advanced stock analysis. It uses a central AI orchestrator to call specialized sub-workflows, synthesizing technical, fundamental, and news sentiment data into a single, actionable report delivered to your inbox. All API Keys can be acquired for free!

**How it Works**

*   **Orchestration:** An AI Agent acts as the central "brain," managing the analysis pipeline. It's triggered either on a schedule for a list of stocks or manually for a single ticker.
*   **Specialist Agents (Tools):** The orchestrator invokes three sub-workflows as tools to gather intelligence:
    1.  **Technical Analysis:** Fetches TA data (RSI, MACD, Bollinger Bands) and uses a vision-AI to analyze the stock's chart, identifying trends and patterns.
    2.  **Fundamental Analysis:** Retrieves financial statements (Income, Balance Sheet) to generate a summary of the company's financial health and valuation.
    3.  **News Sentiment Analysis:** Aggregates and analyzes market news to determine overall sentiment and identify key discussion topics.
*   **Synthesis & Delivery:** The main agent synthesizes all findings to formulate a final recommendation (Buy, Hold, Sell), generates a professional HTML report, and delivers it via email.

**Setup (Est. 10-15 mins)**

This is an advanced, multi-workflow template. Please follow the steps precisely.

1.  **Split Modules:** Separate the 5 color-coded modules on this canvas into 5 new, individual workflows.
2.  **Acquire APIs:** Acquire the 7 APIs needed for this workflow. These need Credentials: Gemini,, OpenRouter, SMTP, Alpaca. These just need to be pasted in: AlphaVantage, TwelveData, Chart-Img.
3.  **Configure & Link:** Insert your API keys and email, then re-link the `Execute Workflow` and `Tool` nodes to connect your new workflows.
4.  **Activate:** Toggle all 5 workflows to "Active."

➡️ **For the complete, detailed guide, visit: https://docs.google.com/document/d/1Ri_GfuIlc0QVm1aDrWJjRCg_2vWRCrw_SjRV9cBoKmw/edit?usp=sharing**


## 📊 Basic Information

- **Workflow ID:** 11772
- **Complexity:** advanced
- **Node Count:** 85
- **Views:** 596
- **Downloads:** 59
- **Created:** 2025/12/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11772)

## 👤 Author

- **Name:** Deven G
- **Username:** @deveng7

## 🏷️ Categories

- Crypto Trading
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **html** 
- **code** (×7)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **if** (×4)
- **httpRequest** (×11)
- **emailSend** 
- **executeWorkflowTrigger** 
- **merge** (×4)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **set** (×9)
- **stopAndError** 
- **scheduleTrigger** 
- **wait** (×3)
- **splitOut** 
- **splitInBatches** 
- **formTrigger** 
- **executeWorkflow** 
- **stickyNote** (×27)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 85 nodes with 53 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
