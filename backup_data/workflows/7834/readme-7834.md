# Telegram AI assistant with rate limiting and auto-reset using Google Sheets

> Production-ready solution for controlling AI agent usage and preventing abuse while managing costs.

🎯 **Problem Solved**

Unlimited AI interactions → Excessive API costs
Service abuse → Uncontrolled resource consumption
No built-in limits → Need for usage quotas

✅ **Solution Overview**

*Two-Part System:*

**Main Flow:** User interaction tracking + AI responses
**Reset Flow:** Automated counter resets

🔄 **How It Works**

**User Message → Track Counter → Check Limit → Allow/Block → AI Response**

🛠️ **Core Components**

*Main Workflow*

📱 Telegram Trigger - Receives user messages
📊 Google Sheets Counter - Tracks messages per user
🔀 Switch Logic - Checks limits (default: 3 messages)
🤖 AI Agent - Processes allowed interactions
💬 Smart Responses - Delivers AI answers or limit warnings

*Auto-Reset System*

⏰ Schedule Trigger - Runs every configurable interval
🔄 Bulk Counter Reset - Resets all users to 0

⚙️ **Configuration**

*Message Limits*
Modify Switch Node conditions:

&gt; 3 messages → Block silently
= 3 messages → Send limit warning
&lt; 3 messages → Allow AI response

*Reset Schedules*

Testing: Every 1 minute
Hourly: 0 * * * *
Daily: 0 0 * * *
Weekly: 0 0 * * 0

📋 **Setup Requirements**

Credentials Needed:

🤖 Telegram Bot Token
📊 Google Sheets API
🧠 AI Model 

*Google Sheets Structure:
*Column A: User ID (Telegram chat.id)
Column B: Message Counter

🎯 **Perfect For**

💰 Cost Control - Prevent runaway API costs
🛡️ Demo/Trial Bots - Limited interactions
🏢 Customer Service - Usage quotas
🎓 Educational Bots - Daily limits
🚫 Anti-Abuse - Fair usage policies

🚀 **Key Benefits**
✅ Cost Management - Control AI API expenses
✅ Fair Access - Equal usage for all users
✅ Production Ready - Robust error handling
✅ Flexible Limits - Easy adjustment
✅ Auto-Reset - No manual intervention
✅ User-Friendly - Clear limit messages

📝 **Quick Customization**

**Adjust Limits**: Change Switch node values
**Reset Timing**: Modify Schedule Trigger
**Custom Messages**: Edit Telegram response nodes
**User Tiers**: Add columns to Google Sheets

## 📊 Basic Information

- **Workflow ID:** 7834
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 202
- **Downloads:** 20
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7834)

## 👤 Author

- **Name:** Oussama
- **Username:** @oussama

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **googleSheets** (×5)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **scheduleTrigger** 
- **stickyNote** (×4)
- **switch** 
- **noOp** 
- **telegram** (×2)
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
