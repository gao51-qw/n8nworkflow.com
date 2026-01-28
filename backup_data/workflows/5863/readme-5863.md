# Automatic invoice detection & reminder creation with Gmail & Google Tasks

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Who is this for?

This workflow is for anyone who receives invoices by email and wants to stay on top of payment deadlines without manual tracking. 

## What problem is this workflow solving?

Invoices often get buried in your inbox. This workflow uses AI to find them, extracts key details, and adds a task to remind you to pay before it’s overdue.

No more missed payments. No more manual tracking.


## How it works?

1. This workflow is triggered on a schedule (By default, every hour).
2. It checks your Gmail inbox for unread messages.
3. Each email is passed to an AI agent (using OpenAI), which decides whether it’s an invoice.
4. If an invoice is found:
	- A task is created in your Google Tasks with the payment reminder and due date.
	- The email is labeled (for tracking) and marked as read.
5. If not an invoice:
	- The email is skipped (no action taken).

## How to set up?
1. **Connect these services** in your n8n credentials:
   - Gmail (OAuth2)
   - OpenAI
   - Google Tasks

2. **Create Gmail label**  
   Go to Gmail and create a label named `Invoice`. This label will be applied to processed invoice emails.

3. **Choose your Google Task list**  
   In the task creation node, select the correct task list for your reminders.

4. **Set the schedule**  
   In the Schedule Trigger node, choose how often it should check your inbox.

## How to customize this workflow to your needs?

- **Change the Gmail label**  
  Update the label applied to emails after they are processed.

- **Edit the AI prompt**  
  Adjust the system prompt in the OpenAI node if your invoices follow a unique format.

- **Update the task format**  
  Modify the task title and notes to suit how you like your reminders to look.

- **Adjust the schedule**  
  Run it more or less frequently based on how many invoices you receive.

## 📊 Basic Information

- **Workflow ID:** 5863
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1480
- **Downloads:** 148
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5863)

## 👤 Author

- **Name:** Matt Chong | n8n Creator
- **Username:** @mattxchong

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **noOp** 
- **googleTasks** 
- **gmail** (×3)
- **if** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
