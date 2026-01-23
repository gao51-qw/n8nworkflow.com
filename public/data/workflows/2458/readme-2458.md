# Automated agentic news event monitoring with perplexity.ai

> ## Purpose of workflow:
The purpose of this workflow is to create a news reporter AI agent that automatically monitors specific news events and sends summary emails to the user. 

This tool aims to keep users up-to-date with the latest happenings on topics of interest without the need to constantly check multiple news sources manually. It's particularly useful for investors or researchers who must stay informed about specific events that may impact their work or investments.

## How it works:
It leverages the power of large language models, specifically Perplexity's (perplexity.ai) online models accessed through Open Router (openrouter.ai), to understand and summarize up-to-date news. 

The workflow is scheduled to run at predetermined intervals (e.g., daily at 7 AM), automatically scanning for news on the specified topic, generating a summary, and sending it via email to the user.


## Setup:
1. Sign up and generate an API key from Openrouter.ai This provides access to Perplexity's online language models
2. Update Perplexity node with Openrouter.ai API key
3. Specify the event/topic to monitor in the News Reporter node
3. Activate workflow to turn on scheduling feature 

## 📊 Basic Information

- **Workflow ID:** 2458
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 8196
- **Downloads:** 819
- **Created:** 2024/10/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2458)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **gmail** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
