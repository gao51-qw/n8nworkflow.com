# AI-powered technical analyst with Perplexity R1 research

> [![Technical Analyst AI Agent using LLM Vision](https://img.youtube.com/vi/VLqmffcZCVc/sddefault.jpg)](https://youtu.be/D11S0s3PDNc)

Leverage the latest AI technology to analyze financial charts and make informed trading decisions with our Technical Analysis AI Agent. This powerful workflow combines Claude Sonnet  3.7 vision capabilities with Perplexity deep reasoning and up-to-date internet information to deliver comprehensive market analysis.

## Key Capabilities:

* **Visual Chart Analysis** - AI vision technology examines technical charts to identify key price points, volume patterns, and trend indicators
* **Fundamental Research Integration** - Combines technical analysis with real-time fundamental data using DeepSeek R1 reasoning
* **Fully Cited Reports** - Fundamental analysis backed by verifiable sources for confident decision-making
* **Automated Email Delivery** - Receive complete analysis reports directly to your inbox

## How It Works:

This workflow orchestrates multiple AI components to analyze financial instruments:

1. The Technical Analysis Leader coordinates the entire analysis process
2. Chart analysis tool identifies the appropriate exchange and downloads Trading View charts
3. AI Vision examines the chart for technical indicators including RSI, volume patterns, and support/resistance levels
4. Perplexity tool conducts fundamental research using DeepSeek R1 reasoning capabilities
5. All data is synthesized into a comprehensive report with trading recommendations
6. Results can be automatically emailed for reference

## Setup Instructions:
Quick start video included in the template.

1. Get API key from OpenRouter.ai to access the Sonnet 3.7 model
2. Get API key from chart-img.com to access tradingview charts
3. Connect the Gmail node for email delivery functionality


**IMPORTANT DISCLAIMER:**
This tool provides technical analysis for informational purposes only and should not be construed as investment advice. This AI-powered technical analysis tool is designed to assist with market analysis but should not be used as the sole basis for any investment decision



## 📊 Basic Information

- **Workflow ID:** 3160
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 2906
- **Downloads:** 290
- **Created:** 2025/3/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3160)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** (×2)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **switch** 
- **gmailTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
