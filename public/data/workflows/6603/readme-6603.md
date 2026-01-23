# AI chatbot that queries Baserow database with OpenAI GPT-4 mini

> This workflow creates an intelligent chatbot that uses your Baserow database as a knowledge base. The AI agent can automatically query your Baserow tables to provide accurate, contextual responses based on your stored data.

![AI Chatbot Baserow Database Integration.jpg](fileId:1886)

## Who's it for

This template is perfect for:
* Support teams using Baserow for knowledge management
* Small businesses managing customer data in Baserow
* Teams looking for an open-source alternative to Airtable-based chatbots
* Organizations that want to make their Baserow data conversationally accessible
* Self-hosted solution enthusiasts who prefer controlling their data

## How it works

The workflow combines OpenAI's language model with Baserow's open-source database capabilities to create a smart chatbot. When users ask questions, the AI agent automatically determines which Baserow records are relevant and uses that data to generate helpful responses. The system maintains conversation history for natural, contextual interactions.

## How to set up

1. **Add your credentials:**
   - Configure your **Baserow** API credentials in the Baserow Database node
   - Set up your **OpenAI API** credentials in the OpenAI Chat Model node

2. **Configure your Baserow connection:**
   - Click the **Baserow Database** node
   - Select your Baserow table containing your knowledge base data
   - The AI will automatically determine relevant records - no need to specify individual record IDs

3. **Customize the AI model:**
   - Open the **OpenAI Chat Model** node
   - Choose your preferred model (GPT-4, GPT-3.5-turbo, etc.)
   - Adjust token limits if needed

4. **Test the chatbot:**
   - Click the **Chat** button to start a conversation
   - Ask questions related to your Baserow data

5. **Optional - Make it public:**
   - Enable public access in the Chat Trigger node
   - Embed the provided code into your website

## Requirements

- n8n instance (cloud or self-hosted)
- Baserow instance (self-hosted or cloud) with data you want to query
- OpenAI API key with available credits
- Baserow API token with appropriate permissions

## How to customize the workflow

**Change the AI Provider:**
You can replace the OpenAI Chat Model with other providers like Anthropic Claude, Google Gemini, or local models by swapping the language model node.

**Adjust Context Window:**
Modify the "Remember Chat History" node to increase or decrease how many previous messages the AI remembers (default is 10 interactions).

**Update System Instructions:**
Edit the Smart AI Agent's system message to change how the assistant behaves or add specific instructions for your use case.

**Connect Multiple Tables:**
Add additional Baserow Database nodes to give the AI access to multiple tables within your Baserow workspace.

**Add More Tools:**
Extend the AI agent with additional tools like web search, email sending, or integration with other services.

## Workflow Structure

```
Chat Trigger → Smart AI Agent ← OpenAI Chat Model
                     ↓
              Baserow Database
                     ↑
           Remember Chat History
```

The Smart AI Agent orchestrates the conversation, deciding when to query Baserow and how to use the retrieved data in responses. The memory buffer ensures natural conversation flow by maintaining context across interactions.

## 📊 Basic Information

- **Workflow ID:** 6603
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6603)

## 👤 Author

- **Name:** Gegenfeld
- **Username:** @gegenfeld

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **baserowTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
