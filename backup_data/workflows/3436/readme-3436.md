# Send links from Telegram channel to Hoarder and Readeck

> ### What this template is made for:
I have a personal Telegram channel and a bot inside it where I save interesting links that I want to save or read later. The idea is that n8n will take care of reading the new links added to this channel and send them, through the corresponding API, to the Hoarder and Readeck installations.

### How it works
- Since my server where n8n runs is not always on, a "Schedule Trigger" will be responsible for checking every so often if there is any new content in the Telegram channel where I store the links. This request is made through "http request" and the Telegram API.
- Next, a code block is responsible for filtering out everything that is not a hyperlink.
At this point, the flow splits into two so that parallel and similar processes are performed for Hoarder and Readeck.
- The corresponding API is accessed to get a list of all the links saved in the corresponding service.
- A code block is responsible for filtering the list of hyperlinks previously obtained from Telegram so that only those that are not already saved in the service continue.
- Finally, another "Http Request" node is responsible for using the service API to save the link in the corresponding service.

### Configuration instructions
The template makes use of the environment variables that I have declared in the n8n "docker-compose.yml" file through an external ".env" file. These are the variables I use:
``` txt
# Telegram Bot Token Sherlink
TG_SHERLINK_BOT_TOKEN=XXXXXXXX:XXXXXXXXXXXXXXXX
# Id Telegram Channel Sherlink
TG_SHERLINK_ID=-XXXXXXXXXXXXX
# Readeck server
READECK_SERVER=http://readeck.midomain.com
READECK_API_KEY=xxxxxxxxxxxxx
# Hoarder server
HOARDER_SERVER=http://hoarder.midomain.com
HOARDER_API_KEY=xxxxxxxxxxxxxx
```

Created in 1.85.4 n8n version

## 📊 Basic Information

- **Workflow ID:** 3436
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 298
- **Downloads:** 29
- **Created:** 2025/4/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3436)

## 👤 Author

- **Name:** Sherlockes
- **Username:** @sherlockes

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **splitOut** 
- **stickyNote** (×3)
- **code** (×3)
- **set** (×2)
- **httpRequest** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
