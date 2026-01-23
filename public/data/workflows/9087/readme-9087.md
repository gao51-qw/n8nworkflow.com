# Automated Jira ticket responses with GPT-4 and Pinecone knowledge base

> ### **How It Works**

This template is an **n8n workflow that integrates with Jira to provide automated replies**.  

When a ticket is assigned to a user, the workflow analyzes the ticket content, retrieves relevant knowledge from a vector database, and generates a response.  
By continuously enriching the knowledge base, the system improves response quality in Jira.  

---

### **Prerequisites**

- A Jira account with API access  
- A Pinecone account and credentials (API key and environment settings)  
- An AI provider credential (e.g., OpenAI API key)  

---

### **Setup Instructions**

1. **Jira Credentials**  
   - Create Jira credentials in n8n (API token and email).  
   - In the Jira node, **select the registered Jira account ID**.  

2. **Vector Database Setup (Pinecone)**  
   - Register your **Pinecone credentials (API key and environment variables)** in n8n.  
   - Ensure that your knowledge base is indexed in Pinecone.  

3. **AI Assistant Node**  
   - Configure the OpenAI (or other LLM) node with your API key.  
   - Provide a system prompt that explains how to respond to Jira tickets using retrieved knowledge.  

4. **Workflow Execution**  
   - The workflow runs **only via the Scheduled Trigger node** at defined intervals.  
   - When Jira tickets are assigned, their summary, description, and latest comments are retrieved.  
   - These details are passed to the AI assistant, which queries Pinecone and generates a response.  
   - The generated response is then posted as a Jira comment.  

---

### **Step by Step**

1. **Scheduled Trigger**  
   The workflow is executed at regular intervals using the Scheduled Trigger node.  

2. **Jira Trigger (Issue Assigned)**  
   Retrieves the summary, description, and latest comments of assigned tickets.  

3. **AI Assistant**  
   Sends ticket details to the AI assistant, which searches and summarizes relevant knowledge from Pinecone.  

4. **Response Generation / Ticket Update**  
   The AI generates a response and automatically posts it as a Jira comment.  
   (Optionally, the workflow can update the ticket status or mention the assignee.)  

---

### **Notes**

- Keep your Pinecone knowledge base updated to improve accuracy.  
- You can customize the AI assistant’s behavior by adjusting the system prompt.  
- Configure the Scheduled Trigger frequency carefully to avoid API rate limits.  

---

### **Further Reference**
For a detailed walkthrough (in Japanese), see this article:  
👉 [Automating Jira responses with n8n, AI, and Pinecone (Qiita)](https://qiita.com/yusan25c/items/f6b15aef451556f4c9fe) 

You can find the template file on GitHub here:  
👉 [Template File on GitHub](https://github.com/yusan25c/n8n-jira-knowledge-sync-template/tree/main/01_Jira_Knowledge-Sync-Minimal-Summary-Comment-Assignee)

## 📊 Basic Information

- **Workflow ID:** 9087
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 231
- **Downloads:** 23
- **Created:** 2025/9/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9087)

## 👤 Author

- **Name:** yusan25c
- **Username:** @yusan25c

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **jira** (×4)
- **if** 
- **splitInBatches** 
- **code** (×2)
- **scheduleTrigger** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
