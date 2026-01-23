# 🛠️ Auto workflow positioning

> ## Check Online Version !
[https://n8n-tools.streamlit.app/](https://n8n-tools.streamlit.app/
)
## **Who is it for?**  
This workflow is perfect for n8n users who want to maintain clean and organized workflows without manually repositioning nodes.

Whether you're building complex workflows or sharing them with a team, maintaining visual clarity is essential for efficiency and collaboration.

This template automates the positioning process, saving time and ensuring consistent layout standards.

---

## **How does it work?**  
The template is divided into two parts:  

1. **Positioning Engine:**  
   - A webhook node kicks off the process by receiving a workflow ID.  
   - Using the provided workflow ID, an n8n API node fetches the workflow details.  
   - The fetched workflow is sent to a processing webhook that calculates optimized positions for the nodes.  
   - Finally, an n8n API node updates the workflow with the newly positioned nodes, ensuring a clean and professional layout.  

2. **Reusable Positioning Block:**  
   - This is an HTTP Request node that can be seamlessly integrated into any workflow you create. When triggered, it sends the current workflow for automatic positioning via the first part of this template.  

---

## **How to set it up?**  

1. **Enable n8n API Access:**  
   - Ensure that your n8n instance has API access enabled with the appropriate credentials.  

2. **Input Your n8n API URL and Credentials:**  
   - Open the template, locate the n8n API nodes, and update them with your instance API key.
   - Update the URL of the 'Magic Positioning' Http Request node to point to your n8n instance webhook URL.

3. **Embed the Reusable Block:**  
   - Add the provided HTTP Request node to any of your workflows to instantly connect to the auto-positioning engine.

## 📊 Basic Information

- **Workflow ID:** 2667
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 2669
- **Downloads:** 266
- **Created:** 2024/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2667)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **switch** 
- **if** 
- **noOp** (×10)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×2)
- **n8n** (×2)
- **httpRequest** (×2)
- **webhook** 
- **respondToWebhook** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
