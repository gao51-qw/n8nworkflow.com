# Employee attendance tracker with Telegram Bot and Google Sheets

> ## Attendance Telegram App with Google Sheets

Manage employee attendance directly through **Telegram** with seamless **Google Sheets** integration.  
Employees can check in, check out, and view their daily attendance status from a Telegram bot.  
All records are stored in Google Sheets for easy tracking and reporting.

👉 Includes a **Google Sheets template** to get started quickly.

---

### ✨ Features
- 🕘 **Check-in & Check-out** via Telegram bot  
- 📊 **View daily attendance status** (Check-in/Check-out done or not)  
- 🔒 **Employee validation** – only registered employees can log attendance  
- ⚠️ **Duplicate prevention** – prevents multiple check-ins/outs on the same day  
- 📂 **Google Sheets integration** – easy to manage, export, and share data  

---

### 🛠 Requirements
- [n8n](https://n8n.io/) (Cloud or Self-hosted)  
- A Telegram Bot (create via **BotFather**)  
- Google Sheets account  

---

### 🚀 Setup Instructions

### 1. Import Workflow
1. Download and import `Attendance Telegram App.json` into n8n.  
2. Configure your **Telegram API credentials**.  
3. Configure your **Google Sheets credentials**.  

### 2. Use Provided Google Sheets Template
We provide a template with two sheets:  
- **Employee** → List of registered employees (`id_employee`, `full_name`, `username_telegram`)  
- **Attendance** → Attendance logs (`date`, `time`, `attendance_type`, etc.)  

👉 [Copy the Google Sheets Template](https://docs.google.com/spreadsheets/d/1miqc4zpTecMwk_qNHgM17na2rDsWNpICIblKy44hwnw/edit?usp=sharing)

Update the **Employee sheet** with your employee data before running the workflow.

### 3. Configure Telegram Bot
1. Create a bot with **BotFather** on Telegram.  
2. Copy the **API token**.  
3. Add it into n8n’s **Telegram credentials**.  

### 4. Run the Workflow
- Start the workflow.  
- Open your Telegram bot and type `/start` or `/menu`.  
- Available options:  
  - ✅ **Check-in** (⏰)  
  - 🚪 **Check-out** (🏁)  
  - 📊 **View Today’s Attendance Status**  

---

## 📋 Example Flow
1. User types `/menu` in Telegram.  
2. Bot displays menu with **Check-in/Check-out** and **Today’s Attendance Status**.  
3. If user taps **Check-in**:  
   - Workflow validates if they are a registered employee.  
   - Checks if attendance already exists for today.  
   - If valid → record in Google Sheets.  
   - Bot replies: *“Check-in recorded. ⏰”*  

---

## 📊 Basic Information

- **Workflow ID:** 8335
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 1324
- **Downloads:** 132
- **Created:** 2025/9/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8335)

## 👤 Author

- **Name:** Singgi Aditya
- **Username:** @singgiaditya

## 🏷️ Categories

- HR
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **if** (×7)
- **telegram** (×7)
- **aggregate** 
- **googleSheets** (×5)
- **functionItem** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
