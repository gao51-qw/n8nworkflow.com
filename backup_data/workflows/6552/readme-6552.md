# Automated email support triage with GPT-4, Gmail & Trello

> ### How It Works ⚙️

This workflow is a comprehensive, AI-powered system that acts as a virtual support manager. It automates the entire process of handling incoming support tickets, ensuring speed, accuracy, and efficiency.

1.  **Ticket Ingestion**: The workflow starts when a new email arrives in your support inbox via the **Gmail Trigger**.
2.  **AI Analysis & Triage**: An **OpenAI** node acts as an intelligent agent, instantly analyzing the email to categorize the issue, assign a priority, and determine the customer's sentiment (e.g., "Angry," "Neutral").
3.  **Proactive Escalation**: The workflow uses an `If` node to check for "Critical" priority or "Angry" sentiment. If these conditions are met, it takes a separate path to notify a manager immediately.
4.  **Ticket Creation**: Regardless of urgency, a **Trello** card is created for the ticket, including all the AI's analysis and the original email content.
5.  **Automated Response**: For low-priority tickets, a second `If` node and a **Gmail** node can send an automated, AI-generated response, completely freeing up your team.
6.  **Performance Reporting**: All ticket data, including the AI's analysis, is logged to a **Google Sheets** dashboard for real-time analytics and to track support trends.

### How to Set Up 🛠️

1.  **Import the Workflow**: Copy the provided workflow JSON and import it into your n8n instance.
2.  **Configure Credentials**:
    * **Gmail**: Add your OAuth2 credential for your support inbox.
    * **OpenAI**: Add your API Key.
    * **Trello**: Add your API Key and token.
    * **Slack**: Add your Bot Token credential.
    * **Google Sheets**: Add your OAuth2 credential.
3.  **Customize Workflow Nodes**:
    * **Node 1 (`Gmail Trigger`)**: Ensure this is connected to your official support email address.
    * **Node 2 (`OpenAI`)**: The prompt is pre-configured but can be customized to better fit your specific categories or tone.
    * **Node 4 (`Trello`)**: Replace `[YOUR TRELLO BOARD LIST ID]` with the list ID for new tickets on your board.
    * **Node 5 (`Slack`)**: Replace `[MANAGER'S SLACK USER ID]` and `[YOUR SUPPORT TEAM SLACK CHANNEL ID]` with the correct IDs.
    * **Node 9 (`Google Sheets`)**: Replace `[YOUR SUPPORT DASHBOARD SPREADSHEET ID]` with your spreadsheet ID and ensure your sheet columns match the workflow's data.
4.  **Save & Activate**: Once all settings and credentials are configured, save the workflow and click the "Inactive" toggle in the top-right corner to make it live.

## 📊 Basic Information

- **Workflow ID:** 6552
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 111
- **Downloads:** 11
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6552)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **if** (×2)
- **slack** 
- **trello** 
- **gmail** 
- **googleSheets** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
