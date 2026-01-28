# Build custom AI agent with LangChain & Gemini (self-hosted)

> ## Overview  
This workflow leverages the LangChain code node to implement a fully customizable conversational agent. Ideal for users who need granular control over their agent's prompts while reducing unnecessary token consumption from reserved tool-calling functionality (compared to n8n's built-in Conversation Agent).  
![截屏20250327 17.53.50.png](fileId:1063)

## Setup Instructions  
1. **Configure Gemini Credentials**: Set up your Google Gemini API key ([Get API key here](https://ai.google.dev/) if needed). Alternatively, you may use other AI provider nodes.  
2. **Interaction Methods**:  
   - Test directly in the workflow editor using the "Chat" button  
   - Activate the workflow and access the chat interface via the URL provided by the `When Chat Message Received` node  

## Customization Options  
1. **Interface Settings**: Configure chat UI elements (e.g., title) in the `When Chat Message Received` node  
2. **Prompt Engineering**:  
   - Define agent personality and conversation structure in the `Construct & Execute LLM Prompt` node's template variable  
   - ⚠️ Template must preserve `{chat_history}` and `{input}` placeholders for proper LangChain operation  
3. **Model Selection**: Swap language models through the `language model` input field in `Construct & Execute LLM Prompt`  
4. **Memory Control**: Adjust conversation history length in the `Store Conversation History` node  

## Requirements:  
⚠️ This workflow uses the **LangChain Code node**, which only works on **self-hosted n8n**.  
*(Refer to [LangChain Code node docs](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.code/))*


## 📊 Basic Information

- **Workflow ID:** 3326
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 5680
- **Downloads:** 568
- **Created:** 2025/3/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3326)

## 👤 Author

- **Name:** shepard
- **Username:** @shepard

## 🏷️ Categories

- Miscellaneous
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
