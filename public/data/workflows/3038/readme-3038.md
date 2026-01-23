# Error handler send Telegram: real-time workflow failure alerts

> This workflow acts as an error handler, sending real-time notifications to Telegram when another workflow fails. It provides detailed error information, including workflow name, timestamp, execution URL, last executed node, and error message.

---

### **Pre-Conditions**  
- A Telegram bot created via [BotFather](https://core.telegram.org/bots#botfather).  
- The bot token and Telegram group/channel `chatId`.  
- An active n8n instance with the **Telegram** and **Error Trigger** nodes installed.  

---

### **Setup**  
1. **Workflow Configuration:**  
   - Import the workflow into n8n.  
   - Update the Telegram `chatId` in the **Config** node.  
   - Add your Telegram bot token in the **Telegram** node credentials.  

2. **Error Workflow Setup:**  
   - Set this workflow as the **Error Workflow** in other workflows.  

3. **Testing:**  
   - Trigger an error in another workflow to verify Telegram notifications.  

---

### **Who the Workflow is For**  
- **Developers:** Monitoring workflow failures in real-time.  
- **Teams:** Managing multiple n8n workflows and needing instant error alerts.  
- **n8n Users:** Looking for a simple way to handle workflow errors via Telegram.  

---

### **Primary Use**  
- Automates error notifications for failed workflows.  
- Sends detailed error reports to Telegram for quick troubleshooting.  
- Easily customizable to fit specific monitoring needs.

## 📊 Basic Information

- **Workflow ID:** 3038
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 3255
- **Downloads:** 325
- **Created:** 2025/2/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3038)

## 👤 Author

- **Name:** L Hùng
- **Username:** @meow-cde

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **telegram** 
- **errorTrigger** 
- **stickyNote** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
