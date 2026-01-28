# Track expenses from Telegram to Google Sheets with GPT-4.1 Mini

> # 📒 Telegram Expense Tracker to Google Sheets with GPT-4.1
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/track-expenses-from-telegram-to-google-sheets-with-gpt-41-mini+(1).jpg)](https://www.youtube.com/watch?v=DsSs1EF1lQg)
&gt; A lightweight automation that lets users log daily expenses via a Telegram bot and instantly saves them into Google Sheets—perfect for anyone looking to manage spending on the go with AI-powered structure and ease.
## 👤 Who’s it for
This workflow is for anyone who wants to log their daily expenses by simply chatting with a Telegram bot. Ideal for:
- Individuals who want a quick way to track spending
- Freelancers who log receipts and purchases on the go
- Teams or small business owners who want lightweight expense capture

## ⚙️ How it works / What it does
1. **User sends a text message on Telegram** describing an expense  
   _(e.g., “Bought coffee for 50k at Highlands”)_

2. **Message format is validated**
   - If the message is **text**, it proceeds to GPT-4.1 Mini for processing.
   - If it's **not text** (e.g. image or file), the bot sends a fallback message.

3. **OpenAI GPT-4.1 Mini parses the message** and returns:
   - `relevant`: true/false
   - `expense_record`: structured fields (date, amount, currency, category, description, source)
   - `message`: a friendly confirmation or fallback

4. **If valid**:
   - The bot replies with a fun acknowledgment
   - The data is saved to a connected Google Sheet

5. **If invalid**:
   - A fallback message is sent to encourage proper input

## 🛠️ How to set up

### 1. Telegram Bot Setup
- Create a bot using [BotFather](https://t.me/botfather) on Telegram
- Copy the bot token and paste it into the `Telegram Trigger` node

### 2. Google Sheet Setup
- Create a Google Sheet with these columns:
  ```
  Date | Amount | Currency | Category | Description | SourceMessage
  ```
- Share the sheet with your n8n service account email

### 3. OpenAI Configuration
- Connect the `OpenAI Chat Model` node using your OpenAI API key
- Use GPT-4.1 Mini as the model
- Apply a system prompt that extracts structured JSON with:
  - `relevant`, `expense_record`, and `message`

### 4. Add Parser
- Use the `Structured Output Parser` node to safely parse the JSON response

### 5. Conditional Logic Nodes
- `Is text message?`  
   - Checks if the message is in text format  
- `Supported scenario?`  
   - Checks if `relevant = true` in the LLM response

### 6. Final Actions
- **If relevant**:  
   - Send confirmation via Telegram  
   - Append row to Google Sheet  
- **If not relevant**:  
   - Send fallback message via Telegram

## ✅ Requirements
- Telegram bot token
- OpenAI GPT-4.1 Mini API access
- n8n instance (self-hosted or cloud)
- Google Sheet with access granted to n8n
- Basic understanding of n8n node configuration

## 🧩 How to customize the workflow

| Feature                         | How to Customize                                                  |
|----------------------------------|-------------------------------------------------------------------|
| Add multi-currency support       | Update system prompt to detect and extract different currencies  |
| Add more categories              | Modify the list of categories in the system prompt               |
| Track multiple users             | Add `username` or `chat ID` column to the Google Sheet           |
| Trigger alerts                   | Add Slack, Email, or Telegram alerts for specific expense types  |
| Weekly summaries                 | Use a cron node + Google Sheet query + Telegram message          |
| Visual dashboards                | Connect the sheet to Looker Studio or Google Data Studio         |

Built with 💬 Telegram + 🧠 GPT-4.1 Mini + 📊 Google Sheets + ⚡ n8n

## 📊 Basic Information

- **Workflow ID:** 6970
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 2102
- **Downloads:** 210
- **Created:** 2025/8/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6970)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** (×2)
- **telegram** (×3)
- **code** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
