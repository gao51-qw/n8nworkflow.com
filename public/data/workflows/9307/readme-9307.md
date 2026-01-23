# Automatically Classify Zoho Desk Support Tickets using Gemini AI

> ## **Automatically Classify Support Tickets in Zoho Desk with AI with Gemini**

Transform your customer support workflow with intelligent ticket classification. This automation leverages AI to automatically categorize incoming support tickets in Zoho Desk, reducing manual work and ensuring faster ticket routing to the right teams.

### **How It Works**

1. Fetches all tickets from Zoho Desk with pagination support
2. Filters unclassified tickets (where classification field is null)
3. Retrieves complete ticket threads for full conversation context
4. Uses OpenRouter AI (GPT-4, Claude, or other models) to classify tickets into predefined categories
5. Updates tickets in Zoho Desk with accurate classifications automatically

### **Use Cases**

- **Customer Support Teams**: Automatically route tickets to specialized departments (billing, technical, sales)
- **Help Desks**: Prioritize urgent issues and categorize feature requests


### **Prerequisites**

- Active Zoho Desk account with API access
- OpenRouter API account (supports multiple AI models)
- Basic understanding of OAuth2 authentication
- Predefined ticket categories in your Zoho Desk setup

### **Setup Steps**
**Time: ~15 minutes**

1. **Configure Zoho Desk OAuth2** - Follow our [step-by-step GitHub guide](https://gist.github.com/Julian194/7c0ef5abaa5e3850f2bcc0a51bcd4633) for OAuth2 credential setup
2. **Set up OpenRouter API** - Create an account and generate API keys at openrouter.ai
3. **Customize classifications** - Define your ticket categories (e.g., Technical, Billing, Feature Request, Bug Report)
4. **Adapt the workflow** - Modify for any field: status, priority, tags, assignment, or custom fields
5. **Review API documentation** - Check [Zoho Desk Search API docs](https://desk.zoho.com/DeskAPIDocument) for advanced filtering options
6. **Test thoroughly** - Run manual triggers before automation

**Note**: This workflow demonstrates proper Zoho Desk API integration, including OAuth2 authentication and pagination handling—two common integration challenges.

## 📊 Basic Information

- **Workflow ID:** 9307
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 261
- **Downloads:** 26
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9307)

## 👤 Author

- **Name:** Julian Kaiser
- **Username:** @jksr

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **code** 
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **splitOut** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
