# 🗼 AI powered supply chain control tower with BigQuery and GPT-4o

> *Tags: Supply Chain, Logistics, Control Tower*

### Context

Hey! I’m [Samir](https://samirsaci.com), a Supply Chain Engineer and Data Scientist from Paris, and the founder of [LogiGreen Consulting](https://logi-green.com).

We design tools to help companies improve their **logistics processes** using data analytics, AI, and automation—to **reduce costs and minimize environmental impact**.

&gt; Let’s use N8N to build smarter and more sustainable supply chains!

📬 For business inquiries, you can add me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow template is designed for **logistics operations** that need a monitoring solution for their **distribution chains**.

![Supply Chain Control Tower](https://miro.medium.com/v2/resize:fit:1050/1*0qKAg2B2ZpC-HH0TXmRewA.png) 

Connected to your Transportation Management Systems, this AI agent can answer any question about the shipments handled by your distribution teams.

### How does it work?

The workflow is connected to a **Google BigQuery** table that stores **outbound order data** (customer deliveries).

![BigQuery Table](https://www.samirsaci.com/content/images/size/w1000/2025/03/image-14.png)

Here’s what the AI agent does:
1. 🤔 Receives a user question via chat.  
2. 🧠 Understands the request and **generates the correct SQL query**.  
3. ✅ Executes the SQL query using a **BigQuery** node.  
4. 💬 Responds to the user in **plain English**.

[![Example of Interactions](https://www.samirsaci.com/content/images/size/w1000/2025/03/Chat-Screen.png)](https://www.loom.com/share/50271f9d50214d7184830985497a75ec?sid=d0c410dc-29f1-488f-b89a-4011de0ded07) 

Thanks to the chat memory, users can ask follow-up questions to dive deeper into the data.

### What do I need to get started?

This workflow requires **no advanced programming skills**.

You’ll need:
- A **Google BigQuery account** with an SQL table storing transactional records.
- An **OpenAI API key** (GPT-4o) for the chat model.

### Next Steps

Follow the sticky notes in the workflow to configure each node and start using **AI to support your supply chain operations**.

[![Tutorial Screenshot](https://www.samirsaci.com/content/images/2025/04/image.png)](https://www.loom.com/share/50271f9d50214d7184830985497a75ec?sid=d0c410dc-29f1-488f-b89a-4011de0ded07)  

[🎥 Watch My Tutorial](https://www.loom.com/share/50271f9d50214d7184830985497a75ec?sid=d0c410dc-29f1-488f-b89a-4011de0ded07)

🚀 Curious how N8N can transform your logistics operations?  

### Notes

- The chat trigger can easily be replaced with **Teams**, **Telegram**, or **Slack** for a better user experience.
- You can also connect this to a customer chat window using a **webhook**.

*This workflow was built using N8N version 1.82.1*  
*Submitted: March 24, 2025*


## 📊 Basic Information

- **Workflow ID:** 3305
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 7595
- **Downloads:** 759
- **Created:** 2025/3/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3305)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **googleBigQuery** 
- **executeWorkflowTrigger** 
- **code** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
