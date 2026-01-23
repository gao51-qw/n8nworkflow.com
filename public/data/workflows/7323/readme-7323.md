# Restaurant reservation management with OpenAI GPT and Google Sheets

> ![image.png](fileId:2068)

# How it works
- Receives chat messages from customers requesting table reservations.  
- Uses an AI Agent with OpenAI Chat Model to understand and process requests.  
- Checks table information, availability, and existing reservations from Google Sheets.  
- Calculates guest counts and reservation timing using the Calculator node.  
- Updates table availability and reservation records in real-time.  
- Handles reservation changes, including updates and cancellations.

# Set up steps
- **Add credentials** for OpenAI (Chat Model) and Google Sheets.  
- In the **AI Agent** node, link:
  - Chat Model → **OpenAI Chat Model** node.  
  - Memory → **Simple Memory** node.  
  - Tools → Calculator and Google Sheets nodes for reservation data handling.  
- Configure Google Sheets nodes:
  - **Get Table Information** (read sheet)  
  - **Get Table Availability** (read sheet)  
  - **Get Table Reservations** (read sheet)  
  - **Update Table Availability** (update sheet)  
  - **Update Reservations** (append sheet)  
  - **Cancel Reservations** (delete sheet)  
- Ensure your sheets have consistent column names for table IDs, dates, times, and guest counts.  
- Test by sending a reservation request through the **chat trigger** and verify updates in the Google Sheets.

## 📊 Basic Information

- **Workflow ID:** 7323
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 2393
- **Downloads:** 239
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7323)

## 👤 Author

- **Name:** Fakhar Khan
- **Username:** @fakharkhan

## 🏷️ Categories

- Support Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **googleSheetsTool** (×6)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.toolCalculator** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
