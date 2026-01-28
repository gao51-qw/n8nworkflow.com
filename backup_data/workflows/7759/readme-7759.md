# Automatically label Gmail emails with GPT-5 classification

> ## How it works
This workflow automatically monitors your Gmail inbox and uses OpenAI's GPT model to intelligently classify incoming emails into four key categories:
 - High Priority - Urgent emails requiring immediate attention from executives, clients, or stakeholders
 - Promotion - Marketing emails, sales offers, product launches, and event invitations
 - Finance/Billing - Invoices, receipts, payment notifications, and financial records
 - Customer Support - Help requests, troubleshooting queries, and service-related issues
  
Once classified, emails are automatically labeled in Gmail using the appropriate tags, making it easy to filter, search, and prioritize your communications.

## How to set up
### Requirements
 - Gmail account with OAuth2 access enabled
 - OpenAI API key with GPT model access
 - Custom Gmail labels created for each category

### Step-by-step setup
 1. Create Gmail Labels
  - In Gmail, create these labels: "High Priority", "Promotion", "Finance/Billing", "Customer Support"
  - Note the label IDs (you'll need to replace the hardcoded ones in the workflow)
 2. Configure Credentials
  - Add your Gmail OAuth2 credentials in n8n
  - Add your OpenAI API credentials
 3. Update Label IDs
  - Replace the hardcoded label IDs in each Gmail node with your actual label IDs
  - You can find label IDs by testing the Gmail node or using Gmail API
 4. Adjust Classification Rules
  - Review the Text Classifier categories and modify descriptions to match your specific needs
  - Add or remove categories as required
 5. Set Polling Frequency
  - The workflow is set to check every minute - adjust based on your email volume


## 📊 Basic Information

- **Workflow ID:** 7759
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 687
- **Downloads:** 68
- **Created:** 2025/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7759)

## 👤 Author

- **Name:** Abideen Bello
- **Username:** @bideen

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** (×4)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
