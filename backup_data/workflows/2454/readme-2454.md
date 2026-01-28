# Auto categorise Outlook emails with AI

> **Automate your email management** with this workflow, designed for freelancers and business professionals who receive high volumes of emails. By leveraging AI-powered categorisation and dynamic email processing, this template helps you organise your inbox and streamline communication for better efficiency and productivity.


**[Check out the YouTube video for step-by-step set up instructions!](https://www.youtube.com/watch?v=EhRBkkjv_3c)**

### **How it works:**

1. **Fetch & Filter Emails:** The workflow retrieves emails from your Microsoft Outlook account, filtering out flagged emails and those already categorised.
2. **Content Preparation:** Each email is cleaned up and converted to a structured format using Markdown, making it easier for AI processing.
3. **AI Categorization:** The content is analysed using an AI model, which categorises the emails into predefined categories (e.g., Action, Junk, Business, SaaS) based on the context and content.
4. **Email Categorization & Folder Management:** The categorised emails are updated in Microsoft Outlook and moved to respective folders such as "Junk Email" or "Receipts" based on the AI's classification.
5. **Conditional Processing & Final Checks:** Additional checks and conditions ensure that only unread emails are processed, and errors are gracefully managed to maintain workflow stability.

### **Set up steps:**

1. **Connect Microsoft Outlook:** Link your Microsoft Outlook account using the built-in credentials node to enable email fetching, updating, and folder management.
2. **Configure AI Model (Ollama API):** Set up the AI model by connecting to the Ollama API and choosing your desired language model for categorisation.
3. **Modify Email Categories (Optional):** Customize the categories and subcategories within the workflow to suit your unique email management needs.
4. **Set Up Error Handling:** Review the error handling node settings to ensure smooth workflow execution.

This template offers a robust solution for managing and organising your inbox, helping you save time and keep your focus on important emails.

## 📊 Basic Information

- **Workflow ID:** 2454
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 59298
- **Downloads:** 5929
- **Created:** 2024/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2454)

## 👤 Author

- **Name:** Wayne Simpson
- **Username:** @nocodecreative

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×10)
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **microsoftOutlook** (×13)
- **splitInBatches** 
- **markdown** 
- **set** (×4)
- **filter** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **merge** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
