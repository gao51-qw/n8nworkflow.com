# Automate Service Ticket Triage with GPT-4o & Taiga

> **Usecase**: When a new service ticket is created in Taiga, it's often unclear whether it contains sufficient details to begin work. This workflow automates the triage process by:

1. Using an AI model to extract key information from the ticket description.
2. Automatically assigning values for:
   - **Type** (Bug, Enhancement, Onboarding, Question)
   - **Severity** (Wishlist, Minor, Normal, Important, Critical)
   - **Priority** (Low, Normal, High)
   - **Status** (New, Needs More Info, etc.)
3. Detecting missing critical data and blocking the ticket if incomplete.

Setup instructions here:
https://github.com/emooney/Service_Ticket_Triage_Helper


## 📊 Basic Information

- **Workflow ID:** 4665
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 742
- **Downloads:** 74
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4665)

## 👤 Author

- **Name:** Eric Mooney
- **Username:** @emooney

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **taigaTrigger** 
- **stickyNote** 
- **if** 
- **taiga** (×13)
- **switch** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
