# Smart Gmail inbox management with Gemini: Auto-label and draft replies

> Keep your Gmail inbox organized and stress-free with this AI-powered workflow. Ideal for freelancers, small business owners, and productivity enthusiasts who receive a high volume of mixed emails. This template automatically sorts messages into predefined labels and drafts a professional reply when follow-up is needed.

## How it works

- Gmail Trigger starts the workflow whenever a new email arrives.
- AI Classifier (Gemini or compatible model) analyzes the message, checks your previous conversations and sent emails, and assigns the correct Gmail label.
- Smart rules ensure irrelevant messages are deleted or archived, while actionable ones are prepared for a response.
- AI Draft Node creates a concise, friendly, and professional draft reply — stored safely in your Gmail drafts folder (never auto-sent).
- Optional tools like CheckCalendar can suggest time slots for meetings automatically.

Together, these steps make your inbox work for you: sorting, prioritizing, and drafting responses.

## Set up steps

1. Connect your Gmail account and ensure your label categories already exist.
2. Connect your Gemini (or other AI) credentials.
3. (Optional) Enable CheckCalendar for scheduling suggestions.
4. Adjust the labeling rules and prompt text to match your personal or business workflow.

## Requirements

- Gemini account for LLM
- Google OAuth2 credentials

## 📊 Basic Information

- **Workflow ID:** 10664
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 661
- **Downloads:** 66
- **Created:** 2025/11/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10664)

## 👤 Author

- **Name:** Salvador
- **Username:** @svdro

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **gmail** (×4)
- **stickyNote** (×3)
- **gmailTool** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **if** (×2)
- **googleCalendarTool** 
- **@n8n/n8n-nodes-langchain.agent** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
