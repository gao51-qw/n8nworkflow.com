# Categorize and label incoming Gmail emails automatically with GPT-4o mini

> Sort New Gmail messages by category with AI 

## 👥 Who's it for  
This workflow is perfect for individuals or teams who receive a high volume of emails 📥 and want to automatically organize them into Gmail labels 🏷️ using AI. No coding required!

**For sorting existing emails messages in your gmail inbox, please use this free workflow: [Categorize and Label Existing Gmail Emails Automatically with GPT-4o mini](https://n8n.io/workflows/6031-convey-template-purpose-with-key-services-gmail-gpt-4o-mini-using-action-verb-structure/).**

## 🤖 What it does  
It automatically processes new Gmail emails, skips those that already have labels, sends the content to an AI Agent powered by GPT-4o mini 🧠, and applies a relevant label based on the content. All labels must exist in Gmail beforehand.

## ⚙️ How it works  
1. **📬 Gmail Trigger** – Activates on new email received.  
2. **🚫 Filter** – Skips emails that already have a label.  
3. **🧠 AI Agent (GPT-4o mini)** – Analyzes the message and decides which label fits best.  
4. **🧾 Structured Output Parser** – Formats the AI output into a clean JSON.  
5. **🔀 Switch Node** – Routes each email to the correct label path based on the AI result.  
6. **🏷️ Gmail Nodes** – Assign the Gmail label to the original email.

## 📋 Requirements  
- Gmail account connected to n8n  
- Pre-created labels in Gmail matching the AI categories  
- OpenAI credentials with GPT-4o mini access  
- n8n's AI Agent & Structured Output Parser nodes  

## 🛠️ How to set up  
1. Open the workflow and adjust the **trigger interval** (e.g., every minute, hours or Custom using Cron ⏱️)  
2. Check that the **Filter** skips emails with existing labels  
3. Define your categories in the **AI Agent prompt** and make sure they match the Gmail labels  
4. Configure the **Switch Node** conditions for each category  
5. Ensure each **Gmail Label Node** applies the correct label  
6. Save and activate the workflow ✅

## 🎨 How to customize the workflow  
- Add or remove categories in the AI prompt & Switch Node   
- Fine-tune prompt instructions to match your specific use case

## 📊 Basic Information

- **Workflow ID:** 5595
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 4037
- **Downloads:** 403
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5595)

## 👤 Author

- **Name:** Arlin Perez
- **Username:** @arlindeveloper

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **filter** 
- **switch** 
- **gmail** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
