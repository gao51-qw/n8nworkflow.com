# QuickBooks Online AI agent - Chat with Quickbooks data with GPT agent

> ## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_rec0EGjS8Q1AxvT1b.jpg)](https://youtu.be/mprQ4CY3yn0)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## What This Workflow Does

This workflow creates an AI-powered chatbot that answers natural language questions about your QuickBooks data in real-time. Users can interact with a public chat interface to query customer information, balances, invoices, and other accounting data without needing to navigate the QuickBooks interface directly. The AI agent uses OpenAI's language model to understand questions and automatically retrieves the relevant data from QuickBooks.

## Key Features

- **Natural Language Interface**: Ask questions like "How many customers do we have?" or "What's the total balance across all customers?" and get instant answers
- **Public Chat URL**: Share a link with team members or stakeholders so they can access QuickBooks insights without direct system access
- **Customizable Data Access**: Configure the QuickBooks tool to retrieve different resources (customers, invoices, expenses, bills, etc.) based on your needs

## Common Use Cases

- Enable non-accounting staff to get quick answers about customer data
- Provide executives with on-demand financial insights without training them on QuickBooks
- Create a self-service interface for sales teams to check customer balances
- Build internal support bots that can answer accounting questions

## Setup Requirements

1. **QuickBooks Developer Account**: Register at `developer.intuit.com` and create a new app with Accounting permissions
2. **Credentials**: Configure QuickBooks OAuth2 API credentials (Client ID, Client Secret, and Redirect URI from the Intuit Developer dashboard) and OpenAI API credentials
3. **Environment**: Start with Sandbox mode for testing, then switch to Production after getting your app approved by Intuit
4. **Tool Configuration**: The QuickBooks tool is pre-configured to retrieve all customer data, but you can modify the operation and filters to access different QuickBooks resources based on your requirements

## 📊 Basic Information

- **Workflow ID:** 7841
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 206
- **Downloads:** 20
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7841)

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
- **quickbooksTool** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
