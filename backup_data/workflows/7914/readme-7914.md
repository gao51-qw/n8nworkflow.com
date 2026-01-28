# Manage Google Sheets data with GPT-4 natural language processing & calculator

> ![Screenshot 20250826 205424.png](fileId:2204)

## Who’s it for  
This template is for users who want to combine the power of AI with Google Sheets for managing and calculating data quickly. It’s ideal for small businesses, data entry teams, and anyone who tracks lists, orders, or tasks in Google Sheets and needs AI-driven insights or calculations.  

## How it works 
The workflow connects an AI agent with Google Sheets and a calculator tool. When a user sends a chat message, the AI interprets the request, retrieves or updates rows in the connected sheet, and performs calculations when needed. For example, it can read a list of orders from a sheet and calculate totals or averages instantly. It also supports creating, updating, and deleting rows from the sheet through natural language instructions.  

## How to set up  
1. Copy the provided **Google Sheet** into your Google Drive.  
2. Connect your **Google Sheets credentials** in n8n.  
3. Add your **OpenAI credentials** for the AI agent.  
4. Deploy the workflow and start interacting with it by sending chat prompts.  

## Requirements  
- OpenAI account (for AI responses)  
- Google Sheets account with a spreadsheet  
- n8n instance with LangChain nodes enabled  

## How to customize the workflow  
- Change the spreadsheet fields (ID, Name, etc.) to match your own data structure.  
- Modify the AI prompt to guide the agent’s tone or behavior.  
- Extend the workflow by adding more Google Sheets operations or AI tools for advanced tasks.  

## 📊 Basic Information

- **Workflow ID:** 7914
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 223
- **Downloads:** 22
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7914)

## 👤 Author

- **Name:** Yar Malik (Asfandyar)
- **Username:** @yar

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** (×4)
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
