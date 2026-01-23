# Create knowledge base from Jira tickets with OpenAI embeddings and Pinecone

> ### **How It Works**

This template is a workflow that **registers Jira tickets to Pinecone**.  

By combining it with the [Automated Jira Ticket Responses with GPT-4 and Pinecone Knowledge Base](https://creators.n8n.io/workflows/9087) template, you can continuously improve the quality of automated responses in Jira.  

---

### **Prerequisites**

- A Jira account and credentials (API key and email address)  
- A Pinecone account and credentials (API key and environment settings)  
- OpenAI credentials (API key)  

---

### **Setup Instructions**

1. **Jira Credentials**  
   - Register your Jira credentials (API key and email address) in n8n.  

2. **Vector Database Setup (Pinecone)**  
   - Register your Pinecone credentials (API key and environment variables) in n8n.  

3. **AI Node**  
   - Configure the OpenAI node with your credentials (API key).  

---

### **Step by Step**

1. **Scheduled Trigger**  
   The workflow runs at regular intervals according to the schedule set in the Scheduled Trigger node.  

2. **Jira Trigger (Completed Tickets)**  
   Retrieves the summary, description, and comments of completed Jira tickets.  

3. **Register to Pinecone**  
   Converts the retrieved ticket information into vectors and registers them in Pinecone.  

---

### **Notes**

- Configure the Scheduled Trigger interval carefully to avoid exceeding API rate limits.  

---

### **Further Reference**

For a detailed walkthrough (in Japanese), see this article:  
👉 [Automating knowledge registration to Pinecone with n8n (Qiita)](https://qiita.com/yusan25c/items/f8d0cca479310af171a6)  

You can find the template file on GitHub here:  
👉 [Template File on GitHub](https://github.com/yusan25c/n8n-jira-knowledge-sync-template/tree/main/02_Jira_Vector-Register-Minimal)

## 📊 Basic Information

- **Workflow ID:** 9620
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 132
- **Downloads:** 13
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9620)

## 👤 Author

- **Name:** yusan25c
- **Username:** @yusan25c

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **jira** (×2)
- **splitInBatches** 
- **code** (×2)
- **scheduleTrigger** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
