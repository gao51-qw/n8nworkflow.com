# Send a Whatsapp message via Twilio when a certain Onfleet event happens

> **Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template listens to an Onfleet event and communicates via a **Whatsapp** message. You can easily streamline this with the recipient of the delivery or your customer support numbers.

**Configurations**

- Update the Onfleet trigger node with your own Onfleet credentials, to register for an **Onfleet API key**, please visit https://onfleet.com/signup to get started
- You can easily change which Onfleet event to listen to. Learn more about Onfleet webhooks with [Onfleet Support](https://support.onfleet.com/hc/en-us/articles/360045763852-Webhooks)
- Update the Twilio node with your own Twilio credentials, add your own expressions to the `to` number or simply source the **recipient's phone number** from the Onfleet event
- Toggle `To Whatsapp` to `OFF` if you want to simply use Twilio's SMS API

## 📊 Basic Information

- **Workflow ID:** 1525
- **Complexity:** beginner
- **Node Count:** 2
- **Views:** 2781
- **Downloads:** 278
- **Created:** 2022/3/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1525)

## 👤 Author

- **Name:** James Li
- **Username:** @ilsemaj

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **twilio** 
- **onfleetTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 2 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
