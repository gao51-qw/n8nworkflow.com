# Extract purchase orders from Gmail using Gemini AI and save to Google Sheets

> # 🚀 AI-Powered Email to Purchase Order Workflow  

Automatically scan your inbox for new purchase order requests, extract order details using **Gemini AI**, and log them into **Google Sheets** — all without manual effort.  

---

## ✨ Core Capabilities  
- ⏱ Runs every minute to check **unread emails**  
- 📧 Filters emails by **subject**  
- 🤖 Uses **Gemini AI** to summarize email content & extract structured order details  
- 📅 Formats dates into **ISO calendar weeks**  
- 📊 Adds product data from **Google Sheets** to complete order info  
- ✅ Appends final purchase order records into a Google Sheet (without replacing previous ones)  

---

## 🛠 Setup Essentials  
- 📩 **Gmail account** for fetching unread emails  
- 🔑 **Google Gemini (PaLM) API credentials**  
- 📒 **Google Sheet** with predefined purchase order headers  

---

## 📖 Activation Guide  
1. ⚙️ Configure **Gmail & Google Sheets** credentials in n8n  
2. 🎯 Adjust the **subject filter** to match your email rules  
3. 🔌 Connect **Gemini AI** with your API credentials  
4. 📑 Create a **Google Sheet** with the required headers  
5. ▶️ Activate the workflow and let it run in the background  

---

## 🎨 Customizing the Workflow  
- 🔍 **Email Filters** → Change keywords in the filter node to match your purchase order email subjects  
- 🏷 **Order Fields** → Modify **Set** and **Append to Google Sheet** nodes if your schema differs  
- ✍️ **AI Instructions** → Adjust the AI Agent’s prompt to fit your company’s email style or product details  
- ⏲ **Frequency** → Update the **Cron node** if you want to scan emails less often  
- 📂 **Target Google Sheet** → Point to a different sheet or tab depending on your department or customer  

---


## 📊 Basic Information

- **Workflow ID:** 8585
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 478
- **Downloads:** 47
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8585)

## 👤 Author

- **Name:** SayOne Technologies
- **Username:** @sayonetech

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **gmail** 
- **cron** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×5)
- **set** 
- **filter** 
- **code** 
- **googleSheetsTool** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
