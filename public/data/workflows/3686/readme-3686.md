# Ai-powered Gmail email organization with auto-archiving and priority labels

> ### **Who is this for?**  
This workflow is perfect for busy professionals, students, or anyone who struggles to keep their Gmail inbox organized and clutter-free.

### **What problem is this workflow solving?**  
It helps you avoid email overload by automating the process of organizing your Gmail inbox. Unnecessary emails are archived, while important emails are categorized into "MustRead" or "NotNeed" for better prioritization.

### **What this workflow does**  
- Connects to your Gmail inbox.  
- Automatically archives emails that are unnecessary or irrelevant.  
- Sorts remaining emails into two categories:  
  - **MustRead**: Emails that require immediate attention.  
  - **NotNeed**: Less critical emails for review later.  

### **Setup**  
1. Connect your Gmail account to the workflow.  
2. Define the criteria for "MustRead" and "NotNeed" emails by updating the filter rules in the nodes.  
3. Activate the workflow to start organizing your inbox.

### **How to customize this workflow to your needs**  
- Adjust the filters for archiving emails based on your specific preferences.  
- Modify the sorting rules for "MustRead" and "NotNeed" categories to match your workflow.  
- Add additional actions, such as sending notifications for "MustRead" emails.

## 📊 Basic Information

- **Workflow ID:** 3686
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 9965
- **Downloads:** 996
- **Created:** 2025/4/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3686)

## 👤 Author

- **Name:** Junichiro Tobe
- **Username:** @junichiro

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **telegramTrigger** 
- **stickyNote** (×5)
- **gmailTool** (×2)
- **aggregate** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **gmail** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
