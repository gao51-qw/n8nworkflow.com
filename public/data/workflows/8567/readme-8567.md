# Automated course registration evaluation with AI, Gmail, and Google Sheets

> 📌 Description

Automate your course enrollment process with this workflow that handles student submissions, evaluates eligibility, and sends acceptance or rejection emails — all without manual effort. It's perfect for instructors managing multi-week technical courses who want to streamline onboarding and communication.

⚙️ How It Works

📥 Captures student registration data via an n8n Form Trigger

📊 Evaluates responses (e.g., checks programming background & availability)

📤 Sends automated, personalized acceptance or rejection emails based on criteria

📝 Logs submission outcomes for review

📨 Optionally stores records in Google Sheets, Airtable, or a database (customizable)

🛠️ Set Up Steps

🔗 Connect Gmail (or your preferred email service)

✅ Add your course filtering logic to the decision node (simple JSON rules)

📄 Customize email templates (plain or HTML)

🧪 Test the flow with sample submissions

⏱️ Setup Time: 10–15 minutes (depending on integrations)

🔐 Notes

No hardcoded API keys used – all credentials must be set up using the n8n credential system

Sticky notes inside the workflow provide detailed setup and customization tips

Easily extendable to add payment links, WhatsApp alerts, or CRM integration

## 📊 Basic Information

- **Workflow ID:** 8567
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 120
- **Downloads:** 12
- **Created:** 2025/9/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8567)

## 👤 Author

- **Name:** Shady Ahmed
- **Username:** @shady

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **stickyNote** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **gmailTool** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
