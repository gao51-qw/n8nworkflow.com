# Manage tasks and deadlines via WhatsApp using GPT-4 and Google Sheets

> ![Screenshot 20250826 184939.png](fileId:2203)
## Who’s it for  
This template is for anyone who wants to manage tasks, deadlines, and updates directly from WhatsApp. It’s especially useful for teams, freelancers, and small businesses that track their work in Google Sheets and want quick AI-powered assistance without opening spreadsheets.  

## How it works / What it does  
This workflow turns WhatsApp into your personal task manager. When a user sends a message, the AI agent (powered by OpenAI) interprets the request, retrieves or updates task information from Google Sheets, and sends a concise response back via WhatsApp. The workflow can highlight overdue tasks, upcoming deadlines, and provide actionable suggestions.  

## How to set up  
1. Connect your **WhatsApp API account** in n8n.  
2. Add your **OpenAI credentials**.  
3. Link your **Google Sheets document** where tasks are stored.  
4. Deploy the workflow and test by sending a message to your WhatsApp number.  

## Requirements  
- WhatsApp Business API account connected to n8n  
- OpenAI account for AI responses  
- Google Sheets with task data  

## How to customize the workflow  
- Adjust the AI prompt to change tone or instructions.  
- Modify the Google Sheets fields (Task, Status, Due Date, Notes) to match your structure.  
- Add conditions or filters to customize which tasks get highlighted. 

## 📊 Basic Information

- **Workflow ID:** 7913
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 543
- **Downloads:** 54
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7913)

## 👤 Author

- **Name:** Yar Malik (Asfandyar)
- **Username:** @yar

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **whatsAppTrigger** 
- **whatsApp** 
- **googleSheetsTool** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
