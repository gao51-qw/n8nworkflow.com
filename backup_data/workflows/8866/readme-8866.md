# Voice-driven AI assistant using VAPI and GPT-4.1-mini with memory

> ### Send VAPI voice requests into n8n with memory and OpenAI for conversational automation

This template shows how to capture **voice interactions from VAPI (Voice AI Platform)**, send them into n8n via a webhook, process them with OpenAI, and maintain context with memory. The result is a conversational AI agent that responds back to VAPI with short, business-focused answers.

---

## ✅ What this template does
- Listens for **POST requests** from VAPI containing the session ID and user query  
- Extracts session ID and query for consistent conversation context  
- Uses **OpenAI (GPT-4.1-mini)** to generate conversational replies  
- Adds **Memory Buffer Window** so each VAPI session maintains history  
- Returns results to VAPI in the correct JSON response format  

---

## 👤 Who’s it for
- Developers and consultants building **voice-driven assistants**  
- Businesses wanting to connect **VAPI calls into automation workflows**  
- Anyone who needs a **scalable voice → AI → automation pipeline**  

---

## ⚙️ How it works
1. **Webhook node** catches incoming VAPI requests  
2. **Set node** extracts `session_id` and `user_query` from the request body  
3. **OpenAI Agent** generates short, conversational replies with your business context  
4. **Memory node** keeps conversation history across turns  
5. **Respond to Webhook** sends results back to VAPI in the required JSON schema  

---

## 🔧 Setup instructions

### Step 1: Create Function Tool in VAPI
1. In your VAPI dashboard, create a new **Function Tool**  
   - **Name**: `send_to_n8n`  
   - **Description**: Send user query and session data to n8n workflow  
   - **Parameters**:  
     - `session_id` (string, required) – Unique session identifier  
     - `user_query` (string, required) – The user’s question  
   - **Server URL**: `https://your-n8n-instance.com/webhook/vapi-endpoint`  

### Step 2: Configure Webhook in n8n
1. Add a **Webhook node**  
2. Set HTTP method to `POST`  
3. Path: `/webhook/vapi-endpoint`  
4. Save, activate, and copy the webhook URL  
5. Use this URL in your VAPI Function Tool configuration  

### Step 3: Create VAPI Assistant
1. In VAPI, create a new **Assistant**  
2. Add the `send_to_n8n` Function Tool  
3. Configure the assistant to call this tool on user requests  
4. Test by making a voice query — you should see n8n respond  

---

## 📦 Requirements
- An **OpenAI API key** stored in n8n credentials  
- A **VAPI account** with access to Function Tools  
- A self-hosted or cloud n8n instance with webhook access  

---

## 🎛 Customization
- Update the **system prompt** in the OpenAI Agent node to reflect your brand’s voice  
- Swap GPT-4.1-mini for another OpenAI model if you need longer or cheaper responses  
- Extend the workflow by connecting to **CRMs, Slack, or databases**  

---

## 📬 Contact  
Need help customizing this (e.g., filtering by campaign, connecting to CRMs, or formatting reports)?  

- 📧 **rbreen@ynteractive.com**  
- 🔗 **https://www.linkedin.com/in/robert-breen-29429625/**  
- 🌐 **https://ynteractive.com**  


## 📊 Basic Information

- **Workflow ID:** 8866
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 675
- **Downloads:** 67
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8866)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **webhook** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
