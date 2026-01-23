# Review and approve employee expenses with forms, OpenAI and Google Workspace

> ## How it works
This workflow automates employee expense reimbursements from submission to final resolution. Expenses are captured via a form, reviewed by an AI agent for justification, and routed to managers for approval or clarification. Approved expenses notify employees instantly, while rejected or unclear cases automatically schedule a follow-up discussion. All actions are logged to keep finance records clean and auditable.

## Step-by-step
- **Step 1: Capture, summarize, and request approval**
  - **On Expense Form Submission** – Captures structured expense details submitted by employees.
  - **Append row in sheet** – Stores each expense entry in Google Sheets for tracking.
  - **AI Agent** – Reviews the expense description and validates whether the full amount is justified.
    - **OpenAI Chat Model** – Powers the AI reasoning used to analyze the expense.
    - **Output Parser** – Converts the AI response into a structured decision format.
  - **If** – Routes the flow based on whether the expense is appropriate or not.

- **Step 2: Manager reviews and responds**
  - **Send Email to Manager for Approval** – Sends an approval email when the expense is justified.
  - **Send Email to Manager for Approval1** – Sends a clarification-required email when justification is unclear.
  - **If1** – Checks the manager’s approve or reject response from the email.

- **Step 3: Notify employee or schedule discussion**
  - **Send a message** – Notifies the employee when the expense is approved.
  - **Booking Agent** – Automatically finds the next available business-day time slot if the expense is rejected.
    - **OpenAI** – Interprets availability rules and slot selection logic.
    - **Get Events** – Fetches existing calendar events for the selected day.
    - **Check Availability** – Identifies free time slots within working hours.
    - **Output Parser1** – Structures the selected meeting time.
  - **Send a message2** – Emails the employee with discussion details when clarification is required.

## Why use this?
- Enforce consistent expense validation before manager review.
- Reduce manual back-and-forth between employees, managers, and finance.
- Keep a centralized, auditable record of all expense submissions.
- Speed up reimbursements with automated approvals and notifications.
- Handle rejected expenses professionally with automatic discussion scheduling.


## 📊 Basic Information

- **Workflow ID:** 12256
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 9
- **Downloads:** 0
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12256)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **if** (×2)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **gmail** (×4)
- **googleCalendarTool** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
