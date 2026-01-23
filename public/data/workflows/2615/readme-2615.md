# Get Airtable data via AI and Obsidian notes

> I am submitting this workflow for the Obsidian community to showcase the potential of integrating Obsidian with n8n. While straightforward, it serves as a compelling demonstration of the potential unlocked by integrating Obsidian with n8n.

**How it works**

This workflow  lets you retrieve specific Airtable data you need in seconds, directly within your Obsidian note, using n8n. By highlighting a question in Obsidian and sending it to a webhook via the [Post Webhook Plugin](https://github.com/Masterb1234/obsidian-post-webhook/), you can fetch specific data from your Airtable base and instantly insert the response back into your note. The workflow leverages OpenAI’s GPT model to interpret your query, extract relevant data from Airtable, and format the result for seamless integration into your note.

**Set up steps**

- Install the [Post Webhook Plugin](https://github.com/Masterb1234/obsidian-post-webhook/): Add this plugin to your Obsidian vault from the plugin store or GitHub.
- Set up the n8n Webhook: Copy the webhook URL generated in this workflow and insert it into the Post Webhook Plugin's settings in Obsidian.
- Configure Airtable Access: Link your Airtable account and specify the desired base and table to pull data from.
- Test the Workflow: Highlight a question in your Obsidian note, use the “Send Selection to Webhook” command, and verify that data is returned as expected.

## 📊 Basic Information

- **Workflow ID:** 2615
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 2609
- **Downloads:** 260
- **Created:** 2024/12/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2615)

## 👤 Author

- **Name:** Obsidi8n
- **Username:** @derruttie

## 🏷️ Categories

- Personal Productivity
- AI RAG

## 🔗 Nodes Used

- **airtableTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×2)
- **respondToWebhook** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
