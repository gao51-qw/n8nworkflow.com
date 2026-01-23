# Automate support QA reviews with Intercom, GPT and Google Sheets

> ## 🧠 How it works

This workflow automates QA review of Intercom support conversations by:

* Triggering on `conversation.admin.closed` events via a webhook
* Fetching full conversation data using Intercom API
* Structuring and summarizing the conversation into a readable transcript
* Using GPT to evaluate:

  * Response time
  * Clarity
  * Tone & behavior
  * Urgency handling
  * Ownership & resolution
* Logging structured QA scores in a Google Sheet
* Providing coaching-style feedback if the rating is 3 or below

---

## ⚙️ Set up steps

* 🔐 Configure your Intercom and OpenAI credentials in n8n
* 📩 Set up the webhook in Intercom to post on conversation close
* 🧠 Use your OpenAI API key for the GPT-based nodes
* 🗃️ Connect your Google Sheet (or replace with another data sink)
* ✅ Add your own filtering logic for spam/promotional tickets if needed

*Note: This workflow contains a sticky notes to explain each step inside the n8n canvas.*

## 📊 Basic Information

- **Workflow ID:** 5831
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 453
- **Downloads:** 45
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5831)

## 👤 Author

- **Name:** Dhruv from Saleshandy
- **Username:** @saleshandy

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **splitOut** (×3)
- **code** (×5)
- **merge** (×2)
- **googleSheets** 
- **if** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
