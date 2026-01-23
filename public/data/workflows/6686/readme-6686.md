# Track expenses from receipt photos with Telegram & Google Sheets using OCR.space

> Hello automation enthusiasts! 👋

Want to automatically track your expenses from receipts without hefty OCR service costs? I've got you covered!

I've updated my Personal Finance Tracking Chatbot template to incorporate a **free OCR service (OCR.space)**. This powerful n8n workflow lets you effortlessly log your expenses by **sending a picture of your receipt to your Telegram bot**. The OCR will extract key details like amount, date, and description, which are then neatly saved into your **Google Sheets**!

**Why use this template?**
- 📸 Free OCR-Powered Expense Tracking: Simply send a photo of your receipt to your Telegram bot and let OCR.space do the heavy lifting – without breaking the bank!
- 📊 Automated Google Sheets Entry: Extracted data is seamlessly appended to your Google Sheet for easy financial overview.
- 💰 Manual Entry Still Available: Easily record incomes and expenses via text commands for transactions without receipts.
- 🤖 Instant Telegram Confirmations: Get immediate feedback on successful recordings, whether manual or OCR-processed.
- ✨ Customizable Parsing: The included Function node allows you to refine the data extraction logic to perfectly match your receipt formats.

**What Do You Need?**
- An n8n account (self-hosted or cloud)
- Your own Telegram Bot (free and easy to create!)
- A **free API Key from OCR.space**.
- A Google account and an empty Google Spreadsheet for your financial data.
- A Google Spreadsheet with "Income" and "Expenses" sheets (with columns like ***Date, Description, Amount, Category, Type, Source***).

**Who Is This For?**
This template is perfect for anyone who wants to gain more control over their personal finances in an efficient and hassle-free way. No more complex apps, just use your personal chatbot!

**How to Use It?**
1. **Get Your Free OCR.space API Key**: Visit [ocr.space/OCRAPI](https://ocr.space/OCRAPI) and sign up for a free key.
2. **Import this JSON template** into your n8n instance.
3. **Configure Credentials**: Set your Telegram Bot Token, Google Sheet ID, and OCR.space API Key as environment variables in n8n.
4. **Activate the workflow.**
5. Start tracking your finances by sending text commands (e.g., income salary 5000, expense coffee 15 food) or just snapping a photo of your receipt to your Telegram bot!

Let's simplify your financial management with automation! Feel free to try it out and modify it to suit your needs. If you have any questions, leave a comment below!


## 📊 Basic Information

- **Workflow ID:** 6686
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2292
- **Downloads:** 229
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6686)

## 👤 Author

- **Name:** Candra Reza
- **Username:** @candrareza

## 🏷️ Categories

- Invoice Processing
- AI Chatbot

## 🔗 Nodes Used

- **telegramBot** (×3)
- **if** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
