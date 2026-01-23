# Classify lemlist replies using OpenAI and automate reply handling

> ## Who this is for
This workflow is for sales people who want to quickly and efficiently follow up with their leads

## What this workflow does
This workflow starts every time a new reply is received in lemlist. It then classifies the response using openAI and creates the correct follow up task. The follow-up tasks currently include:
- Slack alerts when a lead for each new replies
- Tag interested leads in lemlist
- Unsubscription of leads when they request it

The Slack alerts include: 
- Lead email address
- Sender email address
- Reply type (positive, not interested...etc)
- A preview of the reply

## Setup
To set this template up, simply follow the stickies steps in it

## How to customize this workflow to your needs
- Adjust the follow up tasks to your needs
- Change the Slack notification to your needs
- ...

## 📊 Basic Information

- **Workflow ID:** 2287
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2351
- **Downloads:** 235
- **Created:** 2024/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2287)

## 👤 Author

- **Name:** Lucas Perret
- **Username:** @lucasperret

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **markdown** 
- **lemlistTrigger** 
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **slack** 
- **lemlist** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **merge** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
