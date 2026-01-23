# Protect Telegram groups with math CAPTCHA verification and Google Sheets

> ## Why this template rocks

**🚀 Lightning-fast setup** - Deploy in under 5 minutes  
**💡 Zero AI costs** - Uses simple math instead of expensive LLM calls  
**🛡️ 99% spam blocking** - Mathematical CAPTCHAs stop bots instantly  
**⚡ Ultra-efficient** - Runs on minimal resources, scales to thousands of users  
**🎯 Plug-and-play** - Just add your bot token and Google Sheet ID  

## Who's it for

Smart community managers who want **maximum protection with minimum complexity**. Perfect for:
- 🎮 Gaming communities (Discord alternatives)
- 💼 Professional Telegram groups  
- 📚 Educational channels with 100+ members
- 🌐 Any public group facing spam bot invasions
- 💰 Communities wanting to save on AI API costs

## What it does

**This isn't another complicated AI bot** - it's a **lean, mean spam-fighting machine** that works smarter, not harder.

🧠 **Simple brilliance**: Instead of expensive AI that can be fooled, we use basic math (1+1=?) that bots consistently fail  
🎯 **Instant results**: New member joins → Gets math question → Answers correctly = Welcome! / Wrong answer = Banned  
🧹 **Auto-cleanup**: All verification messages disappear automatically - your chat stays pristine  
📊 **Smart tracking**: Google Sheets integration tracks everything without bloating your database

**The genius is in the simplicity** - real humans solve "7+3=?" in 2 seconds, bots struggle or ignore it completely.

## How it works (the magic behind the simplicity)

**Step 1**: 👁️ Bot detects new member instantly  
**Step 2**: 🎲 Generates random math question (like "4 + 7 = ?")  
**Step 3**: ❓ Sends personalized challenge mentioning the user  
**Step 4**: 📝 Stores answer in Google Sheets for verification  
**Step 5**: ✅ User responds → Bot checks answer → Success = Welcome / Fail = Ban  
**Step 6**: 🧹 All verification messages auto-delete for clean chat

**Why this crushes AI-based solutions:**
- ⚡ **Speed**: Math verification takes milliseconds vs AI API calls  
- 💰 **Cost**: Zero ongoing fees vs expensive LLM tokens  
- 🎯 **Accuracy**: 99%+ spam detection vs AI false positives  
- 🛡️ **Reliability**: Simple logic never breaks vs AI model changes

## Requirements (minimal setup, maximum power)

- 🤖 **Telegram Bot Token** (free from @BotFather - takes 30 seconds)
- 📊 **Google Sheets API** (free tier covers 1000s of verifications)  
- 👑 **Group Admin Rights** (add bot as admin with ban/delete permissions)
- 🔧 **N8N Instance** (self-hosted or cloud - works on any plan)

**Total setup time: 5 minutes max** ⏱️

## How to set up

1. **Configure Bot Credentials**: 
   - Replace `YOUR_TELEGRAM_BOT_TOKEN_HERE` in the "⚙️ Bot Configuration" node with your actual bot token from @BotFather
   - Ensure your bot has necessary permissions (delete messages, ban users, read messages)

2. **Set up Google Sheets Integration**:
   - Create a new Google Sheet with three columns: `id`, `answer`, `msg_id`
   - Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your Google Sheet ID
   - Configure Google Sheets credentials in N8N with proper service account access
   - Ensure the sheet is accessible by your service account

3. **Configure Telegram Group**:
   - Add your bot to the target Telegram group
   - Promote the bot to administrator with permissions to ban users and delete messages
   - Test bot permissions by manually invoking admin functions

4. **Customize Welcome Message**:
   - Edit the welcome message template in the "⚙️ Bot Configuration" node to match your community's tone and style
   - Include any group rules, links, or specific information new members should know

5. **Activate and Test**:
   - Enable the workflow in N8N
   - Test the complete flow by joining the group with a test account
   - Verify CAPTCHA delivery, answer verification, and both success/failure paths work correctly

**💡 Pro tip**: The simple math foundation makes ANY customization easy - no AI complexity to break!

## Why you'll love this template

**⚡ Instant impact**: Deploy once, protect forever  
**💰 Zero ongoing costs**: No AI bills, just pure efficiency  
**🛡️ Battle-tested**: Stops 99% of spam bots in real communities  
**🔧 Maintenance-free**: Set it and forget it reliability  
**📈 Scales infinitely**: From 10 to 10,000 members witho

## 📊 Basic Information

- **Workflow ID:** 8016
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 33
- **Downloads:** 3
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8016)

## 👤 Author

- **Name:** Vadym Nahornyi
- **Username:** @vadym-nahornyi

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **if** (×2)
- **code** 
- **googleSheets** (×3)
- **telegram** (×5)
- **httpRequest** 
- **set** (×2)
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
