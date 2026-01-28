# Forward filtered Gmail notifications to Telegram chat

> This workflow automatically forwards incoming Gmail emails to a Telegram chat only if the email subject contains specific keywords (like "Urgent" or "Server Down").

The workflow extracts key details such as the sender, subject, and message body, and sends them as a formatted message to a specified Telegram chat.

This is useful for real-time notifications, security alerts, or monitoring important emails directly from Telegram — filtering out unnecessary emails.

## Prerequisites: 

**Before setting up the workflow, ensure the following:**

- The Gmail API should be enabled.
- Create a bot using @BotFather and obtain the API key.
- Retrieve the telegram Chat ID (for personal messages or group messages).
- Set up OAuth2 for Gmail and use the Bot Token for Telegram.

## Customisation Options :

- Modify the subject keywords in the IF Node to change the filtering criteria.
- Customize how the email details appear in Telegram (bold subject, italic body, etc.).
- Extend the workflow to include email attachments in Telegram.

## Steps :

### Step 1: Gmail Trigger Node (On Message Received)

- Select "Gmail Trigger" and add it to the workflow.
- Authenticate with your Google Account.
- Set Trigger Event to "Message Received".
- (Optional) Add filters for specific senders, labels, or subjects.
- Click "Execute Node" to test the connection.
- Click "Save".

### Step 2: IF Node (Conditional Filtering)

- Add an "IF" Node after the Gmail Trigger.
- Configure the condition to check if the email subject contains specific keywords (e.g., "Urgent", "Server Down", "Alert").
- If the condition is true, proceed to the next step.
- If false, you can stop or route it elsewhere (optional).

### Step 3: Telegram Node (Send Message Action)

- Click "Add Node" and search for Telegram.
- Select "Send Message" as the action.
- Authenticate using your Telegram Bot Token.
- Set the Chat ID (personal or group chat).
- Format the message using email details received from the email trigger node and set the message in text.

### Steps 4. Connect & Test the Workflow

- Link Gmail Trigger → if node → Telegram Send Message.
- Save and execute the workflow manually.
- Send a test email to your Gmail account.
- Verify if the email details appear in your Telegram chat.

## About the Creator, WeblineIndia

This workflow is created by the [Agentic business process automation](https://www.weblineindia.com/process-automation-solutions.html) developers at WeblineIndia. We build automation and AI-driven tools that make life easier for your team. If you’re looking to [hire dedicated developers](https://www.weblineindia.com/hire-dedicated-developers.html) who can customize workflows around your business, we’re just a click away.

## 📊 Basic Information

- **Workflow ID:** 3301
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2775
- **Downloads:** 277
- **Created:** 2025/3/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3301)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **stickyNote** (×2)
- **gmailTrigger** 
- **if** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
