# Get daily poems in Telegram

> This workflow posts a poem translated into English every day in a Telegram chat.

![workflow-screenshot](fileId:447)

**Cron node**: triggers the workflow every day at 10:00. You can change the time and interval based on your use case. 

**HTTP Request node**: makes an HTTP request to the Poemist API that returns a random poem.

**LingvaNex node**: translates the returned poems into English.

**Telegram node**: takes in the translated poem and posts it in the chat.

## 📊 Basic Information

- **Workflow ID:** 975
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1093
- **Downloads:** 109
- **Created:** 2021/3/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/975)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **cron** 
- **telegram** 
- **httpRequest** 
- **lingvaNex** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
