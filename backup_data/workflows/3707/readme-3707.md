# Automatic WhatsApp response with Groq LLM and conversation memory

> 
### **Who is this for?**
This workflow is intended for individual users or teams who want to automate their small business on WhatsApp practically by automatically replying about your business products or services using the groq model. Based on small businesses, there is a task to answer many customers or clients on WhatsApp, in reality answering one by one is very time-consuming and tiring, moreover we have to compose sentences first or click on templates and send them. This is also a form of dedication to the community at n8n and n8n company, as well as dedication to small businesses so that reality is no longer tiring and able to answer the problems of existing reality.

### **How it works?**
Easy explanation:  
1) Whatsapp Trigger is used to receive whatsapp messages from other numbers, this is also a place to input data and send it to the next node or to the AI ​​Agent 
2) If node is used to direct the workflow flow under certain conditions. This will be like checking whether a condition is met or not, directing the action to the next node, until it meets the criteria.   
3) Then it is directed to the AI ​​Agent to be able to use the groq model and storage using simple memory, why? Because it minimizes the costs used later but still works as expected.   
4) The Groq chat model will think and carry out its tasks and store data in simple memory, and carry out its tasks to answer/send messages to whatsapp customers/clients on the AI ​​Agent node bond.   
5) And enjoy this workflow working for you.

### **Set up instructions**
Complete what is in the nodes as stated in the notes column. 
1) You need a "Credential Account" On the first node, namely as a WhatsApp trigger, you can register it by following the guide from n8n
2) You need an AI Agent to carry out the objectives of these tasks. You can change it to define below in “Source for Prompt (User Message)&gt;Fix and “Prompt (User Message)” to text body&gt;Expression.
3) You need a Groq model to be able to think and carry out tasks, you have to set this up by creating a “Credential Account” and just follow the steps on n8n and select the model.
4) After that, for practical and simple storage, add memory to the Nodes AI agent, namely “Simple Memory”, select Define below in “Session ID” and in “Key” is used to store incoming chat receipts.
5) After that, add nodes to produce action output on WhatsApp, namely Message Actions&gt;Send message. After adding this set up nodes according to the existing notes, and I have set it up.
6) Save and run, test the workflow and activate the workflow. And this Workflow is ready to use.

### **Requirements**
 As a reminder:
1) Must set up in nodes, such as what your business description is, also according to your small business conditional, so that the AI ​​Agent is in accordance with your business knowledge base
2) Must have (if not, make sure you have registered) on each "Credential Account" by following the guide on how to do it n8n the guidelines are very complete
3) Do not forget to save, and make sure the workflow is active.

### **How to customize this workflow to your needs **
You can directly set up your business knowledge base on the nodes, so that the accuracy is also high when carrying out tasks and answering them. 


## 📊 Basic Information

- **Workflow ID:** 3707
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1864
- **Downloads:** 186
- **Created:** 2025/4/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3707)

## 👤 Author

- **Name:** Ghufran Ridhawi
- **Username:** @ghufran-ridhawi

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×7)
- **whatsApp** 
- **whatsAppTrigger** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
