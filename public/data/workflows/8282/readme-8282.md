# Business hours lead response system with Gmail, Google Sheets & Telegram alerts

> **Description:**

Never leave your leads waiting! This n8n workflow template ensures every inquiry gets a timely and professional response—whether it’s business hours or after hours. By checking submission times, the automation sends tailored email replies, updates your team instantly, and ensures no lead goes unnoticed.

This workflow monitors a Google Sheet for new form responses, waits briefly to capture complete data, checks if the submission falls within business hours, and then sends either a standard business reply or a polite after-hours acknowledgment. Additionally, it alerts your team via Telegram with lead details for quick follow-up. Perfect for sales, support, and operations teams managing inbound leads.

**Features**

🕒 Monitors Google Sheets for new or updated lead form responses
⌛ Adds a short delay to ensure clean, complete data capture
⏰ Detects whether submissions fall within business hours (9 AM–6 PM, Mon–Fri)
📧 Sends automated Gmail replies (business hours vs. after-hours messaging)
📲 Notifies your team instantly on Telegram with lead details
🌟 Fully automated: hands-free lead acknowledgment + team alerts

**How It Works**

- Google Sheets Trigger – Watches for new form submissions in your lead sheet.
- Data Validation – Waits 5 minutes to ensure complete entry.
- Business Hours Check – Determines if the inquiry is within working hours.
- Email Response – Sends tailored Gmail reply (business hours or after-hours).
- Telegram Notification – Instantly notifies your team with lead details.

**Setup Instructions**

Google Sheets Setup
- Create a Google Sheet with these columns:
  - Name
  - Email Address
  - Phone Number
  - Message
  - Submission Time (timestamp)
- Connect your sheet to n8n using Google Sheets credentials.

Gmail Setup
- Connect your Gmail account in n8n credentials.
- Prepare two email templates:
  - Business Hours Reply: “Hi {{Name}}, thank you for reaching out! Our team will get back to you shortly.”
  - After-Hours Reply: “Hi {{Name}}, thank you for contacting us! Our team will get back to you tomorrow.”

Telegram Setup
- Create a Telegram bot via @BotFather.
- Add your bot to the target group or chat.
- Store the bot token and chatId securely in n8n credentials.

Workflow Configuration
- Import the workflow into your n8n instance.
- Replace hardcoded values with n8n credential references.
- Rename the “Edit Fields” node to “Format Lead Data for Notification” for clarity.
- Test by submitting a sample lead form entry.

**Customization**

⏰ Business Hours: Adjust the time window (e.g., 8 AM–8 PM, Mon–Sat) in the workflow logic.
📧 Email Templates: Personalize subject lines, add signatures, or include links to resources.
📲 Notification Details: Choose which fields (e.g., phone number, notes) appear in the Telegram alert.
⏱ Delay Time: Change the default 5-minute buffer to suit your form’s response timing.

**Security Best Practices**
❌ Do not hardcode Gmail or Telegram credentials. Always use n8n credentials.
✅ Remove private data (chatIds, sheet IDs) before sharing templates.
✅ Restrict credential access to authorized team members.

**Requirements**
- Google Sheets (with structured form responses)
- Gmail account for automated replies
- Telegram bot & chat for notifications
- n8n instance (self-hosted or cloud)

**This workflow is perfect for:**
🏢 Sales Teams handling high lead volume
💬 Support Teams ensuring fast first responses
🚀 Businesses offering 24/7 responsiveness without manual effort
📲 Operations Teams needing structured alerts and accountability


## 📊 Basic Information

- **Workflow ID:** 8282
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 125
- **Downloads:** 12
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8282)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **wait** 
- **function** 
- **if** 
- **gmail** (×2)
- **telegram** 
- **googleSheetsTrigger** 
- **set** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
