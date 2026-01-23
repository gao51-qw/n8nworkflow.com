# Automate customer support with multilingual chatbot using GPT-5 Nano for eCommerce

> 
This workflow creates a **multilingual eCommerce chatbot** that automatically detects the customer’s language and provides tailored responses. It is designed for online shops to improve customer support in English, Spanish, and French.

The chatbot is powered by **OpenAI’s GPT-5 Nano** and runs entirely inside **n8n**, with built-in memory to keep conversations contextual and helpful.

### 🔑 Key Features
- **Language Detection**: Identifies customer language automatically (English, Spanish, or French).  
- **Localized Responses**: Uses pre-defined system prompts for each language.  
- **Customer Support Ready**: Handles product questions, order tracking, returns, and general inquiries.  
- **Human Handoff**: If details are missing, it guides the user to contact human support.  
- **Conversation Memory**: Tracks sessions for smoother, contextual replies.  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
#### Get API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Go to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Configure Your Languages & Prompts
- Open the **Set Node** named `Ecommerce Language Prompts`.  
- Update or expand the list of languages and their **system prompts**.  
- Example already includes:  
  - English  
  - Spanish  
  - French  

That’s it! Your chatbot is ready to run 🎉  

---

## 📬 Contact Information
Need help customizing this workflow or building similar automations?  

📧 Email: [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 LinkedIn: [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 Website: [ynteractive.com](https://ynteractive.com)  

---


## 📊 Basic Information

- **Workflow ID:** 7590
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1439
- **Downloads:** 143
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7590)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** 
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
