# Automated multilingual Gmail draft reply with OpenAI GPT-4o

> ## Automated Multilingual Gmail Draft Reply with OpenAI GPT-4o in n8n

### Who is this for?
This workflow is ideal for anyone who receives a high volume of Gmail inquiries, especially those providing multilingual customer support or handling diverse client 
communications.

### What problem is this workflow solving? 
Managing frequent emails in multiple languages can be overwhelming. This workflow reduces manual drafting by automatically generating context-aware replies using OpenAI GPT-4o, letting users focus on personalization and quality assurance.

### What this workflow does
- Monitors your Gmail inbox for new emails with a specific label (e.g., "Inquiry").
- Uses OpenAI GPT-4o for message assessment and language detection.
- Parses information using a JSON parser.
- Generates an AI-powered draft reply in the detected language via OpenAI GPT-4o.
- Converts the reply to HTML and saves it as a draft in the original Gmail thread for your review.

### Setup
- Connect your Gmail account and set up relevant labels in both Gmail and the workflow.
- Integrate your OpenAI credentials in n8n.
- Configure the workflow trigger for your desired labels.

## How to customize this workflow to your needs
- Adjust label names in both Gmail and the workflow for different email categories.
- Define custom starting and ending phrases for draft replies per supported language.
- Expand supported languages or modify AI prompt instructions to suit your brand’s tone.

## 📊 Basic Information

- **Workflow ID:** 4870
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 2073
- **Downloads:** 207
- **Created:** 2025/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4870)

## 👤 Author

- **Name:** Henry
- **Username:** @henry

## 🏷️ Categories

- Ticket Management
- Multimodal AI

## 🔗 Nodes Used

- **if** 
- **stickyNote** (×5)
- **gmail** 
- **switch** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
