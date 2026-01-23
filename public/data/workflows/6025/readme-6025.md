# Monitor Gmail and send AI summaries to Telegram using GPT-4o-mini and keywords

> ## Overview
An intelligent automation workflow that monitors your Gmail inbox and sends AI-powered summaries of important emails directly to your Telegram chat. Perfect for staying updated on critical communications without constantly checking your email.

## 🌟 Key Features
- **Real-time Email Monitoring**: Checks Gmail every minute for new emails
- **Smart Content Filtering**: Only processes emails containing important keywords
- **AI-Powered Summarization**: Uses GPT-4o-mini to create concise, human-readable summaries
- **Instant Telegram Notifications**: Delivers summaries directly to your preferred Telegram chat
- **Customizable Keywords**: Easily modify filters to match your specific needs

## 🔧 How It Works

### Workflow Steps:
1. **Email Trigger**: Continuously monitors your Gmail inbox for new messages
2. **Smart Filter**: Analyzes email subject and body for important keywords (sales, jobs, etc.)
3. **AI Processing**: Sends relevant emails to OpenAI for intelligent summarization
4. **Telegram Delivery**: Sends formatted summary to your Telegram chat

### Sample Output:
```
📦 Your Flipkart order "Bluetooth Speaker" was delivered today. Enjoy!
💰 Invoice from AWS for $23.50 is due by July 20. Check billing portal.
✅ HR shared your July payslip. No action needed unless there's an error.
```

## 🛠 Setup Requirements
- Gmail account with OAuth2 credentials
- OpenAI API key 
- Telegram bot token and chat ID
- N8N instance (cloud or self-hosted)

## 📋 Use Cases
- **Business Alerts**: Payment due notices, invoice reminders
- **E-commerce**: Order confirmations, delivery updates
- **HR Communications**: Payslips, policy updates, announcements
- **Security**: Login alerts, security notifications
- **Job Hunting**: Application responses, interview invitations

## ⚙️ Customization Options
- **Keyword Filters**: Add/remove keywords in the filter node (invoice, payment, security, delivery, etc.)
- **AI Prompt**: Modify the summarization style and format
- **Polling Frequency**: Adjust email checking interval
- **Multiple Chats**: Send to different Telegram chats based on email type

## 🔒 Privacy & Security
- Processes emails locally through n8n
- No email content stored permanently
- Uses secure OAuth2 authentication
- Respects Gmail API rate limits

## 📊 Performance
- Lightweight and efficient
- Minimal resource usage
- Fast AI processing with GPT-4o-mini
- Reliable Telegram delivery

## 💡 Pro Tips
- Start with broad keywords and refine based on results
- Use multiple condition branches for different email types
- Set up different Telegram chats for work vs personal emails
- Monitor your OpenAI usage to avoid unexpected costs

---


## 📊 Basic Information

- **Workflow ID:** 6025
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 662
- **Downloads:** 66
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6025)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** 
- **gmailTrigger** 
- **if** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
