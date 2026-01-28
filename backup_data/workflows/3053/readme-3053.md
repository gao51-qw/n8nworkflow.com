# Technical stock analysis with Telegram, Airtable and a GPT-powered AI agent

> ### Video Guide

I prepared a detailed guide that demonstrates the complete process of building a trading agent automation using n8n and Telegram, seamlessly integrating various functions for stock analysis.

[![Youtube Thumbnail](https://res.cloudinary.com/de9jgixzm/image/upload/v1740845597/Youtube%20Thumbs/Video%2022%20-%20Philipp%20Trading%20Blur.png)](https://youtu.be/94vh6hSiP9s)

[Youtube Link](https://youtu.be/94vh6hSiP9s)

### Who is this for?
This workflow is perfect for traders, financial analysts, and developers looking to automate stock analysis interactions via Telegram. It’s especially valuable for those who want to leverage AI tools for technical analysis without needing to write complex code.

### What problem does this workflow solve?
Many traders desire real-time analysis of stock data but lack the technical expertise or tools to perform in-depth analysis. This workflow allows users to easily interact with an AI trading agent through Telegram for seamless stock analysis, chart generation, and technical evaluation, all while eliminating the need for manual interventions.

### What this workflow does
This workflow utilizes n8n to construct an end-to-end automation process for stock analysis through Telegram communication. The setup involves:
- Receiving messages via a Telegram bot.
- Processing audio or text messages for trading queries.
- Transcribing audio using OpenAI API for interpretation.
- Gathering and displaying charts based on user-specified parameters.
- Performing technical analysis on generated charts.
- Sending back the analyzed results through Telegram.


### Setup

1. **Prepare Airtable**:
    - Create simple table to store tickers.

2. **Prepare Telegram Bot**:
    - Ensure your Telegram bot is set up correctly and listening for new messages.

3. **Replace Credentials**:
    - Update all nodes with the correct credentials and API keys for services involved.

4. **Configure API Endpoints**:
    - Ensure chart service URLs are correctly set to interact with the corresponding APIs properly.

5. **Start Interaction**:
    - Message your bot to initiate analysis; specify ticker symbols and desired chart styles as required.

## 📊 Basic Information

- **Workflow ID:** 3053
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 21531
- **Downloads:** 2153
- **Created:** 2025/3/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3053)

## 👤 Author

- **Name:** Mark Shcherbakov
- **Username:** @lowcodingdev

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegramTrigger** 
- **telegram** (×3)
- **executeWorkflowTrigger** 
- **set** (×4)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **switch** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **webhook** 
- **airtableTool** 
- **splitInBatches** 
- **scheduleTrigger** 
- **airtable** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
