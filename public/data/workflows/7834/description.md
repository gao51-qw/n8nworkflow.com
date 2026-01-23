Production-ready solution for controlling AI agent usage and preventing abuse while managing costs.

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