# Automate WhatsApp invoice processing with OCR, GPT-4 Mini & Google Services

> ### **Description**

#### **How it works**  
This powerful workflow helps businesses and freelancers automatically manage invoices received on WhatsApp.  
It detects new messages, downloads attached invoices, extracts key data using **OCR (Optical Character Recognition)**, summarizes the details with **AI**, updates **Google Sheets** for record-keeping, saves files to **Google Drive**, and instantly replies with a clean summary message all without manual effort.  

Perfect for **small businesses, agencies, accountants, and freelancers** who regularly receive invoices via WhatsApp.  
Say goodbye to manual data entry and hello to effortless automation.  

---

#### **Set up steps**  
Setup takes around **10–15 minutes**:  
1. Connect your **WhatsApp Cloud API** to trigger incoming messages.  
2. Add your **OCR.Space API key** to extract invoice text.  
3. Link your **Google Sheets** and **Google Drive** accounts for data logging and storage.  
4. Enter your **OpenAI API key** for AI-based summarization.  
5. Import the template, test once, and you’re ready to automate your invoice workflow.  

---

#### **Why use this workflow**
- Save hours of manual data entry  
- Keep all invoices safely stored and organized in Drive  
- Get instant summaries directly in WhatsApp  
- Improve efficiency for client billing, and expense tracking.  

## 📊 Basic Information

- **Workflow ID:** 10462
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 510
- **Downloads:** 51
- **Created:** 2025/11/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10462)

## 👤 Author

- **Name:** Muhammad Ali
- **Username:** @ali01

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **httpRequest** (×3)
- **googleDrive** 
- **googleSheets** 
- **whatsApp** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
