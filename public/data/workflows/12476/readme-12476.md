# Turn Gmail meeting summaries into HubSpot CRM records with OpenAI

> ## How it works
This workflow listens for incoming meeting summary emails in Gmail and processes them automatically. The email content is cleaned and sent to an AI model that extracts CRM-ready sales data in a structured format. The parsed data is then used to create or update contacts, deals, and meeting engagements in HubSpot. This removes manual note-taking and ensures CRM data stays accurate and consistent after every call.

## Step-by-step
- **Trigger on meeting summary email**
  - **Gmail Trigger** – Watches the inbox for new meeting summary emails from a specific sender.

- **Prepare and normalize meeting notes**
  - **Prepare Meeting Summary** – Extracts the meeting text and stores it in a clean summary field for AI processing.

- **Extract structured sales insights**
  - **AI Extraction** – Sends the meeting summary to an AI model to identify company details, problems, budget, decision makers, timing, competitors, and next steps.

- **Parse AI response**
  - **Parse AI JSON Output** – Validates and converts the AI response into structured JSON fields usable by CRM nodes.

- **Update HubSpot CRM**
  - **Create or Update Contact** – Creates a new contact or updates an existing one based on extracted details.
  - **Update Deal** – Updates the related deal with budget, description, stage, and pipeline information.
  - **Create Meeting Engagement** – Logs a meeting engagement in HubSpot with key discussion points and next actions.

## Why use this?
- Eliminates manual CRM updates after sales or discovery calls.
- Ensures meeting insights are captured consistently and accurately.
- Reduces admin work for sales teams and improves data quality.
- Works seamlessly with meeting recap tools that send summary emails.
- Scales easily as meeting volume increases without extra effort.


## 📊 Basic Information

- **Workflow ID:** 12476
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 3
- **Downloads:** 0
- **Created:** 2026/1/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12476)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **stickyNote** (×6)
- **set** 
- **function** 
- **hubspot** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
