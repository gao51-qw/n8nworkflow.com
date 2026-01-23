# Automated quiz delivery from Google Sheets to Telegram with status tracking

> ## Overview
This workflow automates quiz delivery from a Google Sheet directly into a Telegram group. It ensures that quizzes are posted one by one as polls, and once a quiz is sent, its status in the sheet is automatically updated to prevent duplication. If no pending quiz is available, the workflow notifies a separate Telegram channel to refill the sheet.

## Target Audience
This template is designed for teachers, community managers, and Telegram group admins who want an easy way to run quizzes, trivia games, or knowledge checks without manual posting.

## Problem It Solves
Manually sending quizzes is repetitive and prone to mistakes (like re-posting the same question). This template ensures quizzes are sent in order, tracked, and managed automatically with minimal human effort.

## Requirements
- An active Google account with Google Sheets enabled  
- A Telegram bot token (via [BotFather](https://core.telegram.org/bots#botfather))  
- Chat IDs for both the quiz group and the notification group  

## Google Sheet Structure
Create a sheet with the following columns:  
quiz_number | question | option_a | option_b | option_c | option_d | status

- **status**: Use 🟨 for pending quizzes, ✅ once completed  

## Setup Instructions
1. Copy the workflow into your n8n instance.  
2. Add your Google Sheets credentials.  
3. Replace the `YOUR_SHEET_ID` placeholder with your sheet ID.  
4. Set environment variables:  
   - `TELEGRAM_BOT_TOKEN`  
   - `TELEGRAM_CHAT_ID` (for the group)  
   - `TELEGRAM_NOTIFY_CHAT_ID` (for refill notifications)  
5. Run the workflow.  

## Customization Options
- Adjust the sheet name if not using “Sheet1”  
- Change emoji markers (🟨 / ✅) to your preferred system  
- Modify the Telegram notification message  


## 📊 Basic Information

- **Workflow ID:** 7520
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 439
- **Downloads:** 43
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7520)

## 👤 Author

- **Name:** Ninja - Abbas
- **Username:** @abbas-ghazi

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** (×2)
- **code** 
- **if** 
- **httpRequest** 
- **set** 
- **telegram** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
