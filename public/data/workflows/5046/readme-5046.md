# Automate customer support with Mintlify documentation & Zendesk AI agent

> This n8n workflow automates support ticket handling with AI-driven classification, response generation, and safety checks. Responses are based solely on your Mintlify documentation, ensuring accuracy, consistency, and reduced manual effort in customer support.

**✅ Trigger: New Ticket Received**
The workflow is triggered whenever a new support ticket is created.

**🔍 Check for Assignee**
If the ticket is already assigned to a human agent, the bot does nothing and exits.
If the ticket is unassigned, the bot continues processing.

**🔢 Bot Response Count Check**
The workflow checks how many times the bot has already responded to this ticket.
If the bot has replied more than 3 times, it stops and waits for a human to take over.
This prevents endless loops and flags potentially complex cases for review.

**🧠 AI-Based Ticket Categorization**
An AI model analyzes the ticket content and classifies it into one of the following categories:
1. 🧾 Billing → Sends a predefined billing-related message.
2. 📢 Advertising → Automatically deletes the ticket.
3. 🚨 Fraud → Sends a predefined fraud-related message.
4. ❓ Other → Proceeds to generate a dynamic response.

**🤖 Mintlify Integration**
For tickets categorized as "Other", the customer’s question is sent to the Mintlify API, which returns a documentation-based answer.

**✍️ AI Response Formatter**
The raw response from Mintlify is passed to an AI model that:
Summarizes and rewrites the answer in a clear, friendly tone
Limits the response to 120 words
Adds conversational elements like “Hi,” “Thanks,” and a proper closing

**🛡️ AI Confidence Filter**
A second AI model reviews the formatted response to ensure it sounds confident and accurate.
It looks for uncertainty phrases like:
- “I’m not sure”
- “I don’t have enough information”
- “It depends…”
If the response is flagged as uncertain, the workflow stops and waits for a human agent to respond.

**📤 Send Response & Update Ticket**
If the response passes the confidence check:
The reply is sent to the customer
The ticket status is updated to “Pending”

## 📊 Basic Information

- **Workflow ID:** 5046
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 1088
- **Downloads:** 108
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5046)

## 👤 Author

- **Name:** Alex Gurinovich
- **Username:** @alexg

## 🏷️ Categories

- Ticket Management
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **switch** (×5)
- **webhook** 
- **code** (×7)
- **httpRequest** (×10)
- **noOp** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
