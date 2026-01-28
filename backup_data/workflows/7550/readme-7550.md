# Generate AI Twitter posts with web research using GPT, Tavily and image generation

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# **🤖 AI-Powered Twitter Content Generator**

Transform topic ideas into ready to post Twitter drafts (text + image) using fresh web data and AI agents

## **🎯 What does this workflow do?**

This end to end automation creates complete Twitter posts by:

Taking your topic input (e.g., "Agentic AI") via chat interface

Generating fresh, research-backed content using AI agents:

First agent uses GPT-4.1-MINI + Tavily to bypass LLM knowledge limits with real-time web data

Second agent creates optimized prompt for image generation

Producing custom visuals through OpenAI's gpt-image-1

Delivering polished drafts (text + image) via Gmail for review

## **⚙️ How it works**

User input: You provide a topic through chat node

Content research:

Agent 1 (GPT-4.1-mini + Tavily) researches current web data

Generates factually fresh tweet content

Visual creation:

Agent 2 optimizes prompt for image generation

HTTP request node calls OpenAI's gpt-image-1 model to generate the image

Convert to file node converst the base64 string to a file so we can send it as an attachment

Delivery:

Gmail node sends compiled draft with text body + image attachment

## **🔑 Required setup**

Have a verified organization: [OpenAI Org Settings](https://platform.openai.com/account/org-settings)

OpenAI API Key: [Create a Key Here](https://platform.openai.com/settings/organization/api-keys)

Tavily API Key: [Get it Here](https://app.tavily.com/home)

Gmail credentials: [Google Cloud Console](https://console.cloud.google.com)


## 📊 Basic Information

- **Workflow ID:** 7550
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 873
- **Downloads:** 87
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7550)

## 👤 Author

- **Name:** Ilyass Kanissi
- **Username:** @ilyass

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **gmail** 
- **httpRequest** 
- **convertToFile** 
- **@tavily/n8n-nodes-tavily.tavilyTool** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
