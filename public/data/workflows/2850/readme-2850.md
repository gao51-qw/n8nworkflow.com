# BambooHR AI-powered company policies and benefits chatbot

> ## How it works
This workflow enables companies to provide instant HR support by automating responses to employee queries about policies and benefits:  
1. Retrieves company policies, benefits, and HR documents from BambooHR.  
2. Uses AI to analyze and answer employee questions based on company records.  
3. Identifies the most relevant contact person for escalations.  
4. Seamlessly integrates with company systems to provide real-time HR assistance.
  

## Set up steps:  
*Estimated time: ~20 minutes*
1. Connect your BambooHR account to allow policy retrieval.  
2. Configure AI parameters and access control settings.  
3. (Optional) Set up the employee lookup tool for personalized responses.  
4. Test the chatbot to ensure accurate responses and seamless integration.  

## Benefits
This workflow is perfect for HR teams looking to enhance employee support while reducing manual inquiries.

### Outperform BambooHR's "Ask BambooHR" Chatbot

**#1. Superior specificity of replies to general inquiries**

![BambooHR AI Chatbot.png](fileId:930)
![BambooHR General benefits question.png](fileId:929)

**#2.  More appropriate escalations when responding to sensitive employee concerns**

![AI Agent harassment concerns escalation.png](fileId:927)
![BambooHR failure to escalate harassment concerns.png](fileId:928)


## 📊 Basic Information

- **Workflow ID:** 2850
- **Complexity:** advanced
- **Node Count:** 50
- **Views:** 3486
- **Downloads:** 348
- **Created:** 2025/2/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2850)

## 👤 Author

- **Name:** Ludwig
- **Username:** @ludwig

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×6)
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×11)
- **bambooHr** (×5)
- **filter** (×4)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **set** (×3)
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 50 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
