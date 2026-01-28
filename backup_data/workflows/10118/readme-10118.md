# Gmail email categorization & auto reply with GPT-4o and Google Sheets

> ## 🧭 Description

This section automates Gmail message handling through AI-powered classification and response.
Using the LangChain Text Classifier, incoming emails are analyzed and sorted into four categories — High Priority, Advertisement, Inquiry, and Finance/Billing — each triggering a dedicated action flow.

High Priority: AI generates a professional draft reply and saves it to Gmail.

Advertisement: AI summarizes content and logs it to Google Sheets.

Inquiry: AI composes a customer-friendly response automatically.

Finance/Billing: AI creates a brief summary and forwards it to the accounting email.

This system reduces manual sorting, ensures consistent communication quality, and speeds up email management with full automation.

## 💡 Use Cases

Automatically categorize incoming Gmail messages by topic or intent.

Generate AI-written reply drafts for urgent business messages.

Summarize marketing or promotional emails into Google Sheets for tracking.

Provide automated responses to customer inquiries.

Forward billing or invoice messages directly to accounting teams.

## 📊 Basic Information

- **Workflow ID:** 10118
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 1123
- **Downloads:** 112
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10118)

## 👤 Author

- **Name:** Haruki Kuwai
- **Username:** @harukikuwai8098

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** (×7)
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **googleSheets** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
