# Get blockchain insights from chat using GPT-4 and Nansen MCP

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How it works

This workflow listens for an incoming chat message and routes it to an **AI Agent**. The agent is powered by your preferred **Chat Model** (such as OpenAI or Anthropic) and extended with the **Nansen MCP** tool, which enables it to retrieve onchain wallet data, token movements, and address-level insights in real time.

The Nansen MCP tool uses **HTTP Streamable** transport and requires API Key authentication via **Header Auth**.

Read the Documentation: [https://docs.nansen.ai/nansen-mcp/overview](https://docs.nansen.ai/nansen-mcp/overview)

## Set up steps

1. **Get your Nansen MCP API key**  
   - Visit: [https://app.nansen.ai/account?tab=api](https://app.nansen.ai/account?tab=api)  
   - Generate and copy your personal API key.

2. **Create a credential for authentication**  
   - From the homepage, click the **dropdown next to "Create Workflow" → "Create Credential"**.  
   - Select `Header Auth` as the method.  
   - Set the **Header Name** to: `NANSEN-API-KEY`  
   - Paste your API key into the **Value** field.  
   - Save the credential (e.g., `Nansen MCP Credentials`).

3. **Configure the Nansen MCP tool**  
   - **Endpoint**: `https://mcp.nansen.ai/ra/mcp/`  
   - **Server Transport**: `HTTP Streamable`  
   - **Authentication**: `Header Auth`  
   - **Credential**: Select `Nansen MCP Credentials`  
   - **Tools to Include**: Leave as `All` (or restrict as needed)

4. **Configure the AI Agent**  
   - Connect your preferred **Chat Model** (e.g., OpenAI, Anthropic) to the `Chat Model` input.  
   - Connect the **Nansen MCP** tool to the `Tool` input.  
   - *(Optional)* Add a `Memory` block to preserve conversational context.

5. **Set up the chat trigger**  
   - Use the **"When chat message received"** node to start the flow when a message is received.

6. **Test your setup**  
   Try sending prompts like:
   - `What tokens are being swapped by 0xabc...123?`
   - `Get recent wallet activity for this address.`
   - `Show top holders of token XYZ.`


## 📊 Basic Information

- **Workflow ID:** 6303
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 652
- **Downloads:** 65
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6303)

## 👤 Author

- **Name:** Nansen
- **Username:** @nansen

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
