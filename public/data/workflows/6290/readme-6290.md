# Company website chatbot agent (RAG, calendar integrations)

> ## Company Website Chatbot Agent

#### Overview
This workflow implements a modular **Website AI Chatbot Assistant** capable of handling multiple types of customer interactions autonomously. Instead of relying on a single large agent to handle all logic and tools, this system routes user queries to specialized sub-agents—each dedicated to a specific function.

By using a manager-style orchestration layer, this approach prevents overloading a single AI model with excessive context, leading to cleaner routing, faster execution, and easier scaling as your automation needs grow.

---

#### How It Works

**1. Chat Trigger**  
- The flow is initiated when a chat message is received via the website widget.

**2. Manager Agent (Ultimate Website AI Assistant)**  
- The central LLM-based agent is responsible for parsing the message and deciding which specialized sub-agent to route it to.
- It uses an OpenAI GPT model for natural language understanding and a lightweight memory system to preserve recent context.

**3. Sub-Agent Routing**  
- `calendarAgent`: Handles availability checks and books meetings on connected calendars.  
- `RAGAgent`: Searches company documentation or FAQs to provide accurate responses from your internal knowledge base.  
- `ticketAgent`: Forwards requests to human support by generating and sending support tickets to a designated email.

---

#### Setup Instructions

1. **Embed the Chatbot**  
   - Use a custom HTML widget or script to embed the chatbot interface on your website.  
   - Connect the frontend to the webhook that triggers the `When chat message received` node.

2. **Configure Your OpenAI Key**  
   - Insert your API key in the `OpenAI Chat Model` node.  
   - Adjust the model parameters for temperature, max tokens, etc., based on how formal or creative you want the bot to be.

3. **Customize Sub-Agents**  
   - `calendarAgent`: Connect to your Google or Outlook calendar.  
   - `RAGAgent`: Link to a vector store or document database via API or native integration.  
   - `ticketAgent`: Set the destination email and format for ticket generation (e.g. via SendGrid or SMTP).

4. **Deploy in Production**  
   - Host on n8n Cloud or your self-hosted instance.  
   - Monitor usage through the Executions tab and refine prompts based on user behavior.

---

#### Benefits

- Modular system with dedicated logic per function  
- Reduces token bloat by offloading complexity to sub-agents  
- Easy to scale by adding more tools (e.g. CRM, analytics)  
- Fast and responsive user experience for customers on your site  
- Cleaner code structure and easier debugging


## 📊 Basic Information

- **Workflow ID:** 6290
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 9190
- **Downloads:** 919
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6290)

## 👤 Author

- **Name:** Abdul Mir
- **Username:** @abdulmir

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
