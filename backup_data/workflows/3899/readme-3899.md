# Automatically create Linear issues from Gmail support request messages

> ### This n8n template watches a Gmail inbox for support messages and creates an equivalent issue item in Linear.

### How it works
* A scheduled trigger fetches recent Gmail messages from the inbox which collects support requests.
* These support requests are filtered to ensure they are only processed once and their HTML body is converted to markdown for easier parsing.
* Each support request is then triaged via an AI Agent which adds appropriate labels, assesses priority and summarises a title and description of the original request.
* Finally, the AI generated values are used to create an issue in Linear to be actioned.

### How to use
* Ensure the messages fetched are solely support requests otherwise you'll need to classify messages before processing them.
* Specify the labels and priorities to use in the system prompt of the AI agent.

### Requirements
* Gmail for incoming support messages
* OpenAI for LLM
* Linear for issue management

### Customising this workflow
* Consider automating more steps after the issue is created such as attempting issue resolution or capacity planning.

## 📊 Basic Information

- **Workflow ID:** 3899
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1064
- **Downloads:** 106
- **Created:** 2025/5/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3899)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×5)
- **markdown** 
- **removeDuplicates** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **gmail** 
- **linear** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
