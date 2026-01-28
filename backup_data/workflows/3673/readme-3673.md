# AI-powered research assistant with Perplexity Sonar API

> Name:
AI-Powered Research Agent using Perplexity Sonar

Description:
This workflow acts as an AI-powered research assistant using the Perplexity Sonar model. When triggered by another workflow, it sends a user-defined prompt to the Perplexity API to retrieve up-to-date search results. The response is then parsed into a clean format for downstream processing.

How it Works:
Trigger: Activated from another workflow via Execute Workflow Trigger.

Prompt Setup: Sets a system role message and user query dynamically.

API Call: Sends a POST request to Perplexity's /chat/completions endpoint with your credentials.

Response Handling: Extracts the message content from the API response.

Output: Returns the result, ready for display or further processing.

Requirements:
A Perplexity AI API Key

Set up authentication via Header Auth with Bearer token

Ensure your account allows outbound HTTP requests in n8n

Customization Tips:
Modify the system prompt to suit your research domain

Chain this workflow with other automation like blog creation, summaries, etc.

Replace the output handling logic to fit into Google Sheets, Notion, or Telegram




## 📊 Basic Information

- **Workflow ID:** 3673
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1674
- **Downloads:** 167
- **Created:** 2025/4/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3673)

## 👤 Author

- **Name:** HoangSP
- **Username:** @hoangsp

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **set** (×2)
- **stickyNote** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
