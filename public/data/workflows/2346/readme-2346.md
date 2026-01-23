# Enhance customer chat by buffering messages with Twilio and Redis

> This n8n workflow demonstrates a simple approach to improve chat UX by staggering an AI Agent's reply for users who send in a sequence of partial messages and in short bursts.

## How it works
* Twilio webhook receives user's messages which are recorded in a message stack powered by Redis.
* The execution is immediately paused for 5 seconds and then another check is done against the message stack for the latest message.
* The purpose of this check lets use know if the user is sending more messages or if they are waiting for a reply.
* The execution is aborted if the latest message on the stack differs from the incoming message and continues if they are the same.
* For the latter, the agent receives the buffered messages up to that point and is able to respond to them in a single reply.

## Requirements
* A Twilio account and SMS-enabled phone number to receive messages.
* Redis instance for the messages stack.
* OpenAI account for the language model.

## Customising the workflow

This workflow should work for other common messaging platforms such as Whatsapp and Telegram.

5 seconds too long or too short? Adjust the wait threshold to suit your customers.

## 📊 Basic Information

- **Workflow ID:** 2346
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 10668
- **Downloads:** 1066
- **Created:** 2024/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2346)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **noOp** 
- **redis** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **twilioTrigger** 
- **stickyNote** (×5)
- **twilio** 
- **wait** 
- **@n8n/n8n-nodes-langchain.memoryManager** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
