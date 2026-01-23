# WordPress content assistant: Article recommendations & Q&A with Mistral AI

> ## WordPress Content Assistant: Article Recommendations & Q&A with Mistral AI

### Ideal for WordPress site owners who want to enhance user engagement

 This template attempts to create an AI-powered content assistant for WordPress sites using Mistral AI, enabling article recommendations, content summarization, and contextual Q&A capabilities.

**Pre-requisites**: Mistral API key (or you could replace this with other LLM model)

## Disclaimer
This service is independent of Mistral AI. It is a community-built and maintained service that accesses Mistral's API. Please use at your own risk.

### How it works
- Uses a multi-agent architecture with an intent router powered by Mistral to classify user queries
- Recommends relevant articles based on user interests through keyword planning and content matching
- Answers specific questions about current page content through content retrieval or summarization
- Handles basic conversation flows and greeting interactions

### How to use
- Import the template JSON file into your n8n instance
- Configure your Mistral API key in this workflow
- You must publish this workflow and ensure your Chat URL is publicly accessible.
- Add the provided HTML (in this n8n template or my blog [here](https://www.tanyongsheng.com/blog/how-to-create-a-custom-chatbot-for-wordpress-using-n8n/)) to your WordPress site using WPCode plugin as **custom HTML snippet**, and change the &lt;N8N_WEBHOOK_URL&gt; to your Chat URL.

### Need Help?
Go to my [website](https://www.tanyongsheng.com/blog/how-to-create-a-custom-chatbot-for-wordpress-using-n8n/) or ask in the [Forum](https://community.n8n.io/)!

Happy chatbot Building!

----

Note: This template is available for FREE on my blog: [https://www.tanyongsheng.com/blog/how-to-create-a-custom-chatbot-for-wordpress-using-n8n/](https://www.tanyongsheng.com/blog/how-to-create-a-custom-chatbot-for-wordpress-using-n8n/). If you'd like to support my work in creating helpful resources like this, you can purchase the template. Thanks for your consideration!

## 📊 Basic Information

- **Workflow ID:** 3220
- **Complexity:** advanced
- **Node Count:** 63
- **Views:** 86
- **Downloads:** 8
- **Created:** 2025/3/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3220)

## 👤 Author

- **Name:** Tan Yong Sheng
- **Username:** @tan-yong-sheng

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×15)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×7)
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×6)
- **respondToWebhook** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** (×9)
- **executionData** 
- **executeWorkflowTrigger** 
- **switch** 
- **splitOut** (×3)
- **set** (×3)
- **aggregate** (×2)
- **executeWorkflow** 
- **@n8n/n8n-nodes-langchain.retrieverWorkflow** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.memoryManager** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 63 nodes with 42 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
