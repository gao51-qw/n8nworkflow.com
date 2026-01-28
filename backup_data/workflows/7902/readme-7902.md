# Automate Gmail tasks with Gemini AI assistant and contact management

> ---

**Use cases are many:** Automate Gmail tasks such as sending, replying, labeling, deleting, and fetching emails — all with AI assistance. Perfect for YouTubers managing viewer emails, sales teams handling inquiries, freelancers responding to client requests, or professionals keeping their inbox organized.

---

**Good to know**

At time of writing, each Gemini request is billed per token. See [Gemini Pricing](https://ai.google.dev/pricing) for updated details.
The workflow uses Gmail labels (e.g., *youtube-viewers*, *sales-inquiry*, *meeting-request*, *potential-clients*, *collaboration-requests*) for classification — make sure these exist in your Gmail account.

---

**How it works**

* **Chat Trigger**: You interact with the agent via a chat interface (webhook).
* **AI Agent**: Gemini-powered assistant interprets your instructions (send, reply, label, delete, fetch emails).
* **Email Actions**: Based on your request, the assistant uses Gmail tools to act on emails (Send, Reply, Label, Delete, Get Many).
* **Contact Lookup**: If only a name is provided, the agent checks Google Sheets for the matching email address. If not found, it prompts you to add it.
* **Memory**: A buffer memory stores chat context so the assistant can maintain continuity across multiple interactions.
* **Labeling**: Emails can be auto-labeled for better organization (e.g., client inquiries, meeting requests).

---

**How to use**

* Send commands like:
  *“Reply to John’s email with a follow-up about the project.”*
  *“Label Sarah’s email as potential-client.”*
  *“Delete the latest spam email.”*
* The Gmail Agent will handle the request instantly and keep everything logged properly.

---

**Requirements**

* Gmail account connected with OAuth2 credentials
* Google Gemini API key for AI processing
* Google Sheets for contact management
* Pre-created Gmail labels for organization

---

**Customising this workflow**

* Add new Gmail labels for your workflow (e.g., *Invoices*, *Support Tickets*).
* Connect to a CRM (e.g., HubSpot, Notion, or Airtable) for syncing email data.
* Enhance AI replies with dynamic templates stored in Google Sheets.
* Extend chat commands to include **batch actions** (e.g., “Archive all emails older than 30 days”).

---

## 📊 Basic Information

- **Workflow ID:** 7902
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 291
- **Downloads:** 29
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7902)

## 👤 Author

- **Name:** Rakin Jakaria
- **Username:** @rakinjakaria

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmailTool** (×5)
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
