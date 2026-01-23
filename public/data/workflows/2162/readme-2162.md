# WhatsApp Starter Workflow

> This n8n workflow is designed for working with the WhatsApp Business platform. It allows to send custom replies via WhatsApp in response to incoming user messages. 

💡 Take a look at the step-by-step tutorial on [how to create a WhatsApp bot](https://blog.n8n.io/whatsapp-bot/).

The workflow consists of two parts:
 
1. The first Verify webhook sends back verification challenge string. You will need this part during the setup process on the Meta for Developers portal:

 ![wf_explain.png](fileId:775)

- Select your App
- Go to WhatsApp Configuration
- Click on the Edit button in the Webhook session
- Enter your production webhook URL, provide Verify token (can be any text string)
- Remember to activate the n8n workflow!
- Finally press "Verify and save"

![wf_explain2.png](fileId:774)

2. Once the webhook is verified, the Respond webhook receives various POST requests from Meta regarding WhatsApp messages (user messages and status notifications). 

The workflow checks whether the incoming JSON contains a user message. If this is the case, it sends the text message back to the user. This is a custom message, not a WhatsApp Business template.

## 📊 Basic Information

- **Workflow ID:** 2162
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 28937
- **Downloads:** 2893
- **Created:** 2024/3/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2162)

## 👤 Author

- **Name:** Yulia
- **Username:** @yulia

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **webhook** (×2)
- **respondToWebhook** 
- **whatsApp** 
- **if** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
