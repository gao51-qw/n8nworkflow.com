# QuickBooks Online MCP Server - add QuickBooks tool to any AI (like Claude)

> ## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_rec0EGjS8Q1AxvT1b.jpg)](https://youtu.be/mprQ4CY3yn0)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## What This Workflow Does

This workflow creates an AI-powered chatbot that can answer natural language questions about your QuickBooks Online data. Using OpenAI's GPT models and the Model Context Protocol (MCP), the agent can retrieve customer information, analyze balances, and provide insights through a conversational interface. Users can simply ask questions like "How many customers do we have?" or "What's our total customer balance?" and get instant answers from live QuickBooks data.

## Key Features

- **Natural language queries**: Ask questions about your QuickBooks data in plain English
- **MCP architecture**: Uses Model Context Protocol to manage tools efficiently, making it easy to expand with additional QuickBooks operations
- **Public chat interface**: Share the chatbot URL with team members who need QuickBooks insights without direct access
- **Real-time data**: Queries live QuickBooks data for up-to-date answers

## Common Use Cases

- Customer service teams checking account balances without logging into QuickBooks
- Sales teams quickly looking up customer information
- Finance teams getting quick answers about customer data
- Managers monitoring key metrics through conversational queries

## Setup Requirements

**QuickBooks Developer Account**: Register at `developer.intuit.com` and create an app with Accounting scope permissions. You'll receive a Client ID and Client Secret.

**Configure OAuth**: In your Intuit Developer dashboard, add the redirect URL provided by n8n when creating QuickBooks credentials. Set the environment to Sandbox for testing, or complete Intuit's app approval process for Production use.

**OpenAI API**: Add your OpenAI API credentials to power the chat model. The workflow uses GPT-4.1-mini by default, but you can select other models based on your performance and cost requirements.

**Chat Access**: The chat trigger is set to public by default. Configure access settings based on your security requirements before sharing the chat URL.

## 📊 Basic Information

- **Workflow ID:** 7842
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 216
- **Downloads:** 21
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7842)

## 👤 Author

- **Name:** Milan Vasarhelyi - SmoothWork
- **Username:** @vasarmilan

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **quickbooksTool** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
