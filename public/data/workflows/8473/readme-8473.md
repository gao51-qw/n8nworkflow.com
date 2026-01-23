# Automated finance tracker with Gmail, Google Sheets & GPT-4o monthly reports

> ### 🚀 What This Workflow Does

This automation helps small business owners **track income and expenses effortlessly**, turning scattered emails and WhatsApp messages into structured financial data — all without manual entry.

Every month, it:
- Pulls receipts and invoices from your Gmail and WhatsApp
- Uses AI to extract key details (date, vendor, amount, category)
- Logs everything into Google Sheets
- Generates a **monthly cash flow forecast** with visual insights
- Sends you a clear, concise email report with **AI-powered recommendations**

No more spreadsheet stress. No more missing receipts. Just **financial peace of mind — delivered every month**.

### 💡 Why It Matters

As a small business owner, your time is too valuable to spend manually logging transactions. This workflow automates the **entire finance tracking loop** — from receipt capture to insight delivery — so you can:
- Know exactly where your money is going
- Spot trends and plan ahead
- Make smarter decisions with real-time data
- Start each month with confidence

It's **soft tech at its best**: simple, elegant, and deeply useful.

### 🛠️ How It Works

1. **Triggers monthly** on the 1st at 9 AM (customizable)
2. **Scans your inbox** for new receipts/invoices via Gmail
3. **Uses GPT-4o** to parse text and extract financial data
4. **Avoids duplicates** by checking existing entries
5. **Saves to Google Sheets** with clean formatting
6. **Generates a monthly summary** with:
   - Total income & expenses
   - Net profit/loss
   - Expense breakdown (pie chart via QuickChart)
   - AI-written insights and action steps
7. **Delivers a beautiful email report** with visuals and next steps

### 🧩 Tools Used
- Gmail (IMAP)  
- WhatsApp (via Twilio)  
- Google Sheets  
- OpenAI (GPT-4o)  
- Cron (scheduled trigger)  
- Email (SMTP)  

### ✅ Built With Soft Tech Principles
- Zero-code design  
- Human-first UX  
- Scalable for any small business  
- Privacy-respecting (no sensitive data stored)  
- Easy to customize and extend  

### 📌 Perfect For
- Solopreneurs  
- Coaches & consultants  
- E-commerce sellers  
- Service-based businesses  
- Anyone tired of manual bookkeeping  

"I used to dread my monthly financial review. Now I get a clear, friendly report that tells me what’s working — and what to fix. This one workflow saved me 4 hours a month."  — *Sarah L., Online Coach*



## 📊 Basic Information

- **Workflow ID:** 8473
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 260
- **Downloads:** 26
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8473)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **cron** 
- **set** 
- **gmail** (×2)
- **function** (×5)
- **openAi** (×2)
- **googleSheets** (×3)
- **if** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
