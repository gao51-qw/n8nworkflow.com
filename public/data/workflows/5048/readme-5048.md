# Generate an AI summary of your Notion comments

> ## Use case

This automation is for teams working in Notion. When you have a lot of back and forth in the comment section, it’s easy to lose track of what is going on in the conversation. This automation relies on AI to generate a summary of the comment section. 

![](https://lh3.googleusercontent.com/d/1Zi9LqhFG1iU3q4YAM1v2DN-V7xl-eJjo)

## How it works

Every hour (the trigger can be adapted to your need and usecase), the automation checks if new comments have been added to the pages of your Notion database. If there are new comments, the comments are sent to an AI model to write a summary. The summary is then added to a predefined page property. The automation also updates a “Last execution” property. This prevents to re-generate the AI summary when no new comments have been received. 

## Setup

- Define your Notion variables: Notion database, property that will hold the AI summary, property that will hold the last execution date of the automation.
- Set up your Notion credentials.
- Set up your AI model credentials (API key).

## How to adjust it to your needs

- Use the LLM model of your choice. In this template, I used Gemini but you can easily replace it by ChatGPT, Claude, etc.
- Adapt the prompt to your use case to get better summaries: specify the maximum number of characters, give an example, etc.
- Adapt the trigger to your needs. You could use Notion webhooks as trigger in order to run the automation only when a new comment is added (this setup is advised if you’re on n8n cloud version).

## 📊 Basic Information

- **Workflow ID:** 5048
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 920
- **Downloads:** 92
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5048)

## 👤 Author

- **Name:** Laura Piraux
- **Username:** @lauraslap

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **scheduleTrigger** 
- **set** 
- **notion** (×2)
- **httpRequest** 
- **filter** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
