# Detect toxic language in Telegram messages

> This workflow detects toxic language (such as profanity, insults, threats) in messages sent via Telegram. [This blog tutorial](https://n8n.io/blog/create-a-toxic-language-detector-for-telegram/) explains how to configure the workflow nodes step-by-step.

![workflow-screenshot](https://lh3.googleusercontent.com/pSN-PhPuKlXONRTmsT6_6pNDUNHRwtaRfBpuCnslpZS4NsuZwfJmYl8ANTa4gcdL0JMUXvLEyJQP9k8It2AvNyWLHdJ0m3dJ1nSM_z-CprrOwjqNXTNjg-2WEriYJaDWVXsKZ-YZ=s0)

**Telegram Trigger**: triggers the workflow when a new message is sent in a Telegram chat.

**Google Perspective**: analyzes the text of the message and returns a probability value between 0 and 1 of how likely it is that the content is toxic.

**IF**: filters messages with a toxic probability value above 0.7.

**Telegram**: sends a message in the chat with the text "I don't tolerate toxic language" if the probability value is above 0.7.

**NoOp**: takes no action if the probability value is below 0.7.

## 📊 Basic Information

- **Workflow ID:** 1216
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2357
- **Downloads:** 235
- **Created:** 2021/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1216)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- Miscellaneous
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **googlePerspective** 
- **if** 
- **telegram** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
