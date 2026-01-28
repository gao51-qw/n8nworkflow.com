# Automate employee recognition with Slack, Sheets, Gmail & optional GPT-4

> # Automated Employee Recognition Bot with Slack + Google Sheets + Gmail

## Description

Turn employee recognition into an automated system.

This workflow celebrates great work instantly  it posts recognition messages on Slack, sends thank-you emails via Gmail, and updates your tracking sheet automatically.

Your team feels appreciated.
Your HR team saves hours.
Everyone wins.

---

### ⚙️ How It Works

1. You add a new recognition in Google Sheets.
2. The bot automatically celebrates it in Slack.
3. The employee receives a thank-you email.
4. HR gets notified and the sheet updates itself.

---

## 🔧 Setup Steps

#### 1️⃣ Prepare Your Google Sheet

Create a sheet called **“Employee_Recognition_List”** with these columns:
`Name | Department | Reason | Date | Email | Status | EmailStatus`
Then add one test row — for example, your own name — to see it work.

---

#### 2️⃣ Connect Your Apps

Inside n8n:

* **Google Sheets:** Connect your Google account so the bot can read the sheet.
* **Slack:** Connect your Slack workspace to post messages in a channel (like `#general`).
* **Gmail:** Connect your Gmail account so the bot can send emails automatically.

---

#### 3️⃣ (Optional) Add AI Personalization

If you want the messages to sound more natural, add an OpenAI node with this prompt:

&gt; “Write a short, friendly recognition message for {{name}} from {{dept}} who was recognized for {{reason}}. Keep it under 2 sentences.”

This makes your Slack and email messages feel human and genuine.

---

#### 4️⃣ Turn It On

Once everything’s connected:

* Save your workflow
* Set it to **Active**
* Add a new row in your Google Sheet

The bot will instantly post on Slack and send a thank-you email 🎉


## 📊 Basic Information

- **Workflow ID:** 10222
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 48
- **Downloads:** 4
- **Created:** 2025/10/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10222)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheetsTrigger** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **slack** (×3)
- **googleSheets** (×2)
- **gmail** 
- **if** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
