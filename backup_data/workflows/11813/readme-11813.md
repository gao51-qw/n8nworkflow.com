# Daily RSS feed summarizer with Gemini AI to Slack with X sharing option

> ## How it works

This workflow fetches RSS feeds daily and sends a notification to Slack if new topics are found.

Since standard RSS snippets are often insufficient, the AI visits the source links to summarize the full articles and sends the summaries to Slack.
You can then share interesting topics directly to X from Slack using the button.

## How to use

* Open the **Gemini Chat Model** node (attached to the AI Agent) and set up the Credential.
  * You can obtain an API key from [Google AI Studio](https://aistudio.google.com/api-keys).
* Open the `Slack` node and set up the Credential to allow sending messages.
  * You can create a new Slack App [here](https://api.slack.com/apps).
* Finally, open the `Config` node and update the `rssUrls` parameter with the RSS feed URLs you want to follow.

## Customizing this workflow

* You can adjust the number of topics fetched per RSS feed by modifying the `takeCount` parameter in the `Config` node.

## 📊 Basic Information

- **Workflow ID:** 11813
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 123
- **Downloads:** 12
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11813)

## 👤 Author

- **Name:** Hirokazu Kawamoto
- **Username:** @h-kawamoto

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **slack** 
- **stickyNote** (×3)
- **scheduleTrigger** 
- **rssFeedRead** 
- **splitInBatches** 
- **set** 
- **code** (×4)
- **executeWorkflowTrigger** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **executeWorkflow** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
