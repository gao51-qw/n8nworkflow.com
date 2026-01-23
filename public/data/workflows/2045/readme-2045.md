# Advanced Telegram bot, ticketing system, liveChat, user management, broadcasting

> 
A robust n8n workflow designed to enhance Telegram bot functionality for user management and broadcasting. It facilitates automatic support ticket creation, efficient user data storage in Redis, and a sophisticated system for message forwarding and broadcasting.

![7Yscd9l4gN.png](fileId:729)

### How It Works

1. **Telegram Bot Setup**: Initiate the workflow with a Telegram bot configured for handling different chat types (private, supergroup, channel).
2. **User Data Management**: Formats and updates user data, storing it in a Redis database for efficient retrieval and management.
3. **Support Ticket Creation**: Automatically generates chat tickets for user messages and saves the corresponding topic IDs in Redis.
4. **Message Forwarding**: Forwards new messages to the appropriate chat thread, or creates a new thread if none exists.
5. **Support Forum Management**: Handles messages within a support forum, differentiating between various chat types and user statuses.
6. **Broadcasting System**: Implements a broadcasting mechanism that sends channel posts to all previous bot users, with a system to filter out blocked users.
7. **Blocked User Management**: Identifies and manages blocked users, preventing them from receiving broadcasted messages.
8. **Versatile Channel Handling**: Ensures that messages from verified channels are properly managed and broadcasted to relevant users.

### Set Up Steps

* **Estimated Time**: Around 30 minutes.
* **Requirements**: A Telegram bot, a Redis database, and Telegram group/channel IDs are necessary.
* **Configuration**: Input the Telegram bot token and relevant group/channel IDs. Configure message handling and user data processing according to your needs.
* **Detailed Instructions**: Sticky notes within the workflow provide extensive setup information and guidance.

![kes0xxJdTb.png](fileId:728)
### **Live Demo Workflow**
**Bot**: [Telegram Bot Link (Click here)](https://TheLiveChatBot.t.me)
**Support Group**: [Telegram Group Link (Click here)](https://t.me/+-8BELbd0GDYxMTEx)
**Broadcasting Channel**: [Telegram Channel Link (Click here)](https://broadcasting_channel.t.me)


**Keywords**: n8n workflow, Telegram bot, chat ticket system, Redis database, message broadcasting, user data management, support forum automation


## 📊 Basic Information

- **Workflow ID:** 2045
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 24849
- **Downloads:** 2484
- **Created:** 2024/1/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2045)

## 👤 Author

- **Name:** Nskha
- **Username:** @nskha

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **if** (×6)
- **code** (×2)
- **set** (×2)
- **httpRequest** (×6)
- **redis** (×8)
- **noOp** 
- **telegram** 
- **telegramTrigger** 
- **switch** 
- **splitInBatches** 
- **wait** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
