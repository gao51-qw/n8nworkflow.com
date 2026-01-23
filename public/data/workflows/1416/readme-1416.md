# Send a message to Telegram on a new item saved to Reader

> ## What is it

![workflow-screenshot](fileId:599)

This workflow aims to build a simple bot that will send a message to a telegram channel every time there is a new saved item to the Reader.

This workflow can be easily modify to support other way of sending the notification, thanks to existing n8n nodes.

Warning: **This is only for folks who already have access to the Reader, it won't work if you don't**

Also, this workflow use a file to store the last update time in order to not sync everything everytime.

## Setup

The config node :
* It contains the telegram channel id
* It also contains the file used as storage

To get the header auth, you have to :
1. Go to the reader
2. Open the devtools, Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux)
3. Go to network and find a `profile_details/` request, click on it
4. Go to Request Headers
5. Copy the value for "Cookie"
6. In n8n, set the name of the Header auth account to `Cookie` and the value with the one you copied before


## 📊 Basic Information

- **Workflow ID:** 1416
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 3149
- **Downloads:** 314
- **Created:** 2022/1/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1416)

## 👤 Author

- **Name:** Nicolas
- **Username:** @beaussan

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **writeBinaryFile** 
- **readBinaryFile** 
- **httpRequest** 
- **telegram** 
- **moveBinaryData** (×2)
- **functionItem** 
- **function** 
- **cron** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
