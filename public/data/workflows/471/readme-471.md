# Send Github notifications to Discord webhook

> This will send your Github notifications to a discord webhook.

Since **Github doesn't send push notifications to mobile devices** other then **@mention** this is a great workaround to receive notifications on Discord with this.

Using a github trigger was not a good option as there is no trigger for notifications only events (which don't work on org repos). Using http request on notifications api is way better.

++TAGGING USER IN MESSATGE:++
Change **<@userIdForTagging>** with your discord Id to get tagged when sending notifications. To find your own id type in any channel backslash followed by your username with the 4 digit hash code

You can copy this by clicking on your username next to your profile picture 

**Example:**
```javascript
\@username#9999
```

*Enjoy!*

## 📊 Basic Information

- **Workflow ID:** 471
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2202
- **Downloads:** 220
- **Created:** 2020/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/471)

## 👤 Author

- **Name:** rangelstoilov
- **Username:** @rori4

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **httpRequest** 
- **cron** 
- **discord** 
- **function** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
