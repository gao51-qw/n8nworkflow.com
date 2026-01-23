# Gmail email classifier with GPT-4 auto-generated draft replies

> ## How It Works
This workflow automatically classifies incoming Gmail messages into categories such as **High Priority**, **Inquiry**, and **Finance/Billing**, and then generates professional draft replies using **GPT-4**. By combining Gmail integration with AI-powered text generation, the workflow helps business owners and freelancers reduce the time spent managing emails while ensuring that important messages are handled quickly and consistently.

When a new email arrives, the workflow:
1. Triggers via Gmail.
2. Uses an AI classifier to categorize the message.
3. Applies the appropriate Gmail label.
4. Passes the email body to GPT-4 to generate a tailored draft reply.
5. Saves the draft in Gmail, ready for review and sending.

## Requirements
- A Gmail account with API access enabled.  
- An OpenAI API key with GPT-4 access.  
- n8n account or self-hosted instance.  

## Setup Instructions
1. Import this workflow into your n8n instance.  
2. Under **Credentials**, connect your Gmail account and OpenAI API key.  
3. Replace placeholder `YOUR_LABEL_ID_XXX` values with your Gmail label IDs (obtainable via Gmail → List Labels).  
4. Execute the workflow and check that draft replies are generated in your Gmail account.  

## Customization
- Add or edit categories to fit your business needs (e.g., “Sales Leads” or “Support”).  
- Adjust the GPT-4 prompts inside each “Generate Draft” node to match your preferred tone and style.  
- Combine with other workflows (e.g., CRM integration, Slack alerts) for a complete email automation system.  

This template is especially useful for **small businesses and freelancers** who want to save time, improve response speed, and maintain professional communication without manually writing every reply.


## 📊 Basic Information

- **Workflow ID:** 8426
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 692
- **Downloads:** 69
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8426)

## 👤 Author

- **Name:** Supira Inc.
- **Username:** @supira

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **gmail** (×6)
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
