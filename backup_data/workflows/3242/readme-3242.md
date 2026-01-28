# Smart email classifier & auto-responder with AI

> This n8n workflow automates email management by classifying incoming messages, drafting replies, and sending alerts—all powered by AI.  

**Features**  

🚀 **AI-Powered Email Categorization**  
- Classifies emails into **Spam, Important, Promotion, Notification, Personal, Call Request, Needs Reply**.  
- Uses GPT-4o to determine whether an email requires a response.  

✉️ **Automated Smart Replies**  
- Generates **context-aware** responses using AI.  
- Supports **email threading** for seamless conversations.  

🔔 **Real-Time Notifications**  
- **Telegram Alerts** for important emails.  
- **Gmail Drafts** auto-generated for quick replies.  

🛠️ **Google Calendar Integration**  
- Schedules follow-ups based on email content.  

**Setup Instructions**  
1. Connect Gmail, OpenAI, Telegram, and Google Calendar.  
2. Set up classification categories and notification preferences.  
3. Customize AI response styles if needed.  
4. Run the workflow—watch it organize your inbox effortlessly.  

**Who Should Use This?**  
- **Busy Professionals**: Focus on high-priority emails.  
- **Customer Support**: Manage inquiries with quick replies.  
- **Sales Teams**: Respond to leads instantly.  

Keep your inbox under control with this automation! 🚀  

## 📊 Basic Information

- **Workflow ID:** 3242
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 1718
- **Downloads:** 171
- **Created:** 2025/3/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3242)

## 👤 Author

- **Name:** Ian Dikhtiar
- **Username:** @ian-dikhtiar

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.sentimentAnalysis** (×3)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **gmail** (×9)
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **gmailTool** (×2)
- **noOp** 
- **telegram** 
- **googleCalendarTool** 
- **stickyNote** (×10)
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
