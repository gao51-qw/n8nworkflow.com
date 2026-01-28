# Creating a AI Slack bot with Google Gemini

> This is an example of how we can build a slack bot in a few easy steps

Before you can start, you need to o a few things

1. Create a copy of this workflow
2. Create a slack bot
3. Create a slash command on slack and paste the webhook url to the slack command

## Note
Make sure to configure this webhook using a https:// wrapper and don't use the default http://localhost:5678 as that will not be recognized by your slack webhook.


Once the data has been sent to your webhook, the next step will be passing it via an AI Agent to process data based on the queries we pass to our agent.

To have some sort of a memory, be sure to set the slack token to the memory node. This way you can refer to other chats from the history.

The final message is relayed back to slack as a new message. Since we can not wait longer than 3000 ms for slack response, we will create a new message with reference to the input we passed.

We can advance this using the tools or data sources for it to be more custom tailored for your company.

## Usage
To use the slackbot, go to slack and click on your set slash command eg /Bob and send your desired message.

This will send the message to your endpoint and get return the processed results as the message.

If you would like help setting this up, feel free to reach out to zacharia@effibotics.com 

## 📊 Basic Information

- **Workflow ID:** 2370
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 9871
- **Downloads:** 987
- **Created:** 2024/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2370)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **slack** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
