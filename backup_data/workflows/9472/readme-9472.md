# Generate AI LinkedIn Posts with Human Approval via Telegram and GPT

> # Human-in-the-Loop LinkedIn Post Generator (Telegram + AI)  

This n8n template demonstrates how to build a **human-in-the-loop AI workflow** that helps you create professional LinkedIn posts via Telegram. The agent searches the web, drafts content, asks for your approval, and refines it based on your feedback — ensuring every post sounds polished and on-brand.  

## Who’s it for  
- Content creators and marketers who want to save time drafting LinkedIn posts.  
- SaaS founders or solopreneurs who regularly share updates or insights.  
- Anyone who wants an AI writing assistant with human control in the loop.  

## How it works / What it does  
1. **Trigger**: The workflow starts when you send a message to the Telegram bot asking it to write a LinkedIn post (e.g., “Write a LinkedIn post about AI in marketing”).  
2. **Research**: The AI agent uses the Tavily tool to search the web and gather context for your topic.  
3. **Drafting**: An AI model (OpenAI or Gemini) creates a professional LinkedIn post based on the findings.  
4. **Human-in-the-loop**:  
   - The bot sends the draft to you in Telegram and asks: “Good to go?”  
   - If you approve → The post is saved to a Google Sheet, ready to publish.  
   - If you disapprove and give feedback → The feedback is sent to a second AI agent that revises and improves the post.  
   - The improved draft is sent back to you again for final approval.  
5. **Finalization**: Once approved, the post is appended to a Google Sheet — your ready-to-post content library.  

This workflow combines AI creativity with human oversight to produce polished, authentic LinkedIn content every time.  

## How to set up  
1. Import this template into your n8n account.  
2. Connect your **Telegram bot** (via Telegram Trigger and Send Message nodes).  
3. Connect your **Google Sheets** account to store approved posts.  
4. Set up your **AI model provider** (OpenAI or Gemini) and **Tavily API key** for web search.  
5. Activate the workflow and start chatting with your AI writing assistant on Telegram!  

## Requirements  
- n8n account.  
- Telegram bot token.  
- OpenAI or Google Gemini account (for text generation).  
- Tavily API key (for web search).  
- Google Sheets account (for saving approved posts).  

## How to customize the workflow  
- **Post Tone**: Adjust AI prompts to match your personal voice (professional, storytelling, inspirational, etc.).  
- **Approval Logic**: Modify the approval step to allow multiple revision loops or add a “draft-only” mode.  
- **Storage Options**: Instead of Google Sheets, save approved posts to Notion, Airtable, or your CMS.  
- **Multi-platform**: Extend the same logic for X (Twitter) or Threads by changing the final output destination.  
- **Branding**: Add your brand guidelines or preferred hashtags to the AI prompts for consistent style.  

---

This template helps you write better LinkedIn posts faster — keeping you in full control while AI does the heavy lifting.  


## 📊 Basic Information

- **Workflow ID:** 9472
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 288
- **Downloads:** 28
- **Created:** 2025/10/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9472)

## 👤 Author

- **Name:** Yasser Sami
- **Username:** @yassersami

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@tavily/n8n-nodes-tavily.tavilyTool** 
- **set** (×2)
- **telegram** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
