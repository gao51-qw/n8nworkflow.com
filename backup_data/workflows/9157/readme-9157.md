# Ai-powered email triage & auto-response system with OpenAI agents & Gmail

> # AI Email Dispatcher: Classify, Process, and Route Emails with Multiple Agents

This n8n template automatically classifies incoming emails (Sales, Support, Internal, Finance, Promotions) and routes them to a dedicated **OpenAI LLM Agent** for processing. Depending on the category, the agent will then:

* **Internal/Customer Support:** Draft a reply and send it.
* **Sales/Finance/Promotions:** Generate a summary, notification, or draft reply for a human to review.

This is the ultimate workflow for managing a high volume of emails, ensuring every message gets a fast, appropriate, and structured AI-powered response or initial analysis.

## How it works

* The **Gmail Trigger** node monitors your inbox for unread emails.
* The **Text Classifier** node uses AI to read the email body and subject to categorize it as Internal, Customer Support, Sales, Promotions, or Admin/Finance.
* The workflow then uses a **Split In Batches** node and multiple **If** nodes to send the email data to a specific, specialized **OpenAI Agent** (LLM node) based on the classification.
* Each AI Agent has a custom system prompt (e.g., "Customer Support Agent," "Promotions Analyst") to ensure it processes the email with the right rules, tone, and output format.
* Finally, the workflow either automatically **replies** via Gmail (for Internal and Support) or creates a **draft/summary** and sends a **notification** (for Sales, Finance, and Promotions) for human review.

## Set up steps

Setting up the accounts and nodes should take about **10–15 minutes**.

1.  **Gmail Account:** You'll need to set up two Gmail credentials for the workflow:
    * One for the **Gmail Trigger** to watch for new unread emails.
    * A second one for the **Gmail** action nodes to label, draft, and reply to messages.
2.  **OpenAI Account:** Connect your **OpenAI API Key** to the five different LLM Agent nodes.
3.  **Telegram/Slack:** Set up your Telegram or Slack credentials to receive the 'New Sales Opportunity' and 'New Finance' notifications.
4.  **Labels in Gmail:** Before activating the workflow, make sure you have created the necessary labels in your Gmail account for the classifier (Internal, Customer Support, Promotions, Admin/Finance, Sales Opportunity).
5.  **Review Agent Prompts:** The instructions and logic for each AI Agent are in the system messages. You might want to review and customize these prompts to match your specific business rules and tone.

## Requirements

* **Gmail** Account
* **OpenAI** Account (or another LLM provider for the agents)
* **Telegram** (or Slack/other notification tool of your choice)

## Customising this workflow

You can easily adapt this template to suit your needs!

* **New Categories:** Modify the **Text Classifier** node to add or remove categories (e.g., "Job Applications," "Partnerships"). You would then add a new LLM Agent and routing logic for the new category.
* **Different LLMs:** You can swap the OpenAI nodes for any other LLM service supported by n8n, such as **Gemini** or **Anthropic Claude**, by simply changing the node type or model ID.
* **More Actions:** Instead of just sending a notification to Telegram, you could modify the logic to create a task in **ClickUp**, a lead in **Salesforce**, or an entry in a **Google Sheet** when a "Sales Opportunity" email is identified. 📬✨

## 📊 Basic Information

- **Workflow ID:** 9157
- **Complexity:** advanced
- **Node Count:** 68
- **Views:** 556
- **Downloads:** 55
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9157)

## 👤 Author

- **Name:** Abdullahi Ahmed
- **Username:** @abdosman06

## 🏷️ Categories

- Ticket Management
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×6)
- **gmail** (×15)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **if** 
- **gmailTrigger** (×2)
- **telegram** (×6)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **stickyNote** (×5)
- **googleDriveTrigger** (×2)
- **httpRequest** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×6)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **set** 
- **googleSheets** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 68 nodes with 53 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
