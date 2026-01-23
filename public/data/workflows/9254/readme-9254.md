# Automate Telegram message processing - separate text and files 💬📁

> ## **Introduction**
Tired of manually downloading a file through different Telegram messages? This workflow acts as a smart receptionist for your Telegram bot, automatically processing incoming messages to cleanly separate text from file attachments, getting them ready for any automation you can dream up! 📥

---
## 🎯 **What This Does**
This workflow solves the challenge of handling varied Telegram messages within a single automation workflow. Incoming messages can be just text, just a file, or a file with a caption. This template intelligently identifies the message type and routes it down the correct path, isolating the text content and downloading the file attachment. It's perfect for community managers, support teams, or anyone building a Telegram-powered chatbot.

---
## 🔄 **How It Works**
1. **Listens for New Messages:** The workflow starts the moment a new message is sent to your connected Telegram bot.
2. **Checks Message Content:** A Switch node instantly determines if the message contains:
    - Text only
    - Attachment only
    - Attachment with a message (text caption)
3. **Separates Message and File:** Based on the content, the workflow isolates the text (from the message or caption) and the file's metadata (`file_id`, `file_name`).
4. **Downloads the Attachment:** For any message containing a file, the workflow automatically downloads it, making the binary data available for the next steps in your automation.
## 🧩 **Nodes Used**
- Telegram Trigger
- Telegram
- Switch
- Set
- Split Out
- No Operation - NoOp (as a placeholder for your next steps)
---
## 🚀 **Setup Requirements**
- **Credentials:** You'll need a Telegram Bot API Token (Key) and Chat ID.
- **Accounts:** A Telegram account.
- **Setup Time:** Less than 5 minutes.
### Set up steps
1. **Create a Telegram Bot:** 
	- First, you need a bot. Open Telegram and send a message to the official `@BotFather`.
    - Send the command `/newbot`.
    - Follow the prompts to choose a name and username for your bot.
    - BotFather will provide you with a unique **API Token**. Copy this token, it's what you'll need for the next step.
2. **Add Credentials to n8n:**
    - In your n8n workflow, navigate to the **Credentials** section in the left panel.
    - Click **Add credential**, search for "Telegram," and select it.
    - Paste the API Token you copied from BotFather into the **Access Token** field.
    - Click **Save** to create your credential.
3. **Connect Your Bot to the Workflow:**
    - Back on the canvas, open the **Waiting For Message (Telegram Trigger)** node.
    - In the **Credential for Telegram API** dropdown, select the credential you just created.
    - Open the **Get & Download Attachment (Telegram)** node and select the same credential.
4. **Activate and Test!**
    - Click the **Activate** toggle in the top right corner of your screen.
    - Now, send a few different messages to your new bot on Telegram to test all the paths:
        - A simple text message (e.g., "Hello!").
        - A file (like a PDF or Notepad) with no text.
        - A file with a caption(message).
    - You can check the **Executions** tab in n8n to see each test run successfully! The `NoOp` nodes at the end of each path show you the final, cleanly separated data.
---
## 💎 **Benefits / Why It Matters**
This template provides a robust and reliable foundation for any Telegram automation. By neatly separating text from files, you can seamlessly connect Telegram to any other service whether you're archiving documents to Google Drive, analyzing feedback with Gemini, or logging support requests in a database. It saves development time and ensures your automations run smoothly

## 📊 Basic Information

- **Workflow ID:** 9254
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 989
- **Downloads:** 98
- **Created:** 2025/10/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9254)

## 👤 Author

- **Name:** EoCi - Mr.Eo
- **Username:** @eocimreo

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **set** (×4)
- **switch** 
- **splitOut** 
- **telegram** 
- **noOp** (×3)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
