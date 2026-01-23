# Track expenses by parsing Telegram transaction messages to Google Sheets

> **Overview**

This n8n workflow template automatically parses incoming Telegram transaction messages and logs structured data into a Google Sheet. It’s designed to help individuals and small businesses track and record transactions shared via Telegram without manual data entry.

**Target Audience**

This template is ideal for:

Individuals, freelancers, and small businesses who receive transaction or payment notifications through Telegram and want to organize them in Google Sheets.

Anyone using self-hosted n8n (required due to custom community nodes).

P**roblem Solved**

Manually copying transaction details from Telegram to Google Sheets is error-prone and time-consuming.
This workflow automates the process by:

Monitoring a Telegram bot/chat for new messages.

Parsing transaction details (amount, sender, date, etc.).

Logging them in real-time into a Google Sheet for easy tracking.

**Setup Instructions**

1. Telegram Bot Setup
Create a Telegram bot using BotFather.

Add the bot to the desired group/channel and grant admin permissions if needed.

Note down the bot token.

2. Google Sheets Setup
Create a Google Sheet with relevant columns (e.g., Date, Amount, Sender, Transaction ID).

Set up Google Sheets credentials in n8n for access.

3. n8n Workflow Configuration
Import this template into your self-hosted n8n instance.

Update the Telegram node: Add your bot token and specify the chat/group ID.

Update the Google Sheets node: Link it to your created sheet and ensure column mapping matches your sheet structure.

Adjust parsing logic if your message format varies (see next section for examples).

4. Community Nodes
This workflow uses custom community nodes. Ensure these are installed via the n8n settings or CLI:

[List your required community nodes here, e.g., n8n-nodes-telegram, n8n-nodes-gsheet, etc.]

5. Activate the Workflow
Save and activate your workflow. Send a test transaction message to your Telegram group/chat and verify data appears in your Google Sheet.

6. Troubleshooting
If messages are not being picked up, check bot permissions and the chat ID.

Ensure Google Sheets credentials are correct and the sheet is accessible.

Double-check that custom nodes are properly installed and up-to-date.

Example Telegram Message Formats

Received: $75 from @john_doe on 2024-05-29. Transaction ID: 12345XYZ.
Paid $120 to @vendor on 2024-05-28. Ref: 67890ABC.
You received ₹5,000 from @amit. ID: 54321PQR. Date: 29/05/2024
The workflow parses messages in the above formats and logs the following columns:

Date

Amount

Sender/Receiver

Transaction/Reference ID

If your message format differs, update the regex in the parsing node.

**Disclaimer**

This n8n workflow template uses custom community nodes and is only compatible with the self-hosted version of n8n.

2. Workflow Changes (For n8n Canvas)
Rename the Nodes:

'If' node → “Is Transaction Message?”

'Google Sheets' node → “Log to Google Sheet”

(Rename other generic nodes for clarity, e.g., 'Telegram' → “Listen for Telegram Messages”, 'Function' → “Parse Transaction Details”)

Sticky Note Improvement:
(Edit the sticky note or add one if missing)

**Workflow Steps:**

Listen for Telegram Messages: This node receives new messages from the Telegram bot.

Is Transaction Message? Checks if the message matches known transaction patterns.

Parse Transaction Details: Extracts amount, sender, date, and transaction ID using regex.

Log to Google Sheet: Records the parsed transaction in the linked Google Sheet for easy tracking.

## 📊 Basic Information

- **Workflow ID:** 4395
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1769
- **Downloads:** 176
- **Created:** 2025/5/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4395)

## 👤 Author

- **Name:** Mujtaba
- **Username:** @mujtaba

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **if** 
- **googleSheets** 
- **telegramTrigger** 
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
