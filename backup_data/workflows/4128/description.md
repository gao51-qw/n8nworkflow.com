🧠 Problem This Solves
Managing credit card expenses can be tricky, especially when you want to stay transparent and keep your spouse in the loop. Most banks don't offer real-time notification sharing with family members, and manually updating expenses takes time and effort. This n8n workflow automates the entire process: tracking your HDFC credit card usage, logging it in Google Sheets, and sending an instant Telegram notification to your spouse.

👥 Who This Template Is For
Couples who want shared visibility of credit card spending

Individuals looking for automated personal finance tracking

Anyone using HDFC Credit Card with email alerts enabled

n8n users who want to integrate Gmail, Google Sheets, and Telegram

⚙️ Workflow Breakdown
Here’s how the automation works:

Gmail Trigger – Monitors your Gmail inbox for credit card transaction alerts from HDFC Bank.

Email Parser – Extracts transaction details like amount, merchant name, date, and card type.

Google Sheets Node – Logs the parsed transaction data into a structured Google Sheet for record-keeping.

Telegram Node – Sends a message to your wife’s Telegram account with transaction details for instant notification.

🛾 Step-by-Step Setup Instructions
1. Prerequisites
An HDFC Credit Card with email alerts enabled

A Gmail account connected to n8n

A Google Sheet created with columns like Date, Amount, Merchant, Card, etc.

A Telegram Bot and your wife’s Telegram Chat ID

2. Set up Gmail Trigger
Use the Gmail Trigger Node to monitor incoming emails from alerts@hdfcbank.net or similar.

Filter emails with subject line containing keywords like Credit Card Transaction Alert.

3. Extract Email Content
Use the HTML Extract or Regex node to parse out transaction amount, merchant name, date, and card number from the email body.

4. Log to Google Sheets
Connect your Google Sheets account in n8n

Use the Append Row node to add each transaction as a new row in your finance sheet.

5. Send Telegram Message
Set up a Telegram Bot and get the Chat ID of your wife’s Telegram account

Format a message like:
"💳 HDFC Transaction Alert: ₹5,000 at Amazon on 17 May via XXXX1234"

Send it via the Telegram node

🛠️ Customization Tips
💡 Add Spending Limits: Add a condition node to alert only if the transaction exceeds a certain amount.

🧾 Category Mapping: Use additional logic to classify expenses (e.g., Shopping, Dining) based on keywords.

📊 Weekly Summary: Create another workflow that sends a weekly Telegram summary using data from Google Sheets.

🔐 Security Tip: Mask part of the card number before sending the Telegram message for added security.

