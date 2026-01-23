# Extract company data from websites with Gemini AI through chat conversation

> ## How it works
Please send a corporate website URL via chat.

The AI will investigate the company website on your behalf and return the extracted company information.  
Since this is set up as a conversational workflow, retrying or trying another URL is simple.

## How to use
* To get started, please set up the Credential in the `Gemini` node attached to the `AI Agent` node.
  * You can obtain an API key from [Google AI Studio](https://aistudio.google.com/api-keys).

Once configured, the workflow will run when you send a corporate website URL (e.g., https://example.com/) via chat.

## Customizing this workflow
You can change the settings in the `Config` node.

* You can modify `targetCompanyFields` to customize which company data fields are extracted.
* You can modify `language` to receive the results in a language other than English.

## 📊 Basic Information

- **Workflow ID:** 11682
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 91
- **Downloads:** 9
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11682)

## 👤 Author

- **Name:** Hirokazu Kawamoto
- **Username:** @h-kawamoto

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **code** (×3)
- **@n8n/n8n-nodes-langchain.chat** (×3)
- **set** 
- **httpRequestTool** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
