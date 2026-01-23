# Classify Gmail emails with GPT-4o mini and send Telegram notifications

> ## Gmail AI Email Classifier & Notifier

Since Gmail inboxes can quickly become cluttered, this workflow provides an **automated AI-based email classification system**. It listens for new emails, categorizes them using an AI classifier, applies Gmail labels, and sends you a **Telegram notification** with a quick summary.

If you often miss **urgent client messages** or struggle with sorting **work vs. promotions**, this workflow ensures you never overlook important emails.

**Use case:** Especially useful for professionals who receive a high volume of mixed emails (clients, work, promotions). The workflow automatically labels and notifies you of new emails based on their category.

---

## How It Works

1. **Trigger Input**

   * The workflow starts with the **Gmail Trigger** node, which listens for new incoming emails.
   * By default, it polls every **minute**, but you can adjust the polling frequency.
   * Email metadata (`from`, `subject`, `body`) is passed downstream.

   Example JSON input:

   ```json
   {
     "from": "client@example.com",
     "subject": "Urgent project deadline",
     "text": "Please review the attached contract ASAP"
   }
   ```

2. **Classify Email (AI)**

   * The **Classification Agent** (powered by OpenAI via LangChain) receives the email data.
   * It sorts the email into one of four categories:

     * **High Priority** – urgent, time-sensitive
     * **Work Related** – general work emails
     * **Promotions** – newsletters, offers, sales
     * **Other** – uncategorized emails
   * The classifier uses a **system prompt** to ensure output is returned in JSON format for downstream processing.

3. **Apply Gmail Labels**

   * Based on classification, the workflow applies the corresponding Gmail label:

     * **High Priority** → “Important + Starred”
     * **Work Related** → “Work” (custom Gmail label)
     * **Promotions** → “Promotions” (custom Gmail label)
   * Each label must **already exist in Gmail** for the operation to work.

4. **Generate Notification**

   * The **AI Agent** (notification assistant) takes the classified email and rewrites it into a **short, casual notification**.
   * Example notification:

     ```
     [High Priority] New email from client@example.com  
     Subject: Urgent project deadline  
     "Please review the attached contract ASAP"
     ```

5. **Send to Telegram**

   * The **Telegram node** sends the generated notification to your personal chat ID.
   * Requires a Telegram bot created with **@BotFather** and your **chat ID** configured.

---

## How to Use

1. Import this workflow into **n8n**.
2. Set up **Gmail OAuth2 credentials** and connect your Gmail account.
3. Create Gmail labels: `High Priority`, `Work Related`, `Promotions`.
4. Set up a **Telegram bot** in @BotFather and copy your `chatId` into the node.
5. Run the workflow — every new email will now be classified, labeled, and notified.

---

## Requirements

* **n8n Gmail Trigger** with Gmail OAuth2 credentials
* **OpenAI API key** configured for LangChain nodes
* **Telegram bot** created via @BotFather with your chat ID
* Existing Gmail labels (`Work`, `Promotions`, etc.)

---

## Customizing This Workflow

You can extend it by:

* **Adding more categories** – e.g., “Finance,” “Personal,” or “Spam.”
* **Changing the notification channel** – send to Slack, Discord, or SMS instead of Telegram.
* **Adjusting classification rules** – edit the system prompt for finer-grained AI sorting.
* **Changing polling frequency** – set Gmail Trigger to every 5 minutes instead of every minute.
* **Expanding extracted fields** – include attachments, links, or CC addresses in the notification.


## 📊 Basic Information

- **Workflow ID:** 7553
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 665
- **Downloads:** 66
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7553)

## 👤 Author

- **Name:** Christian Moises
- **Username:** @hyxcreation

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **gmail** (×3)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
