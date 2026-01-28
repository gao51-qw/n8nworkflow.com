# Generate startup ideas & business plans with GPT-4.1, Perplexity Sonar & Claude Sonnet

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 🚀 Start-up Ideas Generator – From Idea to Executive Summary in Minutes
Description:
This AI-powered n8n workflow helps you brainstorm and validate start-up ideas, perform market research using Perplexity Sonar, and automatically generate a professional business plan — all within minutes.

It’s designed for entrepreneurs, accelerators, venture studios, and ideation teams looking to go from a single prompt to a detailed proposal ready to pitch or develop.

Watch step-by-step build video of n8n workflows like this:
https://www.youtube.com/@Automatewithmarc

## Setup Instructions
Required Credentials:

OpenAI API Key – For GPT-4.1
Perplexity Sonar Access Token – For deep research
Anthropic Claude API Key – For business plan writing

Google Service Account Credentials – To write to Docs
## How It Works:
💬 Chat Trigger
 Start the process by typing a simple request like “Give me a few start-up ideas in AI tech.”

🧠 AI Research Agent (OpenAI + Perplexity Sonar)
 The system defines the research scope, taps into Perplexity AI for deep market scans, and outputs high-potential business opportunities including:

Market size
Customer pain points
Competition overview
Differentiation strategy

📄 Business Case Generator (Claude)
 Each opportunity is expanded into a complete business plan using Claude Sonnet, covering:

Executive summary
Market analysis
Product description
Competitor gap
Business model & GTM
Financials & roadmap

📃 Google Docs Export
 The full business plan is automatically inserted into a connected Google Doc for easy sharing, editing, or pitching.
## Google Docs Configuration:
Create a Google Doc titled "Startup Business Plan" (or adjust the title in the node settings)
Share the document with your Google service account email
Update the Document ID field in the Google Docs node accordingly
Ensure that the structure accepts plain text input — formatting is handled by the node

## Tools & Models Used:
LangChain Chat Trigger

OpenAI GPT-4.1 (Research Prompt Structuring)

Perplexity Sonar Deep Research (Market Research)

Anthropic Claude Sonnet (Business Plan Writing)

Google Docs Node (Formatted Output)

## Use Cases:
Rapid ideation for venture building or incubators

Validating start-up ideas before prototyping

Automating market research + proposal writing

Generating investor-ready pitch materials



## 📊 Basic Information

- **Workflow ID:** 5825
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1273
- **Downloads:** 127
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5825)

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
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **perplexityTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
