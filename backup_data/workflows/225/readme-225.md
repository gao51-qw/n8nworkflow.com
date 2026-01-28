# Send trending "Show HN" to email

> ![workflow-screenshot](fileId:27)

1. Triggers every day at 1pm
1. Gets the current content from Hacker News
1. Gets all the different submission items
1. Extracts the rank, title and url
1. Checks if it is a "Show HN" submission
1. Combines the items into a simple email text
1. Sends an email with the email text

## 📊 Basic Information

- **Workflow ID:** 225
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1684
- **Downloads:** 168
- **Created:** 2020/1/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/225)

## 👤 Author

- **Name:** Jan Oberhauser
- **Username:** @jan

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **if** 
- **emailSend** 
- **cron** 
- **function** 
- **httpRequest** 
- **htmlExtract** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
