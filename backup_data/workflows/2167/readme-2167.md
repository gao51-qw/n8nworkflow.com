# ChatGPT Automatic Code Review in Gitlab MR

> ## Who this template is for
This template is for every engineer who wants to automate their code reviews or just get a 2nd opinion on their PR.

## How it works
This workflow will automatically review your changes in a Gitlab PR using the power of AI. It will trigger whenever you comment with `+0` to a Gitlab PR, get the code changes, analyze them with GPT, and reply to the PR discussion.

## Set up Steps
- Set up webhook of `note_events` in Gitlab repository (see [here](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#:~:text=Configure%20a%20webhook%20in%20GitLab,-To%20configure%20a&text=In%20your%20project%20or%20group,one%20or%20more%20special%20characters.) on how to do it)
- Configure ChatGPT credentials
- Note "+0" in MergeRequest to trigger automatic review by ChatGPT

## 📊 Basic Information

- **Workflow ID:** 2167
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 32011
- **Downloads:** 3201
- **Created:** 2024/3/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2167)

## 👤 Author

- **Name:** assert
- **Username:** @assert

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **if** (×2)
- **httpRequest** (×2)
- **splitOut** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
